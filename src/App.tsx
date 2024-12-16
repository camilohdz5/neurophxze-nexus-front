// Store
import MainContainer from "./layouts/MainContainer";
import { useSessionStore } from "./store/sessionStore";

function App() {
  // Call Values from the store
  const user = useSessionStore((state) => state.user);

  // Call Actions from the store
  const { login } = useSessionStore();

  const handleLogin = () => {
    login({ userName: "prop name", password: "props password" });
  };

  return (
    <MainContainer>
      hello world {user?.name}
      <button onClick={handleLogin}>Login</button>
    </MainContainer>
  );
}

export default App;
