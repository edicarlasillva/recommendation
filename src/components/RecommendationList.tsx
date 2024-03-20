import { Grid } from "@mui/material";
import { RecommendationCard } from "./RecommendationCard";

export function RecommendationList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <RecommendationCard />
      </Grid>
    </Grid>
  )
}