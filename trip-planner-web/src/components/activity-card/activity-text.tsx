interface ActivityTextProps {
  text: string;
}

export function ActivityText({ text }: ActivityTextProps) {
  return (
    <p className="flex-1">{text}</p>
  );
}
