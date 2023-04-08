import React, {Fragment, useState, useEffect} from 'react'
import { Breadcrumbs, H6 } from '../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderCard from '../../../Common/Component/HeaderCard';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../Constant';
import FooterCard from '../../../Forms/FormControl/Common/FooterCard';
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Create = () => {
  return (
            <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Leave Feedback" mainTitle="Leave Feedback" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Please leave feedback and rate for the project." />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Select PO</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'PO12456'}</option>
                                                    <option>{'PO12232'}</option>
                                                    <option>{'PO22222'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Vendor</Label>
                                                <Input className="form-control" type="text" placeholder="Vendor" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Location</Label>
                                                <Input className="form-control" type="text" placeholder="Location" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '8' className='d-flex flex-row'>
                                            <p>Was this delivered on budget? </p>
                                            <div className='radio radio-primary ms-3'>
                                                <Input id='radio1' type='radio' name='radio1' value='option1' defaultChecked />
                                                <Label for='radio1'>
                                                Yes
                                                <span className='digits'></span>
                                                </Label>
                                            </div>
                                            <div className='radio radio-primary ms-3'>
                                                <Input id='radio3' type='radio' name='radio1' value='option1' />
                                                <Label for='radio3'>No</Label>
                                            </div>
                                        </Col>
                                        <Col xl = '4'>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '8' className='d-flex flex-row'>
                                            <p>Was this delivered on time?</p>
                                            <div className='radio radio-primary ms-3'>
                                                <Input id='radio4' type='radio' name='radio1' value='option1' defaultChecked />
                                                <Label for='radio4'>
                                                Yes
                                                <span className='digits'></span>
                                                </Label>
                                            </div>
                                            <div className='radio radio-primary ms-3'>
                                                <Input id='radio5' type='radio' name='radio1' value='option1' />
                                                <Label for='radio5'>No</Label>
                                            </div>
                                        </Col>
                                        <Col xl = '4'>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '2'>
                                            <p>Quality</p>
                                            <div>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                            </div>
                                        </Col>
                                        <Col xl = '2'>
                                            <p>Communication</p>
                                            <div>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                            </div>
                                        </Col>
                                        <Col xl = '2'>
                                            <p>Expertise</p>
                                            <div>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                            </div>
                                        </Col>
                                        <Col xl = '2'>
                                            <p>Professionalism</p>
                                            <div>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                            </div>
                                        </Col>
                                        <Col xl = '2'>
                                            <p>Hire again?</p>
                                            <div>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                                <FontAwesomeIcon size='2xl' color='green' icon = {faStar}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xl = '12'>
                                            <div className='mt-4'>
                                                <Label>Did your Vendor do a great job?

Help win their next project by telling everyone a little bit about it. Longer reviews give other employers the confidence to hire good freelancers, like , and helps to ensure that employers like you continue to receive nothing but the best quality of work.</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Was this an exceptional project?</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >Save Draft</Btn>
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Submit Feedback</Btn>
                                    <Btn attrBtn={{ color: "secondary", type: "submit" }} >Reset</Btn>
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