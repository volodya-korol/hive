"use client";

import CategoryItem from "@/components/ui/category-item";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageLoader from "@/components/ui/image-loader";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/ui/loading";

const categories = [
  {
    src: "https://img.freepik.com/free-photo/interior-space-decorated-in-boho-style_23-2150771519.jpg?w=1060&t=st=1715500941~exp=1715501541~hmac=9523d6316e8d44dc4a6048af9baee3de04bc9610deddb0967fd9eb426cec4306",
    title: "Квартири",
    description: "Покупка, Оренда",
    href: "/catalog/all?categories=appartment&types=purchase+rent",
  },
  {
    src: "https://modul-prefab.com/wp-content/uploads/2023/01/frame-big-house-min-1-1024x576.webp",
    title: "Будинки",
    description: "Покупка",
    href: "/catalog/all?categories=building&types=purchase",
  },
  {
    src: "https://if.tax.gov.ua/data/material/000/624/743917/6597c639deec0.jpg",
    title: "Земельні ділянки",
    description: "Покупка, Оренда",
    href: "/catalog/all?categories=land&types=purchase+rent",
  },
  {
    src: "https://s.0362.ua/section/catalogproducts/upload/images/catalog/products/000/004/644/sektsijni-garazhni-vorota_5ddbda923fe00.jpg",
    title: "Гаражні приміщення",
    description: "Покупка, Оренда",
    href: "/catalog/all?categories=garage&types=purchase+rent",
  },
  {
    src: "https://businessinformationguide.com/storage/app/uploads/public/650/432/027/65043202792a3285624867.jpg",
    title: "Офісні приміщення",
    description: "Оренда",
    href: "/catalog/all?categories=office&types=rent",
  },
];
const toBuy = [
  {
    src: "https://modul-prefab.com/wp-content/uploads/2023/01/frame-big-house-min-1-1024x576.webp",
    title: "Будинки",
    description: "Покупка",
    href: "/catalog/all?categories=building&types=purchase",
  },
  {
    src: "https://img.freepik.com/free-photo/interior-space-decorated-in-boho-style_23-2150771519.jpg?w=1060&t=st=1715500941~exp=1715501541~hmac=9523d6316e8d44dc4a6048af9baee3de04bc9610deddb0967fd9eb426cec4306",
    title: "Квартири",
    description: "Покупка",
    href: "/catalog/all?categories=appartment&types=purchase",
  },
  {
    src: "https://s.0362.ua/section/catalogproducts/upload/images/catalog/products/000/004/644/sektsijni-garazhni-vorota_5ddbda923fe00.jpg",
    title: "Гаражні приміщення",
    description: "Покупка",
    href: "/catalog/all?categories=garage&types=purchase",
  },
  {
    src: "https://businessinformationguide.com/storage/app/uploads/public/650/432/027/65043202792a3285624867.jpg",
    title: "Офісні приміщення",
    description: "Покупка",
    href: "/catalog/all?categories=office&types=purchase",
  },
  {
    src: "https://if.tax.gov.ua/data/material/000/624/743917/6597c639deec0.jpg",
    title: "Земельні ділянки",
    description: "Покупка",
    href: "/catalog/all?categories=land&types=purchase",
  },
];
const toRent = [
  {
    src: "https://if.tax.gov.ua/data/material/000/624/743917/6597c639deec0.jpg",
    title: "Земельні ділянки",
    description: "Оренда",
    href: "/catalog/all?categories=land&types=rent",
  },
  {
    src: "https://modul-prefab.com/wp-content/uploads/2023/01/frame-big-house-min-1-1024x576.webp",
    title: "Кімнати",
    description: "Оренда",
    href: "/catalog/all?categories=room&types=rent",
  },
  {
    src: "/218052644.jpg",
    title: "Хостели",
    description: "Оренда",
    href: "/catalog/all?categories=hostel&types=rent",
  },
  {
    src: "https://img.freepik.com/free-photo/interior-space-decorated-in-boho-style_23-2150771519.jpg?w=1060&t=st=1715500941~exp=1715501541~hmac=9523d6316e8d44dc4a6048af9baee3de04bc9610deddb0967fd9eb426cec4306",
    title: "Квартири",
    description: "Оренда",
    href: "/catalog/all?categories=appartment&types=rent",
  },
  {
    src: "https://businessinformationguide.com/storage/app/uploads/public/650/432/027/65043202792a3285624867.jpg",
    title: "Офісні приміщення",
    description: "Оренда",
    href: "/catalog/all?categories=office&types=rent",
  },
  {
    src: "https://modul-prefab.com/wp-content/uploads/2023/01/frame-big-house-min-1-1024x576.webp",
    title: "Будинки",
    description: "Оренда",
    href: "/catalog/all?categories=building&types=rent",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="h-[240px] md:h-[400px]">
        <div className="absolute bg-[url('/218052644.jpg')] h-[240px] md:h-[400px] bg-cover w-full -z-20"></div>
        <div className="absolute bg-blue-900 opacity-80 h-[240px] md:h-[400px] w-full -z-20"></div>
        <div className="absolute w-full h-[240px] md:h-[400px] flex flex-col items-center justify-center -z-10 px-2 backdrop-blur-sm">
          <h1 className="text-4xl md:text-8xl font-semibold text-white text-center tracking-[6px] md:tracking-[10px]">
            HIVE
          </h1>
          <p className="text-white text-md md:text-2xl tracking-[6px] md:tracking-[10px] text-center">
            ОРЕНДА ТА ПРОДАЖ НЕРУХОМОСТІ
          </p>
        </div>
      </div>
      <motion.section
        className="container"
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-semibold text-2xl md:text-4xl text-zinc-600 mt-16 text-center md:text-left">
          Огляньте різні категорії нерухомості
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-8 my-8">
          {categories.map((el, i) => {
            return (
              <motion.li
                key={el.title}
                className="size-60"
                transition={{ duration: 0.15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CategoryItem item={el} />
              </motion.li>
            );
          })}
        </ul>
        <Separator className="bg-zinc-400" />
        {/* <h2 className="font-semibold text-2xl md:text-4xl text-zinc-600 mt-16 text-center md:text-left">
          Бажаєте придбати житло чи орендувати?
        </h2> */}
        <Tabs defaultValue="buy" className="w-full my-6">
          <TabsList className="mb-4 bg-blue-600 text-white w-full md:w-auto">
            <TabsTrigger value="buy" className="w-full">
              Купівля
            </TabsTrigger>
            <TabsTrigger value="rent" className="w-full">
              Оренда
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
              {toBuy.map((el, i) => {
                return (
                  <motion.li
                    key={el.title}
                    className="w-full h-48"
                    transition={{ duration: 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CategoryItem item={el} />
                  </motion.li>
                );
              })}
            </ul>
          </TabsContent>
          <TabsContent value="rent">
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
              {toRent.map((el, i) => {
                return (
                  <motion.li
                    key={el.title}
                    className="w-full h-48"
                    transition={{ duration: 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CategoryItem item={el} />
                  </motion.li>
                );
              })}
            </ul>
          </TabsContent>
        </Tabs>
        <Separator className="bg-zinc-400" />
        {/* <h2 className="font-semibold text-3xl md:text-4xl text-zinc-600 mt-16 text-center md:text-left">
          Популярні пропозиції
        </h2>

        <CarouselMain /> */}
        <h2 className="font-semibold text-2xl md:text-4xl text-zinc-600 mt-24 text-center md:text-left">
          Популярні питання
        </h2>
        <div className="mt-8 mx-auto mb-20">
          <Separator />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Як я можу оголосити свою нерухомість на вашому сайті?
              </AccordionTrigger>
              <AccordionContent>
                Ви можете розмістити своє оголошення про оренду або продаж
                нерухомості, зареєструвавшись на сайті та перейшовши у Ваш
                профіль
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Як я можу знайти нерухомість для оренди або покупки на вашому
                сайті?
              </AccordionTrigger>
              <AccordionContent>
                Використовуйте наш розширений пошук у розділі “Оренда” або
                “Покупка”, де ви можете вказати потрібні параметри, такі як
                місце розташування, тип нерухомості, ціновий діапазон тощо, щоб
                знайти нерухомість, що відповідає вашим потребам.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Чи є у вас можливість перевірити нерухомість перед покупкою або
                орендою?
              </AccordionTrigger>
              <AccordionContent>
                На жаль, ми не здійснюємо безпосередньо перевірку нерухомості.
                Однак, ми рекомендуємо звертатися до фахівців з нерухомості або
                використовувати послуги незалежного експерта з оцінки
                нерухомості для отримання додаткової інформації.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Чи можу я змінити своє оголошення після його публікації?
              </AccordionTrigger>
              <AccordionContent>
                Ні, на жаль, після публікації оголошення зміни в ньому
                неможливі. Однак, якщо у вас з{`'`}явилися нові дані або
                потреби, ви можете зняти це оголошення та опублікувати нове,
                враховуючи оновлену інформацію.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.section>
      <div className="bg-[url('/218052644.jpg')] h-[550px] bg-fixed bg-cover backdrop-blur-md w-full">
        <div className="backdrop-blur w-full h-[550px] bg-black/20 flex flex-col items-center justify-center">
          <AuthDiv />
        </div>
      </div>
    </main>
  );
}

const AuthDiv = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <div className="h-[220px] w-[400px] bg-white rounded-lg p-8 flex flex-col items-center">
        <Image src="/logo.svg" width={80} height={80} alt="logo" />
        <h2 className="mb-8 mt-4 text-lg text-center">
          Ласкаво просимо, {session.data.user?.name}!
        </h2>
      </div>
    );
  }

  if (session.status === "loading") {
    return (
      <div className="h-[200px] w-[400px] bg-white rounded-lg p-8 flex flex-col items-center">
        <Image src="/logo.svg" width={80} height={80} alt="logo" />
        <h2 className="mb-8 mt-4 text-lg text-center">
          <Loading />
        </h2>
      </div>
    );
  }

  return (
    <div className="h-[400px] w-[400px] bg-white rounded-lg p-8 flex flex-col items-center">
      <Image src="/logo.svg" width={80} height={80} alt="logo" />
      <h2 className="mb-8 mt-4 text-lg text-center">
        Увійдіть щоб розмістити оголошення
      </h2>
      <Link href="/auth/signin" className="w-full my-2 h-12">
        <Button type="button" className="w-full h-12">
          Увійти
        </Button>
      </Link>
      <div className="flex w-full justify-evenly items-center my-1">
        <Separator className="w-2/5 bg-zinc-300" />
        <span className="">або</span>
        <Separator className="w-2/5 bg-zinc-300" />
      </div>
      <Button
        type="button"
        className="w-full my-2 h-12"
        variant="outline"
        onClick={() => signIn("google")}
      >
        <Image
          src="/free-google-160-189824.webp"
          width={20}
          height={20}
          alt="google"
          className="mr-2"
        />
        <span>Продовжити з Google</span>
      </Button>
    </div>
  );
};
