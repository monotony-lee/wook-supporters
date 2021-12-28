import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import './header.css';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  /* z-index: 5; */
`;

///////////////////////////////////

const Snowflake = ({ style }) => {
  return (
    <p
      className="snow-flake"
      style={{
        opacity: 0,
        animationDelay: style.animationDelay,
        fontSize: style.fontSize,
      }}
    >
      {'\u2745'}
    </p>
  );
};

const makeSnowFlakes = () => {
  let animationDelay = '0s'; // 기본 값은 0초이다.
  let fontSize = '14px'; // 기본 폰트사이즈는 14px로 했다.
  const arr = Array.from('Merry Christmas'); // length가 15인 array가 생긴다.

  // arr의 length 만큼의 <SnowFlake />를 반환한다.
  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자
    fontSize = `${Math.floor(Math.random() * 10) + 10}px`; // 10~20 사이의 정수
    const style = {
      animationDelay,
      fontSize,
    };
    return <Snowflake key={i} style={style} />;
  });
};

const FallingSnow = () => (
  <div className="snow-container" style={{ width: '100%' }}>
    {makeSnowFlakes()}
  </div>
);

const SnowContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  /* height: 900vh; */
`;
///////////////////////////////////////////////////////////////////////////
/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 1rem;
`;

const UserInfo = styled.div`
  font-weight: 700;
  color: violet;
  margin-right: 1rem;
  font-size: 20px;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <SnowContainer>
          <FallingSnow></FallingSnow>
        </SnowContainer>
        <SnowContainer>
          <FallingSnow></FallingSnow>
        </SnowContainer>
        <Wrapper>
          <Link
            to="/"
            className="logo"
            style={{ zIndex: '2', letterSpacing: '0px', fontSize: '1.5rem' }}
          >
            <span style={{ marginLeft: '20px' }}>WOOK</span>
            <br></br>
            <span>Supporters</span>
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button
                onClick={onLogout}
                style={{ zIndex: '2', backgroundColor: '#1B9CFC' }}
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button
                to="/login"
                style={{ zIndex: '2', backgroundColor: '#1B9CFC' }}
              >
                로그인
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
