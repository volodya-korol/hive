"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface FiltersFunctions {
  hideOrShowFilters: () => void;
  addSearchParameter: (parameter: string, value: string) => void;
  removeSearchParameter: (parameter: string, value: string) => void;
  isChecked: (parameter: string, value: string) => boolean;
  filtersOpen: boolean;
}

export const useFilters = ({
  refresh,
}: {
  refresh: () => void;
}): FiltersFunctions => {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const currentLink = "/catalog/all?";

  const hideOrShowFilters = () => {
    setFiltersOpen((prev) => !prev);
  };

  useEffect(() => {
    refresh();
  }, [params.toString()]);

  const addSearchParameter = (parameter: string, value: string) => {
    if (!params.has(parameter) || parameter === "maxPrice") {
      params.set(parameter, value);
    } else {
      params.set(parameter, params.get(parameter) + " " + value);
    }
    router.replace(currentLink + params.toString());
    // refresh();
  };

  const removeSearchParameter = (parameter: string, value: string) => {
    if (!params.has(parameter)) {
      return;
    } else {
      const existingValue = params.get(parameter);
      const valuesArray = existingValue!.split(" ");
      const newValueArray = valuesArray.filter((val) => val !== value);

      if (newValueArray.length > 0) {
        params.set(parameter, newValueArray.join(" "));
      } else {
        params.delete(parameter);
      }
    }
    router.replace(currentLink + params.toString());
    // refresh();
  };

  const isChecked = (parameter: string, value: string) => {
    const parameterValue = params.get(parameter);
    if (parameterValue) {
      const valuesArray = parameterValue.split(" ");
      return valuesArray.includes(value);
    }
    return false;
  };

  return {
    hideOrShowFilters,
    addSearchParameter,
    removeSearchParameter,
    isChecked,
    filtersOpen,
  };
};

interface Filter {
  id: string;
  label: string;
}

export const filters: Filter[] = [
  // Types
  { id: "purchase", label: "Купівля" },
  { id: "rent", label: "Оренда" },

  // Categories
  { id: "appartment", label: "Квартира" },
  { id: "building", label: "Будинок" },
  { id: "land", label: "Земельна ділянка" },
  { id: "office", label: "Офісне приміщення" },
  { id: "garage", label: "Гаражне приміщення" },
  { id: "maf", label: "МАФ" },
  { id: "room", label: "Кімната" },
  { id: "nonResidental", label: "Нежитлове приміщення" },
  { id: "industrial", label: "Промислова будівля" },
  { id: "basement", label: "Підвальні приміщення" },
  { id: "hotel", label: "Готель" },

  // Goals
  { id: "living", label: "Проживання" },
  { id: "commerce", label: "Комерційна діяльність" },
  { id: "storage", label: "Склад" },
  { id: "bigIndustry", label: "Велика промисловість" },
  { id: "smallIndustry", label: "Мала промисловість" },
  { id: "trading", label: "Торгівля" },

  // Authors
  { id: "realtor", label: "Ріелтор" },
  { id: "agent", label: "Посередник" },
  { id: "seller", label: "Продавець" },
  { id: "lessor", label: "Орендодавець" },

  // Sizes
  { id: "small", label: "Малий" },
  { id: "medium", label: "Середній" },
  { id: "large", label: "Помірний" },
  { id: "oversized", label: "Великий" },
];

export const getFilterName = (filter: string): string | undefined => {
  const filterObj = filters.find((f) => f.id === filter);
  return filterObj ? filterObj.label : undefined;
};
export const types = [
  { id: "purchase", label: "Купівля" },
  { id: "rent", label: "Оренда" },
];
export const categories = [
  { id: "appartment", label: "Квартира" },
  { id: "building", label: "Будинок" },
  { id: "land", label: "Земельна ділянка" },
  { id: "office", label: "Офісне приміщення" },
  { id: "garage", label: "Гаражне приміщення" },
  { id: "maf", label: "МАФ" },
  { id: "room", label: "Кімната" },
  { id: "nonResidental", label: "Нежитлове приміщення" },
  { id: "industrial", label: "Промислова будівля" },
  { id: "basement", label: "Підвальні приміщення" },
  { id: "hotel", label: "Готель" },
];
export const goal = [
  { id: "living", label: "Проживання" },
  { id: "commerce", label: "Комерційна діяльність" },
  { id: "storage", label: "Склад" },
  { id: "bigIndustry", label: "Велика промисловість" },
  { id: "smallIndustry", label: "Мала промисловість" },
  { id: "trading", label: "Торгівля" },
];
export const author = [
  { id: "realtor", label: "Ріелтор" },
  { id: "agent", label: "Посередник" },
  { id: "seller", label: "Продавець" },
  { id: "lessor", label: "Орендодавець" },
];
export const sizes = [
  { id: "small", label: "Малий (до 50 м^2)" },
  { id: "medium", label: "Середній (50-100 м^2)" },
  { id: "large", label: "Помірний (100-150 м^2)" },
  { id: "oversized", label: "Великий (понад 150 м^2)" },
];
