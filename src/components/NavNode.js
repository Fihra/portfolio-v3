import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const NavNode = (props) => {
    const { setNode, currentNode } = useContext(MainContext);
    const { node, bgColor } = props;

    console.log(bgColor);

    const showNodeName = () => {
        setNode(node.toLowerCase());
        window.scrollTo(0, 0);
    }

    return (
        <div className={`node-circle ${node} ${node.toLowerCase() === currentNode ? "active-node" : ""}`}>
            <p className="node-letter" onClick={showNodeName}>{node[0]}</p>
        </div>
    );
}

export default NavNode;
