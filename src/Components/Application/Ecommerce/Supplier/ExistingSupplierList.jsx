import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faExclamation, } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { ExistingSupplierColumns, ExistingSupplierData, NewSupplierColumns, newSupplierData } from './SupplierTableList';

const ExistingSupplierList = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="List Of New Suppliers" mainTitle="Supplier List" />
      <CardHeader className='pt-0'>
        <Row>
            <Col xl = "8">
                <div className='m-t-15 m-checkbox-inline custom-radio-ml'>
                    <div className='checkbox checkbox-dark'>
                        <Input id='inline-2' type='checkbox' defaultChecked />
                        <Label for='inline-2'>
                        {Option}
                        <span className='digits bg-success p-2 rounded'> {'Approved'}</span>
                        </Label>
                    </div>
                    <div className='checkbox checkbox-dark'>
                        <Input id='inline-3' type='checkbox' defaultChecked />
                        <Label for='inline-3'>
                        {Option}
                        <span className='digits bg-danger p-2 rounded'> {'Rejected'}</span>
                        </Label>
                    </div>
                </div>
            </Col>
            <Col xl = "4">
                <FormGroup className='mt-3'>
                    <Input className="form-control" type="text" placeholder="Search" />
                </FormGroup>
            </Col>
        </Row>
    </CardHeader>
    <CardBody>
        <div className='table-responsive product-table'>
            <DataTable noHeader pagination paginationServer columns={ExistingSupplierColumns} data={ExistingSupplierData} highlightOnHover={true} striped={true} responsive={true} />
        </div>
        {/* <ProductTableData /> */}
    </CardBody>
  </Fragment>
  )
}

export default ExistingSupplierList