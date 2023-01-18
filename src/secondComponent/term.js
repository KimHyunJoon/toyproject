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

const TermWrapper = styled.div`
padding: 15px;
background-color: white;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #f0f0f0;;
img{
    width:10px;
    cursor: pointer;
}
`
const TermBox = styled.div`


`
function Box({title}){

    return(
        <TermWrapper>
            <p>{title}</p>
            <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}/>
        </TermWrapper>
    )
}


function term(){
    return (
        <Wrapper>
            <Header>
                <h2>이용약관</h2>
                <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
            </Header>
            <Box title={"서비스 이용약관"}/>
            <Box title={"개인정보 처리방침"}/>
            <Box title={"위치기반 서비스 이용약관"}/>
            <Box title={"포인트 이용약관"}/>
            <Box title={"사용하기 이용약관"}/>
        </Wrapper>
    )
}

export default term;