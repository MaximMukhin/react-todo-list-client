import React, { PropsWithChildren } from "react";
import { Card } from "@mui/material";

export const StyledCard: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Card sx={{ backgroundColor: "#d1d1d1", m: "8px 0 0 0" }}>{children}</Card>
  );
};
