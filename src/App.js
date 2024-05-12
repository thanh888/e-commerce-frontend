import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/index";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
export function App() {
  return (
    <div className="bg-slate-300">
      <Router>
        <Routes>
          {routes.map((route) => {
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                path={route.path}
                element={
                  <>
                    <Layout />
                    <route.page />
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
