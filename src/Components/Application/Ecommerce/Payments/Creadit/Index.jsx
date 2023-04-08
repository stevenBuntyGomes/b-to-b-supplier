import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../../Constant';
import Table from '../Table';
import {debitNotesColumn, data} from '../Data'
import { Card, CardBody, Col, Container, Row, CardHeader , Label, Input, FormGroup} from 'reactstrap';
import HeaderCard from '../../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faExclamation, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../../Route/Routes';

const CreditDebitNote = () => {
  return (
    <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/pi/create/Dubai`} title="Credit/Debit Note" mainTitle="Credit/Debit Note" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title='List of Credit/Debit note created' span1='List of Credit/Debit note created.' />
                            <CardHeader className='mt-0'>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-credit-debit-note/Dubai`} attrBtn={{ color: "dark", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faFile}/> Create Credit/Debit Note
                                </Btn>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Edit
                                </Btn>
                                <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faExclamation}/> Delete 
                                </Btn>
                                <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Publish
                                </Btn>
                                <p>Check box the option to display the results in the grid. By default new supplier list will be displayed</p>
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
                                <Table columns = {debitNotesColumn} data = {data} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default CreditDebitNote