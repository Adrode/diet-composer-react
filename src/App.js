import { Header } from "./features/Header";
import { Options } from "./features/Options";
import { StyledWorkspaceContainer } from "./common/WorkspaceContainer/styled";

function App() {
  return (
    <>
      <Header />
      <StyledWorkspaceContainer>
        <Options />
      </StyledWorkspaceContainer>
    </>
  );
}

export default App;
