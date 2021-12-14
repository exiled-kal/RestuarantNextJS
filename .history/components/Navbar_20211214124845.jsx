import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}></li>
        </ul>
      </div>
      <div className={styles.item}>right</div>
    </div>
  );
};

export default Navbar;
