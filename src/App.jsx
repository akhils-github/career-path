import AppRoutes from "./routers/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster style={{ zIndex: "999" }} />
      <AppRoutes />
    </>
  );
}

export default App;
