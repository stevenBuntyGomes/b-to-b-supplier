import React, {Fragment, useState, useEffect} from 'react'
import { Breadcrumbs, H6 } from '../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderCard from '../../../Common/Component/HeaderCard';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../Constant';
import FooterCard from '../../../Forms/FormControl/Common/FooterCard';
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";
import Table from './Table';
import { piColumn, tabledata, inputColumn } from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone';

const SubmitQuote = () => {
  return (
     <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Submit Quote" mainTitle="Submit Quote" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Submit your quote. The more specific your information, the faster response you will get." />
                            <Form className="form theme-form">
                                <Row>
                                    <Col xl = '12'>
                                        <FormGroup className='m-t-15 custom-radio-ml'>
                                                <Label htmlFor="exampleFormControlInput1">Required Products:</Label>
                                                <div className='checkbox'>
                                                    <Input id='checkbox1' type='checkbox' />
                                                    <Label for='checkbox1'>FIBC Food Grade Bags</Label>
                                                </div>
                                            </FormGroup>
                                    </Col>
                                </Row>
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup className='m-t-15 custom-radio-ml d-flex flex-row'>
                                                 <div className='checkbox'>
                                                    <Input id='checkbox4' type='checkbox' />
                                                    <Label for='checkbox4'>BRC</Label>
                                                </div>
                                                <div className='checkbox'>
                                                    <Input id='checkbox2' type='checkbox' />
                                                    <Label for='checkbox2'>ISO 9001</Label>
                                                </div>
                                                 <div className='checkbox'>
                                                    <Input id='checkbox3' type='checkbox' />
                                                    <Label for='checkbox3'>ISO 13485</Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Specification (Download Specification <FontAwesomeIcon icon = {faFile}/>  </Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Purchase Quantity</Label>
                                                <Input className="form-control" type="text" placeholder="Purchase Quantity" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Dimension</Label>
                                                <Input className="form-control" type="text" placeholder="Dimension" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">ETD(Estimated Time of Dispatch)</Label>
                                                <Input className="form-control" type="text" placeholder="ETD" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">ETA(Estimated Time of Arival)</Label>
                                                <Input className="form-control" type="text" placeholder="ETA" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Provide Quote In</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'INR'}</option>
                                                    <option>{'EURO'}</option>
                                                    <option>{'DOllar'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Submit Quote By</Label>
                                                <Input className="form-control" type="text" placeholder="Submit Quote By" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Destination</Label>
                                                <Input className="form-control" type="text" placeholder="Destination" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Need Samples</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">No. Of Samples Required</Label>
                                                <Input className="form-control" type="text" placeholder="No. Of Samples Required" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Provide Manufacturer Quote</Label>
                                              <Table columns = {inputColumn} data = {tabledata} />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Origin</Label>
                                                <Input className="form-control" type="text" placeholder="Origin" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Destination Port</Label>
                                                <Input className="form-control" type="text" placeholder="Destination Port" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Transit Time</Label>
                                                <Input className="form-control" type="text" placeholder="Transit Time" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Quote Valid Upto</Label>
                                                <Input className="form-control" type="text" placeholder="Quote Valid Upto" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Payment Terms?</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'T/T'}</option>
                                                    <option>{'Credit'}</option>
                                                    <option>{'Advance'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Can you provide samples?</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">How many samples you can provide ?</Label>
                                                <Input className="form-control" type="text" placeholder="How many samples you can provide ?" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Time frame to provide Samples as per specification</Label>
                                                <Input className="form-control" type="text" placeholder="Time frame to provide Samples as per specification" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Paid Samples ?</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Price for Samples ?</Label>
                                                <Input className="form-control" type="text" placeholder="Price for Samples ?" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                
                                                <Label htmlFor="exampleFormControlInput1">What's your MOQ (Minimum Order Quantity)?</Label>
                                                <Input className="form-control" type="text" placeholder="MOQ" />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    
                                    
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Comments</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Enter Packaging Details</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <Label htmlFor="exampleFormControlSelect9">Drag & Drop Files</Label>
                                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                {({getRootProps, getInputProps}) => (
                                                    <section>
                                                        <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <img style={{ height: '100px', }} src = {`${process.env.PUBLIC_URL}/drag-drop-file-upload.png`} />
                                                        </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >Save Draft</Btn>
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Submit Quote</Btn>
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

export default SubmitQuote