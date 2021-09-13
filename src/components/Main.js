import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";

const Main = () => {
  return (
    <main className="main flex justify-center">
      <article className="main__header">
        <div>
          <UserCircleIcon width={25} />{" "}
          <span>THE LEAN APP IS COMING GUIDE!</span>
        </div>
      </article>
      <div className="main__bottom">main__bottom</div>
    </main>
  );
};

export default Main;
