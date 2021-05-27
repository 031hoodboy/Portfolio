import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import {Title, Subtitle, TitleBlock} from '../components/ContentsAtoms';
import ReactImage from '../images/reactlogo.png'
import TsImage from '../images/tslogo.png';
import JsImage from '../images/jslogo.png';
import ReduxImage from '../images/reduxlogo.png';
import StyledImage from '../images/styledlogo.png';
import AntdImage from '../images/antdlogo.png';

const Profile = () => {
    return (
        <PageWrapper>
        <TitleBlock>
            <Title>Skills</Title>
            <Subtitle>Crafted for highly scalable, easily maintainable and highly performant React.js applications with a focus on best DX and best practices.</Subtitle>
            <TechBlock>
            <TechWrapper>
                    <ReactLogo/>
                    <Wrapper>
                        <TechTitle>React</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <TsLogo/>
                    <Wrapper>
                        <TechTitle>Type script</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <JsLogo/>
                    <Wrapper>
                        <TechTitle>JavaScript</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <ReduxLogo/>
                    <Wrapper>
                        <TechTitle>Redux</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <StyledLogo/>
                    <Wrapper>
                        <TechTitle>Styled Component</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <AntdLogo/>
                    <Wrapper>
                        <TechTitle>Ant Design</TechTitle>
                        <TechInfo>Write composable CSS that’s co-located with your components for complete modularity.</TechInfo>
                    </Wrapper>
                </TechWrapper>
            </TechBlock>
        </TitleBlock>
        </PageWrapper>
    );
}

export default Profile;

const SkillsBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 560px) {
        width: 90%;
        margin: 0 auto;
  } 
`;

const TechBlock = styled.div`
    padding: 5vh 0;
    margin-left: 3vw;
`;

const TechWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 60vw;
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
    padding: 5vh 0;
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

const TechTitle = styled.div`
    font-size: 3vh;
    font-weight: 700;
    color: #fff;

`;


const TechInfo = styled.div`
    margin-top: 2vh;
    color: #fff;
`;
