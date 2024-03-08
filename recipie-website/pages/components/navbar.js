import styles from "@/styles/style.module.css";
export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbrand}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={styles.navlinks}>
          <a href="" className={styles.selected}>
            Home
          </a>
          <a href="" className={styles.links}>
            Our Recipes
          </a>
          <a href="" className={styles.links}>
            About Us
          </a>
          <a href="" className={styles.links}>
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
