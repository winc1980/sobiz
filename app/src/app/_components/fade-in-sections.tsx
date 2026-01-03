"use client";

import type { ReactNode } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

type FadeInSectionsProps = {
  children: ReactNode;
};

export const FadeInSections = ({ children }: FadeInSectionsProps) => {
  useFadeIn();

  return <>{children}</>;
};
