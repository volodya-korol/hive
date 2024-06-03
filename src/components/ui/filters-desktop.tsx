import Link from "next/link";

import { ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

export const FiltersDesktop = ({ refresh }: { refresh: () => void }) => {
  const {
    hideOrShowFilters,
    addSearchParameter,
    removeSearchParameter,
    isChecked,
    filtersOpen,
  } = useFilters({ refresh });

  if (!filtersOpen)
    return (
      <aside className="w-20 border-r flex justify-center p-4 h-full">
        <Button size="icon" variant="ghost" onClick={() => hideOrShowFilters()}>
          <ChevronsLeft className="rotate-180" />
        </Button>
      </aside>
    );

  return (
    <aside className="w-72 sticky top-0 hidden lg:block">
      <ScrollArea className="w-full border-r p-4 pl-6 h-screen ">
        <div className="flex justify-between items-center sticky top-0 bg-white border-b pb-2 z-10">
          <h2 className="font-semibold">Фільтри</h2>
          {/* <Button
            size="icon"
            variant="ghost"
            onClick={() => hideOrShowFilters()}
          >
            <ChevronsLeft />
          </Button> */}
        </div>
        <h3 className="my-4">Тип</h3>
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
                  checked={isChecked("categories", el.id)}
                  onCheckedChange={(value) =>
                    value
                      ? addSearchParameter("categories", el.id)
                      : removeSearchParameter("categories", el.id)
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
        <div className="flex flex-col space-y-2">
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
    </aside>
  );
};
