import CheckboxField from "@/components/atoms/CheckboxField/Index";
import InputField from "@/components/atoms/InputField/Index";
import InputTextArea from "@/components/atoms/InputTextArea/Index";
import React, { useEffect, useState } from "react";

interface costProps {
  resetFormSignal: number;
  onSubmit: (data: any) => void;
}

interface FormData {
  title: string;
  description?: string;
  value: number;
  paymentDate?: string;
  active: boolean;
}

export default function CostForm(props: costProps) {
  const dataDefault: FormData = {
    title: "",
    description: "",
    value: 0,
    paymentDate: "",
    active: false,
  };

  const [formData, setFormData] = useState<FormData>(dataDefault);

  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(dataDefault);
  }, [props.resetFormSignal]);

  const validateTitle = (title: string) => {
    return title.length > 6;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "title") {
      setError(
        validateTitle(value)
          ? ""
          : "O título deve ter pelo menos 6 caracteres alfanuméricos."
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTitle(formData.title)) {
      setError("O título deve ter pelo menos 6 caracteres alfanuméricos.");
      return;
    }

    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        id="title"
        label="Título"
        type="text"
        placeholder="Digite o título"
        value={formData.title}
        handleChange={handleChange}
        required={true}
        error={error}
      />

      <InputTextArea
        id="description"
        label="Descrição"
        placeholder="Digite a descrição"
        value={formData.description}
        handleChange={handleChange}
      />

      <InputField
        id="value"
        label="Valor"
        type="number"
        placeholder="Digite o valor"
        value={formData.value}
        handleChange={handleChange}
      />

      <InputField
        id="paymentDate"
        label="Data de Pagamento"
        type="date"
        placeholder="Selecione a data"
        value={formData.paymentDate}
        required={true}
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
