import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiCopy } from "react-icons/bi";

export const LotSize = ({
  value,
  forex = false,
}: {
  value: TradeInputElements["positionSize"];
  forex: boolean;
}) => (
  <div className="flex flex-col space-y-3 p-6">
    <div className="flex flex-col space-y-1">
      <Label
        htmlFor="capitalToRisk"
        className="text-sm font-semibold uppercase sm:text-base"
      >
        {forex ? "Trade Lot Size" : "Trade Position Size"}
      </Label>
      <div className="relative">
        <Input
          name="entryPrice"
          id="entryPrice"
          placeholder="0"
          value={value}
          type="number"
          className="pl-[1.55rem] sm:text-base"
        />
        <div className="absolute right-0 top-0 flex h-full items-center justify-center p-2">
          <Button className="flex size-full items-center justify-center space-x-2 px-1 pt-px">
            <span className="text-xs uppercase">Copy</span>
            <BiCopy className="size-4 sm:size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
