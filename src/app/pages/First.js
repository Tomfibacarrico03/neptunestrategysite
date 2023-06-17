import styles from "../styles/page.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className={styles.backImg}>
      <Image
        src="/images/imagemsite.png"
        alt="My Image"
        layout="fill"
      />
    </section>
  );
}
