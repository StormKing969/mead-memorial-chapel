// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import type { Post } from "../../types/post";
import { useNavigate } from "react-router";

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);

  return { user };
}

export function getCurrentBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[],
      );
    });
  }, []);

  return posts;
}

export function authFunctions() {
  const navigate = useNavigate();

  const logoutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Failed to sign out!");
    }
  };

  const loginFunction = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/news");
      });
    } catch (error) {
      console.error("Error signing in: ", error);
      alert("Failed to log in");
    }
  };

  const registerFunction = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/create-news-post");
    });
  };

  return { logoutFunction, loginFunction, registerFunction };
}

export async function getPostById(id: string) {
  const q = query(collection(db, "posts"), where("id", "==", id));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return null;
  }

  const docSnap = querySnapshot.docs[0];
  return { ...docSnap.data() };
}

export async function getPetitionListCount() {
  const q = query(collection(db, "petitions"));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return 0;
  }

  return querySnapshot.docs.length;
}

export async function deletePostById(id: string) {
  try {
    // In our data model, the Firestore document ID may differ from the post.id field
    // so we first locate the document(s) by the stored field and then delete by ref.
    const q = query(collection(db, "posts"), where("id", "==", id));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn("No matching post found to delete for id:", id);
      return;
    }

    await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));
    console.log("Successfully deleted");
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
}

export async function updatePostById(
  id: string,
  data: Partial<
    Pick<Post, "title" | "content" | "authorName" | "imageUrl" | "imageCredit" | "category">
  >,
) {
  try {
    const q = query(collection(db, "posts"), where("id", "==", id));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn("No matching post found to update for id:", id);
      return false;
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");

    await Promise.all(
      snapshot.docs.map((d) =>
        updateDoc(d.ref, {
          ...data,
          createdAt: formattedDate,
        }),
      ),
    );

    return true;
  } catch (error) {
    console.error("Error updating post:", error);
    return false;
  }
}

export async function getGoogleLink(inputtedFileName: string) {
    const q = query(
        collection(db, "googleAudioMap"),
        where("fileName", "==", inputtedFileName)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        console.log("No matching documents.");
        return null;
    }

    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data();

    return data.googleLink || null;
}