import React, {Fragment, useState, useEffect} from 'react'
import { Breadcrumbs } from '../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderCard from '../../../Common/Component/HeaderCard';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../Constant';
import FooterCard from '../../../Forms/FormControl/Common/FooterCard';
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";
import Dropzone from 'react-dropzone';
// import { FileUploader } from "react-drag-drop-files";
// const fileTypes = ["JPG", "PNG", "GIF", "PDF"];


const Create = () => {
    const [file, setFile] = useState(null);

    const handleUploadFile = (file) => {
        setFile(file);
    }
  return (
    <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Stock" mainTitle="Stock" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Create Stock" />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Select Products</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'product1'}</option>
                                                    <option>{'product2'}</option>
                                                    <option>{'product3'}</option>
                                                    <option>{'product4'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Product Origin</Label>
                                                <Input className="form-control" type="text" placeholder="eg. Banguluru" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Product Origin</Label>
                                                <Input className="form-control" type="text" placeholder="eg. Banguluru" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Available Quantity</Label>
                                                <Input className="form-control" type="text" placeholder="Available Quantity" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Unit Price(Ex Work)</Label>
                                                <Input className="form-control" type="text" placeholder="Unit Price(Ex Work)" />
                                            </FormGroup>
                                        </Col>
                                        <Col xl = '6'>
                                            
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Currency</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'INR'}</option>
                                                    <option>{'EURO'}</option>
                                                    <option>{'USD'}</option>
                                                    <option>{'product4'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Price Negotiable ?</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Product Dimension</Label>
                                                <Input className="form-control" type="text" placeholder="Product Dimension" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Product Unit Weight</Label>
                                                <Input className="form-control" type="text" placeholder="Product Unit Weight" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Product Color</Label>
                                                <Input className="form-control" type="text" placeholder="red" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">MOQ</Label>
                                                <Input className="form-control" type="text" placeholder="MOQ" />
                                            </FormGroup>

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">payment Terms</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Transportation Cost</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Actual'}</option>
                                                    <option>{'Not Known'}</option>
                                                </Input>
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
                                                <Label>Product Description</Label>
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
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Samples Available</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'yes'}</option>
                                                    <option>{'No'}</option>
                                                </Input>
                                            </FormGroup>
                                            

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">No. of Free Samples</Label>
                                                <Input className="form-control" type="text" placeholder="No. of Free Samples" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = "6">
                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup className='m-t-15 custom-radio-ml'>
                                                <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
                                                    
                                                    <div className='checkbox checkbox-dark'>
                                                        <Input id='inline-3' type='checkbox' defaultChecked />
                                                        <Label for='inline-3'>
                                                        {Option}
                                                        <span className='digits bg-success p-2 rounded'> {'Transportation Extra'}</span>
                                                        </Label>
                                                    </div>
                                                    <div className='checkbox checkbox-dark'>
                                                        <Input id='inline-3' type='checkbox' defaultChecked />
                                                        <Label for='inline-3'>
                                                        {Option}
                                                        <span className='digits bg-danger p-2 rounded'> {'Free Transportation'}</span>
                                                        </Label>
                                                    </div>
                                                </div>
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Domestic Tax (%)</Label>
                                                <Input className="form-control" type="text" placeholder="Domestic Tax (%)" />
                                            </FormGroup>
                                            

                                        </Col>
                                        <Col xl = '6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Export Tax(%)</Label>
                                                <Input className="form-control" type="text" placeholder="Export Tax(%)" />
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Enter Product Specification</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl = '12'>
                                            <div>
                                                <Label>Enter Terms, If any.</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >Save Druft</Btn>
                                    <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >Publish</Btn>
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