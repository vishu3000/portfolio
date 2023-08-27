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
      <div className="row ">
        <div className="col-7">
          <div className="row gy-5">
            <div className="col-11">
              <p id="dev" className={styles.fontEnhancement}>
                Developer
              </p>
            </div>
            <div className="col-11">
              <p id="prog" className={styles.fontEnhancement}>
                Programmer
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
