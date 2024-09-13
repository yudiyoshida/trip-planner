export type ActivityDto = {
  id: string;
  title: string;
  date: string;
  time: string;
  checked: boolean;
}

export type createActivityDto = Omit<ActivityDto, "id">;
