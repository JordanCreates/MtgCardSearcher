import React from 'react';
import tippy from 'tippy.js';

tippy();

const Header = () => {
    return(
        <div className="ui menu">
            <div className="header item">
                MtG Cards
            </div>
            <div className="header item">
                <button data-tippy="Tooltip" id="tool">Click me!</button>
            </div>
        </div>
    );
}

export default Header;
