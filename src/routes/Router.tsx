import { createBrowserRouter } from "react-router-dom";

import { AssessmentsList } from "../pages/AssessmentList";
import { LoginPage } from "../pages/LoginPage";
import { RecommendationPage } from "../pages/RecommendationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/recomendacoes",
    element: <RecommendationPage />,
  },
  {
    path: "/avaliacoes",
    element: <AssessmentsList />,
  },
]);
