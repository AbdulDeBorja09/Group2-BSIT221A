import path from "path";
import fs from "fs";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Recipe({ recipe }) {
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
        {recipe.map((recipes) => {
          return (
            <a className={styles.box} key={recipes.id}>
              <img src={`/recipes/${recipes.image}`} alt="recipe image" />
              <h5 className={styles.recipie_title}>{recipes.Recipe_name}</h5>
              <h6>{recipes.Cooking_time}</h6>
            </a>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/recipes.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);

  console.log(data);
  return {
    props: {
      recipe: data,
    },
  };
}
