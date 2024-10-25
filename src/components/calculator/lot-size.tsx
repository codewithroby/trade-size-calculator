import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
      <Input
        id="capitalToRisk"
        name="capitalToRisk"
        value={value}
        type="number"
        readOnly
      />
    </div>
  </div>
);
