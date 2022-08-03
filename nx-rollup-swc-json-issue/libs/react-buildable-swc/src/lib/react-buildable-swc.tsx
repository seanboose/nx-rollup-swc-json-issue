import styled from '@emotion/styled';
import json from './test.json';

/* eslint-disable-next-line */
export interface ReactBuildableSwcProps {}

const StyledReactBuildableSwc = styled.div`
  color: pink;
`;

export function ReactBuildableSwc(props: ReactBuildableSwcProps) {
  console.log(json.someKey);
  return (
    <StyledReactBuildableSwc>
      <h1>Welcome to ReactBuildableSwc!</h1>
    </StyledReactBuildableSwc>
  );
}

export default ReactBuildableSwc;
