import Link from "next/link";
import styles from "./Navbar.module.css";
import { BsPersonFillGear } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href={"/"}>CRM Panel</Link>
        </h1>

        <Link className="primary-btn" href={"/add-customer"}>
          <span>Add Customer</span>
          <BsPersonFillGear />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
