import React from 'react';
import NavNode from './NavNode';
import NodeLine from './NodeLine';

const Nav = () => {
    const nodes = ["About", "Experience", "Contact", "Games", "Projects", "Music"];

    const showNodes = () => {
        return nodes.map((node, i) => {
            if(i >= nodes.length - 1){
                return <NavNode key={i} node={node}/>
            } else {
                return (
                    <>
                    <NavNode key={i} node={node}/>
                    <NodeLine key={node}/>
                    </>
                )
            }
        })
    }

    return (
        <nav className="nav-container">
            {showNodes()}
        </nav>
    );
}

export default Nav;
