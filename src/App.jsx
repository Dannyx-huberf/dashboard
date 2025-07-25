import Dashboard from "./pages/Dasboard";
import { Routes, Route } from "react-router-dom"; // ✅ Just use Route and Routes
import Daily from "./components/Daily";
import Weekly from "./components/Weekly";
import Monthly from "./components/Monthly";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Daily />} />
        <Route path="weekly" element={<Weekly />} />
        <Route path="monthly" element={<Monthly />} />
      </Route>
    </Routes>
  );
}

export default App;
