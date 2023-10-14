/* eslint-disable react/no-unescaped-entities */
"use client";
import { annotate, annotationGroup } from "rough-notation";
import styles from "./Introduction.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import profilePic from "../../constants/dp.jpg";

export const Introduction = () => {
  useEffect(() => {
    const a1 = annotate(document.querySelector(`#dev`), {
      type: "highlight",
      color: "#F59E0B",
    });
    const a2 = annotate(document.querySelector(`#prog`), {
      type: "highlight",
      color: "#84CC16",
    });
    const ag = annotationGroup([a1, a2]);
    ag.show();
  }, []);

  return (
    <div className="container">
      {/* First Section */}
      <div className="row ">
        <div className="col-7">
          <div className="row gy-5">
            <div className="col-11">
              <p id="dev" className={styles.fontEnhancement}>
                Developer.
              </p>
            </div>
            <div className="col-11">
              <p id="prog" className={styles.fontEnhancement}>
                Programmer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="container">
            <Image
              src={profilePic}
              width={50}
              height={50}
              alt="avatar"
              className={`rounded ${styles.image}`}
            />
            <div>
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  ></path>
                </svg>
                <p class="font-mono">That's me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className={`${styles.backgroundSec}`}></div>
    </div>
  );
};
