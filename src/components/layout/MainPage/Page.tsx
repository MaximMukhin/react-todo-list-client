import React, { PropsWithChildren } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
