import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ActivityDateProps {
  date: string;
  time: string;
}

export function ActivityDate({ date, time }: ActivityDateProps) {
  const newDate = date.replace(/-/g, "/");
  const dateFormatted = format(newDate, "iii, dd/MM/yyyy", { locale: ptBR });
  const dateTime = `${dateFormatted} às ${time}`;

  return (
    <p>{dateTime}</p>
  );
}
