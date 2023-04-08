import React, {Fragment, useState, useEffect} from 'react'
import { Breadcrumbs, H6 } from '../../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderCard from '../../../Common/Component/HeaderCard';
import HeaderCard from '../../../../Common/Component/HeaderCard';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../../Constant';
import FooterCard from '../../../../Forms/FormControl/Common/FooterCard';
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../../AbstractElements";
import Dropzone from 'react-dropzone';
import Table from '../Table';
import Data from '../Data';
import { piColumn, data, inputColumn } from '../Data';

const Create = () => {
  return (
    <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Debit/Credit Note" mainTitle="Debit/Credit Note" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Create Debit/Credit Note" />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <H6 htmlFor="exampleFormControlInput1">Exporter Details</H6>
                                               
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <H6 htmlFor="exampleFormControlInput1">Consignee Details</H6>
                                                
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Supplier Name</Label>
                                                <Input className="form-control" type="text" placeholder="Supplier Name" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Buyer Name</Label>
                                                <Input className="form-control" type="text" placeholder="Buyer Name" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Address</Label>
                                                <Input className="form-control" type="text" placeholder="Address" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Address</Label>
                                                <Input className="form-control" type="text" placeholder="Address" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Address</Label>
                                                <Input className="form-control" type="text" placeholder="Address" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Address</Label>
                                                <Input className="form-control" type="text" placeholder="Address" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Phone Number</Label>
                                                <Input className="form-control" type="text" placeholder="Phone Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Phone Number</Label>
                                                <Input className="form-control" type="text" placeholder="Phone Number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Website</Label>
                                                <Input className="form-control" type="text" placeholder="Website" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Website</Label>
                                                <Input className="form-control" type="text" placeholder="Website" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Select Note</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Debit Note'}</option>
                                                    <option>{'Credit Note'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Reference Number(Debit/Credit)</Label>
                                                <Input className="form-control" type="text" placeholder="Reference Number(Debit/Credit)" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">PO Number (auto fill)</Label>
                                                <Input className="form-control" type="text" placeholder="PO Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">PO Date</Label>
                                                <Input className="form-control" type="text" placeholder="PO Date" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Invoice Number</Label>
                                                <Input className="form-control" type="text" placeholder="Invoice Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Invoice Date</Label>
                                                <Input className="form-control" type="text" placeholder="Invoice Date" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Exporter's PAN Number</Label>
                                                <Input className="form-control" type="text" placeholder="Exporter's PAN Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Consignee PAN NUMBER</Label>
                                                <Input className="form-control" type="text" placeholder="Consignee PAN NUMBER" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Exporter's Reference Number</Label>
                                                <Input className="form-control" type="text" placeholder="Exporter's PAN Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Consignee Reference NUMBER</Label>
                                                <Input className="form-control" type="text" placeholder="Consignee PAN NUMBER" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Exporter's GST Number</Label>
                                                <Input className="form-control" type="text" placeholder="Exporter's PAN Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Consignee GST NUMBER</Label>
                                                <Input className="form-control" type="text" placeholder="Consignee PAN NUMBER" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">RFQ Number</Label>
                                                <Input className="form-control" type="text" placeholder="Exporter's PAN Number" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Other Reference Number</Label>
                                                <Input className="form-control" type="text" placeholder="Consignee PAN NUMBER" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Currency Type</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'INR'}</option>
                                                    <option>{'EURO'}</option>
                                                    <option>{'DOllar'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <div>
                                                  <Label>Reference Notes</Label>
                                                  <Input type="textarea" className="form-control" rows="3" />
                                              </div>
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">PRE Carriage By</Label>
                                                <Input className="form-control" type="text" placeholder="PRE Carriage By" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Place of Receipt of by Pre-Carrier</Label>
                                                <Input className="form-control" type="text" placeholder="Place of Receipt of by Pre-Carrier" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Port of Loading</Label>
                                                <Input className="form-control" type="text" placeholder="Port of Loading" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Final Destination</Label>
                                                <Input className="form-control" type="text" placeholder="Final Destination" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Country Of Origin Of Goods</Label>
                                                <Input className="form-control" type="text" placeholder="Country Of Origin Of Goods" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Country of Final Destination</Label>
                                                <Input className="form-control" type="text" placeholder="Country of Final Destination" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Payment Terms Of Goods</Label>
                                                <Input className="form-control" type="text" placeholder="Payment Terms" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Amout in words</Label>
                                                <Input className="form-control" type="text" placeholder="Amout in words" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                              <Table columns = {inputColumn} data = {data} />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Tax</Label>
                                                <Input className="form-control" type="text" placeholder="Tax" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Discount</Label>
                                                <Input className="form-control" type="text" placeholder="Discount" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Total Amount</Label>
                                                <Input className="form-control" type="text" placeholder="Total Amount" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    
                                    {/* <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Date of Manufacture</Label>
                                                <Input className="form-control" type="text" placeholder="Date of Manufacture" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row> */}
                                    
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Buyers Terms & Condition </Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Manufacturer Terms & Condition  </Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Save Record</Btn>
                                    <Btn attrBtn={{ color: "secondary", type: "submit" }} >Close Form</Btn>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </Fragment>
  )
}

export default Create