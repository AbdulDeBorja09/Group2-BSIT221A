import styles from "@/styles/style.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.col1}>
          <h1 className={styles.title}>Kitchen Pal</h1>
          <p className={styles.desc}>
            Kitchen Pal is a recipe website with a wide variety of delicious
            recipes, easy-to-use search function. Kitchen Pal is an Ultimate
            destination for culinary inspiration and gastronomic adventures!
            Join our community and let's cook together!
          </p>
          <h2 className={styles.creds}>
            Recipe Blog @ 2024 All Right Reserved
          </h2>
        </div>
        <div className={styles.col2}>
          <div className={styles.upper}>
            <h1 className={styles.title}>Navigation</h1>
            <Link href="../" className={styles.link}>
              Home
            </Link>
            <Link href="../recipe" className={styles.link}>
              Our Recipe
            </Link>
          </div>
          <div className={styles.lower}>
            <h1 className={styles.title}>Customer Service</h1>
            <Link href="../aboutus" className={styles.link}>
              About Us
            </Link>
            <Link href="../contactus" className={styles.link}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.col3}>
          <h5 className={styles.titles}>Recipes</h5>
          <h6 className={styles.subtitles}>Breakfast</h6>
          <h6 className={styles.subtitles}>Lunch</h6>
          <h6 className={styles.subtitles}>Dinner</h6>
          <h6 className={styles.subtitles}>Main-Course</h6>
          <h6 className={styles.subtitles}>Dessert</h6>
          <h6 className={styles.subtitles}>Vegetarian Dishes</h6>
        </div>
      </footer>
    </>
  );
}
