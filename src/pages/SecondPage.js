import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import {Title, Subtitle, TitleBlock, Content, InfoBlock} from '../components/ContentsAtoms';
import ReactImage from '../images/reactlogo.png'
import TsImage from '../images/tslogo.png';
import JsImage from '../images/jslogo.png';
import ReduxImage from '../images/reduxlogo.png';
import StyledImage from '../images/styledlogo.png';
import AntdImage from '../images/antdlogo.png';
import MemoryImage from '../images/memorylogo.png';
import DusImage from '../images/duslogo.png';

const Profile = () => {
    return (
        <PageWrapper>
        <TitleBlock>
            <Title>Skills</Title>
            <Subtitle>These are skills that I have to learn to shape my own thoughts. Not all technologies can be used professionally, but they can be used without much difficulty in proceeding with the project.</Subtitle>
            <InfoBlock>
                <TechWrapper>
                    <AntdLogo/>
                    <Wrapper>
                        <TechTitle>동북고등학교</TechTitle>
                        <Content>동북고등학교 1985년 졸업</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <ReactLogo/>
                    <Wrapper>
                        <TechTitle>연세대학교</TechTitle>
                        <Content>연세대학교에서 북한학 전공</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <TsLogo/>
                    <Wrapper>
                        <TechTitle>가천대학교</TechTitle>
                        <Content>가천대학교에서 국어국문학전공 전공, 문학박사 현대시, 현대문학도 전공함 1994년~1999년</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <DusLogo/>
                    <Wrapper>
                        <TechTitle>연대한국학교</TechTitle>
                        <Content>연대한국학교에서 2014년 ~ 2016년 근무</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <JsLogo/>
                    <Wrapper>
                        <TechTitle>한국디지털미디어고등학교</TechTitle>
                        <Content>한국디지털미디어고등학교 국어교사</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <ReduxLogo/>
                    <Wrapper>
                        <TechTitle>4.16 교육연구소</TechTitle>
                        <Content>4.16 교육연구소 연구소 소장</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <MemoryLogo/>
                    <Wrapper>
                        <TechTitle>4.16 기억저장소</TechTitle>
                        <Content>4.16 기억저장소 운영위원</Content>
                    </Wrapper>
                </TechWrapper>
            </InfoBlock>
        </TitleBlock>
        </PageWrapper>
    );
}

export default Profile;

const TechWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 60vw;
    padding: 5vh 0;
    @media (max-width: 560px) {
        width: 100%;
  } 
`;

const Wrapper = styled.div`
    padding: 0 3vw;
    height: 100%;
`;

const TsLogo = styled.div`
    width: 5vw;
    height: 5vw;
    min-width: 80px;
    min-height: 80px;
    background-image: url(${TsImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ReactLogo = styled(TsLogo)`
    background-image: url(${ReactImage});
`;

const JsLogo = styled(TsLogo)`
    background-image: url(${JsImage});
`;

const StyledLogo = styled(TsLogo)`
    background-image: url(${StyledImage});
`;

const AntdLogo = styled(TsLogo)`
    background-image: url(${AntdImage});
`;

const ReduxLogo = styled(TsLogo)`
    background-image: url(${ReduxImage});
`;

const MemoryLogo = styled(TsLogo)`
    background-image: url(${MemoryImage});
`;

const DusLogo = styled(TsLogo)`
    background-image: url(${DusImage});
`;

const TechTitle = styled.div`
    font-size: 3vh;
    font-weight: 700;
    color: #fff;
`;
