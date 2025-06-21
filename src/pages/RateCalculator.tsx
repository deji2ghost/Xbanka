import pattern from "@/assets/pattern2.svg";
import Calculator from "@/components/layout/calculator";
import { DataTable } from "@/components/layout/customTable";
import { columns } from "@/components/tablecolumns/liveTableColumns";
import Pagination from "@/components/ui/pagination";
import { getCoinData } from "@/lib/calls";
import type { CoinProps } from "@/lib/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const RateCalculator = () => {
  const [data, setData] = useState<CoinProps[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const itemsPerPage = 7;

  const getData = async (pageNumber = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCoinData(pageNumber);
      console.log(response?.data);
      setData(response?.data);
      const totalPages = Math.ceil(100 / itemsPerPage);
      setTotalPages(totalPages);
      setLoading(false);
    } catch (error) {
      let errorMessage = "Failed to load posts. Please try again later.";
      
        if (error instanceof AxiosError) {
          if (error.code === "ERR_NETWORK") {
            errorMessage = "Network Error";
          } else if (error.response) {
            // Server responded with status code outside 2xx
            errorMessage = `Server error: ${error.response.status} ${error.response.statusText}`;
          } else if (error.request) {
            // Request made, no response received
            errorMessage = "No response received from the server.";
          }
        } else if (typeof window !== "undefined" && !navigator.onLine) {
          errorMessage = "You are offline. Please check your internet connection.";
        }
      
        setError(errorMessage);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

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
      <div className="absolute top-[400px] md:w-[632px] left-0 right-0 mx-auto rounded-[8px]">
        <Calculator />
      </div>
      <div className="mt-[419px] pb-[148px] px-[120px]">
        <h1 className="text-[32px] font-[400] leading-[44.8px] mb-[24px]">
          Asset market
        </h1>
        <div className="font-[600] text-[20px] leading-[28px]">
          <DataTable<CoinProps, unknown>
            loading={loading}
            data={data}
            columns={columns}
            error={error}
          />
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages || 0}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default RateCalculator;
