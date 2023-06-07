import React from "react";
import styles from "./Foote.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      {new Date().getFullYear()}
      &nbsp; | &nbsp; All right reserved &copy; coded by
      <Link href={"https://github.com/amirxoder"} target="_blank">
        &nbsp;AmirCodder
      </Link>
    </div>
  );
};

export default Footer;
