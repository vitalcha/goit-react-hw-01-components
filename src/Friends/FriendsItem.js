import React from "react";
import ProtoTypes from "prop-types";
import s from "./friends.module.css";

const FriendsItem = ({ avatar, name, isOnline }) => (
  <li className={s.item} >
    <span className= {isOnline ? s.status : s.offLine} />
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendsItem.protoType = {
  avatar: ProtoTypes.string.isRequired,
  name:ProtoTypes.string.isRequired,
  isOnline: ProtoTypes.bool.isRequired,
}



export default FriendsItem