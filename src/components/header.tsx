"use client";

import { useState } from "react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import Hamburger from "@/components/hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 py-3 z-10 bg-neutral-950/30 border-b-1 border-neutral-700/50 backdrop-blur-md">
      <Container className="">
        <div className="w-full flex flex-wrap flex-col md:flex-row items-start md:items-center justify-between md:gap-4">
          <Logo />
          <Nav isOpen={isOpen} />
        </div>
        <Hamburger className="md:hidden" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Container>
    </header>
  );
};

export default Header;
