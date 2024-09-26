import React, { ReactNode } from "react";
import { Pace, WindupChildren } from "windups";
import { TEXT_ANIMATION_PACE } from "./constants";

export default function Typewriter({
  children,
  onFinished,
}: {
  children: ReactNode;
  onFinished?: () => void;
}) {
  return (
    <WindupChildren onFinished={onFinished}>
      <Pace ms={TEXT_ANIMATION_PACE}>{children}</Pace>
    </WindupChildren>
  );
}
