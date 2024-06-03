"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { Checkbox } from "@/components/ui/checkbox";

import PriceSlider from "@/components/ui/price-slider";
import { useFilters } from "@/app/catalog/[...filters]/filters";

import {
  types,
  categories,
  goal,
  author,
  sizes,
} from "@/app/catalog/[...filters]/filters";

export const FiltersMobile = ({ refresh }: { refresh: () => void }) => {
  const { addSearchParameter, removeSearchParameter, isChecked } = useFilters({
    refresh,
  });

  return (
    <Drawer snapPoints={[1]}>
      <DrawerTrigger asChild>
        <div className="w-full pt-4  flex justify-center">
          <Button className="drop-shadow-md">Керувати фільтрами</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b">
          <DrawerTitle>Фільтри</DrawerTitle>
          <DrawerDescription>
            Налаштуйте фільтри під ваші потреби та підтвердіть вибір внизу
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full ">
          <ScrollArea className="w-full px-4 pl-6 h-[70vh]">
            <h3 className="mb-2 mt-4">Тип</h3>
            <div className="flex flex-col space-y-2 mb-4">
              {types.map((el) => {
                return (
                  <div key={el.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={el.id}
                      checked={isChecked("types", el.id)}
                      onCheckedChange={(value) =>
                        value
                          ? addSearchParameter("types", el.id)
                          : removeSearchParameter("types", el.id)
                      }
                    />
                    <label
                      htmlFor={el.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {el.label}
                    </label>
                  </div>
                );
              })}
            </div>
            <Separator className="h-[0.25px] bg-zinc-300 my-2" />
            <PriceSlider addSearchParameter={addSearchParameter} />
            <Separator className="h-[0.25px] bg-zinc-300 my-6" />
            <div className="flex flex-col space-y-2">
              <h3 className="mb-2">Категорія</h3>
              {categories.map((el) => {
                return (
                  <div key={el.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={el.id}
                      checked={isChecked("caegories", el.id)}
                      onCheckedChange={(value) =>
                        value
                          ? addSearchParameter("caegories", el.id)
                          : removeSearchParameter("caegories", el.id)
                      }
                    />
                    <label
                      htmlFor={el.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {el.label}
                    </label>
                  </div>
                );
              })}
            </div>
            <Separator className="h-[0.25px] bg-zinc-300 my-6" />
            <div className="flex flex-col space-y-2">
              <h3 className="mb-2">Цілі</h3>
              {goal.map((el) => {
                return (
                  <div key={el.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={el.id}
                      checked={isChecked("goal", el.id)}
                      onCheckedChange={(value) =>
                        value
                          ? addSearchParameter("goal", el.id)
                          : removeSearchParameter("goal", el.id)
                      }
                    />
                    <label
                      htmlFor={el.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {el.label}
                    </label>
                  </div>
                );
              })}
            </div>
            <Separator className="h-[0.25px] bg-zinc-300 my-6" />
            <div className="flex flex-col space-y-2">
              <h3 className="mb-2">Автор</h3>
              {author.map((el) => {
                return (
                  <div key={el.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={el.id}
                      checked={isChecked("author", el.id)}
                      onCheckedChange={(value) =>
                        value
                          ? addSearchParameter("author", el.id)
                          : removeSearchParameter("author", el.id)
                      }
                    />
                    <label
                      htmlFor={el.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {el.label}
                    </label>
                  </div>
                );
              })}
            </div>
            <Separator className="h-[0.25px] bg-zinc-300 my-6" />
            <div className="flex flex-col space-y-2 mb-4">
              <h3 className="mb-2">Розмір</h3>
              {sizes.map((el) => {
                return (
                  <div key={el.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={el.id}
                      checked={isChecked("sizes", el.id)}
                      onCheckedChange={(value) =>
                        value
                          ? addSearchParameter("sizes", el.id)
                          : removeSearchParameter("sizes", el.id)
                      }
                    />
                    <label
                      htmlFor={el.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {el.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
        <DrawerFooter className="border-t ">
          <DrawerClose>
            <Button className="w-full" onClick={() => refresh()}>
              Підтвердити
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Закрити
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
