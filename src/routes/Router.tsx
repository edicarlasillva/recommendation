import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RecommendationPage } from "../pages/RecommendationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/recomendacao",
    element: <RecommendationPage />,
  },
]);
