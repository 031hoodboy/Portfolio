import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import {Title, Subtitle, TitleBlock} from '../components/ContentsAtoms';
import PointingImage from '../images/pointing.png';

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
            <ProjectWrapper>
                <PointingImg />
            </ProjectWrapper>
            <ProjectWrapper>
                
            </ProjectWrapper>
            <ProjectWrapper>
                
            </ProjectWrapper>
            <ProjectWrapper>
                
            </ProjectWrapper>
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

const ProjectWrapper = styled.div`
    width: 20vw;
    height: 13vw;
    min-width: 300px;
    min-height: 195px;
    margin: 5vw;
    border-radius: 8px;
`;

const PointingImg = styled.div`
    width: 100%;
    height: 100%;
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

