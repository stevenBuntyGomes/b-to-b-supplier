import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import Table from './Table';
import {ViewRFQColumns, data} from './Data'
import { Card, CardBody, Col, Container, Row, CardHeader , Label, Input, FormGroup} from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faExclamation, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';

const ViewRFQ = () => {
  return (
    <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="Ready To Sell" mainTitle="Ready To Sell" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="List of Inquiry received from the buyer in this page." span1="List of Inquiry received from the buyer in this page." />
                            <CardHeader className='mt-0'>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Submit Quote
                                </Btn>
                                <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faExclamation}/> Reject Inquery
                                </Btn>
                                <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Email Buyer For Certification
                                </Btn>
                                <p>Check box the option to display the results in the grid. By default Inquiry received from Buyer will be displayed.</p>
                                <Row>
                                    <Col xl = "8">
                                        <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-1' type='checkbox' defaultChecked />
                                                <Label for='inline-1'>
                                                {Option}
                                                <span className='digits bg-dark p-2 rounded'> {'Open Inquiry'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-2' type='checkbox' defaultChecked />
                                                <Label for='inline-2'>
                                                {Option}
                                                <span className='digits bg-success p-2 rounded'> {'Submitted Quote'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-3' type='checkbox' defaultChecked />
                                                <Label for='inline-3'>
                                                {Option}
                                                <span className='digits bg-danger p-2 rounded'> {'Rejected Inquiry'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-3' type='checkbox' defaultChecked />
                                                <Label for='inline-3'>
                                                {Option}
                                                <span className='digits bg-warning p-2 rounded'> {'Draft'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-3' type='checkbox' defaultChecked />
                                                <Label for='inline-3'>
                                                {Option}
                                                <span className='digits bg-danger p-2 rounded'> {'Deleted'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-3' type='checkbox' defaultChecked />
                                                <Label for='inline-3'>
                                                {Option}
                                                <span className='digits bg-danger p-2 rounded'> {'Select All'}</span>
                                                </Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl = "4">
                                        <FormGroup className='mt-3'>
                                            <Input className="form-control" type="text" placeholder="Search" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardHeader>
                            
                            <CardBody>
                                <Table columns = {ViewRFQColumns} data = {data} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default ViewRFQ