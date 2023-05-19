import React from 'react'

const Header = () => {
  return (
    <div>header</div>
  )
}

export default Header




import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Username"
        {...register("Username", { required: true, maxLength: 80 })}
      />
      <TextField
        type="password"
        placeholder="password"
        {...register("password", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <input type="submit" />
    </form>
  );
}