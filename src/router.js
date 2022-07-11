import { Route, Routes } from "react-router-dom";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default Router;