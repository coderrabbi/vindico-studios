import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="bg-[#0d0000] app">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
