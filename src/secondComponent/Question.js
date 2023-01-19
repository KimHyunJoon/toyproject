import styled from "styled-components";
import HeaderBox from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  background: #f0f0f0;
  width: 360px;
`;
const QuestionWrapper = styled.div`
  background-color: white;
  margin-bottom: 15px;
  padding: 0px 10px;
  h2 {
    font-weight: bolder;
    margin: 5px 0;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;
const Input = styled.div`
  padding: 10px;
  position: relative;
  input {
    padding-left: 50px;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background-color: #f0f0f0;
    border: none;
    :focus {
      outline: none;
    }
  }
  .search {
    position: absolute;
    left: 35px;
    top: 26px;
  }
`;

const Box = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    font-size: 14px;

    img {
      width: 10px;
      cursor: pointer;
      transform: rotate(90deg);
    }
  }
`;
const BoxShadow = styled(motion.div)`
  background-color: #f0f0f0;
  height: 0px;
`;
function Boxs({ content }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <Box>
      <div className="content">
        <h2>{content}</h2>
        <img
          onClick={() => setIsClicked(!isClicked)}
          src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
        />
      </div>
      <BoxShadow
        layout
        style={{ minHeight: isClicked ? "150px" : "0px" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      ></BoxShadow>
    </Box>
  );
}

function QuestionBox({ title }) {
  return (
    <QuestionWrapper>
      <h2>{title}</h2>
      <Boxs content={"테스트 입니다."} />
      <Boxs content={"테스트 입니다."} />
      <Boxs content={"테스트 입니다."} />
      <Boxs content={"테스트 입니다."} />
    </QuestionWrapper>
  );
}
function Question() {
  return (
    <Wrapper>
      <HeaderBox title={"자주 묻는 질문"} />
      <QuestionWrapper>
        <Input>
          <input />
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        </Input>
        <QuestionBox title={"적립"} />
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionBox title={"캐시아웃"} />
      </QuestionWrapper>
    </Wrapper>
  );
}

export default Question;
