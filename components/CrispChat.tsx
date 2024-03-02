"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d43789ae-6d24-4893-9b27-ab83efc0b4de");
  }, []);

  return null;
};
