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
        {...register("Username", {
          validate: "",
          required: true,
          maxLength: 80,
        })}
        variant="standard"
      />
      <TextField
        type="password"
        placeholder="password"
        {...register("password", {
          validate: "",
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        variant="standard"
      />

      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
}
