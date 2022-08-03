import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactBuildableSwcProps {}

const StyledReactBuildableSwc = styled.div`
  color: pink;
`;

export function ReactBuildableSwc(props: ReactBuildableSwcProps) {
  return (
    <StyledReactBuildableSwc>
      <h1>Welcome to ReactBuildableSwc!</h1>
    </StyledReactBuildableSwc>
  );
}

export default ReactBuildableSwc;
