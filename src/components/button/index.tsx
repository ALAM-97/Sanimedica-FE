"use client";

import { MouseEventHandler } from "react";

type ButtonPropsTypes = {
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
};

const Button = (props: ButtonPropsTypes) => {
  const { type = "primary" } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={props.onClick}
        disabled={props.disabled}
        className={`flex w-full justify-center rounded-md px-7 py-2 text-lg font-semibold leading-6 text-white shadow-sm ${
          props.disabled
            ? "bg-gray-300"
            : type === "primary"
            ? "bg-cyan-800 hover:bg-cyan-700"
            : "bg-slate-400"
        }   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
