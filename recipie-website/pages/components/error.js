import styles from "@/styles/style.module.scss";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <section className={styles.failed_page}>
        <div className={styles.top}>
          <h1 className={styles.error}>OOPS!</h1>
        </div>
        <div className={styles.bottom}>
          <p className={styles.error_msg}>“Recipe not found”</p>
          <Link href="../" className={styles.return_btn}>
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </section>
    </>
  );
}
