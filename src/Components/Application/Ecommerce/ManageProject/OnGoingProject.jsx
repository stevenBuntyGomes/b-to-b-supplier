import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import Table from './Table';
import {createQuoteColumn, data} from './Data'
import { Card, CardBody, Col, Container, Row, CardHeader , Label, Input, FormGroup} from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';

const OnGoingProject = () => {
  return (
    <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="On Going Project" mainTitle="On Going Project" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard className = "pb-0" title="List of On Going Project." span1="List of On Going Project." />
                            
                            <CardHeader className='mt-0 pt-0'>
                              <Btn attrBtn={{ color: "warning", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Update Project Status
                                </Btn>
                                <Row>
                                    <Col xl = "8">
                                      
                                    </Col>
                                    <Col xl = "4">
                                        <FormGroup className=''>
                                            <Input className="form-control" type="text" placeholder="Search" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardHeader>
                            
                            <CardBody>
                                <Table columns = {createQuoteColumn} data = {data} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default OnGoingProject