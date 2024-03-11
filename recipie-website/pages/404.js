import Link from "next/link";
import styles from "@/styles/style.module.scss";

export default function Custom404() {
  return (
    <>
      <section className={styles.error_page}>
        <div className={styles.top}>
          <div className={styles.images}>
            <h1 className={styles.error}>404</h1>
            <img className={styles.chef} src="../404.png" alt="" />
          </div>
          <div className={styles.text}>
            <h2 className={styles.error_msg}>
              LOOKS LIKE YOU GOT LOST IN THE KITCHEN
            </h2>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.error_msg}>
            The page you are looking for might be removed or temporary
            unavailable
          </p>
          <Link href="../" className={styles.return_btn}>
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </section>
    </>
  );
}
