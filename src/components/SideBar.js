import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-md w-48">
      <ul className="m-2">
        <li className="flex gap-2 items-center">
          <Link to="/">
            <i className="fa-solid fa-house"></i>Home
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <i className="fa-brands fa-square-youtube"></i>Shorts
        </li>
        <li className="flex gap-2 items-center">
          <i className="fa-solid fa-video"></i>Videos
        </li>
        <li className="flex gap-2 items-center">
          <i className="fa-solid fa-heart"></i>Live
        </li>
      </ul>
      <h1 className="font-bold text-xl pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold text-xl pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
