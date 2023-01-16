import React, { PropsWithChildren } from "react";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>
    Page
    {children}
  </div>;
};
