import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;
height: 600px;

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
const VersionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        padding: 50px 0;
        width:150px;
    }
    h1{
        font-size: 20px;
        font-weight: bolder;
        padding: 20px 0;
    }
    .newVersion{
        background-color: #e6e6e6;
        width: 60%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`

function Version(){
    return(
        
        <Wrapper>
            <Header>
                <h2>버전 정보</h2>
                <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
            </Header>
            <VersionWrapper>
                <img src={`${process.env.PUBLIC_URL}/assets/images/version_cow.png`}/>
                <h1>현재 버전 6.1.0</h1>
                <div className="newVersion">현재 최신 버전입니다.</div>
            </VersionWrapper>
        </Wrapper>
        )
}

export default Version;