import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NextNavBar({ header }: { header: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
        position="static"
        className="border-b-[#C54108] border-b-1"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
    >

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">DevPassionate</p>
        </NavbarBrand>
      </NavbarContent>

        <NavbarBrand className="hidden sm:flex pr-3">
          <p className="font-bold text-[#C54108] text-lg">DevPassionate</p>
        </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about" className="hover:text-[#C54108] text-lg">
            ABOUT ME
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#skills" color="foreground" aria-current="page" className="hover:text-[#C54108] text-lg">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#portfolio" className="hover:text-[#C54108] text-lg">
            PORTFOLIO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-[#C54108] text-lg">
            BLOG
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" className="bg-[#C54108] text-white" href="#" variant="flat">
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="/about" size="lg">
              ABOUT ME
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#" size="lg">
              SKILLS
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="/proyects" size="lg">
              PORTFOLIO
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#" size="lg">
              BLOG
            </Link>
        </NavbarMenuItem>
      </NavbarMenu>

    </Navbar>
  );
}