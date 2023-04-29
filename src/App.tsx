import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Dashboard() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MainLayout />
    </BrowserRouter>
  );
}
