import React from 'react';

const NavNode = (props) => {
    const { node } = props;

    const showNodeName = () => {
        let contentContainer = document.getElementById("content-container");

        contentContainer.classList.add("show-content-border");
    }

    return (
        <div className={`node-circle ${node}`}>
            <p className="node-letter" onClick={showNodeName}>{node[0]}</p>
        </div>
    );
}

export default NavNode;
