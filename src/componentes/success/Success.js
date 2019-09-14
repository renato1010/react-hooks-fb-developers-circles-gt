import React from "react";
import "./Success.css";

export default function Success() {
  return (
    <svg
      className="Success"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <path
        className="path check"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M100.2 40.2L51.5 88.8 29.8 67.5"
      />
    </svg>
  );
}
