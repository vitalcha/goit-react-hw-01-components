import React from "react";
import s from "./statistics.module.css";

const Statistics = ({ title, statistics }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}Hello</h2>
    <ul className={s.stat__list}>
      {statistics.map(el => (
        <li className={s.item} key={el.id}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}> {el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
