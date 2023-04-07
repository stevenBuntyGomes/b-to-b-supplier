import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faExclamation, } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { NewBuyerColumns, newBuyerData } from './BuyerTableList';
const NewBuyerList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-buyer/Dubai`} title="List Of New Suppliers" mainTitle="List Of New Buyer" />
      <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="List of Suppilers registered and Status." span1="" />
                            <CardHeader className='pt-0'>
                                <div className='mb-3'>
                                  <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-product/Dubai`} attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                      <FontAwesomeIcon className='me-2' icon={faThumbsUp}/> Approve
                                  </Btn>
                                  <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                      <FontAwesomeIcon className='me-2' icon={faThumbsDown}/> Reject
                                  </Btn>
                                </div>
                                <p>Check box the option to display the results in the grid. By default new supplier list will be displayed</p>
                                <Row>
                                    <Col xl = "8">
                                        <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-1' type='checkbox' defaultChecked />
                                                <Label for='inline-1'>
                                                {Option}
                                                <span className='digits bg-warning p-2 rounded'> {'New Supplier'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-2' type='checkbox' defaultChecked />
                                                <Label for='inline-2'>
                                                {Option}
                                                <span className='digits bg-success p-2 rounded'> {'Approved'}</span>
                                                </Label>
                                            </div>
                                            <div className='checkbox checkbox-dark'>
                                                <Input id='inline-3' type='checkbox' defaultChecked />
                                                <Label for='inline-3'>
                                                {Option}
                                                <span className='digits bg-danger p-2 rounded'> {'Rejected'}</span>
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
                                <div className='table-responsive product-table'>
                                    <DataTable noHeader pagination paginationServer columns={NewBuyerColumns} data={newBuyerData} highlightOnHover={true} striped={true} responsive={true} />
                                </div>
                                {/* <ProductTableData /> */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </Fragment>
  )
}

export default NewBuyerList