import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Maths from "./pages/Maths";
import English from "./pages/English";
import BeforeNumber from "./pages/BeforeNumber";
import AfterNumber from "./pages/AfterNumber";
import BetweenNumber from "./pages/BetweenNumber";
import MissingNumber from "./pages/MissingNumber";
import AscendingOrder from "./pages/AscendingOrder";
import DescendingOrder from "./pages/DescendingOrder";
import NumberComparison from "./pages/NumberComparison";
import SkipCounting from "./pages/SkipCounting";
import NumberNames from "./pages/NumberNames";
import AdditionSingle from "./pages/AdditionSingle";
import SubtractionSingle from "./pages/SubtractionSingle";
import AdditionDouble from "./pages/AdditionDouble";
import SubtractionDouble from "./pages/SubtractionDouble";
import PlaceValue from "./pages/PlaceValue";
import Time from "./pages/Time";
import Multiplication from "./pages/Multiplication";
import Shapes from "./pages/Shapes";
import Patterns from "./pages/Patterns";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="maths" element={<Maths />} />
          <Route path="english" element={<English />} />
          <Route path="before-number" element={<BeforeNumber />} />
          <Route path="after-number" element={<AfterNumber />} />
          <Route path="between-number" element={<BetweenNumber />} />
          <Route path="missing-number" element={<MissingNumber />} />
          <Route path="ascending-order" element={<AscendingOrder />} />
          <Route path="descending-order" element={<DescendingOrder />} />
          <Route path="number-comparison" element={<NumberComparison />} />
          <Route path="skip-counting" element={<SkipCounting />} />
          <Route path="number-names" element={<NumberNames />} />
          <Route path="addition-single" element={<AdditionSingle />} />
          <Route path="subtraction-single" element={<SubtractionSingle />} />
          <Route path="addition-double" element={<AdditionDouble />} />
          <Route path="subtraction-double" element={<SubtractionDouble />} />
          <Route path="place-value" element={<PlaceValue />} />
          <Route path="time" element={<Time />} />
          <Route path="multiplication" element={<Multiplication />} />
          <Route path="shapes" element={<Shapes />} />
          <Route path="patterns" element={<Patterns />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
