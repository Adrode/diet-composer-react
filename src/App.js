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
          {/* <MealComposer /> */}
          <BMR />
        </Workspace>
      </StyledWorkspaceContainer>
    </>
  );
}

export default App;
