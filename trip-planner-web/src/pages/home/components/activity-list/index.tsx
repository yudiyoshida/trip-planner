import { useMutation, useQuery } from "@tanstack/react-query";
import { Activity } from "../../../../components/activity-card";
import { ActivityDto } from "../../../../models/activity.model";
import { deleteActivity, listActivities, updateActivityStatus } from "../../../../http/activities";
import { queryClient } from "../../../../http";
import { SnackbarAlert } from "../../../../components/snackbar";

export function ActivityList() {
  const { data, isLoading } = useQuery<ActivityDto[]>({
    queryKey: ["list-activities"],
    queryFn: listActivities,
    staleTime: 1000 * 60 * 1, // 1 minute
  });

  const deleteMutation = useMutation({
    mutationFn: deleteActivity,
  });

  const updateStatusMutation = useMutation({
    mutationFn: updateActivityStatus,
  });

  function invalidateList() {
    queryClient.invalidateQueries({ queryKey: ["list-activities"] });
  }

  async function handleDelete(id: string) {
    try {
      await deleteMutation.mutateAsync(id);
      invalidateList();

    } catch (error) {
      console.error("Error deleting activity", error);

    }
  }

  async function handleUpdateStatus(id: string) {
    try {
      await updateStatusMutation.mutateAsync(id);
      invalidateList();

    } catch (error) {
      console.error("Error updating activity status", error);

    }
  }

  const listOfActivities = data?.map((activity) => {
    return (
      <li key={activity.id}>
        <Activity.Container>
          <Activity.Checkbox checked={activity.checked} onClick={() => handleUpdateStatus(activity.id)} />
          <Activity.Text text={activity.title} />
          <Activity.Date date={activity.date} time={activity.time} />
          <Activity.Delete onClick={() => handleDelete(activity.id)} />
        </Activity.Container>
      </li>
    );
  });

  return (
    <>
      { deleteMutation.isSuccess && <SnackbarAlert message="Atividade deletada com sucesso" severity="success" /> }

      <h1 className="text-3xl font-bold leading-10 mb-6">Atividades</h1>
      <ul className="space-y-3">
        {
          isLoading
            ? <p>Carregando...</p>
            : listOfActivities?.length ? listOfActivities : <p>Nenhuma atividade cadastrada.</p>
        }
      </ul>
    </>
  );
}
