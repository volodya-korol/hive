"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading";
import { Input } from "@/components/ui/input";
import { getFilterName } from "@/app/catalog/[...filters]/filters";

const EstatePage = ({ params }: { params: { id: string } }) => {
  const [estate, setEstate] = useState<any>({});

  const getEstate = async () => {
    const res = await fetch("/api/singleEstate?id=" + params.id);
    const data = await res.json();
    setEstate(data);
  };

  useEffect(() => {
    getEstate();
  }, []);

  return (
    <section className="min-h-[500px] bg-[url('/218052644.jpg')] bg-cover w-full relative">
      <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center py-12 px-2 md:px-12">
        <div className="container flex flex-col lg:flex-row justify-between lg:space-x-4">
          {Object.keys(estate).length === 0 ? (
            <Loading />
          ) : (
            <View estate={estate} />
          )}
        </div>
      </div>
    </section>
  );
};

const View = ({
  estate,
}: {
  estate: {
    id: string;
    title: string;
    src: string;
    price: number;
    type: string;
    category: string;
    goal: string;
    author: string;
    size: string;
    description: string;
    userEmail: string;
  };
}) => {
  const [showAuthor, setShowAuthor] = useState(false);

  return (
    <>
      <div className="lg:w-3/5 space-y-4">
        <div className="w-full rounded-lg bg-white p-4">
          <div className="bg-gray-100 w-full relative">
            <Image
              width={1000}
              height={1000}
              layout="responsive"
              src={estate.src}
              alt={estate.title}
            />
          </div>
          <Separator className="my-4" />
          <li className="w-full flex flex-col space-y-4">
            <ul>
              <div className="w-full flex justify-between">
                <Label>Тип</Label>
                <Label>{getFilterName(estate.type)}</Label>
              </div>
              <Separator className="mt-2" />
            </ul>
            <ul>
              <div className="w-full flex justify-between">
                <Label>Категорія</Label>
                <Label>{getFilterName(estate.category)}</Label>
              </div>
              <Separator className="mt-2" />
            </ul>
            <ul>
              <div className="w-full flex justify-between">
                <Label>Цілі</Label>
                <Label>{getFilterName(estate.goal)}</Label>
              </div>
              <Separator className="mt-2" />
            </ul>
            <ul>
              <div className="w-full flex justify-between">
                <Label>Автор</Label>
                <Label>{getFilterName(estate.author)}</Label>
              </div>
              <Separator className="mt-2" />
            </ul>
            <ul>
              <div className="w-full flex justify-between">
                <Label>Розмір</Label>
                <Label>{getFilterName(estate.size)}</Label>
              </div>
              <Separator className="mt-2" />
            </ul>
          </li>
        </div>
        <div className="w-full rounded-lg bg-white px-4 py-6 font-semibold">
          <h3 className=" mb-2 font-semibold">Опис</h3>
          <p className="text-sm font-normal">{estate.description}</p>
        </div>
      </div>
      <div className="lg:w-2/5 space-y-4 mt-4 lg:mt-0">
        <div className="w-full rounded-lg bg-white p-4">
          <h3 className="font-semibold text-2xl">{estate.title}</h3>
          <Label>{getFilterName(estate.author)} розмістив це оголошення</Label>
          <div className="flex flex-col space-y-2 p-4 rounded-lg border border-zinc-300 drop-shadow-sm bg-white mt-4">
            <h3 className="font-semibold text-4xl mb-2">
              {estate.type === "rent"
                ? `$${estate.price}/місяць`
                : `$${estate.price}`}
            </h3>
            {showAuthor ? (
              <Input
                readOnly
                value={estate.userEmail}
                className="h-14 text-lg"
              />
            ) : (
              <Button className="h-14" onClick={() => setShowAuthor(true)}>
                Показати контакти
              </Button>
            )}
            {/* <Button className="h-14" variant="outline">
              Залишити контакти
            </Button> */}
          </div>
        </div>
        <div className="w-full rounded-lg bg-white p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Як зв{`'`}язатися із автором?</AccordionTrigger>
              <AccordionContent>
                На сторінці в окремий блок винесені кнопки, які дають можливість
                подзвонити автору оголошення або лишити йому свої контакти, щоб
                він самостійно з вами зв{`'`}язався.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Як мені оплатити житло?</AccordionTrigger>
              <AccordionContent>
                Наш сервіс допомагає людям легко знайти житло або іншу
                нерухомість для своїх потреб, але не виступає у якості гаранта
                або платіжного посередника. Уся взаємодія між автором оголошення
                і Вами повинна відбуватися відповідно до закону.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Де знаходиться ця нерухомість?
              </AccordionTrigger>
              <AccordionContent>
                У окремий блок винесені усі характеристики, що стосуються об
                {`'`}єкту з оголошення. Там можна ознайомитись із локацією та
                іншими не менш важливими характеристиками, які можуть вас
                зацікавити під час вибору житла або іншої нерухомості.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default EstatePage;
