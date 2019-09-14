import React from "react";
import "./Failure.css";

export default function Failure() {
  return (
    <svg
      className="Failure"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <path
        className="path line"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M34.4 37.9l61.4 54.4M95.8 38L34.4 92.2"
      />
    </svg>
  );
}
