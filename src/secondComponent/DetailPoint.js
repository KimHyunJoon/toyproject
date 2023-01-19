import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBox from "./Header";

const Wrapper = styled.div`
  background: #f0f0f0;
  width: 360px;
`;

const Point = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .leftPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      padding: 5px 0px;
      font-size: 35px;
      font-weight: bolder;
    }
  }
  .rightPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      justify-content: space-between;
      h2 {
        font-weight: bolder;
      }
    }
    hr {
      margin: 15px 0px;
    }
  }
`;



function DetailPoint() {
  const [allPoint, setAllPoint] = useState(0);
  const [savePoint, setSavePoint] = useState(0);
  const [deletePoint, setDeletePoint] = useState(0);
  return (
    <Wrapper>
      <HeaderBox title={"포인트 내역"} />
      <Point>
        <div className="leftPoint">
          <h4>포인트 내역 </h4>
          <h2>{allPoint}P</h2>
        </div>
        <div className="rightPoint">
          <div>
            <p>적립예정</p>
            <h2>{savePoint}P</h2>
          </div>
          <hr width="100%" size="1" color="white"></hr>
          <div>
            <p>소멸예정</p>
            <h2>{deletePoint}P</h2>
          </div>
          <p>(이달 말일 소멸)</p>
        </div>
      </Point>
    </Wrapper>
  );
}

export default DetailPoint;
