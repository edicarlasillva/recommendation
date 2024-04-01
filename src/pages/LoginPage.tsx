import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { loginRequest } from "../store/slices/userSlice";
import { ILogin } from "../types/login";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ILogin = {
      email: formData.email,
      password: formData.password,
    };

    const user = await dispatch(loginRequest(data)).unwrap();

    console.log(user);

    if (user) {
      navigate("/avaliacoes");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Fazer Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="E-mail"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Senha"
              type="password"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
