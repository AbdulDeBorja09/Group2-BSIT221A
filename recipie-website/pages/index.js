import Carousel from "./components/carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/style.module.scss";
import path from "path";
import fs from "fs";

export default function Home({ recipe }) {
  return (
    <>
      <Carousel />
      <div className={styles.home_title}>
        <div className={styles.home_container}>
          <Link className={styles.title} href="../recipe">
            Our Recipe
          </Link>
        </div>
      </div>
      <section className={styles.Recipe_box}>
        {recipe.slice(0, 4).map((recipes) => {
          return (
            <Link
              className={styles.box}
              href={`/recipe/${recipes.Id}`}
              key={recipes.Id}
            >
              <img src={`/recipes/${recipes.image}`} alt="recipe image" />
              <h5 className={styles.recipie_title}>{recipes.Recipe_name}</h5>
              <h6>{recipes.Cooking_time}</h6>
            </Link>
          );
        })}
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
