import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./layouts/MainLayout";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </>
  );
}
