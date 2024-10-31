import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Members from "./pages/Members";
import ReportNo1 from "./pages/ReportNo1";
import ReportNo2 from "./pages/ReportNo2";
import ReportNo3 from "./pages/ReportNo3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Members />} />

          <Route path="members" element={<Members />} />
          <Route path="report1" element={<ReportNo1 />} />
          <Route path="report2" element={<ReportNo2 />} />
          <Route path="report3" element={<ReportNo3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
