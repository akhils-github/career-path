import QueryProvider from "./providers/QueryProvider";
import AppRoutes from "./routers/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryProvider>
      <Toaster style={{ zIndex: "999" }} />
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
