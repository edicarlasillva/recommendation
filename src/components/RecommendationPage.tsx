import { Container, Typography } from "@mui/material";

import { useAppSelector } from "../store/hooks";
import { RecommendationForm } from "./RecommendationForm";
import { RecommendationList } from "./RecommendationList";

export function RecommendationPage() {
  const todo = useAppSelector((store) => store.todo)

  console.log(todo)
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Recomendações</Typography>

      <RecommendationForm />
      <RecommendationList />
    </Container>
  )
}