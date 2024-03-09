import Link from "next/link";
import styles from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Contactus() {
  return (
    <>
      <Navbar />
      <section className={styles.contact_us}>
        <div className={styles.contact_title}>
          <div className={styles.contact_container}>
            <h1 className={styles.title}>About Us</h1>
          </div>
        </div>
        <div className={styles.contact_text}>
          <p className={styles.text}>
            At Kitchen Pal, we value your feedback, questions, and suggestions.
            Whether you have a query about a recipe, need assistance with
            navigating our website, or simply want to share your cooking
            adventures with us, we're here to help! Our dedicated support team
            is committed to providing prompt and personalized assistance to
            ensure your experience with Kitchen Pal is seamless and enjoyable.
            Feel free to reach out to us via email at
            <b className={styles.email}> kitchenpal@gmail.com</b> or through our
            social media channels. We're always eager to hear from our community
            of food enthusiasts and are dedicated to continuously improving and
            enhancing your experience on our platform. Your input is invaluable
            to us, so don't hesitate to get in touch. Let's cook up something
            wonderful together!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}