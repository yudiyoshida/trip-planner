import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1>Página não encontrada...</h1>
      <Button variant="contained" color="primary">
        <Link to="/">Voltar</Link>
      </Button>
    </section>
  );
}
