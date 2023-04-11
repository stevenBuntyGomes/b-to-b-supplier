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
        <Breadcrumbs parent="Ecommerce" title="Seal" mainTitle="Seal" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Create your company digital seal." />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Select Seal Type</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'CEO'}</option>
                                                    <option>{'Co_Founder'}</option>
                                                    <option>{'Finance'}</option>
                                                    <option>{'Logistic'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Company Display Name</Label>
                                                <Input className="form-control" type="text" placeholder="Company Display Name" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1"></Label>
                                                <Input className="form-control" type="text" placeholder="Authorized Signatory Name" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Company Legal Name</Label>
                                                <Input className="form-control" type="text" placeholder="Company Legal Name" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Create Date</Label>
                                                <Input className="form-control" type="text" placeholder="Create Date" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Last Modified Date</Label>
                                                <Input className="form-control" type="text" placeholder="Last Modified Date" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Notes</Label>
                                                <Input className="form-control" type="text" placeholder="Discount" />
                                            </FormGroup>

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
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Save Draft</Btn>
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Save</Btn>
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