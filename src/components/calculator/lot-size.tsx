"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiCopy } from "react-icons/bi";

import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

export const LotSize = ({
  value,
  forex = false,
}: {
  value: TradeInputElements["positionSize"];
  forex?: boolean;
}) => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col space-y-3 p-6">
      <div className="flex flex-col space-y-1">
        <Label
          htmlFor="positionSize"
          className="text-sm font-semibold uppercase sm:text-base"
        >
          {forex ? "Trade Lot Size" : "Trade Position Size"}
        </Label>
        <div className="relative">
          <Input
            name="positionSize"
            id="positionSize"
            placeholder="0"
            value={value}
            type="number"
            className="sm:text-base"
            readOnly
          />
          <div className="absolute right-0 top-0 flex h-full items-center justify-center p-2">
            <Button
              className="flex size-full items-center justify-center p-1.5 py-2"
              onClick={async () => {
                await navigator.clipboard
                  .writeText(value.toString())
                  .then(() => {
                    toast({
                      title: "Success",
                      description: `Trade ${forex ? "lot" : "position"} size has been copied to clipboard.`,
                      duration: 1500,
                    });
                    confetti();
                  });
              }}
            >
              <span className="text-xs font-bold uppercase">
                Copy {forex ? "Lot" : "Position"} Size
              </span>
              <BiCopy className="size-3 sm:size-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
