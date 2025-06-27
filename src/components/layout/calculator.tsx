import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import SelectBox from "./selectBox";
import debounce from "lodash/debounce";
// import usa from "@/assets/USA.svg";
// import btc from "@/assets/btc.svg";
import axios from "axios";
import type { CoinProps } from "@/lib/types";

const fiatOptions = [
  {
    id: "usd",
    label: "USD",
    description: "US Dollar",
    image: "https://flagcdn.com/us.svg",
  },
  {
    id: "ngn",
    label: "NGN",
    description: "Nigerian Naira",
    image: "https://flagcdn.com/ng.svg",
  },
  {
    id: "eur",
    label: "EUR",
    description: "Euro",
    image: "https://flagcdn.com/eu.svg",
  },
  {
    id: "gbp",
    label: "GBP",
    description: "British Pound",
    image: "https://flagcdn.com/gb.svg",
  },
];

export const Calculator = () => {
  const [coinOptions, setCoinOptions] = useState<CoinProps[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState("bitcoin");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [conversion, setConversion] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
        },
      })
      .then((res) => {
        const filtered = res.data.filter((coin: { id: string; }) =>
          ["bitcoin", "ethereum", "tether", "solana", "usdc"].includes(coin.id)
        );
        setCoinOptions(filtered);
        setSelectedCoinId(filtered[0]?.id || "bitcoin");
      });
  }, []);

  useEffect(() => {
    if (!selectedCoinId || !selectedCurrency) return;

    axios
      .get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: selectedCoinId,
          vs_currencies: selectedCurrency,
        },
      })
      .then((res) => {
        const value = res.data[selectedCoinId][selectedCurrency];
        setConversion(value);
      });
  }, [selectedCoinId, selectedCurrency]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetAmount = useCallback(
  debounce((val: string) => setAmount(Number(val)), 200),
  []
);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetAmount(e.target.value);
  };
  
  return (
    <div className="rounded-[8px] p-4 bg-[#F7F7F7] flex flex-col gap-4">
      <div className="w-[103px] flex flex-col">
        <h1 className="font-[400] text-[10px] md:text-[16px] leading-[22.4px]">
          Enter amount
        </h1>
        <input
          type="text"
          className="text-[32px] font-[600] border border-white rounded-[8px] leading-[41.6px]"
          name="name"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-[22px]">
        <div className="bg-white border-none rounded-[8px]">
          <SelectBox
            options={coinOptions?.map((coin) => ({
              id: coin?.id,
              label: coin?.name,
              description: coin?.symbol?.toUpperCase(),
              image: coin?.image,
            }))}
            label="Select coin"
            value={selectedCoinId}
            onChange={setSelectedCoinId}
          />
        </div>
        <div className="bg-white border-none rounded-[8px]">
          <SelectBox
            options={fiatOptions}
            value={selectedCurrency}
            onChange={setSelectedCurrency}
            label="Select currency"
          />
        </div>
        <Button
          size="sm"
          className="border border-[#0EA08E] flex items-center justify-between w-full p-2 rounded-[8px]"
        >
          <div className="flex items-center font-[600] text-[22px] leading-[33.6px]">
            {amount} {selectedCoinId.toUpperCase()} ={" "}
            {conversion && (conversion * amount).toLocaleString()}{" "}
            {selectedCurrency.toUpperCase()}
          </div>
          <p className="flex items-center font-[400] text-[14px] leading-[20.8px]">
            Last updated at 12:05 AM UTC
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
