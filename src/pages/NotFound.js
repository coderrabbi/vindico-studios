import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import Navbar from "../common/Navbar";

const NotFound = () => {
  return (
    <div className={`${styles.padding} flex flex-col items-center gap-5`}>
      <Navbar />
      <Link to="/">
        <button className="btn">Back TO Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
