import React from 'react';
import { orderBy } from 'lodash';
import { DialogItem } from '../index';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => {

    return (
        <div className='dialogs'>
            {orderBy(items, 'created_at', 'desc').map((item, i) => (
                <DialogItem
                    key={item._id}
                    unreaded={0}
                    isMe={item.user._id === userId}
                    {...item}
                />
            ))}
        </div>
    );
};

export default Dialogs;