import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editThemeMode } from "../../Store/ThemeMode/ThemeMode";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Header = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();

  const darkLightMode = () => {
    if (!themeMode) {
      dispatch(editThemeMode(!themeMode));
      document.getElementById("root").classList.add("light");
    } else {
      dispatch(editThemeMode(!themeMode));
      document.getElementById("root").classList.remove("light");
    }
  };

  return (
    <header className={`${themeMode ? styles.light : styles.header}`}>
      <div className="container">
        <div className={styles.box}>
          <Link className={styles.logo} to={"/"}>
            Logo
          </Link>
          <div className={styles.hamburgerMenu}>
            <div className={styles.item} onClick={darkLightMode}>
              {themeMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#403D39"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-moon"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CED4DA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-sun"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
            <HamburgerMenu />
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={styles.item}>
              <Link to={"/about"}>About</Link>
            </li>
            <li className={styles.item}>
              <Link to={"/work"}>Work</Link>
            </li>
            <li className={styles.item} onClick={darkLightMode}>
              {themeMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#403D39"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-moon"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CED4DA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-sun"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </li>
            <li className={styles.items}>
              <Link className={styles.contactBtn} to={"/contact"}>
                Contact me
                <ArrowRightAltIcon fontSize="small" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
