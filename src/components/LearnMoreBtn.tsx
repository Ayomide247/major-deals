import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const LearnMoreBtn = ({ children, className = "", onClick }: Props) => {
  return (
    <Link
      to="/about"
      onClick={onClick}
      className={`bg-primary py-3 px-5 md:py-5 md:px-10 font-bold text-secondary hover:bg-pure transition duration-500 ease-linear ${className}`}
    >
      {children || "LEARN MORE..."}
    </Link>
  );
};

export default LearnMoreBtn;
