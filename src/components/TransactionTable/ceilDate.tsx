import { FunctionComponent, useState } from "react";
import Moment from "moment";
import { Box, Typography } from "@mui/material";

interface ceilDateProps {
    timestamp: number;
}

const CeilDate: FunctionComponent<ceilDateProps> = (props) => {
  
    const time = Moment(props.timestamp).format('YY-MM-DD');
    return (
      <Typography textTransform={'uppercase'}>
        {time}
      </Typography>
    );
  };
  
  export default CeilDate;