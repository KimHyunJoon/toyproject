import { Link, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const BoxWrapper = styled.div`
  background-color: white;
  margin: 15px 0px;
`;
const Box = styled.div`
  a {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-top: 0.1px solid #f0f0f0;
    height: 50px;
    cursor: pointer;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 13px;
        height: 13px;
      }
      :first-child {
        display: flex;
        img {
          margin-right: 10px;
        }
      }
    }
  }
`;
const AskWrapper = styled.div`
  background-color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Question = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: bolder;
  }
`;

function MyInfo() {
  return (
    <Wrapper>
      <BoxWrapper>
        <Box>
          <Link to="/Account">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/account.png`}
              />
              <p>계정관리</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Invite">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/invite.png`} />
              <p>친구초대</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Donate">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/donate.png`} />
              <p>기부내역</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Announce">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/notice.png`} />
              <p>알림설정</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Box>
          <Link to="/Version">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/version.png`}
              />
              <p>버전정보</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Notice">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/version.png`}
              />
              <p>공지사항</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Event">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/event.png`} />
              <p>이벤트</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link to="/Term">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/term.png`} />
              <p>이용약관</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Box>
          <Link to="/Question">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/question_1.png`}
              />
              <p>자주 묻는 질문</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
        <Box>
          <Link>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/cashCow.png`}
              />
              <p>오늘뭐샀니 사용법</p>
            </div>
            <div>
              <a>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
                />
              </a>
            </div>
          </Link>
        </Box>
      </BoxWrapper>
      <AskWrapper>
        <Question>
          <h2>문의하기</h2>
        </Question>
      </AskWrapper>
    </Wrapper>
  );
}

export default MyInfo;
