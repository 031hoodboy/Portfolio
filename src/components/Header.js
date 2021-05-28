import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderBlock>
            <TitleWrapper>
                <Portfolio>
                    Portfolio
                </Portfolio>
                <Subtitle>
                    made with react
                </Subtitle>
            </TitleWrapper>
            <HeaderWrapper>
                <a href="https://github.com/031hoodboy" style={{textDecoration: 'none'}}>  
                    <Github>Github</Github>
                </a>
                <a href="mailto:littlepark0107@naver.com" style={{textDecoration: 'none'}}>
                    <Email>Email</Email>
                </a>
            </HeaderWrapper>
        </HeaderBlock>
    );
}

export default Header;

const HeaderBlock = styled.div`
    background-color: #050505;
    width: 60vw;
    height: 60px;
    padding: 0 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #171717;
    @media (max-width: 560px) {
    width: 100%;
    padding: 0;
    justify-content: space-around;
  }
`;

const HeaderWrapper = styled.div`
    display: flex;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: default;
`;

const Portfolio = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`;

const Github = styled.div`
    color: #fff;
    margin-right: 20px;
    text-decoration: none;
`;

const Email = styled.div`
    color: #fff;
`;

const Subtitle = styled.span`
    color: #b5b5b5;
    font-size: 12px;
    margin-left: 10px;
`;