import { H5 } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { CardHeader } from 'reactstrap';
// import { Btn } from "../../../../AbstractElements";
// import { Submit, Cancel } from "../../../../Constant";
import {Btn} from '../../../AbstractElements'
import {Submit, Cancel} from '../../../Constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faExclamation, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'

const HeaderCard = ({ title, span1, span2, mainClasses }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <CardHeader className={`${mainClasses ? mainClasses : ''}`}>
        <H5>{title}</H5>
        {/* {span1 ? <span>{span1}</span> : ''} */}
        {/* {span2 ? <span>{span2}</span> : ''} */}
        {/* ${process.env.PUBLIC_URL}/app/ecommerce/create-product/:layout */}
        
        
      </CardHeader>
    </Fragment>
  );
};

export default HeaderCard;
