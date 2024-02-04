"use client";

import { MouseEventHandler } from "react";

type ButtonPropsTypes = {
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonPropsTypes) => {
  return (
    <div>
      <button
        type="submit"
        onClick={props.onClick}
        disabled={props.disabled}
        className={`flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
          props.disabled ? "bg-gray-400" : "bg-cyan-800 hover:bg-cyan-700"
        }   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
