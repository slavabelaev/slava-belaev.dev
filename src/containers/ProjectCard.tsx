import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Fade, Typography, styled} from '@mui/material';
import {Project} from '../types/models/Project';
import {fetchProjectPreviews} from '../services/github';

export type ProjectCardProps = {
    className?: string;
    project: Project;
}

const PreviewCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 200,
    backgroundPositionY: 'top',
    filter: 'brightness(.72)',
    transition: `${theme.transitions.duration.short}ms`,
    '&:hover': {
        filter: 'brightness(1)'
    }
}))

const Description = styled(Typography)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
}))

export default function ProjectCard({ className, project }: ProjectCardProps) {
    const [fadeIn, setFadeIn] = useState(false);
    const [previews, setPreviews] = useState<any[]>([]);
    const { id, description, html_url: sourceURL, homepage: demoURL, name } = project || {};

    useEffect(() => {
        fetchProjectPreviews(name)
            .then((previews) => {
                setPreviews(previews);
                setFadeIn(true);
            });
    }, [name]);

    const renderPreview = (imageURL: string, index: number) => {
        if (index === 0) return null;
        return (
            <a  key={`image-${id}-${imageURL}`}
                data-fancybox={id}
                rel="noopener"
                href={imageURL}
            />
        );
    }

    return (
        <Fade in={fadeIn} timeout={1000}>
            <Card className={className}>
                <a data-fancybox={id}
                   rel="noopener"
                   href={previews?.[0]}
                >
                    <PreviewCardMedia image={previews?.[0]}/>
                </a>
                <nav>
                    {previews.map(renderPreview)}
                </nav>
                <CardContent>
                    <Description>
                        {description}
                    </Description>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        target="_blank"
                        href={demoURL}
                        rel="noreferrer"
                        aria-label="Demo of Web App"
                    >
                        See demo
                    </Button>
                    <Button
                        color="primary"
                        target="_blank"
                        href={sourceURL}
                        rel="noreferrer"
                        aria-label="Source code"
                    >
                        Source
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    )
};
