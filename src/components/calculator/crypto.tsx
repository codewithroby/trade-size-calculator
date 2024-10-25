"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSize } from "@/lib/utils";
import { ChangeEvent, useState } from "react";

export const Crypto = () => {
  const [inputList, setInputList] = useState<TradeInputElements>({
    capitalToRisk: 0,
    entryPrice: 0,
    stopLossPrice: 0,
    positionSize: 0,
  });

  const handleInputUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputList = { ...inputList };
    const { name, value } = event.target;
    newInputList[name as keyof TradeInputElements] = Number(value);
    setInputList({
      ...newInputList,
      positionSize: calculateSize(newInputList),
    });
  };

  return (
    <>
      <div className="flex flex-col space-y-3 border-b border-slate-100 p-6">
        <div className="flex flex-col space-y-1">
          <Label
            htmlFor="capitalToRisk"
            className="text-sm font-semibold uppercase sm:text-base"
          >
            Capital To Risk
          </Label>
          <Input
            id="capitalToRisk"
            name="capitalToRisk"
            className="appearance-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={inputList.capitalToRisk}
            type="number"
            onChange={handleInputUpdate}
          />
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col space-y-1">
            <Label
              htmlFor="entryPrice"
              className="text-sm font-semibold uppercase sm:text-base"
            >
              Entry Price
            </Label>
            <Input
              name="entryPrice"
              id="entryPrice"
              className="appearance-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inputList.entryPrice}
              type="number"
              onChange={handleInputUpdate}
            />
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <Label
              htmlFor="stopLossPrice"
              className="text-sm font-semibold uppercase sm:text-base"
            >
              Stop Loss Price
            </Label>
            <Input
              name="stopLossPrice"
              id="stopLossPrice"
              className="appearance-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inputList.stopLossPrice}
              type="number"
              onChange={handleInputUpdate}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 p-6">
        <div className="flex flex-col space-y-1">
          <Label
            htmlFor="capitalToRisk"
            className="text-sm font-semibold uppercase sm:text-base"
          >
            Trade Position Size
          </Label>
          <Input
            id="capitalToRisk"
            name="capitalToRisk"
            className="appearance-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={Math.abs(inputList.positionSize)
              .toFixed(3)
              .replace(/\.000$/, "")}
            type="number"
          />
        </div>
      </div>
    </>
  );
};
