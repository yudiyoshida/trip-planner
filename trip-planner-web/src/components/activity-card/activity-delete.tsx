import { Trash } from "lucide-react";

interface ActivityDeleteProps {
  onClick: () => void;
}

export function ActivityDelete({ onClick }: ActivityDeleteProps) {
  return (
    <Trash size={20} className="cursor-pointer" onClick={onClick} />
  );
}
