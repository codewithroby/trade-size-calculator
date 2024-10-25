import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiCopy } from "react-icons/bi";

export const LotSize = ({
  value,
  forex = false,
}: {
  value: TradeInputElements["positionSize"];
  forex?: boolean;
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
          name="capitalToRisk"
          id="capitalToRisk"
          placeholder="0"
          value={value}
          type="number"
          className="sm:text-base"
          readOnly
        />
        <div className="absolute right-0 top-0 flex h-full items-center justify-center p-2">
          <Button
            className="flex size-full items-center justify-center p-2"
            onClick={() => {
              navigator.clipboard.writeText(value.toString());
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
