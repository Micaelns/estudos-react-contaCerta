import React, { useState } from "react";
import InputField from "../../../atoms/InputField/Index";
import CheckboxField from "../../../atoms/CheckboxField/Index";

interface userProps {
  onSubmit: (data: any) => void;
}
interface FormData {
  nickname: string;
  email: string;
  active: boolean;
}

export default function UserForm(props: userProps) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    nickname: "",
    email: "",
    active: false,
  });

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "email") {
      setError(validateEmail(value) ? "" : "E-mail digitado é inválido.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        id="nickname"
        label="Apelido"
        type="text"
        error={error}
        placeholder="Digite como gostaria de ser chamado"
        value={formData.nickname}
        handleChange={handleChange}
      />

      <InputField
        id="email"
        label="E-mail"
        type="email"
        required={true}
        error={error}
        placeholder="Digite seu email"
        value={formData.email}
        handleChange={handleChange}
      />

      <CheckboxField
        id="active"
        label="Ativo"
        value={formData.active}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Enviar
      </button>
    </form>
  );
}
