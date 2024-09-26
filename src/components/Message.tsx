import React, { ReactNode } from "react";
import "./Message.css";
import { Typography } from "@mui/material";
// @ts-ignore
import PulseDot from "react-pulse-dot";

export default function Message({
  children,
  id,
  loading,
}: {
  children: ReactNode;
  id: string;
  loading: boolean;
}) {
  return (
    <div className="message" id={id}>
      {loading && <PulseDot color="#349783FF" />}
      <Typography variant="body2">{children}</Typography>
    </div>
  );
}
