import { InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";
import { ElementType } from "react";

interface InputFieldProps {
  name: string;
  label: string;
  icon: ElementType;
  placeholder?: string;
  type?: string;
}

export function InputField({ name, icon: Icon, ...props }: InputFieldProps) {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
