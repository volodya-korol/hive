"use client";

import { useState } from "react";
import { Slider } from "./slider";
import { useSearchParams } from "next/navigation";

const PriceSlider = ({
  addSearchParameter,
}: {
  addSearchParameter: Function;
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const maxPrice = params.get("maxPrice") || 200000;

  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  return (
    <>
      <h3 className="mt-6 mb-4">Макс. ціна: ${localMaxPrice}</h3>
      <Slider
        defaultValue={[+maxPrice]}
        max={200000}
        min={1000}
        step={1000}
        onValueCommit={(value) => addSearchParameter("maxPrice", value[0])}
        onValueChange={(value) => setLocalMaxPrice(value[0])}
      />
    </>
  );
};

export default PriceSlider;
