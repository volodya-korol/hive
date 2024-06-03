"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import Link from "next/link";

const navItems = [
  {
    trigger: "Оренда",
    description: "Показати всю доступну для оренди нерухомість",
    items: [
      { label: "Квартири", href: "&categories=appartment" },
      { label: "Офісні приміщення", href: "&categories=office" },
      { label: "Гаражні приміщення", href: "&categories=garage" },
    ],
    href: "/catalog/all?types=rent",
  },
  {
    trigger: "Покупка",
    description: "Показати всю доступну для покупки нерухомість",
    items: [
      { label: "Будинки", href: "&categories=house" },
      { label: "Земельні ділянки", href: "&categories=land" },
      { label: "Квартири", href: "&categories=appartment" },
    ],
    href: "/catalog/all?types=purchase",
  },
];

const HeaderNav = ({ orientation }: { orientation: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={
          orientation === "vertical"
            ? "flex flex-col w-full text-black"
            : "text-black"
        }
      >
        {navItems.map((el) => {
          return <NavItem key={el.trigger} {...el} />;
        })}
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Про нас
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contacts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Контакти
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavItem = ({
  trigger,
  description,
  items,
  href,
}: {
  trigger: string;
  description: string;
  items: { label: string; href: string }[];
  href: string;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-50">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <Link
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href={href}
              >
                <div className="mb-2 text-lg font-medium">{trigger}</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {description}
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
          {items.map((item: { label: string; href: string }) => {
            return (
              <li key={item.label}>
                <NavigationMenuLink asChild>
                  <Link href={href + item.href} className="text-[14px]">
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default HeaderNav;
