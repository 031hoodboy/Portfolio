import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import {
  Title,
  Subtitle,
  TitleBlock,
  Content,
  InfoBlock,
} from "../components/ContentsAtoms";
import ReactImage from "../images/reactlogo.png";
import TsImage from "../images/tslogo.png";
import JsImage from "../images/jslogo.png";
import ReduxImage from "../images/reduxlogo.png";
import StyledImage from "../images/styledlogo.png";
import AntdImage from "../images/antdlogo.png";

const Profile = () => {
  return (
    <PageWrapper>
      <TitleBlock>
        <Title>Skills</Title>
        <Subtitle>
          These are skills that I have to learn to shape my own thoughts. Not
          all technologies can be used professionally, but they can be used
          without much difficulty in proceeding with the project.
        </Subtitle>
        <InfoBlock>
          <TechWrapper>
            <ReactLogo />
            <Wrapper>
              <TechTitle>React</TechTitle>
              <Content>
                React is developed on a component basis to facilitate
                productivity and maintenance.
              </Content>
            </Wrapper>
          </TechWrapper>
          <TechWrapper>
            <TsLogo />
            <Wrapper>
              <TechTitle>TypeScript</TechTitle>
              <Content>
                TypeScript supports static types, allowing errors to be detected
                in the compilation phase.
              </Content>
            </Wrapper>
          </TechWrapper>
          <TechWrapper>
            <JsLogo />
            <Wrapper>
              <TechTitle>JavaScript</TechTitle>
              <Content>
                It is an essential language for creating a dynamic web and is
                essential for React and Typescripts.
              </Content>
            </Wrapper>
          </TechWrapper>
          <TechWrapper>
            <ReduxLogo />
            <Wrapper>
              <TechTitle>Redux</TechTitle>
              <Content>Use to efficiently manage state in a project.</Content>
            </Wrapper>
          </TechWrapper>
          <TechWrapper>
            <StyledLogo />
            <Wrapper>
              <TechTitle>StyledComponent</TechTitle>
              <Content>
                It can be changed by lowering the props fluidly, inheriting
                styles, declaring variables, etc.
              </Content>
            </Wrapper>
          </TechWrapper>
          <TechWrapper>
            <AntdLogo />
            <Wrapper>
              <TechTitle>AntDesign</TechTitle>
              <Content>
                Ant Design is a clean, sophisticated design that meets both web
                and mobile at the same time.
              </Content>
            </Wrapper>
          </TechWrapper>
        </InfoBlock>
      </TitleBlock>
    </PageWrapper>
  );
};

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
