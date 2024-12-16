// Vendors
import { styled } from "styled-components";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

// Styled
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default MainContainer;
