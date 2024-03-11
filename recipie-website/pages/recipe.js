import { useState, useEffect } from "react";
import path from "path";
import fs from "fs";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Recipe({ recipe }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setShowButtons(window.innerWidth > 660);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredRecipe = recipe;
  if (selectedCategory) {
    filteredRecipe = recipe.filter((r) => r.Category === selectedCategory);
  }

  const filteredSearchRecipe = filteredRecipe.filter(
    (recipe) =>
      recipe &&
      recipe.Recipe_name &&
      typeof recipe.Recipe_name === "string" &&
      recipe.Recipe_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className={styles.search_div}>
        <input placeholder="Search..." onKeyUp={handleSearch}></input>
      </section>
      <section className={styles.Recipe_category}>
        <button className={styles.title} onClick={handleToggleButtonClick}>
          {showButtons} Categories:
        </button>
        <div
          className={styles.buttons}
          style={{ display: showButtons ? "flex" : "none" }}
        >
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
            className={`${styles.smallfont} ${
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
        {filteredSearchRecipe.map((recipe) => (
          <Link
            className={styles.box}
            href={`/recipe/${recipe.Id}`}
            key={recipe.Id}
          >
            <img src={`/recipes/${recipe.image}`} alt="recipe image" />
            <h5 className={styles.recipie_title}>{recipe.Recipe_name}</h5>
            <h6>{recipe.Cooking_time}</h6>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./Data/recipes.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return {
    props: {
      recipe: data,
    },
  };
}
