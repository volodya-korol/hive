"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { Label } from "@/components/ui/label";
import Card from "../catalog/[...filters]/card";

import { InfoIcon, SquarePlus } from "lucide-react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FormField,
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@/components/ui/scroll-area";

import { types } from "../catalog/[...filters]/filters";
import { goal } from "../catalog/[...filters]/filters";
import { author } from "../catalog/[...filters]/filters";
import { categories } from "../catalog/[...filters]/filters";
import { sizes } from "../catalog/[...filters]/filters";
import Loading from "@/components/ui/loading";
import ImageLoader from "@/components/ui/image-loader";

const Profile = () => {
  const [estates, setEstates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const session = useSession();

  const getEstates = async () => {
    if (session.data?.user?.email) {
      setLoading(true);
      const res = await fetch("/api/estate?email=" + session.data.user.email);
      const data = await res.json();
      console.log(data);
      setEstates(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEstates();
  }, []);

  const avatar = session.data?.user?.image ? (
    <Avatar className="size-16 rounded-full">
      <AvatarImage src={session.data.user.image} className="rounded-full" />
      <AvatarFallback>
        {session.data.user.name!.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  ) : (
    <Image
      src="/Default_pfp.svg.png"
      width={100}
      height={100}
      className="size-16"
      alt="user"
    />
  );

  if (session.status === "authenticated" && session.data?.user)
    return (
      <section className="min-h-[500px] bg-[url('/218052644.jpg')] bg-cover w-full relative">
        <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center py-12 ">
          <motion.div
            className="container pb-8 bg-white bg-cover rounded-lg flex flex-col max-w-[1000px] drop-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full flex flex-col text-center justify-center items-center py-6">
              {avatar}
              <h2 className="mb-4 mt-4 text-lg text-center">
                {session.data.user.name}
              </h2>
              <Separator className="h-[0.5px] bg-zinc-300 w-full" />
            </div>
            <div className=" flex flex-col lg:flex-row">
              <ul className="border-b pb-4 lg:pb-0 mb-4 lg:mb-0 lg:border-b-0 lg:border-r lg:pr-8">
                <li className="">
                  <Label className="text-[12px] text-zinc-400">Ім{`'`}я</Label>
                  <p className="">{session.data.user.name}</p>
                </li>

                <li className="mb-2">
                  <Label className="text-[12px] text-zinc-400">Email</Label>
                  <p className="">{session.data.user.email}</p>
                </li>
                {/* <li className="">
                  <Label className="text-[12px] text-zinc-400">Телефон</Label>
                  <p className="">+123-456-78-90</p>
                </li> */}
              </ul>

              <div className="w-full">
                <h2 className="mx-auto text-center w-full flex items-center justify-center">
                  Ваші оголошення{" "}
                  <NewAdvertisement
                    getEstates={getEstates}
                    modal={modal}
                    setModal={setModal}
                  />
                </h2>
                <li className="flex w-full justify-evenly flex-wrap p-4 gap-4">
                  {loading ? (
                    <Loading />
                  ) : estates.length === 0 ? (
                    <h2>Поки що у Вас немає оголошень...</h2>
                  ) : (
                    estates.map((el) => {
                      return (
                        <ul className="w-64" key={el.id}>
                          <Card item={el} />
                        </ul>
                      );
                    })
                  )}
                </li>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );

  return (
    <section className="min-h-[500px] bg-[url('/218052644.jpg')] bg-cover w-full relative">
      <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center py-12 ">
        <Loading />
      </div>
    </section>
  );
};

const NewAdvertisement = ({
  getEstates,
  modal,
  setModal,
}: {
  getEstates: Function;
  modal: boolean;
  setModal: Function;
}) => {
  return (
    <Dialog open={modal}>
      <DialogTrigger asChild className="mt-2 relative size-12">
        <SquarePlus
          className="size-5 hover:text-gray-500 transition duration-200 cursor-pointer mb-2 ml-1"
          onClick={() => setModal(true)}
        />
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Нове оголошення
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="size-4 text-gray-700" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Вкажіть деталі вашого оголошення і натисніть кнопку
                    {'"Створити"'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogTitle>
        </DialogHeader>
        <NewAdvertisementForm
          getEstates={getEstates}
          modal={modal}
          setModal={setModal}
        />
      </DialogContent>
    </Dialog>
  );
};

const FormSchema = z.object({
  title: z.string().min(8, {
    message: "Назва має містити хоча б 8 символів.",
  }),
  description: z.string().min(1, {
    message: "Вкажіть опис.",
  }),
  price: z.number().min(1, {
    message: "Вкажіть ціну.",
  }),
  type: z.string().min(2, {
    message: "Оберіть тип.",
  }),
  category: z.string().min(2, {
    message: "Оберіть категорію.",
  }),
  goal: z.string().min(2, {
    message: "Оберіть ціль.",
  }),
  author: z.string().min(2, {
    message: "Оберіть вашу роль.",
  }),
  size: z.string().min(2, {
    message: "Оберіть розмір.",
  }),
});

const NewAdvertisementForm = ({
  getEstates,
  modal,
  setModal,
}: {
  getEstates: Function;
  modal: boolean;
  setModal: Function;
}) => {
  const [image, setImage] = useState(null);
  const session = useSession();

  const {
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (req: object) => {
    if (!image) {
      toast.warning("Додайте зображення");
      return;
    }
    const data = { ...req, src: image, userEmail: session.data?.user?.email };
    toast.info("Створюємо...");
    try {
      const res = await fetch("/api/singleEstate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
      toast.success("Оголошення створено.");
      setModal(false);
      getEstates();
    } catch (error) {
      toast.warning("Не вдалось створити оголошення.");
    }
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "",
      price: "",
      category: "",
      goal: "",
      author: "",
      size: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-6 w-full"
      >
        <ScrollArea className="h-[500px] px-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Назва</FormLabel>
                <FormControl>
                  <Input placeholder="Вілла з видом на море" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full">
            <Label>Зображення</Label>
            {image ? (
              <Image
                width={100}
                height={100}
                layout="responsive"
                src={image}
                alt={image}
              />
            ) : (
              <ImageLoader setData={setImage} />
            )}
          </div>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Ціна (ціна/місяць для оренди), $</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="2000"
                    min={1}
                    max={9999999}
                    {...field}
                    onChange={(e) => {
                      const numericValue = parseInt(e.target.value);
                      field.onChange(numericValue);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Тип</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Оберіть тип</SelectLabel>
                      {types.map((el) => {
                        return (
                          <SelectItem key={el.id} value={el.id}>
                            {el.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Категорія</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Категорія" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Оберіть категорію</SelectLabel>
                      {categories.map((el) => {
                        return (
                          <SelectItem key={el.id} value={el.id}>
                            {el.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Ціль</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ціль" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Оберіть ціль</SelectLabel>
                      {goal.map((el) => {
                        return (
                          <SelectItem key={el.id} value={el.id}>
                            {el.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Ваша роль</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ваша роль" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Оберіть вашу роль</SelectLabel>
                      {author.map((el) => {
                        return (
                          <SelectItem key={el.id} value={el.id}>
                            {el.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Розмір</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Розмір" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Оберіть розмір</SelectLabel>
                      {sizes.map((el) => {
                        return (
                          <SelectItem key={el.id} value={el.id}>
                            {el.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mx-1 mb-4">
                <FormLabel>Опис</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Найкращий вид на море у всьому місті!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </ScrollArea>
        <div className="flex justify-between">
          <Button
            type="submit"
            className="flex justify-center"
            disabled={image ? false : true}
          >
            <p className="">{image ? "Створити" : "Завантажте зображення"}</p>
          </Button>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              onClick={() => setModal(false)}
            >
              Закрити
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};

export default Profile;
