import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex justify-center gap-6 text-lg font-semibold">
      <Link href="/">Home</Link>
      <Link href="/home">/home Page</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
