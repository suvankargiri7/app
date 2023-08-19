import { FunctionComponent, useState } from "react";

import { Box, Typography } from "@mui/material";

interface ceilStatusProps {
  status: number;
}

const CeilStatus: FunctionComponent<ceilStatusProps> = (props) => {

    const numberToString = (input: number) => {
        if(input === 1) {
            return 'First';
        }
        if(input === 2) {
            return 'Second';
        }
        if(input === 3) {
            return 'Third';
        }
    }

  return (
    <Box display={"flex"}>
        {
            Array(props.status)
            .fill(0)
            .map((i, times) => {
            return (
                    <Box width={50} key={i} marginX={1} textAlign={'center'}>
                        <Box display={"flex"} border={"solid"}></Box>
                        <Typography>{numberToString(times+1)}</Typography>
                    </Box>
                );
            })
        }
        
    </Box>
  );
};

export default CeilStatus;
