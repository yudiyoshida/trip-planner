import { MapPin } from "lucide-react";

export function LocationCard() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      <div className="flex justify-start items-center gap-2 px-4">
        <MapPin size={20} />
        <p>São Paulo, SP, Brasil</p>
      </div>
    </div>
  );
}
