import React, { FunctionComponent, useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import CardBlocks from "../../components/cardBlocks";
import TransactionTableBlocks from "../../components/TransactionTable";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = (props) => {
  

  return (
    <Grid container xs={12}>
      <Grid item xs={12} padding={4}>
        <CardBlocks />
      </Grid>
      <Grid item xs={12}>
        <TransactionTableBlocks />
      </Grid>
    </Grid>
  );
};

export default Home;
