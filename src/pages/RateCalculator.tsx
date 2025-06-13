import pattern from "@/assets/pattern2.svg";
import Calculator from "@/components/layout/calculator";
import { DataTable } from "@/components/layout/customTable";
import { columns } from "@/components/tablecolumns/liveTableColumns";
import { getCoinData } from "@/lib/calls";
import type { CoinProps } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";

const RateCalculator = () => {
  const [data, setData] = useState<CoinProps[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await getCoinData();
      console.log(response?.data);
      setData(response?.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error("Failed to fetch coin data from the server.");
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw error;
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred.");
    }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="relative">
      <div
        className="relative overflow-hidden bg-no-repeat pt-[196px] pb-[241px] bg-cover bg-center text-offWhite flex flex-col items-center gap-[24px]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4, 21, 62, 0.93) 0%, rgba(4, 21, 62,0.93) 20%, rgba(73,34,121,0.93) 70%), url(${pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-[64px] font-[400] leading-[76.8px]">
          Rate calculator
        </h1>
        <p className="text-[24px] font-[400] leading-[33.6px]">
          Quickly calculate rates and view the asset market.
        </p>
      </div>
      <div className="absolute top-[400px] w-[632px] left-0 right-0 mx-auto rounded-[8px]">
        <Calculator />
      </div>
      <div className="mt-[419px] pb-[148px] px-[120px]">
        <h1 className="text-[32px] font-[400] leading-[44.8px]">
          Asset market
        </h1>
        <div className="font-[600] text-[20px] leading-[28px]">
          <DataTable<CoinProps, unknown> loading={loading} data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;
