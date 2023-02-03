import styled from "styled-components";
import HeaderBox from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Wrapper } from "../styledComponent/all";

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

const Box = styled(motion.div)`
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    font-size: 14px;
    cursor: pointer;

    img {
      width: 10px;
      cursor: pointer;
      transform: rotate(90deg);
    }
  }
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

  padding: 10px;
  word-break: break-word;
`;

function QuestionBox({ title, content, key }) {
  const [accordionList] = useState(content);
  const [current, setCurrent] = useState();
  const [opened, setOpened] = useState(true);

  return (
    <QuestionWrapper>
      <h2>{title}</h2>
      {content.map((item, index) => {
        const toggleOpen = () => {
          //console.log("toggle...")
          //setIsOpen(!isOpen);
          if (current == index) {
            setCurrent(null);
            setOpened(false);
          } else {
            setCurrent(index);
            setOpened(true);
          }
        };
        return (
          <Box onClick={toggleOpen} key={index}>
            <div className="content">
              <h2>{item.title}</h2>
              <Img>
                <motion.img
                  layout
                  animate={{
                    bounce: 0,
                    type: "spring",
                    rotate: current === index ? 270 : 90,
                  }}
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </Img>
            </div>
            <AnimatePresence exitBeforeEnter>
              {current === index && (
                <BoxShadow
                  layout
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  {item.content()}
                </BoxShadow>
              )}
            </AnimatePresence>
          </Box>
        );
      })}
    </QuestionWrapper>
  );
}
function Question() {
  const accumulateData = [
    {
      id: 0,
      title: "안녕하세요",
      content: () => (
        <div>
          <p>테스트 입니다.</p>
        </div>
      ),
    },
    {
      id: 1,
      title: "안녕하세요2",
      content: () => (
        <div>
          <p>
            lkdjfalkdjflkadjflkasdjflkajdlfkjaldfjlakdsjfsdffffffffffffffffffffffffffffffffffffl
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "안녕하세요3",
      content: () => (
        <div>
          <p>
            lkdjfalkdjflkadjflkasdjflkajdlfkjaldfjlakdsjfsdffffffffffffffffffffffffffffffffffffl
          </p>
        </div>
      ),
    },
  ];

  const cashoutData = [
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
          <p>
            adfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "안녕하세요4",
      content: () => (
        <div>
          <p>테스트 입니다.4</p>
        </div>
      ),
    },
  ];
  return (
    <Wrapper>
      <HeaderBox title={"자주 묻는 질문"} />
      <QuestionWrapper>
        <Input>
          <input />
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        </Input>
        {/* <QuestionBox title={"적립"} content={"accumulateData"} /> */}
        <QuestionBox title={"적립"} content={accumulateData} />
        <QuestionBox title={"기부하기"} content={cashoutData} />
      </QuestionWrapper>
    </Wrapper>
  );
}

export default Question;
