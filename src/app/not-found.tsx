"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-[360px] bg-[url('/218052644.jpg')] bg-cover w-full -z-50">
      <div className="w-flil min-h-[360px] bg-black/20 backdrop-blur flex items-center justify-center p-12 -z-50">
        <motion.div
          className="w-[300px] min-h-[360px] bg-white px-8 bg-cover rounded-lg flex flex-col drop-shadow items-center py-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={80}
            height={80}
            alt="error"
            src="/Wrong-PNG-Photos.png"
          />
          <h1 className="text-2xl font-semibold my-4">Йой!</h1>
          <p className="text-center">Сторінка, яку ви шукали, не знайдена...</p>
          <Link href="/">
            <Button
              type="button"
              variant="link"
              className="p-0 h-4 mt-8 text-lg hover:scale-[110%]"
            >
              На головну
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
