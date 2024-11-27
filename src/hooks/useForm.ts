/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useForm = ({
  initialValues = {},
}: {
  initialValues?: Record<string, any>;
}) => {
  const [form, setForm] = useState<Record<string, any>>(initialValues);

  const onChange = (name: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, setForm, resetForm };
};
