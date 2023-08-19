import { FunctionComponent, useState } from "react";

import { Box, Typography } from "@mui/material";

interface ceilNameProps {
    name: string;
    country: string;
}

const CeilName: FunctionComponent<ceilNameProps> = (props) => {
  

    return (
      <Box display={"flex"}>
        {props.country}
        <Box className={`fi fi-${props.country}`}></Box>  
        <Typography paddingLeft={2}>{props.name}</Typography>
      </Box>
    );
  };
  
  export default CeilName;