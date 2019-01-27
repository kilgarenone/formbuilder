import React from "react";

export default function HelloWorld({ name }) {
  return (
    <>
      <h1>{name} Hello broman</h1>
      <style jsx>
        {`
          color: blue;
        `}
      </style>
    </>
  );
}
