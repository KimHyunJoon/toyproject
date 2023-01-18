import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;

`;
const Header = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.headerColor};
height: 50px;
font-weight: bolder;
font-size: 19px;
position: relative;

.back{
    position: absolute;
    left:20px;
    cursor: pointer;
    img{
        width: 10px;
        
    }
}
`
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
            <Header>
                <h2>공지사항</h2>
            <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
            </Header>
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