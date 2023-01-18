import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./Header";

const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;

`;

const NoticeWrapper =styled.div`
padding:15px;
background-color: white;
`
const NoticeBox = styled.div`
cursor: pointer;
h3{
    padding-top: 5px;
    font-size: 14px;
}
`
const todayTime =() =>{
    let now = new Date()
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() +1;
    let todayDate = now.getDate()

    return todayYear + '-' + todayMonth + '-' + todayDate
}

function Notice(){
    return(
        <Wrapper>
            <HeaderBox title={"공지사항"}/>
            <NoticeWrapper>
                <NoticeBox>
                    <h3>설 연휴 포인트 지급 안내</h3>
                    <h3>{todayTime()}</h3>
                </NoticeBox>
            </NoticeWrapper>
        </Wrapper>
    )
}

export default Notice;