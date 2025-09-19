// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    onSnapshot,
    orderBy,
    query, where,
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
    }
  };

  const loginFunction = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/create-blog-post");
    });
  };

  const registerFunction = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/create-blog-post");
    });
  };

  return { logoutFunction, loginFunction, registerFunction };
}

export async function getPostById(id: string) {
  const q = query(
    collection(db, "posts"),
    where("id", "==", id),
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return null;
  }

  const docSnap = querySnapshot.docs[0];
  return { ...docSnap.data() };
}