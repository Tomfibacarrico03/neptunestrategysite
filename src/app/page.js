import Image from "next/image";
import styles from "./styles/page.module.css";
import RootLayout from '../app/layout';
import Navbar from '../app/components/Navbar'
import First from '../app/pages/First';
export default function Home() {
  return (
    <RootLayout>
      <Navbar/>
      <First/>
    </RootLayout>
  );
}
