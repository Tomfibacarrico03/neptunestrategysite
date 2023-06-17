import Image from "next/image";
import styles from "./styles/page.module.css";
import RootLayout from '../app/layout';
import Navbar from '../app/components/Navbar'
import First from '../app/pages/First';
import Second from '../app/pages/Second';

export default function Home() {
  return (
    <RootLayout>
      <Navbar/>
      <First/>
      <Second/>
    </RootLayout>
  );
}
