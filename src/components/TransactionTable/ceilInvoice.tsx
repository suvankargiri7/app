import { FunctionComponent, useState } from "react";

import { Box, Typography } from "@mui/material";

interface ceilInvoiceProps {
    no: string;
}

const CeilInvoice: FunctionComponent<ceilInvoiceProps> = (props) => {
  

    return (
      <Typography textTransform={'uppercase'} color={'primary'}>
        {props.no}
      </Typography>
    );
  };
  
  export default CeilInvoice;