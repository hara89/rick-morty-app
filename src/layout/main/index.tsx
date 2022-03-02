import React from 'react';
import styled from 'styled-components';

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(36, 40, 47);
`;

interface IMainLayout {
  children: JSX.Element;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

export default MainLayout;
