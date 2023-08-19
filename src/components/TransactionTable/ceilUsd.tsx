import { FunctionComponent, useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

interface ceilUsdProps {
  amount: number;
}

const CeilUsd: FunctionComponent<ceilUsdProps> = (props) => {
  const [usdValue, setUsdValue] = useState<number>(0);

  const url =
    "https://anyapi.io/api/v1/exchange/convert?apiKey=ua4h13q2p49nekpgd4d8n87sc2lnhfoud77k29p2o5143tggj9ioe";

  const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setUsdValue(json);
      } catch (error) {
          console.log("error", error);
          setUsdValue(0);
      }
  };

  useEffect(() => {
    fetchData()
}, []);

  return <Box display={"flex"}>${usdValue}</Box>;
};

export default CeilUsd;
