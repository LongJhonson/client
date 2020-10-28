import React from 'react';
import Logo from '../../../../assets/img/png/logo2.png';
import Social from '../../SocialLinks';

import "./MyInfo.scss";

function MyInfo(props) {
    return (
        <div className="my-info">
            <img src={Logo} alt="Mikel Alonso" />
            <h4>Entra en el mundo del desarrollo web, disfruta creando proyectos de todo tipo</h4>
            <Social />
        </div>
    );
}

export default MyInfo;