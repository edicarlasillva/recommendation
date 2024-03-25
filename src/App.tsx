import { Provider as ReduxProvider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

import { PersistGate } from "redux-persist/integration/react";
import { persitedStore, store } from "./store/store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persitedStore} />
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}
