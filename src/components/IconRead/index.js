import React from 'react';
import PropTypes from 'prop-types';
import readedSvg from '../../assets/img/readed.svg';
import noReadedSvg from '../../assets/img/noreaded.svg';

import './IconRead.scss';

const IconRead = ({ isMe, isReaded }) => {
    return (
        <>
            {isMe && isReaded
                ? (<div className='icon-read__checked'><img src={readedSvg} alt='Readed icon' /></div>)
                : (<div className='no'><img src={noReadedSvg} alt='No readed icon' /></div>)
            }
        </>
    );
};

IconRead.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

export default IconRead;