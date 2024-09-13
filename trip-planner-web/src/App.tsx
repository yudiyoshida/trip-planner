import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";

export function App() {
  return (
    <main className="bg-zinc-950 text-zinc-50 min-h-screen p-4 ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}
