import React, { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const NavNode = (props) => {
    const { setNode, currentNode } = useContext(MainContext);
    const { node } = props;
    const [hover, setHover] = useState(false);

    const showNodeName = () => {
        setNode(node.toLowerCase());
        window.scrollTo(0, 0);
    }

    const onHover = () => {
        console.log(node)
        setHover(true);
    }

    const onHoverOver = () =>{
        setHover(false);
    }

    return (
        <div className={`node-circle ${node} ${node.toLowerCase() === currentNode ? "active-node" : ""}`} onMouseEnter={onHover} onMouseLeave={onHoverOver}>
            <p className="node-letter" onClick={showNodeName}>{node[0]}</p>
            {hover && <div className="node-info"><p>{node.slice(1)}</p></div>}
        </div>
    );
}

export default NavNode;
