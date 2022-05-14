import { Routes, Route } from "react-router-dom";

import PlaceTemplate from "@components/templates/PlaceTemplate";

export default function Place() {
  return (
    <>
      <Routes>
        <Route path="/school" element={<PlaceTemplate menuType={1} />}>
          <Route path=":id" element={<div>ddd</div>} />;
        </Route>
        <Route path="/food/*" element={<PlaceTemplate menuType={2} />} />
        <Route path="/convenient/*" element={<PlaceTemplate menuType={3} />} />
        <Route path="/snack/*" element={<PlaceTemplate menuType={4} />} />
        <Route path="/play/*" element={<PlaceTemplate menuType={5} />} />
      </Routes>
    </>
  );
}
