import React from "react";
import TextInput from "./TextInput/TextInput";

export default function ClientFormGenerator({ forms }) {
  return (
    <>
      <div className="form-container">
        {forms.map(control => (
          <TextInput control={control} />
        ))}
      </div>
      <style jsx>
        {`
          .form-container {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
}
