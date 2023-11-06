import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const NavNode = (props) => {
    const { currentNode, setNode } = useContext(MainContext);


    const { node } = props;

    const showNodeName = () => {
        // let contentContainer = document.getElementById("content-container");
        // console.log(setNode);
        // console.log(node);
        // contentContainer.classList.add("show-content-border");
        setNode(node.toLowerCase());
    }

    console.log(currentNode);

    return (
        <div className={`node-circle ${node}`}>
            <p className="node-letter" onClick={showNodeName}>{node[0]}</p>
        </div>
    );
}

export default NavNode;
