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

const Create = () => {
  return (
    <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Open Ticket" mainTitle="Open Ticket" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Manager your company Open Ticket." />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Ticket Status</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Technical'}</option>
                                                    <option>{'Non Technical'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Ticket Date</Label>
                                                <Input className="form-control" type="text" placeholder="Ticket Date" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Issue Description</Label>
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
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Submit Ticket</Btn>
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