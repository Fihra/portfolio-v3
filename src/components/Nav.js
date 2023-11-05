import React from 'react';
import NavNode from './NavNode';
import NodeLine from './NodeLine';

const Nav = () => {
    const nodes = ["About", "Contact"];



    return (
        <div className="nav-container">
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
        </div>
    );
}

export default Nav;
