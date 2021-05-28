import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
            <FooterBlock>
                <NameWrapper>
                    <Name>Park Jung Hyeon,</Name>
                    <Nickname>HoodBoy</Nickname>
                </NameWrapper>
                <Br/>
                <ContentBlock>
                <ContentWrapper>
                    <Content href="tel:010-7510-6589">Phone</Content>
                    <Content href="https://www.instagram.com/031_hood_boy/">Instagram</Content>
                    <Content href="https://open.kakao.com/o/sE5ZIKdd">Kakaotalk</Content>
                </ContentWrapper>
                    <Copyright>Copyright ⓒ 2021 HoodBoy All Rights Reserved.</Copyright>
                </ContentBlock>
            </FooterBlock>
    );
}

export default Footer;

const FooterBlock = styled.div`
    background-color: #050505;
    width: 60vw;
    height: 200px;
    padding: 0 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    border-top: 1px solid #171717;
    @media (max-width: 560px) {
    width: 90%;
    padding: 0;
  }
`;

const ContentBlock = styled.div`
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const Content = styled.a`
    color: #5e5e5e;
    font-size: 14px;
    margin-right: 12px;
    text-decoration: none;
    &:hover{
        color: #b8b8b8;
        transition: all 0.2s ease-in-out;  
    }
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #7d7d7d;
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    @media (max-width: 560px) {
    width: 37vw;
    font-size: 16px;
  }
  &:hover{
        color: #d4d4d4;
        transition: all 0.2s ease-in-out;  
    }
`;

const Nickname = styled.div`
    color: #5e5e5e;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
    @media (max-width: 560px) {
    width: 60vw;
    font-size: 12px;
    }
    &:hover{
        color: #b8b8b8;
        transition: all 0.2s ease-in-out;  
    }
`;

const Br = styled.div`
    width: 100%;                    
    border-top: 0.1px solid #2e2e2e;    
    margin: 2vh 0;

`;

const Copyright = styled(Content)`
    margin-top: 5px;
`;