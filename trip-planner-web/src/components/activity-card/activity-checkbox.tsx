import { CircleCheck, CircleDashed } from "lucide-react";
import { useState } from "react";

interface ActivityCheckboxProps {
  checked: boolean;
  onClick: () => void;
}

export function ActivityCheckbox({ checked, onClick }: ActivityCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick();
  };

  return (
    isChecked
      ? <CircleCheck size={20} className="cursor-pointer" color="#bef264" onClick={handleClick} />
      : <CircleDashed size={20} className="cursor-pointer" onClick={handleClick} />
  );
}
