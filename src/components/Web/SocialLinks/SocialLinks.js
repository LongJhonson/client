import React from 'react';
import { ReactComponent as YoutubeIcon } from '../../../assets/img/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/svg/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/img/svg/linkedin.svg';
import './SocialLinks.scss';
import { Link } from 'react-router-dom';


export default function SocialLinks(params) {
    return (
        <div className="social-links">
            <a href="#" className="youtube" target="_blank">
                <YoutubeIcon />
            </a>

            <a href="#" className="twitter" target="_blank">
                <TwitterIcon />
            </a>

            <a href="#" className="facebook" target="_blank">
                <FacebookIcon />
            </a>

            <a href="#" className="linkedin" target="_blank">
                <LinkedinIcon />
            </a>
        </div>

    )
};
