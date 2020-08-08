import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'
import './SwipeButtons.css'
const SwipeButtons = () => {
    return (
        <div className="swipe-buttons">
            <IconButton className="swipe-button-repeat">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className="swipe-button-left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swipe-button-star">
                <StarIcon fontSize="large"></StarIcon>
            </IconButton>
            <IconButton className="swipe-button-right">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="swipe-button-flash">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>

        </div>
    )
}

export default SwipeButtons;