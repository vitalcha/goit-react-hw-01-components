import React from "react";
import s from "./friends.module.css";
import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem";

const FriendsList = ({ friends }) => (
  <ul className={s.ul}>
    {friends.map(e => (
      <FriendsItem
        key={e.id}
        isOnline={e.isOnline}
        name={e.name}
        avatar={e.avatar}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired
};

export default FriendsList;
