import { FunctionComponent, useState } from "react";

import { Box, Typography, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ceilOptionsProps {

}

const CeilOptions: FunctionComponent<ceilOptionsProps> = (props) => {
  

    return (
      <Box display={"flex"}>
        <IconButton>
            <MoreVertIcon />
            </IconButton>
      </Box>
    );
  };
  
  export default CeilOptions;