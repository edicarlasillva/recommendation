import { Grid } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { RecommendationCard } from "./RecommendationCard";

export function RecommendationList() {
  const recommendations = useAppSelector((store) => store.recommendations.list);

  return (
    <Grid container spacing={2}>
      {recommendations.map((recommendation) => (
        <Grid item xs={12} md={6} key={recommendation.id}>
          <RecommendationCard {...recommendation} />
        </Grid>
      ))}
    </Grid>
  );
}
