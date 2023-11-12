import React, { useState } from 'react';

const SkillCard = (props) => {
    const [hover, setHover] = useState(false);
    const { logo, name } = props.props;

    const onHover = () => {
        setHover(true);
    }

    const onHoverOver = () =>{
        setHover(false);
    }
    return(
        <>
            <li><img src={logo} alt={name} onMouseEnter={onHover} onMouseLeave={onHoverOver}/>
            {hover && <div className="skill-info"><p>{name}</p></div>}
            </li>
            
        </>
    )
}

export default SkillCard;