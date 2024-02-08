import { ReactNode } from "react";

type CardPropsTypes = {
  children: ReactNode;
  className?: any;
  disabled?: boolean;
};

const Card = (props: CardPropsTypes) => {
  const { disabled, className } = props;

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const cardClassName = classNames(
    disabled
      ? "opacity-30"
      : `bg-gray-200 cursor-pointer ${className} hover:ring-4 hover:ring-cyan-800 opacity-50 hover:opacity-75`,
    "flex flex-col rounded-lg"
  );

  return <div className={cardClassName}>{props.children}</div>;
};

export default Card;
