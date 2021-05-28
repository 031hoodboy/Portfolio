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

const Profile = () => {
    return (
        <PageWrapper>
        <TitleBlock>
            <Title>Skills</Title>
            <Subtitle>Crafted for highly scalable, easily maintainable and highly performant React.js applications with a focus on best DX and best practices.</Subtitle>
            <InfoBlock>
                <TechWrapper>
                    <ReactLogo/>
                    <Wrapper>
                        <TechTitle>React</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <TsLogo/>
                    <Wrapper>
                        <TechTitle>Type script</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <JsLogo/>
                    <Wrapper>
                        <TechTitle>JavaScript</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <ReduxLogo/>
                    <Wrapper>
                        <TechTitle>Redux</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <StyledLogo/>
                    <Wrapper>
                        <TechTitle>Styled Component</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
                    </Wrapper>
                </TechWrapper>
                <TechWrapper>
                    <AntdLogo/>
                    <Wrapper>
                        <TechTitle>Ant Design</TechTitle>
                        <Content>Write composable CSS that’s co-located with your components for complete modularity.</Content>
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

const TechTitle = styled.div`
    font-size: 3vh;
    font-weight: 700;
    color: #fff;
`;
