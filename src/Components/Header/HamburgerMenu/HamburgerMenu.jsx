import React, { useState } from "react";
import styles from "./HamburgerMenu.module.scss";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";

const HamburgerMenu = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const [onClick, setOnClick] = useState(false);
  const [menuOnOff, setMenuOnOff] = useState(false);

  const overHidden = () => {
    setMenuOnOff(!menuOnOff);
    if (!onClick) {
      document.getElementById("root").classList.add("hidden");
      setOnClick(!onClick);
    } else {
      document.getElementById("root").classList.remove("hidden");
      setOnClick(!onClick);
    }
  };

  return (
    <>
      <div className={`${themeMode ? styles.light : styles.menu}`}>
        <input
          type="checkbox"
          id="burger-checkbox"
          className={styles.burgerCheckbox}
          onClick={overHidden}
        />
        <label for="burger-checkbox" className={styles.burger}></label>
        <div className={styles.curtain}></div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem} onClick={() => setMenuOnOff(false)}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={styles.menuItem} onClick={() => setMenuOnOff(false)}>
            <Link to={"/about"}>About</Link>
          </li>
          <li className={styles.menuItem} onClick={() => setMenuOnOff(false)}>
            <Link to={"/work"}>Work</Link>
          </li>
          <li className={styles.menuItems} onClick={() => setMenuOnOff(false)}>
            <Link className={styles.contactBtn} to={"/contact"}>
              Contact me
              <ArrowRightAltIcon fontSize="small" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
