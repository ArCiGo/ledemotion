import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Status from '../Routes/Status.jsx';
import Info from 'material-ui-icons/Info';
import SingleColor from '../Routes/SingleColor.jsx';
import ColorLens from 'material-ui-icons/ColorLens';
import Transition from '../Routes/Transition.jsx';
import CompareArrows from 'material-ui-icons/CompareArrows';
import CustomImage from '../Routes/CustomImage.jsx';
import CropOriginal from 'material-ui-icons/CropOriginal';

const style = {
    overflow: 'visible',
    color: '#FFFFFF'
};

const routes = [
    {
        path: '/',
        exact: true,
        title: () => <Typography style={style} noWrap type='title' noWrap>Status</Typography>,
        main: () => <Status />,
        linkTo: '/',
        icon: () => <Info style = {{ color : '#689F38'}} />,
        iconText: 'Status'
    },
    {
        path : '/singlecolor',
        exact: true,
        title: () => <Typography style={style} noWrap type='title' noWrap>Single Color</Typography>,
        main: () => <SingleColor />,
        linkTo: 'singlecolor',
        icon: () => <ColorLens style = {{ color : '#689F38'}} />,
        iconText: 'Single Color'
    },
    {
        path : '/transition',
        exact: true,
        title: () => <Typography style={style} noWrap type='title' noWrap>Transition</Typography>,
        main: () => <Transition />,
        linkTo: 'transition',
        icon: () => <CompareArrows style = {{ color : '#689F38'}} />,
        iconText: 'Transition'
    },
    {
        path : '/customimage',
        exact: true,
        title: () => <Typography style={style} noWrap type='title' noWrap>Custom Image</Typography>,
        main: () => <CustomImage />,
        linkTo: 'customimage',
        icon: () => <CropOriginal style = {{ color : '#689F38'}} />,
        iconText: 'Custom Image'
    }
];

module.exports = routes;