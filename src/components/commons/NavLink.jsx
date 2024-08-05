import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

function NavLink({href = "/", text = "", onClick = () => {}}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm xl:text-base font-medium text-black ${
        router?.pathname === href ? "text-primary" : ""
      } hover:text-primary outline-none`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
