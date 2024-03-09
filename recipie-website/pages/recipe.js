import { useState } from "react";
import path from "path";
import fs from "fs";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Recipe({ recipe }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  let filteredRecipe = recipe;
  if (selectedCategory) {
    filteredRecipe = recipe.filter((r) => r.Category === selectedCategory);
  }

  return (
    <>
      <Navbar />
      <section className={styles.Recipe_category}>
        <h1 className={styles.title}>All Categories:</h1>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${
              selectedCategory === null && styles.selected
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            All
          </button>
          <button
            className={`${styles.button} ${
              selectedCategory === "Breakfast" && styles.selected
            }`}
            onClick={() => handleCategoryClick("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`${styles.button} ${
              selectedCategory === "Lunch" && styles.selected
            }`}
            onClick={() => handleCategoryClick("Lunch")}
          >
            Lunch
          </button>
          <button
            className={`${styles.button} ${
              selectedCategory === "Dinner" && styles.selected
            }`}
            onClick={() => handleCategoryClick("Dinner")}
          >
            Dinner
          </button>
          <button
            className={`${styles.button} ${
              selectedCategory === "Main-Course" && styles.selected
            }`}
            onClick={() => handleCategoryClick("Main-Course")}
          >
            Main Course
          </button>
          <button
            className={`${styles.button} ${
              selectedCategory === "Dessert" && styles.selected
            }`}
            onClick={() => handleCategoryClick("Dessert")}
          >
            Dessert
          </button>
        </div>
      </section>
      <section className={styles.Recipe_box}>
        {filteredRecipe.map((recipe) => (
          <Link
            className={styles.box}
            href={`/viewpage/${recipe.Id}`}
            key={recipe.Id}
          >
            <img src={`/recipes/${recipe.image}`} alt="recipe image" />
            <h5 className={styles.recipie_title}>{recipe.Recipe_name}</h5>
            <h6>{recipe.Cooking_time}</h6>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/recipes.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return {
    props: {
      recipe: data,
    },
  };
}
