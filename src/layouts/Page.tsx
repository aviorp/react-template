import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <div className="page">
      <CssBaseline />
      <div className="page__content">{children}</div>
    </div>
  );
};

export default Page;
