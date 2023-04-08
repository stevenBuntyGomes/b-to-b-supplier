import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import Table from './Table';
import {poColumn, data} from './Data'
import { Card, CardBody, Col, Container, Row, CardHeader , Label, Input, FormGroup} from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';

const PO = () => {
  return (
      <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="Manage Purchase Order" mainTitle="Manage Purchase Order" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="List of PO's received." span1={ProductListDesc} />
                            <CardHeader className='mt-0'>

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
                                <Table columns = {poColumn} data = {data} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default PO