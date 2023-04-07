import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Btn = (props) =>{
    const navigate = useNavigate();
    return <Button onClick = {() => navigate(props.link)} {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;