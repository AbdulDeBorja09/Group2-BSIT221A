import path from "path";
import fs from "fs";
import Image from "next/image";
import styles from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home({ recipe }) {
  return (
    <>
      <Navbar />
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
  const filePath = path.join(process.cwd(), "./data/recipes.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);
  console.log(data);
  return {
    props: {
      recipe: data,
    },
  };
}
