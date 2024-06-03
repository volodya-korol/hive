"use client";

import CarouselAbout from "@/components/ui/carousel-about";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="min-h-[500px] md:bg-[url('/218052644.jpg')] bg-cover w-full relative">
      <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center">
        <div className="container min-h-[500px] bg-white bg-cover flex flex-col px-0 relative">
          <div className="bg-[url('/218052644.jpg')] w-full h-60 md:h-96 bg-cover "></div>
          <h1 className="bg-blue-00 backdrop-blur-md bg-opacity-70 w-full text-white h-60 md:h-96 font-bold text-center text-4xl md:text-6xl py-8 absolute flex justify-center items-center">
            Про нас
          </h1>
          <div className="w-full my-10 text-center px-10 lg:px-36 py-10 lg:py-20 ">
            <h2 className="font-semibold text-xl lg:text-4xl my-6 ">
              Hive — це не просто платформа для оренди та продажу нерухомості.
            </h2>
            <p className="text-md lg:text-xl leading-8">
              Ми є вашим надійним партнером у всіх питаннях, пов{`'`}язаних з
              нерухомістю. Наша місія - забезпечити клієнтам максимально зручний
              і надійний доступ до нерухомості, надаючи широкий вибір варіантів,
              персоналізований підхід та професійний сервіс.
            </p>
          </div>
          <div className="relative z-10 border-y border-gray-200">
            <div className="md:bg-[url('/218052644.jpg')] absolute md:w-[646px] bg-cover h-[100px] md:h-[600px] -z-10 md:right-0"></div>
            <div className="md:h-[600px] pl-8 pr-8 md:pr-0 md:pl-20 w-full bg-gradient-to-r from-gray-100 via-60% via-gray-100 to-transparent z-10">
              <h2 className="text-center md:text-left font-semibold text-xl lg:text-4xl pt-16 lg:pt-24 pb-10 md:pb-16">
                Наша історія
              </h2>
              <p className="text-center md:text-left text-md lg:text-xl w-full md:w-1/2 leading-8 mb-10">
                Від скромних початків до нашого поточного становища лідера на
                ринку нерухомості, історія Hive відображає наш великий шлях до
                успіху. Ми розпочали свій шлях як молода стартапова компанія з
                метою революціонізувати спосіб, яким люди шукають, купують та
                орендують нерухомість.
              </p>
              <p className="text-center md:text-left text-md lg:text-xl w-full md:w-1/2 leading-8 pb-20 md:pb-0">
                Завдяки нашій відданості, наполегливості та невтомній праці, ми
                досягли величезних успіхів і завоювали довіру тисяч клієнтів по
                всьому світу.
              </p>
            </div>
          </div>
          <div className="relative z-10 border-y border-gray-200">
            <div className="md:bg-[url('/218052644.jpg')] absolute md:w-[646px] bg-cover h-[100px] md:h-[600px] -z-10 md:left-0"></div>
            <div className="md:h-[600px] pl-8 pr-8 md:pr-0 md:pl-20 w-full bg-gradient-to-l from-gray-100 via-60% via-gray-100 to-transparent z-10 flex flex-col items-end md:pr-16">
              <h2 className="text-center md:text-right font-semibold text-xl lg:text-4xl pt-16 lg:pt-24 pb-10 md:pb-16">
                Наші цінності
              </h2>
              <p className="text-center md:text-right text-md lg:text-xl w-full md:w-1/2 leading-8 mb-10">
                У Hive ми керуємось принципами чесності, прозорості та
                відповідальності перед нашими клієнтами. Ми прагнемо досягти
                високих стандартів обслуговування та забезпечити кожного клієнта
                індивідуальним підходом.
              </p>
            </div>
          </div>
          <div className="md:hidden w-full bg-[url('/218052644.jpg')] h-[400px] bg-cover"></div>
          <div className="hidden lg:block bg-gradient-to-b from-blue-400 to-blue-600 w-full lg:h-[760px] flex relative">
            <div className="bg-gradient-to-t from-blue-600 to-blue-400 text-white lg:from-white lg:to-white lg:text-black lg:bg-white md:w-[600px] lg:w-[800px] md:h-[560px] lg:h-[600px] text-center px-8 md:px-16 lg:shadow-md self-center mx-auto md:rounded-lg">
              <h2 className="my-10 font-semibold text-xl lg:text-2xl lg:pt-20">
                Наші досягнення
              </h2>
              <p className="md:leading-8 text-md lg:text-xl mb-10">
                У Hive ми пишемо свою історію успіху крок за кроком, керуючись
                принципами інновацій, надійності та відданості нашим клієнтам.
                Протягом років нашого існування ми досягли низку значущих
                досягнень, які відобразилися нашими успіхами у галузі
                нерухомості.
              </p>
              <p className="md:leading-8 text-md lg:text-xl mb-10">
                Від великих розширень нашої платформи до впровадження
                інноваційних технологій та визнання нашої експертності — кожне
                досягнення підкріплює нашу репутацію як провідного учасника на
                ринку нерухомості.
              </p>
              {/* <p className="md:leading-8 text-md lg:text-xl mb-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, impedit.
              </p> */}
            </div>
          </div>
          <div className="w-full p-10 border border-b border-gray-300">
            <CarouselAbout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
