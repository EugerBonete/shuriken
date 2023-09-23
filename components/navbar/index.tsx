"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { UserCircle2, Bookmark, Search, Crown } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { Button } from "../ui/button";
import Logo from "../logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <div className="flex items-center gap-0.5 md:gap-2">
            <Tooltip
              showArrow={true}
              content={
                <div className="px-1 py-2">
                  <div className="flex items-center gap-2 font-semibold uppercase justify-center">
                    <Crown /> 14-day free trial
                  </div>
                  <p className="w-[300px] text-tiny">
                    Premium access includes unlimited anime, no ads, and new
                    episodes shortly after they air in Japan. Try it now!
                  </p>
                </div>
              }
            >
              <Button>
                <Crown className="h-4 w-4 mr-1" />
                Premium
              </Button>
            </Tooltip>

            <Button color="primary" size="icon" variant="ghost">
              <Search />
            </Button>
            <Button color="primary" size="icon" variant="ghost" className="">
              <Bookmark />
            </Button>

            <Dropdown
              size="lg"
              className="h-screen p-2 flex items-start justify-start rounded-none"
            >
              <DropdownTrigger>
                <Button size="icon" variant="ghost">
                  <UserCircle2 />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                className="p-0"
              >
                <DropdownItem
                  key="new"
                  description="Join for free or go Premium."
                  className="py-4 rounded-none"
                >
                  Create Account
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Already joined Crunchycool? Welcome back."
                  className="py-4 rounded-none"
                >
                  Log In
                </DropdownItem>
                <DropdownItem
                  key="new"
                  className="py-4 rounded-none bg-yellow-400"
                >
                  <div className="flex items-center gap-2 font-semibold uppercase justify-center">
                    <Crown /> 14-day free trial
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}