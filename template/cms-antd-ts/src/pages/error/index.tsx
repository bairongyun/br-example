import React, { useState } from 'react';

const Error: React.FC = () => {
    const [animated, setAnimated] = useState<string>('');

    const enter = () => {
        setAnimated('hinge')
    };

    return (
        <div
            className='center'
            style={{
                height: '100%',
                background: '#ececec',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img
                src='//img.shurongdai.cn/group1/M00/00/09/wKgX4VrPGuyAYWW_AAAkH69jXC0966.png'
                alt='404'
                className={`animated swing ${animated}`}
                onMouseEnter={enter}
            />
        </div>
    );
}

export default Error;
