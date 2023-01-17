import { useState } from "react";
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

const InviteWrapper = styled.div`
background-color: #606060;
margin-bottom: 10px;
display: flex;
justify-content: center;
flex-direction: column;

div{
    margin-top: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color:white;
    font-weight: bolder;
    img{
    width: 70px;
    height: 70px;;
    }
    h3{
        font-size: 15px;
        padding:5px;
    }
    h2{
        font-size: 20px;
        padding: 10px;
        img{
            padding-top: 5px;
            width: 20px;
            height: 20px;
        }
        span{
            background-color:${(props) => props.theme.mainColor};
            color:black;
        }
    }
    p{
        font-size: 13px;
        padding: 10px 0 20px 0;
        span{
            color:orange;
        }
    }
}
`;

const InviteLinkWrapper = styled.div`
    background-color: white;
    padding:10px;
    h2{
        font-weight: bold;
    }

`
const LinkCopy = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;

`
const Circle = styled.div`
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
`

const Recommender = styled.div`
width:100%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border:1px solid #f0f0f0;
border-radius: 30px;
margin-bottom: 100px;
cursor: pointer;
p{
    display: flex;
    justify-content: center;
    align-items: center;
    
    span{
        margin-left: 15px;
        img{
            width: 8px;
        }
    }
}
`
const FooterWrapper = styled.div`
background-color:#f0f0f0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 70px;
h2{
    span{
        color:red;
    }
}
`;

function InviteMain(){

    return(
        <InviteWrapper>
            <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/invite.png`}/>
                <h3>내 초대로 친구가 회원 가입을 하면 나도! 친구도!</h3>
                <h2><span><img src={`${process.env.PUBLIC_URL}/assets/images/logo192.png`}/>300포인트씩</span>추가 적립!!</h2>
                <p>초대받은 친구가 나를 <span>추천인으로</span> 입력만하면 끝!</p>
            </div>
        </InviteWrapper>
    )
}

function InviteLink(){

    return(
        <InviteLinkWrapper>
            <h2>친구초대</h2>
            <LinkCopy>
                <Circle>카카오</Circle>
                <Circle>페이스북</Circle>
                <Circle>네이버</Circle>
                <Circle>메일</Circle>
                <Circle>링크복사</Circle>
            </LinkCopy>
            <Recommender><p>추천인 입력하러 가기 <span><img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}/></span></p></Recommender>
            <p style={{fontSize:"13px"}}>다른 회원이 나를 추천인으로 입력하면, 총 20회까지 포인트가 추가 적립됩니다.</p>

        </InviteLinkWrapper>
    )
}

function Invite(){
    const [Id,setId] = useState("hjkim4500@naver.com")
    const [Number,setNumber] = useState(0)
    return (
    <Wrapper>
        <Header>
            <h2>친구초대</h2>
            <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
        </Header>
        <InviteMain/>
        <InviteLink/>
        <Footer Id={Id} Number={Number}/>
    </Wrapper>
    )
}
function Footer({Id,Number}){
    return (
        <FooterWrapper>
            <h2>{Id}님은</h2>
            <h2>현재까지 총 <span>{Number}회</span> 추가 적립 되었습니다.</h2>
        </FooterWrapper>
    )
}
export default Invite;