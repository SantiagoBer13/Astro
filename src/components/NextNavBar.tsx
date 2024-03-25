import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NextNavBar({ header }: { header: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      position="static"
      className="border-b-[#C54108] border-b-1"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">DevPassionate</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex pr-3">
        <p className="font-bold text-[#C54108] lg:text-lg text-sm">DevPassionate</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            className="hover:text-[#C54108] lg:text-lg text-sm"
          >
            SOBRE MI
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#skills"
            color="foreground"
            aria-current="page"
            className="hover:text-[#C54108] lg:text-lg text-sm"
          >
            HABILIDADES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#portfolio"
            className="hover:text-[#C54108] lg:text-lg text-sm"
          >
            PORTFOLIO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="hover:text-[#C54108] lg:text-lg text-sm"
          >
            BLOG
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            className="bg-[#C54108] text-white lg:text-lg text-sm"
            href="#"
            variant="flat"
          >
            <a
              href="https://online.pubhtml5.com/uywum/xoec/"
              download="curriculum.pdf"
              target="_blank"
            >
              Currículum Vitae
            </a>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/about" size="lg">
            SOBRE MI
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#" size="lg">
            HABILIDADES
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            href="/proyects"
            size="lg"
          >
            PORTFOLIO
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#" size="lg">
            BLOG
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            target="_blank"
            href="https://github.com/SantiagoBer13"
            size="lg"
          >
            GIT HUB
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            target="_blank"
            href="https://www.linkedin.com/in/santiago-bernal-tinjaca/"
            size="lg"
          >
            LINKEDIN
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            target="_blank"
            href="https://www.instagram.com/devpassionate/"
            size="lg"
          >
            INSTAGRAM
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
