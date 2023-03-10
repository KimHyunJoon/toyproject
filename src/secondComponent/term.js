import styled from "styled-components";
import HeaderBox from "./Header";
import { Wrapper } from "../styledComponent/all";

const TermWrapper = styled.div`
  padding: 15px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  font-size: 14px;
  img {
    width: 8px;
  }
`;
function Box({ title }) {
  return (
    <TermWrapper>
      <p>{title}</p>
      <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
    </TermWrapper>
  );
}

function term() {
  return (
    <Wrapper>
      <HeaderBox title={"이용약관"} />
      <Box title={"서비스 이용약관"} />
      <Box title={"개인정보 처리방침"} />
      <Box title={"위치기반 서비스 이용약관"} />
      <Box title={"포인트 이용약관"} />
      <Box title={"사용하기 이용약관"} />
    </Wrapper>
  );
}

export default term;
