import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateSize(inputs: TradeInputElements) {
  const capitalToRisk = Number(inputs.capitalToRisk);
  const entryPrice = Number(inputs.entryPrice);
  const stopLossPrice = Number(inputs.stopLossPrice);

  if (
    capitalToRisk > 0 &&
    entryPrice > 0 &&
    stopLossPrice > 0 &&
    entryPrice !== stopLossPrice
  ) {
    return capitalToRisk / (entryPrice - stopLossPrice);
  }

  return 0;
}
