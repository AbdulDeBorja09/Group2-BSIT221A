import styles from "@/styles/style.module.scss";

export default function Ourteam() {
  return (
    <>
      <div className={styles.about_image_flex} class="about_image_flex">
        <img className={styles.imagebox} src={`/profiles/abdul.png`} />
        <img className={styles.imagebox} src={`/profiles/ethan.png`} />
        <img className={styles.imagebox} src={`/profiles/Khylle.png`} />
        <img className={styles.imagebox} src={`/profiles/wade.jpg`} />
        <img className={styles.imagebox} src={`/profiles/shazz.jpeg`} />
        <img className={styles.imagebox} src={`/profiles/jennilyn.jpg`} />
        <img className={styles.imagebox} src={`/profiles/jb.png`} />
      </div>
    </>
  );
}
