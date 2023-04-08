import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faExclamation, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { supplierColumn, settingsData } from './SBTable';
const Supplier = () => {
  return (
    <Fragment>
        <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="Feedback" mainTitle="Feedback" />
        <CardHeader className='pt-0'>
            <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-feedback-supplier/Dubai`} attrBtn={{ color: "dark", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faFile}/> Create FeedBack
                                </Btn>
                                <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faExclamation}/> Delete 
                                </Btn>
                                <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Publish FeedBack
                                </Btn>
            <Row>
                <Col xl = "8">
                    <p>You can Provide your feedback in this page. You can provide feedback only with completing the project or cancled. Your feedback will be visable to public.</p>
                </Col>
                <Col xl = "4">
                    <FormGroup className='mt-3'>
                        <Input className="form-control" type="text" placeholder="Search" />
                    </FormGroup>
                </Col>
            </Row>
        </CardHeader>
        <CardBody>
            <div className='table-responsive product-table'>
                <DataTable noHeader pagination paginationServer columns={supplierColumn} data={settingsData} highlightOnHover={true} striped={true} responsive={true} />
            </div>
            {/* <ProductTableData /> */}
        </CardBody>
    </Fragment>
    )
}

export default Supplier