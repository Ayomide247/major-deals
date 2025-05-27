import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, Contact, ServicesPage } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
}

export default App;
