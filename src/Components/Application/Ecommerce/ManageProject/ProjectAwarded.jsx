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

const ProjectAwarded = () => {
  return (
        <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="Project Awarded" mainTitle="Project Awarded" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard className = "pb-0" title="List of Projects Awarded." span1="List of Projects Awarded." />
                            <CardHeader className='mt-0 pt-0'>
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

export default ProjectAwarded