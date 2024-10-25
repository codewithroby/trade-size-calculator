"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSize } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { LotSize } from "@/components/calculator/lot-size";

export const Crypto = () => {
  const [inputList, setInputList] = useState<TradeInputElements>({
    capitalToRisk: 0,
    entryPrice: "1.00000",
    stopLossPrice: "1.00001",
    positionSize: 0,
  });

  const handleInputUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputList = { ...inputList };
    const { name, value } = event.target;
    newInputList[name as keyof TradeInputElements] = value;
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
          <div className="relative">
            <Input
              id="capitalToRisk"
              name="capitalToRisk"
              placeholder="0"
              value={inputList.capitalToRisk}
              type="number"
              onChange={handleInputUpdate}
              className="pl-[1.55rem] sm:text-base"
            />
            <div className="absolute left-0 top-0 flex h-full items-center justify-center px-4">
              <FaDollarSign className="absolute size-4 sm:size-3.5" />
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col space-y-1">
            <Label
              htmlFor="entryPrice"
              className="text-sm font-semibold uppercase sm:text-base"
            >
              Entry Price
            </Label>
            <div className="relative">
              <Input
                name="entryPrice"
                id="entryPrice"
                placeholder="0"
                value={inputList.entryPrice}
                type="number"
                onChange={handleInputUpdate}
                className="pl-[1.55rem] sm:text-base"
              />
              <div className="absolute left-0 top-0 flex h-full items-center justify-center px-4">
                <FaDollarSign className="absolute size-4 sm:size-3.5" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <Label
              htmlFor="stopLossPrice"
              className="text-sm font-semibold uppercase sm:text-base"
            >
              Stop Loss Price
            </Label>
            <div className="relative">
              <Input
                name="stopLossPrice"
                id="stopLossPrice"
                placeholder="0"
                value={inputList.stopLossPrice}
                type="number"
                onChange={handleInputUpdate}
                className="pl-[1.55rem] sm:text-base"
              />
              <div className="absolute left-0 top-0 flex h-full items-center justify-center px-4">
                <FaDollarSign className="absolute size-4 sm:size-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LotSize
        value={Math.abs(Number(inputList.positionSize) / 100000)
          .toFixed(2)
          .replace(/.00$/, "")}
        forex
        key="ForexLotSize"
      />
    </>
  );
};
