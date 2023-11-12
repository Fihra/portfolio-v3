import React from 'react';
import NavNode from './NavNode';
import NodeLine from './NodeLine';

const Nav = () => {
    const nodes = ["About", "Resume", "Contact", "Games", "Projects", "Music"];

    const showNodes = () => {
        return nodes.map((node, i) => {
            if(i >= nodes.length - 1){
                return <NavNode key={i} node={node}/>
            } else {
                return (
                    <>
                    <NavNode key={i} node={node}/>
                    <NodeLine/>
                    </>
                )
            }
        })
    }

    return (
        <nav className="nav-container">
            {/* <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/>
            <NodeLine/>
            <NavNode/> */}
            {showNodes()}
        </nav>
    );
}

export default Nav;
