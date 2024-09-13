import * as yup from "yup";
import { Calendar, Clock, Tag } from "lucide-react";
import { InputField } from "../../../../components/input-field";
import { Button } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useMutation } from "@tanstack/react-query";
import { createActivity } from "../../../../http/activities";
import { createActivityDto } from "../../../../models/activity.model";
import { SnackbarAlert } from "../../../../components/snackbar";
import { queryClient } from "../../../../http";

interface FormFields {
  title: string;
  date: string;
  time: string;
}

const initialValues: FormFields = {
  title: "",
  date: "",
  time: "",
};

const formSchema: yup.Schema<FormFields> = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  date: yup.string().required("Campo obrigatório"),
  time: yup.string().required("Campo obrigatório"),
});


export function ActivityForm() {
  const { mutate, isError } = useMutation({
    mutationFn: (data: createActivityDto) => createActivity(data),
  });

  function handleSubmit(values: FormFields, helpers: FormikHelpers<FormFields>) {
    const newActivity = {
      ...values,
      checked: false,
    };

    mutate(newActivity, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["list-activities"] });
        helpers.resetForm();
      },
    });
  }

  return (
    <>
      { isError && <SnackbarAlert message="Erro ao salvar atividade" severity="error" /> }

      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="space-y-3">
            <InputField
              label="Qual a atividade?"
              name="title"
              icon={Tag}
            />

            <InputField
              label="Data"
              name="date"
              icon={Calendar}
              type="date"
            />

            <InputField
              label="Horário"
              name="time"
              icon={Clock}
              type="time"
            />

            <Button
              fullWidth
              type="submit"
              color="primary"
              disabled={!isValid}
              variant="contained"
            >
              Salvar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
