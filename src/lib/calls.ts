import axios from "axios";

export const getCoinData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 7,
          page: 1,
          sparkline: true,
        },
      }
    );
    return response
  } catch (error) {
     if (error instanceof Error) {
      throw error; // ✅ this is now safe
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
