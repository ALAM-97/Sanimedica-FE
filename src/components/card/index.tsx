import { MouseEventHandler, ReactNode } from "react";

type CardPropsTypes = {
  children: ReactNode;
  className?: any;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Card = (props: CardPropsTypes) => {
  const { disabled, className } = props;

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const cardClassName = classNames(
    disabled
      ? "opacity-30"
      : `bg-gray-200 cursor-pointer ${className} hover:ring-4 hover:ring-cyan-800`,
    "flex flex-col rounded-lg px-10 py-5 "
  );

  return <div className={cardClassName}>{props.children}</div>;
};

export default Card;
