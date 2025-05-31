import { Routes, Route } from "react-router-dom";
import { Header } from "./features/Header";
import { Options } from "./features/Options";
import { StyledWorkspaceContainer } from "./common/WorkspaceContainer/styled";
import { MealComposer } from "./features/MealComposer";
import { BMR } from "./features/BMR";
import { Workspace } from "./common/Workspace/styled";

function App() {
  return (
    <>
      <Header />
      <StyledWorkspaceContainer>
        <Options />
        <Workspace>
          <Routes>
            <Route path="/composer" element={<MealComposer />} />
            <Route path="/bmr" element={<BMR />} />
          </Routes>
        </Workspace>
      </StyledWorkspaceContainer>
    </>
  );
}

export default App;
