import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faExclamation, faFile, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { ExistingSupplierColumns, RfqReceivedColumns, RfqReceivedData, ExistingSupplierData } from './SupplierTableList';

const RfqReceivedSup = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="List Of Inquiry Received" mainTitle="List Of Inquiry Received" />
      <CardHeader className='pt-0'>
        <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faThumbsUp}/> Publish
            </Btn>
            <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Edit
            </Btn>
            <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faThumbsDown}/> Reject
            </Btn>
        <Row>
          <Col xl = "8">
            <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
              <div className='checkbox checkbox-dark'>
                  <Input id='inline-2' type='checkbox' defaultChecked />
                  <Label for='inline-2'>
                  {Option}
                  <span className='digits bg-success p-2 rounded'> {'Open Inquiry'}</span>
                  </Label>
              </div>
              <div className='checkbox checkbox-dark'>
                  <Input id='inline-1' type='checkbox' defaultChecked />
                  <Label for='inline-1'>
                  {Option}
                  <span className='digits bg-warning p-2 rounded'> {'Submitted Quote'}</span>
                  </Label>
              </div>
              
              <div className='checkbox checkbox-dark'>
                  <Input id='inline-3' type='checkbox' defaultChecked />
                  <Label for='inline-3'>
                  {Option}
                  <span className='digits bg-danger p-2 rounded'> {'Rejected Quote'}</span>
                  </Label>
              </div>
          </div>
          </Col>
          <Col xl = "4">
            <FormGroup className=''>
                    <Input className="form-control" type="text" placeholder="Search" />
                </FormGroup>
          </Col>
        </Row>
    </CardHeader>
    <CardBody>
          <div className='table-responsive product-table'>
              <DataTable noHeader pagination paginationServer columns={RfqReceivedColumns} data={RfqReceivedData} highlightOnHover={true} striped={true} responsive={true} />
          </div>
          {/* <ProductTableData /> */}
      </CardBody>
    </Fragment>
  )
}

export default RfqReceivedSup