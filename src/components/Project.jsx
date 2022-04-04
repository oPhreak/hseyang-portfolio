import React from 'react';
import Image from 'react-bootstrap/Image';

import { makeStyles } from '@mui/styles';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/Youtube';
import GitHubIcon from '@mui/icons-material/GitHub';

import TypeFaster from './TypeFaster';

import './styles/Project.css';

function Project(props) {

    /* Passed objects should be in the following format:
        {
            title: string
            description: string
            image: string
            links: {
                Github: string
                Website: string
                YouTube: string
            }
        }
    */

        const useClasses = makeStyles(theme => ({
            root: {
                "&:hover": {
                    color: '#da6d15',
                },
                color: '#c06014'
            },
        }))

        const classes = useClasses()

        function chooseImage() {
            if (props.proj.image === 'typefaster') {
                return <TypeFaster />;
            }
            else {
                return <Image src={props.proj.image} fluid />;
            }
        }
    return
    ;
}

export default Project;