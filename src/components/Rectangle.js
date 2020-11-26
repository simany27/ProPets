import React from 'react';

const Rectangle = (props) => {

    const classRectangle = props.pos+" "+"rectangle_white";

    return (
        <div>
            <div className={classRectangle}/>
        </div>
    );
};

export default Rectangle;