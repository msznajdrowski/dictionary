import React, { PropsWithChildren } from "react";
import { Grid } from "@mui/material";

const MainLayout = ({ children }: PropsWithChildren) => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
  >
    {children}
  </Grid>
);

export { MainLayout };
