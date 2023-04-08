import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import Table from './Table';
import {productSampleColumns, productSampleData} from './Data'
import { Card, CardBody, Col, Container, Row, CardHeader , Label, Input, FormGroup} from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';

const ProductSample = () => {
  return (
    <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="Product Samples" mainTitle="Product Samples" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="List of ready to sell product samples request and status." span1={ProductListDesc} />
                            <CardHeader className='mt-0'>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Udate Status
                                </Btn>
                                <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Email Buyer
                                </Btn>
                                <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faTrash}/> Cancle Sample
                                </Btn>
                                
                                <p>Check box the option to display the results in the grid. By default new supplier list will be displayed</p>
                                <Row>
                                    <Col xl = "8">
                                      <p>Check box the option to display the results in the grid. By default Sample requested from all the buyer will be displayed.</p>
                                        <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
                                            
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-1' type='checkbox' defaultChecked />
                                                <Label for='inline-1'>
                                                {Option}
                                                <span className='digits bg-success p-2 rounded'> {'Dispatched'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-1' type='checkbox' defaultChecked />
                                                <Label for='inline-1'>
                                                {Option}
                                                <span className='digits bg-danger p-2 rounded'> {'Canceled'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-1' type='checkbox' defaultChecked />
                                                <Label for='inline-1'>
                                                {Option}
                                                <span className='digits bg-warning p-2 rounded'> {'Pending'}</span>
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
                                <Table columns = {productSampleColumns} data = {productSampleData} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default ProductSample