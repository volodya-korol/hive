"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contacts = () => {
  return (
    <section className="min-h-[500px] bg-[url('/218052644.jpg')] bg-cover w-full relative">
      <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center py-12 px-2 md:px-12">
        <motion.div
          className="container min-h-[500px] bg-white px-4 md:px-8 bg-cover rounded-lg flex flex-col lg:flex-row justify-between drop-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 mt-8 py-8 lg:py-0 lg:mb-8 bg-gradient-to-b lg:bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-t-lg lg:rounded-r-none lg:rounded-l-lg flex flex-col ">
            <div className="lg:mt-20 w-56 md:w-80 ">
              <p className="text-sm md:text-lg">Маєте питання? </p>
              <h1 className="font-semibold text-2xl md:text-3xl ">
                Зв{`'`}яжіться з нами!
              </h1>
            </div>
            <Image
              src="/dancing-script-underline-white.png"
              width={175}
              height={80}
              alt="underline"
              className="size-28 -mt-10 md:size-44 md:-mt-14 lg:mb-20"
            />
            <ul className="flex flex-col space-y-2 underline underline-offset-2 w-full text-sm md:text-md break-all">
              <li className="hover:translate-x-4 transitions duration-200">
                <a
                  href="https://maps.app.goo.gl/SNmHTePQs11WoUVEA"
                  className="flex"
                  target="_blank"
                >
                  <span className="w-full flex">
                    <MapPin className="mr-2 " /> Ivano-Frankivsk, Ukraine
                  </span>
                </a>
              </li>
              {/* <li className="hover:translate-x-4 transitions duration-200">
                <a href="tel:+1234567890" className="flex" target="_blank">
                  <Phone className="mr-2 " />
                  <span className="w-full flex">+12 (345) 67 890</span>
                </a>
              </li> */}
              <li className="hover:translate-x-4 transitions duration-200">
                <a
                  href="mailto:volodymyr.v.korol@ukd.edu.ua"
                  className="flex"
                  target="_blank"
                >
                  <Mail className="mr-2 " />
                  <span className="w-full flex">
                    volodymyr.v.korol@ukd.edu.ua
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8819.918986357712!2d24.705865781101366!3d48.912008412992975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c34b0381d%3A0xd6d32394e59e41c2!2sIvano-Frankivsk%2C%20Ivano-Frankivsk%20Oblast%2C%2076000!5e0!3m2!1sen!2sua!4v1715555335546!5m2!1sen!2sua"
            loading="lazy"
            className="mb-8 lg:mt-8 rounded-b-lg lg:rounded-r-lg lg:rounded-l-none border border-4 border-blue-400 w-full lg:w-1/2 h-[300px] lg:h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
