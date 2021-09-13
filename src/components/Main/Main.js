import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import "./Main.css";

import { data } from "../../data.js";

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
        <div className="main__subscribe" style={{ marginTop: "2.5rem" }}>
          <div className="main__subscribe__top">
            <UserCircleIcon width={25} /> Over 500 FREE Home Workouts
          </div>
          <div className="main__subscribe__bottom">
            <div className="main__subscribe__bottom__left">
              <img
                className="rounded-circle"
                style={{ width: "5rem", height: "5rem" }}
                src="/images/subscribeImage.jpg"
                alt="A lady smiling"
              />
            </div>
            <div className="main__subscribe__bottom__right">
              <h2>Lilly Sabri</h2>
              <p>
                I’m Lilly Sabri, founder of Lean with Lilly. I’ve been a
                Chartered...
              </p>
              <a
                style={{ backgroundColor: "rgb(255, 0, 0)" }}
                target="__blank"
                className="subscribe"
                href="https://www.youtube.com/channel/UCTsM1dSAiXqiV5oZjuNw_Bg?sub_confirmation=1"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="main__bottom">
        <section>
          {data.map((item) => {
            const { id, name, description, url } = item;

            return (
              <div className="mb-5" key={id} style={{ width: "100%" }}>
                <div className="mb-4">
                  <UserCircleIcon width={25} /> {name}
                </div>
                <div className="description">
                  <a target="__blank" href={url}>
                    {description}
                  </a>
                  <UserCircleIcon
                    className="clone-icon"
                    width={25}
                    style={{ marginLeft: "5rem" }}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Main;
