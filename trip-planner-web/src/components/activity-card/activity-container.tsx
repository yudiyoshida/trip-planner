import { ReactNode } from "react";

interface ActivityContainerProps {
  children: ReactNode
}

export function ActivityContainer({ children }: ActivityContainerProps) {
  return (
    <section className="flex justify-between items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl">
      {children}
    </section>
  );
}
