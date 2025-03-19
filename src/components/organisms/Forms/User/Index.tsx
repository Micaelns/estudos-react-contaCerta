import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../atoms/InputField/Index";
import CheckboxField from "../../../atoms/CheckboxField/Index";
import Button from "../../../atoms/Button/Index";

interface FormData {
  nickname: string;
  email: string;
  isActive: boolean;
}

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        id="nickname"
        label="Apelido"
        type="text"
        register={register("nickname", { required: "Apelido é obrigatório" })}
        error={errors.nickname?.message}
      />

      <InputField
        id="email"
        label="E-mail"
        type="email"
        register={register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail inválido",
          },
        })}
        error={errors.email?.message}
      />

      <CheckboxField
        id="isActive"
        label="Ativo"
        register={register("isActive")}
      />

      <div className="flex justify-end">
        <Button text="Salvar" type="submit" onSubmit={handleSubmit(onSubmit)} />
      </div>
    </form>
  );
};

export default UserForm;
