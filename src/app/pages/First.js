import styles from "../styles/page.module.css";
import Image from "next/image";
import backgroundImage from "../images/imagemsite.png";
export default function Navbar() {
  return (
    <div className={styles.backImg}>
      <Image src={backgroundImage} alt="My Image" />
    </div>
  );
}
