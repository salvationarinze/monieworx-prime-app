import React from "react";
import Link from "next/link";

function LinkButton({
  href = "/",
  children = "LinkButton",
  className = "",
  onClick = () => {},
  disabled = false,
  fontSize = "text-sm",
  borderColor = "border-[#9add7a]",
  bgColor = "bg-[#9add7a]",
  textColor = "",
  paddingY = "py-3",
  paddingX = "px-6",
  border = false,
  target = "_self",
}) {
  return (
    <Link
      href={href}
      className={`${fontSize} ${bgColor} ${textColor} ${paddingX} ${paddingY} rounded-lg font-semibold ${
        border ? `border-2 ${borderColor}` : ""
      } flex duration-300 justify-center items-center transition ease-in-out hover:bg-opacity-75 active:opacity-60 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      disabled={disabled}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
