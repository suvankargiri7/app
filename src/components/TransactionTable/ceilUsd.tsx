import { FunctionComponent, useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

interface ceilUsdProps {
  amount: number;
}

const CeilUsd: FunctionComponent<ceilUsdProps> = (props) => {
  const [usdValue, setUsdValue] = useState<string>("0");

  const url =
    "http://api.exchangeratesapi.io/v1/latest?access_key=ea2dda9c9d413cd209735539b095224c&base%20=USD&symbols=INR";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setUsdValue(Number(props.amount / json.rates.INR).toFixed(2));
    } catch (error) {
      console.log("error", error);
      setUsdValue(Number(props.amount).toFixed(2));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Box display={"flex"}>${usdValue}</Box>;
};

export default CeilUsd;
