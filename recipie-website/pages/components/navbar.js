import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/style.module.scss";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Kitchen Pal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../favicon.png" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.navbrand}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={styles.navlinks}>
          <Link
            href="../"
            className={router.pathname === "/" ? styles.selected : styles.links}
          >
            Home
          </Link>
          <Link
            href="../recipe"
            className={
              router.pathname === "/recipe" ? styles.selected : styles.links
            }
          >
            Our Recipes
          </Link>
          <Link
            href="../aboutus"
            className={
              router.pathname === "/aboutus" ? styles.selected : styles.links
            }
          >
            About Us
          </Link>
          <Link
            href="../contactus"
            className={
              router.pathname === "/contactus" ? styles.selected : styles.links
            }
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
