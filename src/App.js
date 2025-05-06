import { Header } from "./Header";
import { Options } from "./Options";
import { StyledWorkspaceContainer } from "./WorkspaceContainer/styled";

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
