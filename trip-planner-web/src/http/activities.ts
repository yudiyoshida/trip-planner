import axios from "axios";
import { ActivityDto, createActivityDto } from "../models/activity.model";

const API_URL = "http://localhost:3000/activities";

export async function listActivities() {
  const result = await axios.get<ActivityDto[]>(API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result.data;
}

export async function createActivity(data: createActivityDto) {
  const result = await axios.post<ActivityDto>(API_URL, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result.data;
}

export async function updateActivityStatus(id: string) {
  const result = await axios.patch<ActivityDto>(`${API_URL}/${id}`);

  return result.data;
}

export async function deleteActivity(id: string) {
  const result = await axios.delete<ActivityDto>(`${API_URL}/${id}`);

  return result.data;
}
