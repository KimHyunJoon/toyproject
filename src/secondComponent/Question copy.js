import styled from "styled-components";
import HeaderBox from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

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
    top: 22px;
  }
`;

const Box = styled.div`
  label {
  }
  /* .content {
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
  } */
`;

const Img = styled(motion.div)`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px !important;
    border-radius: 50%;
    vertical-align: bottom;
  }
`;
const BoxShadow = styled(motion.div)`
  background-color: #f0f0f0;
  min-height: 100px;
  padding: 10px;
`;
function Boxs({ content }) {
  const [isClicked, setIsClicked] = useState(false);
  const [accordionList] = useState(accordionData);
  const [accordionIndex, setAccordionIndex] = useState(null);
  const activeAccordion = useCallback(
    (index) => setAccordionIndex(index),

    []
  );
  const accordionData = [
    {
      id: 1,
      title: "안녕하세요",
      content: () => (
        <div>
          <p>테스트 입니다.</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "안녕하세요2",
      content: () => (
        <div>
          <p>테스트 입니다.2</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "안녕하세요3",
      content: () => (
        <div>
          <p>테스트 입니다.3</p>
        </div>
      ),
    },
  ];
  console.log(accordionData);
  return (
    <Box layout transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}>
      <div className="content">
        <h2>{content}</h2>
        <Img>
          <motion.img
            layout
            animate={{ rotate: isClicked ? 270 : 90 }}
            src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
          />
        </Img>
      </div>
      <AnimatePresence>
        <BoxShadow
          layout
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p>test입니다.</p>
        </BoxShadow>
      </AnimatePresence>
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
