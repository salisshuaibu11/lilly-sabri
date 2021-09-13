import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import "./Main.css";

const Main = () => {
  return (
    <main className="main flex justify-center">
      <article className="main__header">
        <div>
          <UserCircleIcon width={25} />{" "}
          <span>THE LEAN APP IS COMING GUIDE!</span>
        </div>
        <a
          target="__blank"
          href="https://mailchi.mp/leanwithlilly/freeworkouttimetable"
        >
          sign up now for free guides!
          <UserCircleIcon
            className="clone-icon"
            width={25}
            style={{ marginLeft: "5rem" }}
          />
        </a>
      </article>
      <div className="main__bottom">main__bottom</div>
    </main>
  );
};

export default Main;
