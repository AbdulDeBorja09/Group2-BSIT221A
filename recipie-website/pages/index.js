
import Image from "next/image";
import styles from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
        
      <Navbar />
      <section className={styles.Recipe_category}>
        <h1 className={styles.title}>All Categories:</h1>
        <div className={styles.buttons}>
          <button className={styles.button}>Breakfast</button>
          <button className={styles.button}>Lunch</button>
          <button className={styles.button}>Dinner</button>
          <button className={styles.button}>Main-Course</button>
          <button className={styles.button}>Dessert</button>
          <button className={styles.button}>Vegetarian Dishes</button>
        </div>
      </section>
      <section className={styles.Recipe_box}>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
        <a className={styles.box}>
          <img src="/recipeimg.jpg" alt="" />
          <h5 className={styles.recipie_title}>Spaghetti Carbonara</h5>
          <h6>15 mins</h6>
        </a>
      </section>
      <Footer />
    </>
  );
}
