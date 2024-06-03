"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import HeaderNav from "./ui/header-nav";
import { Menu, User2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FooterLinks } from "./Footer";
import { Separator } from "@radix-ui/react-separator";
import { useSession } from "next-auth/react";
import { DropdownMenuAccountHeader } from "./ui/dropdown-account-header";

const burgerLinks = [
  {
    label: "Оренда",
    href: "/catalog/all?types=rent",
  },
  {
    label: "Купівля",
    href: "/catalog/all?types=purchase",
  },
  {
    label: "Продаж",
    href: "/catalog/all?types=purchase",
  },
  {
    label: "Про нас",
    href: "/about",
  },
  {
    label: "Контакти",
    href: "/contacts",
  },
  {
    label: "Мої оголошення",
    href: "/",
  },
];

const Header = () => {
  const session = useSession();

  const headerLinks =
    session.status === "authenticated" ? (
      <div className="flex items-center space-x-4">
        <DropdownMenuAccountHeader
          image={session.data.user?.image!}
          name={session.data.user?.name!}
        />

        <div className="md:hidden size-6">
          <BurgerMenu />
        </div>
      </div>
    ) : (
      <div className="flex items-center space-x-4">
        <div className="flex hidden lg:block items-center">
          <Link href="/auth/signin">
            <Button variant="ghost">Увійти</Button>
          </Link>
          /
          <Link href="/auth/signup">
            <Button variant="ghost">Зареєструватись</Button>
          </Link>
        </div>
        <Link href="/auth/signin" className="lg:hidden">
          <Button size="icon" variant="ghost">
            <User2 className="size-6" />
          </Button>
        </Link>
        <div className="md:hidden size-6">
          <BurgerMenu />
        </div>
      </div>
    );

  return (
    <header className="h-24 bg-white w-full drop-shadow text-black z-50 relative">
      <div className="container flex items-center h-full w-full justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              alt="logo"
              className="rounded-full mr-6 hover:cursor-pointer hover:opacity-80 duration-200"
            />
          </Link>
          <div className="hidden md:block">
            <HeaderNav orientation="horizontal" />
          </div>
        </div>
        {headerLinks}
      </div>
    </header>
  );
};
const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="flex flex-col items-center">
          <SheetTitle>Hive</SheetTitle>
          <SheetDescription>Веб-сайт з пошуку нерухомості</SheetDescription>
          <Separator className="bg-zinc-300 h-[0.5px] w-1/3" />
          <ul className="flex flex-col items-center justify-center">
            {burgerLinks.map((link) => {
              return (
                <li key={link.label}>
                  <SheetClose asChild>
                    <Link href={link.href}>
                      <Button variant="ghost">{link.label}</Button>
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </SheetHeader>
        <div className="mt-4">
          <FooterLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
