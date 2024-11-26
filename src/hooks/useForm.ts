/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useForm = ({
  initialValues = {},
}: {
  initialValues?: Record<string, any>;
}) => {
  const [form, setForm] = useState<Record<string, any>>({ initialValues });

  const onChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({});
  };

  return { form, onChange, setForm, resetForm };
};
