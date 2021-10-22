import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {Project} from '../types/models/Project';
import ProjectCard from './ProjectCard';
import {styled} from '@mui/styles';
import {fetchProjects} from '../services/github';

const ProjectsGrid = styled(Grid)(({ theme }) => ({
}))

const ProjectGridItem = styled(Grid)(({ theme }) => ({
    width: '100%',
    '@media (min-width: 600px)': { maxWidth: '50%' },
    '@media (min-width: 840px)': { maxWidth: '33.3333%' },
    '@media (min-width: 1280px)': { maxWidth: '25%' },
}))

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        fetchProjects().then(setProjects)
    }, [])

    const renderItem = (project: Project) => {
        if (!project.homepage) return null;

        return (
            <ProjectGridItem key={project.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <ProjectCard project={project} />
            </ProjectGridItem>
        )
    }

    return (
        <ProjectsGrid container spacing={3}>
            {projects?.map(renderItem)}
        </ProjectsGrid>
    )
};
