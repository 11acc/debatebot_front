
import React from 'react';
import moment from 'moment';

import Comment from '../Comment/Comment';

import { ReactComponent as EyeIcon } from '../../assets/eye.svg';
import { ReactComponent as Lock } from '../../assets/lock.svg';
import { ReactComponent as Person } from '../../assets/person.svg';
import { ReactComponent as Clock } from '../../assets/time.svg';

import './TopThread.css';

const TopThread = ({ title, description, author, phrase, pfp, timestamp, views, locked }) => {
    const timeAgo = moment(timestamp).fromNow();

    return (
        <>
            <div className='thread_ttl_space'>
                <div className='th_title'>
                    <h1>{title}</h1>
                </div>
                <div className='th_author'>
                    <span>
                        <Person className="icon" />
                        {author}
                    </span>
                    ·
                    <span>
                        <Clock className="icon" />
                        {timeAgo}
                    </span>
                </div>
                {(locked && (
                    <div className='locked_thread'>
                        <div className='lock_wrp'>
                            <Lock className="icon" />
                            Not open for replies
                        </div>
                    </div>
                ))}
                <Comment author={author} phrase={phrase} pfp={pfp} content={description} timestamp={timestamp} />
            </div>
        </>
    );
}

export default TopThread;