"use client";

import { useFadeIn } from "@/hooks/use-fade-in";
import type { ReactNode } from "react";

type FadeInSectionsProps = {
  children: ReactNode;
};

export const FadeInSections = ({ children }: FadeInSectionsProps) => {
  useFadeIn();

  return <>{children}</>;
};