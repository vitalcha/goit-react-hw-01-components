import React from "react";
import s from "./index.module.css";

const Header = ({ user }) => {
  return (
    <header>
      <div className={s.profile}>
        {console.log(user)}
        <div className={s.description}>
          <img src={user.avatar} alt="user avatar" className={s.avatar} />
          <p className={s.name}>{user.name}</p>
          <p className={s.tag}>{user.tag}</p>
          <p className={s.location}>{user.location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.li}>
            <span className={s.label}>Followers </span>
            <span className={s.quantity}>{user.stats.followers}</span>
          </li>
          <li className={s.li}>
            <span className={s.label}>Views </span>
            <span className={s.quantity}>{user.stats.views}</span>
          </li>
          <li className={s.li}>
            <span className={s.label}>Likes </span>
            <span className={s.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
