import React from "react";
import TextInput from "./TextInput/TextInput";

export default function ClientFormGenerator({ forms }) {
  return (
    <div className="flex-col">
      {forms.map(control => (
        <TextInput control={control} />
      ))}
    </div>
  );
}
