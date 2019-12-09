import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css'

export const CheckBox = ({ active, handleClick }) => {

    useEffect(() => { }, [active])
    const [fill, toggle] = useState(active);

    const props = useSpring({ width: fill ? 30 : 0, height: fill ? 30 : 0/*, config: { duration: 1000 }*/ })

    const click = () => {
        handleClick();
        toggle(!fill)
    }

    return (
        <div className="checkbox" onClick={click} >
            <animated.div className="checkbox-fill" style={props} />
        </div>
    )
}
