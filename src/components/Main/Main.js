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
                  <UserCircleIcon width={25} />
                  <span style={{ wordBreak: "break-all" }}>{name}</span>
                </div>
                <div className="description">
                  <a target="__blank" href={url}>
                    {description}
                  </a>
                  <svg
                    className="clone-icon"
                    style={{ marginLeft: "5rem" }}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                    width="20"
                    height="20"
                  >
                    <path
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                      d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1a9 9 0 100-18 9 9 0 000 18zm4.12-13.12a3.007 3.007 0 010 4.253l-1.285 1.284-.709-.708 1.285-1.285a2.004 2.004 0 10-2.835-2.835L9.29 7.874l-.708-.709 1.284-1.284a3.007 3.007 0 014.252 0zm-4.696 7.53l1.285-1.284.709.709-1.285 1.284A2.999 2.999 0 018.007 15a3.007 3.007 0 01-2.126-5.133l1.284-1.285.71.71-1.285 1.284a2.006 2.006 0 001.417 3.422 1.99 1.99 0 001.417-.588zm1.708-5.25l.708.708-2.98 2.98-.708-.709 2.98-2.98z"
                    ></path>
                  </svg>
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
