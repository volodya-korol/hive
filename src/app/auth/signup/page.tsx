"use client";

import { signIn } from "next-auth/react";

import {
  FormField,
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FormSchema = z.object({
  firstName: z.string().min(3, {
    message: "Ім'я має містити хоча б 3 символи.",
  }),
  lastName: z.string().min(3, {
    message: "Прізвище має містити хоча б 3 символи.",
  }),
  email: z.string().min(1, {
    message: "Вкажіть свій діючий e-mail",
  }),
  password: z.string().min(4, {
    message: "Назва має містити хоча б 4 символи.",
  }),
});

const SignUp = () => {
  const {
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = async (req: object) => {
    const data = { ...req };
    console.log(data);
    toast.info("Реєструємо...");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
      toast.success("Акаунт створено.");
    } catch (error) {
      toast.warning("Акаунт з такою поштою вже зареєстровано.");
    }
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <section className="min-h-[500px] bg-[url('/218052644.jpg')] bg-cover w-full relative">
      <div className="w-full min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center p-12">
        <motion.div
          className="min-h-[436px] w-[800px] bg-[url('/Crop600x400.jpg')] bg-cover rounded-lg flex items-center justify-start drop-shadow"
          initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-h-[436px] w-[400px] bg-white rounded-lg md:rounded-r-none p-8 flex flex-col items-center space-y-4"
            >
              <h2 className="text-left w-full text-2xl font-semibold">
                Реєстрація
              </h2>
              <div className="flex space-x-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Ім'я"
                          {...field}
                          className="h-10 drop-shadow"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Прізвище"
                          {...field}
                          className="h-10 drop-shadow"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Email-адреса"
                        {...field}
                        className="h-10 drop-shadow"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Пароль"
                        {...field}
                        className="h-10 drop-shadow"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full drop-shadow">
                Зареєструватись
              </Button>
              <div className="flex w-full justify-evenly items-center">
                <Separator className="w-2/5 bg-zinc-300 h-[0.25px]" />
                <span className="">або</span>
                <Separator className="w-2/5 bg-zinc-300 h-[0.25px]" />
              </div>
              <Button
                type="button"
                className="w-full drop-shadow"
                variant="outline"
                onClick={() => signIn("google", { callbackUrl: "/" })}
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
              <p className="flex h-10 text-sm">
                Вже маєте акаунт?
                <Link href="/auth/signin" className="h-4">
                  <Button variant="link" className="p-0 h-4 ml-1 text-sm">
                    Увійти
                  </Button>
                </Link>
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUp;
