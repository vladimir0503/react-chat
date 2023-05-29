import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Time, IconRead } from '../index';

import waveSvg from '../../assets/img/wave.svg';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/pause.svg';

import './Message.scss';

let intervalId;

const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping,
    audio
}) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState('0.00');

    const playRef = React.useRef(null);

    // const fillProgress = duration => {
    //     const time = duration * 15;
    //     const step = (100 - 0) / time;
    //     intervalId = setInterval(() => {
    //         setProgress(progress => progress + step);
    //     }, time);
    // };

    const fillProgress = audio => {
        const time = audio.duration * 15;
        const step = (100 - 0) / time;
        intervalId = setInterval(() => {
            setProgress(progress => progress + step);
            setCurrentTime(audio.currentTime.toFixed(2));
        }, time);
    };

    const togglePlay = () => {
        playRef.current.volume = '0.1';

        const duration = playRef.current.duration;

        setIsPlaying(!isPlaying);

        if (!isPlaying) {
            playRef.current.play();
            // fillProgress(duration);
            fillProgress(playRef.current);
        } else {
            playRef.current.pause();
            clearInterval(intervalId);
        };
    };

    const clear = () => {
        setIsPlaying(false);
        setProgress(0);
        clearInterval(intervalId);
        setCurrentTime('0.00');
    };

    React.useEffect(() => {
        playRef.current.addEventListener('ended', clear);
    }, []);

    return (
        <div className={classNames('message', {
            'message--isme': isMe,
            'message-is-typing': isTyping,
            'message-image': attachments?.length === 1,
            'message--is-audio': audio
        })}>
            <div className='message__avatar'>
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className='message__content'>
                {(audio || text || isTyping)
                    && <div className='message__bubble'>
                        {/* {text && <p className='message__text'>{text}</p>} */}
                        {/* {isTyping
                            && <div className='message__typing'>
                                <span class="circle scaling"></span>
                                <span class="circle scaling"></span>
                                <span class="circle scaling"></span>
                            </div>
                        } */}
                        {
                            isTyping
                                ? <div className='message__typing'>
                                    <span class="circle scaling"></span>
                                    <span class="circle scaling"></span>
                                    <span class="circle scaling"></span>
                                </div>
                                : text ? <p className='message__text'>{text}</p>
                                    : <div className='message__audio'>
                                        <audio ref={playRef} src={audio} preload='auto' />
                                        <div className='message__audio-progress' style={{ width: `${progress}%` }}></div>
                                        <div className='message__audio-info'>
                                            <div className='message__audio-btn'>
                                                <button onClick={togglePlay}>
                                                    {
                                                        isPlaying
                                                            ? <img src={pause} alt='pause' />
                                                            : <img src={play} alt='play' />
                                                    }
                                                </button>
                                            </div>
                                            <div className="message__audio-wave">
                                                <img src={waveSvg} alt='Wave svg' />
                                            </div>
                                            <span className='message__audio-duration'>{currentTime}</span>
                                        </div>
                                    </div>
                        }
                    </div>}
                {attachments
                    && (<div className='message__attachments'>
                        <div className='message__attachments--item'>
                            {attachments.map(({ filename, url }, i) => (
                                <img key={`${i}`} src={url} alt={filename} />
                            ))}
                        </div>
                    </div>
                    )}
                {date && <Time date={date} textFormat={true} />}
            </div>
            <IconRead isMe={isMe} isReaded={isReaded} />
        </div>
    );
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
};

export default Message;