import styles from "@/styles/style.module.scss";
export default function Ourteam() {
  return (
    <>
      <div className={styles.about_image_flex} class="about_image_flex">
        <img className={styles.imagebox} src={`/profiles/abdul.png`} />
        <img className={styles.imagebox} src={`/profiles/ethan.png`} />
        <img className={styles.imagebox} src={`/profiles/khylle.png`} />
        <img className={styles.imagebox} src={`/profiles/wade.jpg`} />
        <img className={styles.imagebox} src={`/profiles/unknown.jpg`} />
        <img className={styles.imagebox} src={`/profiles/unknown.jpg`} />
        <img className={styles.imagebox} src={`/profiles/unknown.jpg`} />
      </div>
    </>
  );
}
