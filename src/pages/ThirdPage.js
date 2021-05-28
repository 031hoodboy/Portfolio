import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import {Title, Subtitle, TitleBlock} from '../components/ContentsAtoms';
import PointingImage from '../images/pointing.png';
import LoungeImage from '../images/lounge.png';
import NikeImage from '../images/nike.png';
import CodedeliveryImage from '../images/codedelivery.png';

const Profile = () => {
    return (
    <>
        <PageWrapper>
        <TitleBlock>
            <Title>Projects</Title>
            <Subtitle>Crafted for highly scalable, easily maintainable and highly performant React.js applications with a focus on best DX and best practices.</Subtitle>
        </TitleBlock>
        </PageWrapper>
        <ProjectBlock>
            <PointingBlock>
                <ProjectHover href="https://pointing.life/">
                    <Content>
                        포인팅 관리자페이지<br/>
                        바로가기
                    </Content>
                </ProjectHover>
            </PointingBlock>
            <LoungeBlock>
                <ProjectHover>
                    <Content>
                        라운지 앱개발<br/>
                        비공개
                    </Content>
                </ProjectHover>
            </LoungeBlock>
            <NikeBlock>
                <ProjectHover href="https://swooshcalendar.vercel.app/">
                    <Content>
                        나이키 드로우 캘린더<br/>
                        바로가기
                    </Content>
                </ProjectHover>
            </NikeBlock>
            <CodedeliveryBlock>
                <ProjectHover href="https://new-codedelivery.vercel.app/">
                    <Content>
                        코드딜리버리 랜딩페이지<br/>
                        바로가기
                    </Content>
                </ProjectHover>
            </CodedeliveryBlock>
        </ProjectBlock>
    </>
    );
}

export default Profile;

const ProjectBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
`;



const PointingBlock = styled.div`
    background: #fff;
    width: 20vw;
    height: 13vw;
    min-width: 300px;
    min-height: 195px;
    margin: 5vw;
    border-radius: 8px;
    background-image: url(${PointingImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 12px;

`;

const ProjectHover = styled.a`
    width: 20vw;
    height: 13vw;
    min-width: 300px;
    min-height: 195px;
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    &:hover{
        transition: all 0.7s ease-in-out;  
        background-color: #1a1a1a;
        display: flex;
        opacity: 0.9;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 30px;
    }
`;

const Content = styled.div`
    &:hover{

    }
`;

const LoungeBlock = styled(PointingBlock)`
    background-image: url(${LoungeImage});
`;

const NikeBlock = styled(PointingBlock)`
    background-image: url(${NikeImage});
`;


const CodedeliveryBlock = styled(PointingBlock)`
    background-image: url(${CodedeliveryImage});
`;


