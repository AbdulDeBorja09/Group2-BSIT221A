import Link from "next/link";
import styles from "@/styles/style.module.scss";
import Ourteam from "./components/ourteam";

export default function Contactus() {
  return (
    <>
      <section className={styles.about_us}>
        <div className={styles.about_title}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>About Us</h1>
          </div>
        </div>
        <div className={styles.about_text}>
          <p className={styles.text}>
            Kitchen Pal was founded with a simple yet profound mission: to make
            cooking enjoyable, accessible, and rewarding for everyone. Our team
            of passionate food enthusiasts, professional chefs, and nutrition
            experts curate an extensive collection of recipes spanning various
            cuisines, dietary preferences, and cooking skill levels. From quick
            and easy weekday dinners to elaborate weekend feasts, we've got you
            covered with step-by-step instructions, helpful videos, and
            practical cooking advice. At Kitchen Pal, we're not just about
            recipes; we're about fostering a community of food lovers who share
            a common passion for good food and great company. So, whether you're
            looking to master the basics or impress your guests with gourmet
            creations, Kitchen Pal is here to inspire and support you on your
            culinary journey. Happy cooking!
          </p>
        </div>
        <Ourteam />
      </section>
    </>
  );
}
