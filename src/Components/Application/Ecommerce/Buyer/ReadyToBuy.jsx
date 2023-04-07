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
import { ReadyToBuyColumns, readyToBuyData } from './BuyerTableList';

const ReadyToBuy = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-buyer/Dubai`} title="List Of New Suppliers" mainTitle="Ready To Buy" />
      <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="List of Inquiry received from buyer for ready stocks." span1="" />
                            <CardHeader className='pt-0'>
                                <div className='mb-3'>
                                  <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-product/Dubai`} attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                      <FontAwesomeIcon className='me-2' icon={faThumbsUp}/> Approve
                                  </Btn>
                                  <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                      <FontAwesomeIcon className='me-2' icon={faThumbsDown}/> Reject
                                  </Btn>
                                </div>
                                
                                <Row>
                                    <Col xl = "8">
                                        
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
                                    <DataTable noHeader pagination paginationServer columns={ReadyToBuyColumns} data={readyToBuyData} highlightOnHover={true} striped={true} responsive={true} />
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

export default ReadyToBuy