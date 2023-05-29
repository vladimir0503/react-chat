import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format, differenceInHours, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

const Time = ({ date, textFormat }) => {

    const parseDate = parseISO(date);
    const diffInHours = differenceInHours(new Date(), parseDate);

    if (textFormat) {
        return formatDistanceToNow(parseDate, { addSuffix: true, locale: ru });
    } else if (diffInHours < 24) {
        return format(parseDate, 'HH:mm');
    } else {
        return format(parseDate, 'MM.dd.yyyy');
    };
};

Time.propTypes = {
    date: PropTypes.string
};

export default Time;