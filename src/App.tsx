import { Provider as ReduxProvider } from "react-redux";
import { RecommendationPage } from "./components/RecommendationPage";

import { store } from "./store/store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <RecommendationPage />
    </ReduxProvider>
  )
}

