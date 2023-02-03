
import styled from "styled-components";
import HeaderBox from "./Header";
import { Wrapper } from "../styledComponent/all";

const VersionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  img {
    padding: 50px 0;
    width: 150px;
  }
  h1 {
    font-size: 20px;
    padding: 20px 0;
  }
  .newVersion {
    background-color: #e6e6e6;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Version() {
  return (
    <Wrapper>
      <HeaderBox title={"버전정보"} />
      <VersionWrapper>
        <img src={`${process.env.PUBLIC_URL}/assets/images/version_cow.png`} />
        <h1>현재 버전 6.1.0</h1>
        <div className="newVersion">
          <h2>현재 최신 버전입니다.</h2>
        </div>
      </VersionWrapper>
    </Wrapper>
  );
}

export default Version;
