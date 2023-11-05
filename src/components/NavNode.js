import React from 'react';

const NavNode = (props) => {
    const { node } = props;

    const showNodeName = () => {
        console.log(node);
    }

    return (
        <div className={`node-circle ${node}`}>
            <p className="node-letter" onClick={showNodeName}>{node[0]}</p>
        </div>
    );
}

export default NavNode;
