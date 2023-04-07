import React from 'react';

const H5 = (props) =>{
    return <h5 className = 'mb-3' {...props.attrH5}>{props.children}</h5>;
};

export default H5;