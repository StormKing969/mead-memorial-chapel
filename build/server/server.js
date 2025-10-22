import { createRequestHandler } from "@netlify/vite-plugin-react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useNavigate, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect, useMemo, useRef } from "react";
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs, orderBy, onSnapshot, where, doc, addDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "@firebase/auth";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useForm, Controller } from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const Footer = () => {
  return /* @__PURE__ */ jsx(IconContext.Provider, { value: { color: "#155dfc", size: "2em" }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center bg-gray-50 py-6 shadow",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col text-center px-5 md:flex-row md:justify-evenly md:text-left gap-10 w-full",
            children: [
              /* @__PURE__ */ jsx("img", { src: "/logo.svg", alt: "logo", className: "max-h-[200px]" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-4", children: "Quick Links" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "Home"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/about",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "About"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/lawsuit",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "Timeline"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/blog",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "Blog"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/contact",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "Contact"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://meadmemorialchapel.com/",
                      className: "text-blue-600 hover:text-blue-800 hover:font-bold transition-all",
                      children: "Original Site"
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-4", children: "Contact Info" }),
                /* @__PURE__ */ jsxs("ul", { children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
                    "Address:",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-normal", children: "75 Hepburn Road, Middlebury, VT 05753" })
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
                    "Email: ",
                    /* @__PURE__ */ jsx("span", { className: "font-normal", children: "xxx@gmail.com" })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-4", children: "Follow Us" }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex flex-row items-center justify-center gap-5 w-full",
                    children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
                      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
                      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(FaFacebook, {}) })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-sm text-gray-400 mt-5 text-center p-5 md:mt-3 sm:p-0 sm:text-left",
            children: [
              "© 2025 Mead Memorial Chapel | Designed & Built by",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://sajana-wijesinghe-portfolio-v4.netlify.app/",
                  className: "underline text-blue-600 hover:text-blue-800",
                  children: "Sajana Wijesinghe"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const apiKey = "AIzaSyDmMI3oxlxOOjAQyrdMoo5y5RtuFlx9LzE";
const authDomain = "mead-memorial-chapel-6d037.firebaseapp.com";
const projectId = "mead-memorial-chapel-6d037";
const storageBucket = "mead-memorial-chapel-6d037.firebasestorage.app";
const messagingSenderId = "165518165173";
const appId = "1:165518165173:web:266c14f491061f66182afc";
const measurementId = "G-NSX5HHHJFQ";
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};
const app = initializeApp(firebaseConfig);
const auth$1 = getAuth(app);
const db = getFirestore(app);
function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth$1, (firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  return { user };
}
function getCurrentBlogPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc2) => ({
          id: doc2.id,
          ...doc2.data()
        }))
      );
    });
  }, []);
  return posts;
}
function authFunctions() {
  const navigate = useNavigate();
  const logoutFunction = async () => {
    try {
      await signOut(auth$1);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  const loginFunction = async (email, password) => {
    await signInWithEmailAndPassword(auth$1, email, password).then(() => {
      navigate("/create-blog-post");
    });
  };
  const registerFunction = async (email, password) => {
    await createUserWithEmailAndPassword(auth$1, email, password).then(() => {
      navigate("/create-blog-post");
    });
  };
  return { logoutFunction, loginFunction, registerFunction };
}
async function getPostById(id) {
  const q = query(
    collection(db, "posts"),
    where("id", "==", id)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return null;
  }
  const docSnap = querySnapshot.docs[0];
  return { ...docSnap.data() };
}
async function getPetitionListCount() {
  const q = query(collection(db, "petitions"));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return 0;
  }
  return querySnapshot.docs.length;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function meta$6({}) {
  return [{
    title: "Mead Memorial Chapel"
  }, {
    name: "description",
    content: "Mead Memorial Chapel Homepage"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await getPetitionListCount();
        setCount(response);
      } catch (error) {
        console.error("Error fetching petition count:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCount();
  }, []);
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif",
    children: [/* @__PURE__ */ jsxs("section", {
      className: "md:px-25 px-5 relative bg-gray-900 text-white h-[50vh] flex flex-col justify-center items-start text-left",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-40"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 flex flex-col items-center justify-center text-center",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-4xl md:text-6xl font-bold mb-6 space-y-2",
          children: /* @__PURE__ */ jsx("h1", {
            children: "Restore the Mead Name to Mead Memorial Chapel"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "mb-8 text-lg",
          children: /* @__PURE__ */ jsx("p", {
            children: "Ensure respect for due process and intellectual diversity"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "text-center",
          children: /* @__PURE__ */ jsxs("p", {
            children: [/* @__PURE__ */ jsxs("span", {
              className: "font-bold text-2xl",
              children: [loading ? "—" : count.toLocaleString(), " signatures"]
            }), " ", "in support.", " ", /* @__PURE__ */ jsx(Link, {
              to: "/petition",
              className: "font-semibold underline hover:text-blue-400 transition-colors",
              children: "Add yours to the petition"
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "md:px-25 px-5 py-15 bg-gray-100 flex flex-col justify-center",
      children: [/* @__PURE__ */ jsxs("article", {
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-center text-4xl font-bold",
          children: "A Message from the Family"
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
          children: "In the fall of 2021, Middlebury College abruptly removed the Mead family name from the Memorial Chapel that Governor John Mead built to honor his ancestors. Many of us have been quite upset ever since. It’s wrong on many fronts: the Governor conditioned his gift on using the name, the College has reaped enormous benefits from the Chapel for more than a century and the cancel culture that led to this act needs to be challenged. Erasure of Governor Mead’s legacy, based on some remarks in a 1912 speech, is directly contrary to the College’s policy on free expression and its professed tolerance for views that are controversial. Indeed, it conflicts with the very purpose of an institution of higher learning, which is to seek knowledge and pursue the truth."
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
          children: "Accordingly, the Governor’s estate has filed a complaint in Superior Court seeking justice from the College. The family has graciously asked me to serve as Administrator for this matter and I am honored to assume that responsibility. I’m confident that a jury, upon examining all the evidence, will recognize the unfairness of what has happened. I’ll sleep better knowing that I’ve done what I can to restore the good name of a generous alumnus and dedicated public servant."
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
          children: "We look forward to sharing information on this website as it becomes available. We hope that you'll let the College's Trustees and the media know how you feel."
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
          children: "Jim Douglas"
        }), /* @__PURE__ */ jsx("p", {
          children: "Special Administrator"
        }), /* @__PURE__ */ jsx("p", {
          children: "Estate of Governor John Mead"
        })]
      }), /* @__PURE__ */ jsx(Button, {
        className: "m-auto mt-8 px-6 py-3 font-semibold bg-gray-800 hover:bg-gray-700",
        children: /* @__PURE__ */ jsx(Link, {
          to: "/main",
          children: "Learn More"
        })
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const AboutHeroSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-100 bg-gray-900", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/about/chapel-hero.jpg",
        alt: "Mead Memorial Chapel",
        className: "absolute inset-0 w-full h-full object-cover opacity-70"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "About Mead Memorial Chapel" }) })
  ] });
};
const MiniTimelineVertical = ({
  year,
  description
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] mt-1.5" }),
    /* @__PURE__ */ jsx("time", { className: "font-semibold", children: year }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: description })
  ] });
};
const AboutTimelineEvent = [
  {
    year: "1916s",
    description: "Mead Memorial Chapel is dedicated."
  },
  {
    year: "1920s",
    description: "First concerts and community gatherings held."
  },
  {
    year: "1950s",
    description: "Renovations and preservation work begin."
  },
  {
    year: "2000s",
    description: "Community events and concerts expand."
  },
  {
    year: "2020s",
    description: "Preservation efforts recommitted for the future."
  }
];
const AboutContent = () => {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-[900px] mx-auto px-6 py-12 space-y-10 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-3", children: "Our History" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Built in 1916 through the generosity of Governor John Abner Mead, Mead Memorial Chapel has stood for more than a century as a landmark of Middlebury College and the wider Vermont community. Designed in the Collegiate Gothic style, the chapel has hosted countless ceremonies, concerts, and gatherings." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8 max-w-[400px]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-3", children: "A Legacy of Service" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Governor Mead’s gift was more than a building — it was a tribute to his family and a commitment to the values of education, community, and faith. For decades, the chapel has been a centerpiece of campus life, symbolizing both tradition and continuity." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-3", children: "Preserving the Future" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Today, Mead Memorial Chapel continues to inspire students, alumni, and visitors alike. Its stained glass windows, soaring arches, and timeless architecture remind us of the importance of heritage while inviting new generations to create their own memories within its walls." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Timeline" }),
          /* @__PURE__ */ jsx("ul", { className: "border-l-2 border-gray-300 space-y-8 relative", children: AboutTimelineEvent.map((ele, index) => /* @__PURE__ */ jsx("li", { className: "ml-6", children: /* @__PURE__ */ jsx(
            MiniTimelineVertical,
            {
              year: ele.year,
              description: ele.description
            }
          ) }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8 max-w-[400px]", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/about/chapel-side.png",
            alt: "Chapel interior side",
            className: "rounded shadow object-cover h-full max-h-[500px]"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/about/chapel-interior.jpg",
            alt: "Chapel interior",
            className: "rounded shadow object-cover h-full max-h-[500px]"
          }
        )
      ] })
    ] })
  ] });
};
const NavbarLinks = [
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Blog",
    url: "/blog"
  },
  {
    title: "Lawsuit",
    url: "/lawsuit"
  }
];
const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const { logoutFunction } = authFunctions();
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "w-full bg-gray-50 shadow-md border-b border-gray-200 flex items-center justify-between py-4 px-8 sticky top-0 z-50",
      children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex flex-row items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: "/logo.svg", alt: "logo", className: "w-fit h-20" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-400", children: "Mead Memorial Chapel" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex md:flex-row items-center gap-4", children: [
          NavbarLinks.map((ele, i) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: ele.url,
              className: "text-lg font-semibold text-blue-400 hover:text-blue-700",
              children: ele.title
            }
          ) }, i)),
          /* @__PURE__ */ jsxs("div", { className: `${user ? "visible" : "hidden"}`, children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 focus:outline-none mr-4",
                onClick: () => {
                  navigate("/create-blog-post");
                },
                children: "Create Post"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => logoutFunction(),
                className: "bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 focus:outline-none",
                children: "Logout"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function meta$5({}) {
  return [{
    title: "Mead Memorial Chapel - AboutPage"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - AboutPage Page"
  }];
}
const About = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "bg-white font-serif",
    children: [/* @__PURE__ */ jsx(Navbar, {
      user: null
    }), /* @__PURE__ */ jsx(AboutHeroSection, {}), /* @__PURE__ */ jsx(AboutContent, {})]
  });
};
const about = UNSAFE_withComponentProps(About);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const Authentication = () => {
  const { logoutFunction, registerFunction, loginFunction } = authFunctions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return /* @__PURE__ */ jsxs("section", { className: "p-6 bg-white shadow-md rounded-lg space-y-4", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        placeholder: "Email",
        className: "border px-3 py-2 w-full",
        onChange: (e) => setEmail(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        placeholder: "Password",
        className: "border px-3 py-2 w-full",
        onChange: (e) => setPassword(e.target.value)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => registerFunction(email, password),
          className: "bg-green-600 text-white px-4 py-2 rounded",
          children: "Register"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => loginFunction(email, password),
          className: "bg-blue-600 text-white px-4 py-2 rounded",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => logoutFunction(),
          className: "bg-gray-600 text-white px-4 py-2 rounded",
          children: "Logout"
        }
      )
    ] })
  ] });
};
function meta$4({}) {
  return [{
    title: "Mead Memorial Chapel - Authentication"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - Authentication"
  }];
}
const Auth = () => {
  return /* @__PURE__ */ jsx("main", {
    className: "font-serif",
    children: /* @__PURE__ */ jsx(Authentication, {})
  });
};
const auth = UNSAFE_withComponentProps(Auth);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: auth,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const DetailedPostPreview = ({
  post: { id, title, content, authorName, createdAt, imageUrl, category }
}) => {
  console.log(imageUrl);
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "bg-white shadow-md rounded-lg overflow-hidden flex flex-col",
      children: [
        imageUrl ? /* @__PURE__ */ jsx(
          "img",
          {
            src: imageUrl,
            alt: `${title} thumbnail`,
            className: "h-48 w-full object-cover",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsx(
          "img",
          {
            src: "/no-image-icon.png",
            alt: `${title} thumbnail`,
            className: "h-48 w-full object-contain",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 mb-2", children: [
            createdAt,
            " • ",
            category
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900", children: title }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mt-2 line-clamp-3", children: [
            content.substring(0, 100),
            "...."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `/blog/${id}`,
                className: "text-blue-600 hover:underline hover:text-blue-800 font-medium",
                children: "Read More →"
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
              "By ",
              authorName || "Anonymous"
            ] })
          ] })
        ] })
      ]
    },
    id
  );
};
const CreateBlogLinkCard = () => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to: "/create-blog-post",
      className: "flex items-center justify-center md:py-15 bg-white shadow-md rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/blog/plus-icon.png",
          alt: "plus icon",
          className: "object-contain size-2/5"
        }
      )
    }
  );
};
const BlogPage = ({ user }) => {
  const posts = getCurrentBlogPosts();
  return /* @__PURE__ */ jsxs("section", { className: "md:px-25 mx-auto h-full py-16 bg-white", children: [
    /* @__PURE__ */ jsx(
      "h1",
      {
        className: "text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900",
        children: "Blog"
      }
    ),
    posts.length === 0 && /* @__PURE__ */ jsx("div", { className: "max-w-xl mx-auto text-center text-gray-600", children: "No posts yet. Check back soon." }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: [
      posts.map((post) => /* @__PURE__ */ jsx(DetailedPostPreview, { post }, post.id)),
      user && /* @__PURE__ */ jsx(CreateBlogLinkCard, {})
    ] })
  ] });
};
function meta$3({}) {
  return [{
    title: "Mead Memorial Chapel - Blog"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - Blog"
  }];
}
const Blog = () => {
  const {
    user
  } = useAuth();
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif",
    children: [/* @__PURE__ */ jsx(Navbar, {
      user
    }), /* @__PURE__ */ jsx(BlogPage, {
      user
    })]
  });
};
const blog = UNSAFE_withComponentProps(Blog);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: blog,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const ArticlePage = ({
  post: { title, createdAt, imageUrl, content, authorName }
}) => {
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "max-w-3xl mx-auto p-6 my-16 bg-white shadow-lg rounded-lg",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: title }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4 mt-2", children: [
          "Published on ",
          createdAt
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center", children: imageUrl ? /* @__PURE__ */ jsx(
          "img",
          {
            src: imageUrl,
            alt: `${title} image`,
            className: "object-contain w-full h-full rounded max-w-[650px]"
          }
        ) : /* @__PURE__ */ jsx(
          "img",
          {
            src: "/no-image-icon.png",
            alt: `${title} thumbnail`,
            className: "object-contain w-full h-full rounded max-w-[650px] max-h-[500px]}"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "my-6 whitespace-pre-line", children: content }),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-gray-600 mb-2 flex flex-row justify-end items-center",
            children: [
              "By ",
              authorName
            ]
          }
        )
      ]
    }
  );
};
function meta$2({}) {
  return [{
    title: "Mead Memorial Chapel - Blog Post"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - Blog Post"
  }];
}
const BlogPost = () => {
  const {
    id
  } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    getPostById(id).then((res) => {
      setPost(res);
    });
  }, [id]);
  if (!post) return /* @__PURE__ */ jsx("p", {
    children: "Loading..."
  });
  console.log(post);
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif",
    children: [/* @__PURE__ */ jsx(Navbar, {
      user: null
    }), /* @__PURE__ */ jsx(ArticlePage, {
      post
    })]
  });
};
const blogPost = UNSAFE_withComponentProps(BlogPost);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: blogPost,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const CreateBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const Categories = [
    "Lawsuit",
    "General",
    "Events",
    "Announcements",
    "Community"
  ];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState("General");
  const [imageName, setImageName] = useState("");
  const handleSubmit = async (e) => {
    var _a;
    e.preventDefault();
    if (!user) {
      navigate("/auth");
    }
    const date = /* @__PURE__ */ new Date();
    const formattedDate = date.toLocaleDateString("en-US");
    if (imageName.length !== 0 && !imageName.endsWith(".jpg") && !imageName.endsWith(".png") && !imageName.endsWith(".svg")) {
      alert("Image name must end with .jpg, .png, or .svg");
      return;
    }
    let imgUrl;
    if (imageName.length === 0) {
      imgUrl = "";
    } else {
      imgUrl = "/blog/" + category.toLowerCase() + "/" + imageName;
    }
    const newId = doc(collection(db, "posts")).id;
    await addDoc(collection(db, "posts"), {
      id: newId,
      title,
      content,
      authorID: ((_a = auth$1.currentUser) == null ? void 0 : _a.uid) || null,
      createdAt: formattedDate,
      authorName: userName || "Anonymous",
      category,
      imageUrl: imgUrl
    }).then(() => {
      setTitle("");
      setContent("");
      setUserName("");
      setCategory("General");
      setImageName("");
    }).finally(() => {
      navigate("/blog");
    });
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "max-w-[750px] mx-auto my-16 bg-white shadow-md rounded-lg px-24 py-16",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-8", children: "Create Blog Post" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 flex flex-col", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Title",
              className: "border px-3 py-2 w-full",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Written By Name",
              className: "border px-3 py-2 w-full",
              value: userName,
              onChange: (e) => setUserName(e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Content",
              className: "border px-3 py-2 w-full h-40",
              value: content,
              onChange: (e) => setContent(e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between gap-5", children: [
            /* @__PURE__ */ jsx(
              "select",
              {
                className: "w-fit bg-gray-50 p-3 border",
                value: category,
                onChange: (e) => {
                  setCategory(e.target.value);
                },
                required: true,
                children: Categories.map((ele, index) => /* @__PURE__ */ jsx("option", { value: ele, children: ele }, index))
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Image Name (with extension)",
                className: "border p-3 w-fit h-full",
                value: imageName,
                onChange: (e) => setImageName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700",
              children: "Publish"
            }
          )
        ] })
      ]
    }
  );
};
function meta$1({}) {
  return [{
    title: "Mead Memorial Chapel - Create Post"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - Create Post"
  }];
}
const CreateBlogPost = () => {
  return /* @__PURE__ */ jsx("main", {
    className: "font-serif",
    children: /* @__PURE__ */ jsx(CreateBlog, {})
  });
};
const createBlogPost = UNSAFE_withComponentProps(CreateBlogPost);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: createBlogPost,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const LawsuitHeader = () => {
  return /* @__PURE__ */ jsxs("section", { className: "bg-gray-50 py-14 px-4 text-center border-b border-gray-200 relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-30"
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-gray-800 mb-4 tracking-tight drop-shadow-sm", children: "Legal Case: Mead Memorial Chapel" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 mt-2 max-w-2xl mx-auto", children: "Overview of the ongoing litigation over the Mead Memorial Chapel name, preserving the legacy and intentions of Governor John Mead amid recent institutional actions." })
  ] });
};
const LawsuitSection = [
  {
    link: "#context",
    title: "Context"
  },
  {
    link: "#letter",
    title: "Alumni Letter"
  },
  {
    link: "#timeline",
    title: "Legal Timeline"
  },
  {
    link: "#parties",
    title: "Key Parties Involved"
  },
  {
    link: "#allegations",
    title: "Allegations"
  },
  {
    link: "#defense",
    title: "Defense"
  },
  {
    link: "#outcome",
    title: "Outcome"
  },
  {
    link: "documents",
    title: "Legal Documents"
  }
];
const TimelineEvents = [
  {
    date: "Fall 2021",
    title: "College Removes Mead Name from Chapel",
    desc: "Middlebury College removes the Mead name from the Memorial Chapel following internal review and public debate."
  },
  {
    date: "Early 2022",
    title: "Mead Estate Files Complaint",
    desc: "The Mead estate files a formal complaint in Vermont Superior Court alleging improper removal of the name and seeking relief."
  },
  {
    date: "Spring 2022",
    title: "Motion to Dismiss and Plaintiff Response",
    desc: "Middlebury files a motion to dismiss the complaint and the Mead estate files an opposition, beginning adversarial briefing."
  },
  {
    date: "Summer 2022",
    title: "Court Denies Dismissal; Discovery Commences",
    desc: "The court denies the motion to dismiss and the case advances into discovery, including document production and witness interviews."
  },
  {
    date: "Late 2022",
    title: "Answer Filed and Summary Judgment Filings",
    desc: "Middlebury files its formal answer; both parties exchange summary judgment briefs and evidence for the court's consideration."
  },
  {
    date: "Winter 2023",
    title: "Partial Summary Judgment Decision",
    desc: "The court issues a summary judgment ruling granting partial relief and narrowing the issues for trial."
  },
  {
    date: "2024",
    title: "Appeals to Vermont Supreme Court",
    desc: "One or both parties timely file notices of appeal and the matter is transmitted to the Vermont Supreme Court for review."
  },
  {
    date: "Current",
    title: "Post-Trial Briefing and Awaiting Final Decision",
    desc: "Parties submit post-trial and appellate briefs on damages and remedies while awaiting the final appellate decision."
  }
];
const LawsuitPageBackgroundContent = "The Mead Memorial Chapel at Middlebury College is a historic monument built to honor the Mead family’s legacy, specifically that of Vermont Governor John Mead. In 2021, Middlebury College’s trustees elected to remove the Mead family name from the chapel, citing remarks from a 1912 speech given by Governor Mead. The decision caused significant outcry among the Mead descendants and associated community, who asserted that the deed for the chapel explicitly required the continued use of the Mead name. The estate filed suit against the college, contending both breach of a covenant and injury to the Mead family’s reputation and intent, leading to an ongoing dispute punctuated by motions, appeals, and considerable media coverage.";
const InvolvedParties = [
  {
    title: "Plaintiff",
    people: "John Mead Estate, represented by Jim Douglas (Administrator and former Vermont Governor)"
  },
  {
    title: "Defendant",
    people: "Middlebury College, through its Board of Trustees and officers"
  },
  {
    title: "Counsel for Plaintiff",
    people: "[Name of Law Firm / Principal Attorney]"
  },
  {
    title: "Counsel for Defendant",
    people: "[Name of Law Firm / Principal Attorney]"
  },
  {
    title: "Other Stakeholders",
    people: "Vermont Supreme Court; Mead family descendants; public supporters; media outlets covering the dispute"
  }
];
const AllegationList = [
  "Middlebury College violated the conditions of Governor Mead's donation by unilaterally removing the family name from the chapel, despite explicit deed language requiring perpetual naming.",
  "The college’s action constitutes a breach of the covenant of good faith and fair dealing inherent in the original agreement.",
  "The removal constitutes reputational harm to the Mead family, diminishing their philanthropic intent and legacy.",
  "The college’s decision was made without transparent process or adequate opportunity for stakeholder input, reflecting broader issues of “cancel culture” and institutional overreach."
];
const DefenseList = [
  "Middlebury College contends it has the right, under institutional policy and contemporary ethical standards, to reconsider naming decisions, particularly when historic benefactors are found to have made statements or taken actions contrary to academic values or social justice.",
  "The college asserts that the deed language is not binding in perpetuity, arguing either ambiguity or public policy limitations on such covenants.",
  "The decision was in line with contemporary moves among higher education institutions to reassess historical symbols and legacies, aligning with values of inclusion and critique of problematic histories.",
  "The removal did not constitute a specific breach and no compensable harm has been suffered, as the building, use, and mission remain unchanged."
];
const CurrentOutcome = "As of late 2025, the legal process remains ongoing. Motions for summary judgment have resolved some issues in the estate’s favor at the Superior Court level, including acknowledgment of certain restrictive covenants, but the question of final remedy and standing is under appeal to the Vermont Supreme Court. The outcome will determine the future of the Mead name and establish precedent for donor intent in the context of evolving institutional ethics. Updates will be posted here as the court process continues.";
const LawsuitTimelineCard = ({ event }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-100 rounded-lg p-3 shadow-sm w-64 h-40 min-w-[16rem] my-4 flex flex-col justify-center items-start space-y-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-indigo-600", children: event.date }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 font-medium text-slate-900 text-sm text-center", children: event.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-slate-600 line-clamp-3", children: event.desc })
  ] });
};
const LawsuitContent = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "flex max-w-7xl mx-auto mt-8 mb-20 px-4 gap-8 scroll-smooth",
      children: [
        /* @__PURE__ */ jsx(
          "aside",
          {
            className: "w-72 min-w-60 max-w-xs bg-white border border-gray-100 rounded-lg py-8 px-4 mr-4 self-start sticky top-32 shadow-sm hidden md:block",
            children: /* @__PURE__ */ jsx("nav", { className: "space-y-6", children: LawsuitSection.map((section, i) => /* @__PURE__ */ jsx(
              Link,
              {
                to: `${section.link}`,
                className: "block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg",
                children: section.title
              },
              i
            )) })
          }
        ),
        /* @__PURE__ */ jsxs("main", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "context",
              className: "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Context" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800 leading-relaxed", children: LawsuitPageBackgroundContent })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "letter",
              className: "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Letter from Middlebury Campus Alumni" }),
                /* @__PURE__ */ jsx(
                  "iframe",
                  {
                    src: "/lawsuit/Mead Chapel 10_25 Letter.docx.pdf",
                    width: "100%",
                    height: "700px",
                    title: "Letter from Middlebury Campus Alumni",
                    className: "border rounded",
                    loading: "lazy"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "timeline",
              className: "bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Legal Timeline" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "pointer-events-none absolute top-0 bottom-0 left-1/2",
                      children: /* @__PURE__ */ jsx("div", { className: "py-4 w-1 h-full bg-slate-200 rounded" })
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "no-scrollbar flex items-start overflow-y-auto", children: /* @__PURE__ */ jsx(
                    "ul",
                    {
                      className: "flex flex-col items-center gap-6 w-full max-h-[450px] relative",
                      children: TimelineEvents.map((ev, i) => {
                        const left = i % 2 === 0;
                        return /* @__PURE__ */ jsxs(
                          "li",
                          {
                            className: "relative flex flex-col items-center justify-start",
                            children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: "absolute left-[51%] -translate-x-1/2 top-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10",
                                  "aria-hidden": "true"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  className: `transform ${left ? "-translate-x-50 md:-translate-x-50" : "translate-x-50 md:translate-x-50"}`,
                                  children: /* @__PURE__ */ jsx(LawsuitTimelineCard, { event: ev })
                                }
                              )
                            ]
                          },
                          ev.date + i
                        );
                      })
                    }
                  ) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "parties",
              className: "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Key Parties Involved" }),
                /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: InvolvedParties.map((ev, i) => /* @__PURE__ */ jsxs("tr", { className: "h-[75px]", children: [
                  /* @__PURE__ */ jsx("td", { className: "font-bold", children: ev.title }),
                  /* @__PURE__ */ jsx("td", { children: ev.people })
                ] }, i)) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "allegations",
              className: "bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Allegations" }),
                /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2 text-lg text-gray-800", children: AllegationList.map((ev, i) => /* @__PURE__ */ jsx("li", { children: ev }, i)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "defense",
              className: "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Defense" }),
                /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2 text-lg text-gray-800", children: DefenseList.map((ev, i) => /* @__PURE__ */ jsx("li", { children: ev }, i)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "section",
            {
              id: "outcome",
              className: "bg-gray-50 rounded-xl shadow-sm px-8 py-10 border border-gray-100 mb-8",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold mb-4 text-gray-900", children: "Outcome" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800 leading-relaxed", children: CurrentOutcome })
              ]
            }
          ),
          /* @__PURE__ */ jsx("section", {})
        ] })
      ]
    }
  );
};
const Lawsuit = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif",
    children: [/* @__PURE__ */ jsx(Navbar, {
      user: null
    }), /* @__PURE__ */ jsx(LawsuitHeader, {}), /* @__PURE__ */ jsx(LawsuitContent, {})]
  });
};
const lawsuit = UNSAFE_withComponentProps(Lawsuit);
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lawsuit
}, Symbol.toStringTag, { value: "Module" }));
const DocumentHeader = () => {
  return /* @__PURE__ */ jsxs("section", { className: "bg-white py-10 px-6 md:px-25", children: [
    /* @__PURE__ */ jsx(
      "h1",
      {
        className: "text-3xl md:text-4xl font-bold mb-2 text-gray-900 tracking-tight",
        children: "Legal Documents"
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 w-full", children: [
      "Explore all legal records related to the Mead Memorial Chapel case. Documents are carefully categorized to reflect the structure and claims of the ongoing lawsuit, making it easier to locate filings, exhibits, and correspondence by topic. Each file can be",
      " ",
      /* @__PURE__ */ jsx("b", { children: "viewed online or downloaded" }),
      " for offline review."
    ] })
  ] });
};
const DocumentCategories = [
  "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision"
];
const Files = [
  {
    title: "Printed Case Vol V — Plaintiff MSJ Exhibits 50-71",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol V - P's MSJ Exhibits 50-71 Filed.pdf",
    videoLink: null
  },
  {
    title: "Printed Case Volumes — Table of Contents",
    category: "Pleadings & Motions",
    date: "2025-09-19",
    fileName: "Printed Case Volumes - Table of Contents Filed.pdf",
    videoLink: null
  },
  {
    title: "Appellant's Brief — Estate of John Abner Mead",
    category: "Briefs, Appendices & Legal Memoranda",
    date: "2025-09-19",
    fileName: "Appellant's Brief Filed.pdf",
    videoLink: null
  },
  {
    title: "Certificate of Compliance (V.R.A.P. 32(a)(7)(D)) — Appellant's Brief",
    category: "Administrative, Press & Public Materials",
    date: "2025-09-22",
    fileName: "Cert of Compliance Filed.pdf",
    videoLink: null
  },
  {
    title: "Printed Case Vol I — Pleadings Filed",
    category: "Pleadings & Motions",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol I - Pleadings Filed.pdf",
    videoLink: null
  },
  {
    title: "Printed Case Vol II — Plaintiff Complaint Exhibits (Exs. 1-8)",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol II - Complaint Exhibits Filed.pdf",
    videoLink: null
  },
  {
    title: "Printed Case Vol III — Defendant MSJ Exhibits (MSJ #1 Exs. A–GG; MSJ #2 Exs. A–N)",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol III - D's MSJ Exhibits Filed.pdf",
    videoLink: null
  },
  {
    title: "Printed Case Vol IV — Plaintiff MSJ Exhibits 1-49",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol IV - P's MSJ Exhibits 1-49 Filed.pdf",
    videoLink: null
  },
  {
    title: "Certificate of Service — Motions, Pro Hac Vice Admissions, Notice of Appearance (Langrock Sperry & Wool)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - COS for Motions PHV _ NOA _ Motion for Permission to File Brief 10-10-25(2615316.1).pdf",
    videoLink: null
  },
  {
    title: "Motion for Leave to File Amicus Brief — Proposed Amici Curiae Colleges",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Motion for Permission to File Amicus Brief 10-10-25.pdf",
    videoLink: null
  },
  {
    title: "Pro Hac Vice Licensing Card — M. Bradford Bedingfield (Exhibit A)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Bedingfield(2591939.1).pdf",
    videoLink: null
  },
  {
    title: "Pro Hac Vice Licensing Card — Jennifer Miller (Exhibit A)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Miller(2591938.1).pdf",
    videoLink: null
  },
  {
    title: "Pro Hac Vice Licensing Card — Stephen Kidder (Exhibit A)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Kidder(2591937.1).pdf",
    videoLink: null
  },
  {
    title: "Motion for Admission Pro Hac Vice — Stephen W. Kidder (Amici Curiae Colleges)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV S. Kidder 10-10-25.pdf",
    videoLink: null
  },
  {
    title: "Motion for Admission Pro Hac Vice — Marvin Bradford Bedingfield (Amici Curiae Colleges)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV M. Bedingfield 10-10-25.pdf",
    videoLink: null
  },
  {
    title: "Notice of Attorney Appearance — Erin Miller Heins (NOA)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - NOA 10-10-25.pdf",
    videoLink: null
  },
  {
    title: "Motion for Admission Pro Hac Vice — Jennifer Grace Miller (Amici Curiae Colleges)",
    category: "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV J. Miller 10-10-25.pdf",
    videoLink: null
  }
];
const categoryToSlug = {
  "Docket & Case Index": "docket-case-index",
  "Pleadings & Motions": "pleadings-motions",
  "Briefs, Appendices & Legal Memoranda": "briefs-appendices-legal-memoranda",
  "Evidence & Discovery": "evidence-discovery",
  "Transcripts, Hearings & Notices": "transcripts-hearings-notices",
  "Administrative, Press & Public Materials": "administrative-press-public-materials"
};
const FilePreview = ({
  documents: { title, date, fileName, videoLink },
  currentCategory
}) => {
  const [fileUrl, setFileUrl] = useState("");
  const basePath = useMemo(() => {
    const slug = categoryToSlug[currentCategory] ?? "";
    return slug ? `/lawsuit/documents/${slug}` : "/lawsuit/documents";
  }, [currentCategory]);
  useEffect(() => {
    if (!fileName) {
      setFileUrl(videoLink ?? "");
    } else {
      setFileUrl(basePath);
    }
  }, [fileName, videoLink, basePath]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "border border-gray-200 rounded-lg p-5 bg-white shadow flex flex-col justify-between",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-1", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: date }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-3", children: !fileName ? /* @__PURE__ */ jsx(Fragment, { children: videoLink && /* @__PURE__ */ jsx(
          "a",
          {
            href: `${videoLink}`,
            className: "text-indigo-600 hover:underline text-sm font-medium",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "View Video"
          }
        ) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `${fileUrl}/${fileName}`,
              className: "text-indigo-600 hover:underline text-sm font-medium",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "View"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `${fileUrl}/${fileName}`,
              className: "text-indigo-600 hover:underline text-sm font-medium",
              download: fileName,
              rel: "noopener noreferrer",
              children: "Download"
            }
          )
        ] }) })
      ]
    }
  );
};
const DocumentContent = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [documents2, setDocuments] = useState();
  const sectionRef = useRef(null);
  const handleOnClick = ({
    targetRef,
    category
  }) => {
    var _a;
    const top = ((_a = targetRef.current) == null ? void 0 : _a.offsetTop) - 150;
    window.scrollTo({ top, behavior: "smooth" });
    setCurrentCategory(category);
  };
  useEffect(() => {
    if (currentCategory !== null) {
      const getCategorizedDocuments = Files.filter(
        (ele) => ele.category.toLowerCase() === currentCategory.toLowerCase()
      ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setDocuments(getCategorizedDocuments);
    }
  }, [currentCategory]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white px-6 md:px-25 flex flex-row gap-8 pb-10",
      ref: sectionRef,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sticky top-32 flex flex-col h-fit max-h-[550px] min-w-[200px] w-full max-w-[300px] md:border-r border-gray-100",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Document Categories sorted by submission date" }),
              DocumentCategories.map((category) => /* @__PURE__ */ jsx(
                "button",
                {
                  className: `${category === currentCategory ? "text-blue-600 shadow-md" : ""} cursor-pointer border-gray-300 w-full mb-4 last:mb-0 hover:shadow-md hover:text-blue-600 px-4 py-2 text-left rounded-lg`,
                  onClick: () => handleOnClick({ targetRef: sectionRef, category }),
                  children: category
                },
                category
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: currentCategory }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: documents2 == null ? void 0 : documents2.map((ele, i) => /* @__PURE__ */ jsx(
            FilePreview,
            {
              documents: ele,
              currentCategory
            },
            i
          )) })
        ] })
      ]
    }
  );
};
const Documents = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif min-h-[80vh] h-full bg-white",
    children: [/* @__PURE__ */ jsx(Navbar, {
      user: null
    }), /* @__PURE__ */ jsx(DocumentHeader, {}), /* @__PURE__ */ jsx(DocumentContent, {})]
  });
};
const documents = UNSAFE_withComponentProps(Documents);
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: documents
}, Symbol.toStringTag, { value: "Module" }));
const HeroSection = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "md:px-25 px-5 relative bg-gray-900 text-white h-[65vh] flex flex-col justify-center items-start text-left",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-40"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 lg:max-w-1/2", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-6xl font-bold mb-6 space-y-2", children: [
            /* @__PURE__ */ jsx("h1", { children: "Preserving History." }),
            /* @__PURE__ */ jsx("h1", { children: "Seeking Justice." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-12 text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "This site is dedicated to preserving the legacy of Mead Memorial Chapel while promoting transparency and justice throughout the ongoing legal proceedings. It serves as the updated iteration of the original website, created to support the case currently before the Vermont Supreme Court." }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("p", { children: [
              "You can view the original site",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://meadmemorialchapel.com/",
                  className: "underline font-bold hover:text-blue-400 transition-colors",
                  children: "here"
                }
              ),
              ", which documents the early efforts and background leading up to this new phase."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-center w-fit gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-x-4", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/about",
                  className: "bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200",
                  children: "Learn More"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/lawsuit",
                  className: "bg-gray-800 border border-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700",
                  children: "View Lawsuit"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/petition",
                className: "bg-gray-800 border border-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700",
                children: "Support the Cause"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
const AboutPreview = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "py-16 px-6 md:px-25 grid md:grid-cols-2 gap-10 items-center bg-white",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/home/chapel-aboutPreview.jpg",
            alt: "Mead Memorial Chapel",
            className: "rounded-lg shadow-lg h-[400px] w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "About Mead Memorial Chapel" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "The Mead Memorial Chapel has stood as a symbol of community and history for generations. Learn about its origins, its cultural significance, and the ongoing lawsuit that will shape its future." }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about",
              className: "bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700",
              children: "Read More"
            }
          )
        ] })
      ]
    }
  );
};
const LawsuitPreview = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-16 px-6 md:px-25 bg-white", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-4", children: "Lawsuit" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mb-10", children: "Follow the case in chronological order →" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ jsx("div", { className: "mx-4 h-1 bg-slate-200 rounded" }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto no-scrollbar h-[400px] flex items-center", children: /* @__PURE__ */ jsx("ul", { className: "flex items-center gap-6 px-6 py-6", role: "list", children: TimelineEvents.map((ev, i) => {
        const above = i % 2 === 0;
        return /* @__PURE__ */ jsxs(
          "li",
          {
            className: "relative flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `transform ${above ? "-translate-y-20 md:-translate-y-24" : "translate-y-20 md:translate-y-24"}`,
                  children: /* @__PURE__ */ jsx(LawsuitTimelineCard, { event: ev })
                }
              )
            ]
          },
          ev.date + i
        );
      }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/lawsuit",
        className: "bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700",
        children: "View The Detailed Lawsuit"
      }
    ) })
  ] });
};
const PreviewPost = ({
  post: { id, title, content, imageUrl }
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg shadow-md overflow-hidden", children: [
    imageUrl ? /* @__PURE__ */ jsx(
      "img",
      {
        src: imageUrl,
        alt: `${title} thumbnail`,
        className: "h-48 w-full object-cover"
      }
    ) : /* @__PURE__ */ jsx(
      "img",
      {
        src: "/no-image-icon.png",
        alt: `${title} thumbnail`,
        className: "h-48 w-full object-contain"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 capitalize", children: title }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4", children: [
        content.substring(0, 100),
        "...."
      ] }),
      /* @__PURE__ */ jsx(Link, { to: `/blog/${id}`, className: "text-blue-600 font-medium hover:text-blue-800 hover:underline", children: "Read More →" })
    ] })
  ] });
};
const LatestBlogPosts = () => {
  const posts = getCurrentBlogPosts();
  return /* @__PURE__ */ jsxs("section", { className: "py-16 px-6 md:px-25 bg-gray-50", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Latest Blog Posts" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsx(PreviewPost, { post }, post.id)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/blog",
        className: "bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700",
        children: "See All Posts"
      }
    ) })
  ] });
};
const Main = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "font-serif",
    children: [/* @__PURE__ */ jsx(HeroSection, {}), /* @__PURE__ */ jsx(AboutPreview, {}), /* @__PURE__ */ jsx(LawsuitPreview, {}), /* @__PURE__ */ jsx(LatestBlogPosts, {})]
  });
};
const main = UNSAFE_withComponentProps(Main);
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: main
}, Symbol.toStringTag, { value: "Module" }));
const PetitionHeader = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-100 bg-gray-900", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/about/chapel-hero.jpg",
        alt: "Mead Memorial Chapel",
        className: "absolute inset-0 w-full h-full object-cover opacity-50"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative z-10 flex flex-col gap-5 items-center justify-center h-full text-center",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "Petition to Intervene" }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white md:max-w-[700px]", children: "Add your support by signing the petition to intervene in the lawsuit to preserve Mead Memorial Chapel." })
        ]
      }
    )
  ] });
};
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const InputField = ({
  name,
  label,
  placeholder,
  type,
  register,
  error,
  validation,
  disabled,
  value
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 min-w-[300px] w-full", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, className: "text-sm font-medium text-gray-400", children: label }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type,
        id: name,
        placeholder,
        disabled,
        value,
        className: cn(
          "h-12 px-3 py-3 text-gray-800 text-base placeholder:text-gray-500 border-gray-400 rounded-lg",
          {
            "opacity-50 cursor-not-allowed": disabled
          }
        ),
        ...register(name, validation)
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error.message })
  ] });
};
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx(CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const PetitionContent = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: null,
      anonymous: true,
      getNewsLetter: false,
      phoneNumber: null,
      comments: ""
    },
    mode: "onBlur"
  });
  const onSubmit = async (data) => {
    try {
      const date = /* @__PURE__ */ new Date();
      const formattedDate = date.toLocaleDateString("en-US");
      await addDoc(collection(db, "petitions"), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        anonymous: data.anonymous,
        getNewsLetter: data.getNewsLetter,
        phoneNumber: data.phoneNumber,
        comments: data.comments,
        signedAt: formattedDate
      }).finally(() => {
        navigate("/main");
      });
    } catch (error) {
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-white px-6 md:px-25 flex flex-row justify-center gap-8 pb-10 text-gray-600 py-8",
      children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          className: "flex flex-col w-full max-w-[800px] justify-center items-center space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-8 w-full", children: [
              /* @__PURE__ */ jsx(
                InputField,
                {
                  name: "firstName",
                  label: "First Name",
                  placeholder: "John",
                  register,
                  type: "text",
                  error: errors.firstName,
                  validation: { required: "First Name is required", minLength: 2 }
                }
              ),
              /* @__PURE__ */ jsx(
                InputField,
                {
                  name: "lastName",
                  label: "Last Name",
                  placeholder: "Doe",
                  type: "text",
                  register,
                  error: errors.lastName,
                  validation: { required: "Last Name is required", minLength: 2 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-8 w-full", children: [
              /* @__PURE__ */ jsx(
                InputField,
                {
                  name: "email",
                  label: "Email",
                  placeholder: "Enter your email",
                  type: "text",
                  register,
                  error: errors.email,
                  validation: {
                    required: "Email Address is required",
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address."
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                InputField,
                {
                  name: "phoneNumber",
                  label: "Phone Number",
                  placeholder: "(123) 456-7890",
                  type: "text",
                  register,
                  error: errors.phoneNumber,
                  validation: {
                    required: "Phone Number is required",
                    pattern: /\d{10}$/,
                    message: "Invalid phone number."
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
              Controller,
              {
                name: "anonymous",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxs(
                  RadioGroup,
                  {
                    value: field.value ? "true" : "false",
                    onValueChange: (val) => field.onChange(val === "true"),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx(RadioGroupItem, { value: "false", id: "acknowledged" }),
                        /* @__PURE__ */ jsx(Label, { htmlFor: "acknowledged", children: "Public" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx(RadioGroupItem, { value: "true", id: "anonymous" }),
                        /* @__PURE__ */ jsx(Label, { htmlFor: "anonymous", children: "Anonymous" })
                      ] })
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx("hr", { className: "w-full border-t border-gray-300" }),
            /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
              Controller,
              {
                name: "getNewsLetter",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxs(
                  RadioGroup,
                  {
                    value: field.value ? "true" : "false",
                    onValueChange: (val) => field.onChange(val === "true"),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx(RadioGroupItem, { value: "true", id: "get-news-letters" }),
                        /* @__PURE__ */ jsx(Label, { htmlFor: "get-news-letters", children: "Yes, I would like to receive newsletters from Mead Memorial Chapel" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx(RadioGroupItem, { value: "false", id: "dont-want" }),
                        /* @__PURE__ */ jsx(Label, { htmlFor: "dont-want", children: "No, Thanks" })
                      ] })
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx(
              InputField,
              {
                name: "comments",
                label: "Comments",
                placeholder: "Any comments...",
                type: "textarea",
                register,
                error: errors.comments,
                validation: { maxLength: 500 }
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full max-w-[400px] p-6 text-lg font-semibold",
                children: isSubmitting ? "Submitting..." : "Sign Petition"
              }
            )
          ]
        }
      )
    }
  );
};
function meta({}) {
  return [{
    title: "Mead Memorial Chapel - Petition"
  }, {
    name: "description",
    content: "Mead Memorial Chapel - Petition"
  }];
}
const Petition = () => {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx(Navbar, {
      user: null
    }), /* @__PURE__ */ jsx(PetitionHeader, {}), /* @__PURE__ */ jsx(PetitionContent, {})]
  });
};
const petition = UNSAFE_withComponentProps(Petition);
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: petition,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DkFMJx13.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/index-2ne7_dbK.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CcfEfb4T.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/index-2ne7_dbK.js"], "css": ["/assets/root-DsqMQi32.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CtSjYR8Q.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/firebase-B0Xi_jMF.js", "/assets/button-Bea-G2Nt.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-C26lelPP.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/Navbar-BtVlSe0J.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "/auth", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/auth-CqoO2OYb.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "/blog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/blog-BLzjI8D3.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/firebase-B0Xi_jMF.js", "/assets/Navbar-BtVlSe0J.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/blog-post": { "id": "routes/blog-post", "parentId": "root", "path": "/blog/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/blog-post-BMih2iIr.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/firebase-B0Xi_jMF.js", "/assets/Navbar-BtVlSe0J.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/create-blog-post": { "id": "routes/create-blog-post", "parentId": "root", "path": "/create-blog-post", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/create-blog-post-BrGs9LRB.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/lawsuit": { "id": "routes/lawsuit", "parentId": "root", "path": "/lawsuit", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/lawsuit-DrrZF6qD.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/Navbar-BtVlSe0J.js", "/assets/LawsuitTimelineCard-BMzM-wjp.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/documents": { "id": "routes/documents", "parentId": "root", "path": "/lawsuit/documents", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/documents-MfcxWksd.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/Navbar-BtVlSe0J.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/main": { "id": "routes/main", "parentId": "root", "path": "/main", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/main-DzIx8LOf.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/LawsuitTimelineCard-BMzM-wjp.js", "/assets/firebase-B0Xi_jMF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/petition": { "id": "routes/petition", "parentId": "root", "path": "/petition", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/petition-CXQpqYpG.js", "imports": ["/assets/chunk-B7RQU5TL-BHi1Mf43.js", "/assets/index-2ne7_dbK.js", "/assets/button-Bea-G2Nt.js", "/assets/firebase-B0Xi_jMF.js", "/assets/Navbar-BtVlSe0J.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-fd58fea8.js", "version": "fd58fea8", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "/auth",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "/blog",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/blog-post": {
    id: "routes/blog-post",
    parentId: "root",
    path: "/blog/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/create-blog-post": {
    id: "routes/create-blog-post",
    parentId: "root",
    path: "/create-blog-post",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/lawsuit": {
    id: "routes/lawsuit",
    parentId: "root",
    path: "/lawsuit",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/documents": {
    id: "routes/documents",
    parentId: "root",
    path: "/lawsuit/documents",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/main": {
    id: "routes/main",
    parentId: "root",
    path: "/main",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/petition": {
    id: "routes/petition",
    parentId: "root",
    path: "/petition",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  }
};
const build = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
const _virtual_netlifyServer = createRequestHandler({
  build,
  getLoadContext: async (_req, ctx) => ctx
});
export {
  _virtual_netlifyServer as default
};
