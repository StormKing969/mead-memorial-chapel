/**
 * Static navigation links for the site navbar.
 * Each item provides a title and an absolute path used by React Router.
 */
/**
 * Links rendered by app/components/Navbar.tsx.
 * Item shape:
 * - title: string — menu label to display.
 * - url: string — route path (e.g., "/about").
 */
export const NavbarLinks = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "Lawsuit",
    url: "/lawsuit",
  },
];