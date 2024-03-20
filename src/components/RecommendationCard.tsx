import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export function RecommendationCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Maria da Silva</Typography>
        <Typography variant="body1">Profissional competente</Typography>
      </CardContent>

      <CardActions>
        <Button>Excluir</Button>
      </CardActions>
    </Card>
  )
}