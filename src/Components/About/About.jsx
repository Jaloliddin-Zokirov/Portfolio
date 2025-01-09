import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.box}>
          <h1 className={styles.title}>Hello I'm Jaloliddin Zokirov</h1>
          <p className={styles.description}>
            I am a passionate Frontend Developer with expertise in creating
            user-friendly and visually engaging web interfaces. With a strong
            foundation in technologies like HTML, CSS, JavaScript, and
            frameworks such as React.js and Tailwind CSS, I specialize in
            crafting seamless digital experiences. My work focuses on delivering
            responsive, accessible, and aesthetically pleasing designs that
            align with user needs and modern web standards.
          </p>
          <p className={styles.description}>
            I thrive on solving complex challenges and constantly refining my
            skills to stay at the forefront of web development. Whether it’s
            building interactive web applications or optimizing performance, I
            aim to blend functionality and design to create impactful solutions.
            My portfolio reflects my dedication to continuous learning and my
            ability to bring ideas to life through innovative development
            practices.
          </p>
          <ul className={styles.list}></ul>
        </div>
      </div>
    </section>
  );
};

export default About;
