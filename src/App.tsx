import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPages from "./pages/main-page";
import Header from "./components/header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
