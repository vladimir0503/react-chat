import React from 'react';
import classNames from 'classnames';
import { Time, IconRead } from '../index';

import { format } from 'date-fns';

import './DialogItem.scss';

const getAvatar = avatar => {
    if (avatar) {
        return <img
            src={avatar}
            alt='avatar'
        />;
    } else {
        // make avatar
        return <img
            src='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
            alt='avatar'
        />;
    };
};

const DialogItem = ({user, unreaded, isMe, created_at, text }) => (
    <div className={classNames('dialogs__item', {
        'dialogs__item--online': user.isOnline
    })}>
        <div className='dialogs__item-avatar'>
            {/* <img src={user.avatar} alt={`${user.fullName} avatar`} /> */}
            {getAvatar(user.avatar)}
        </div>
        <div className='dialogs__item-info'>
            <div className='dialogs__item-info-top'>
                <b>{user.fullName}</b>
                <span>
                    <Time date={created_at} />
                </span>
            </div>
            <div className='dialogs__item-info-bottom'>
                <p>{text}</p>
                {!!unreaded && <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>}
                {isMe && <IconRead isMe={true} isReaded={true} />}
            </div>
        </div>
    </div>
);

export default DialogItem;