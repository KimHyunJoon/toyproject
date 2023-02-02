import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./Header";
import { Wrapper } from "../styledComponent/all";

const AccountWrapper = styled.div`
  background-color: white;
  margin-bottom: 10px;
`;

const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  flex-direction: column;
  h2 {
    font-weight: bolder;
    margin-bottom: 5px;
  }
`;
const Box = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  .info {
    width: 70%;
    display: flex;

    h2 {
      width: 50%;
      :first-child {
        width: 60%;
      }
    }
  }
  .change {
    cursor: pointer;
    border: 1px solid #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const NameBox = styled(Box)`
  position: relative;
  .info {
    a {
      font-size: 3px;
      position: absolute;
      left: 150px;
      top: 35px;
    }
  }
`;
const PersonalInfo = styled.div`
  display: flex;
  padding: 50px 15px;
  word-break: keep-all;
  img {
    margin-right: 5px;
    margin-top: 2px;
    width: 13px;
    height: 13px;
  }
  p {
    font-size: 13px;
  }
`;
const Secession = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  height: 50px;
  font-size: 14px;
  cursor: pointer;
`;

function EmailAccount() {
  const [Id, setId] = useState("cashcow");
  const [password, setPassword] = useState("******");
  return (
    <AccountWrapper>
      <Email>
        <h2>이메일 계정</h2>
        <h4>{Id}@cashcow.co.kr</h4>
      </Email>
      <Box>
        <div className="info">
          <h2>비밀번호</h2>
          <h3>{password}</h3>
        </div>
        <div className="change">
          <h2>변경</h2>
        </div>
      </Box>
    </AccountWrapper>
  );
}

function MyInform() {
  const [name, setName] = useState("홍길동");
  const [birthday, setBirthday] = useState("1991-11-11");
  const [phone, setPhone] = useState("010-4028-1161");
  return (
    <AccountWrapper>
      <NameBox>
        <div className="info">
          <h2>이름</h2>
          <p>{name}</p>
          <a href="/">*개명한 경우는 어떻게 하나요?</a>
        </div>
        <div className="change">
          <p>변경</p>
        </div>
      </NameBox>
      <Box>
        <div className="info">
          <h2>생년월일</h2>
          <p>{birthday}</p>
        </div>
      </Box>
      <Box>
        <div className="info">
          <h2>휴대전화</h2>
          <p>{phone}</p>
        </div>
        <div className="change">
          <p>변경</p>
        </div>
      </Box>
    </AccountWrapper>
  );
}

function PersonalUse() {
  return (
    <AccountWrapper>
      <Box>
        <div className="info">
          <h2>개인정보 이용현황</h2>
        </div>
        <div className="change">
          <h2>변경</h2>
        </div>
      </Box>
      <PersonalInfo>
        <img src={`${process.env.PUBLIC_URL}/assets/images/version.png`} />
        <p>
          휴대전화와 번호 변경은 현재 등록된 번호의 명의자와 변경할 휴대폰
          번호의 명의자가 동일한 경우애만 가능합니다.
          <br />
          (휴대폰 기기와 무관 휴대폰 번화와 연동)
        </p>
      </PersonalInfo>
      <Secession>
        <h2>탈퇴하기</h2>
      </Secession>
    </AccountWrapper>
  );
}

function logging(value1, value2) {
  if (value1) {
    console.log(value2);
  }
}

function Account() {
  const Test = useRouteMatch("/account/test");
  let NowTest;
  if (Test) {
    NowTest = Test.isExact;
    logging(NowTest, "테스트 입니다.");
  }
  return (
    <Wrapper>
      <HeaderBox title={"계정관리"} />
      <EmailAccount />
      <MyInform />
      <PersonalUse />
    </Wrapper>
  );
}

export default Account;
