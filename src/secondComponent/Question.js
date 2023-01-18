
import styled from "styled-components";
import HeaderBox from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;

`;
const QuestionWrapper = styled.div`
background-color: white;
margin-bottom: 15px;
`
const Input =styled.div`
padding: 15px;
position: relative;
input{
    padding-left: 50px;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background-color: #f0f0f0;
    border: none;
    :focus{
        outline: none;
    }
}
.search{
    position: absolute;
    left:35px;
    top:26px
}
`
function Question(){
    return (
        <Wrapper>
            <HeaderBox title={"자주 묻는 질문"}/>
            <QuestionWrapper>
                <Input>
                    <input/>
                    <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
                </Input>
                
                
            </QuestionWrapper>
        </Wrapper>
        )
}

export default Question;