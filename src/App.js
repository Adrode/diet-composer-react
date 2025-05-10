import { Header } from "./features/Header";
import { Options } from "./features/Options";
import { StyledWorkspaceContainer } from "./common/WorkspaceContainer/styled";
import { MealComposer } from "./features/MealComposer";

function App() {
  return (
    <>
      <Header />
      <StyledWorkspaceContainer>
        <Options />
        <MealComposer />
      </StyledWorkspaceContainer>
    </>
  );
}

export default App;
