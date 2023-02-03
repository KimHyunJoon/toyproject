import { Link,} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const BoxWrapper = styled.div`
  background-color: white;
  margin: 15px 0px;
`;
const Box = styled.div`
  a {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-top: 0.1px solid #f0f0f0;
    height: 50px;
    cursor: pointer;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 15px;
        margin-right: 5px;
      }
    }
    div {
      padding: 10px;
      img {
        width: 8px;
      }
    }
  }
`;
const AskWrapper = styled.div`
  background-color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Question = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h2 {
    font-weight: bolder;
  }
`;

function BoxContent({ link, img, title }) {
  return (
    <Box>
      <Link to={`/${link}`}>
        <div className="title">
          <img src={`${process.env.PUBLIC_URL}/assets/images/${img}.png`} />
          <p>{title}</p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
        </div>
      </Link>
    </Box>
  );
}

function MyInfo() {
  return (
    <Wrapper>
      <BoxWrapper>
        <BoxContent link={"Account"} img={"account"} title={"계정관리"} />
        <BoxContent link={"Invite"} img={"invite"} title={"친구초대"} />
        <BoxContent link={"Donate"} img={"donate"} title={"기부내역"} />
        <BoxContent link={"Announce"} img={"notice"} title={"알림설정"} />
      </BoxWrapper>
      <BoxWrapper>
        <BoxContent link={"Version"} img={"version"} title={"버전정보"} />
        <BoxContent link={"Notice"} img={"version"} title={"공지사항"} />
        <BoxContent link={"Event"} img={"event"} title={"이벤트"} />
        <BoxContent link={"Term"} img={"term"} title={"이용약관"} />
      </BoxWrapper>
      <BoxWrapper>
        <BoxContent
          link={"Question"}
          img={"question_1"}
          title={"자주 묻는 질문"}
        />
        <BoxContent
          link={"HowToUse"}
          img={"cashCow"}
          title={"오늘뭐샀니 사용법"}
        />
      </BoxWrapper>
      <AskWrapper>
        <Question>
          <h2>문의하기</h2>
        </Question>
      </AskWrapper>
    </Wrapper>
  );
}

export default MyInfo;
