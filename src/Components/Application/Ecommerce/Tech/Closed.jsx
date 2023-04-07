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
import { closedTicketColumn, newTicketData } from './TicketTableList';

const Closed = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="Closed Ticket" mainTitle="Closed Ticket" />
      <CardHeader className='pt-0'>
        <HeaderCard title="List of Closed Ticket." span1="" />
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
          <div className='table-responsive product-table'>
              <DataTable noHeader pagination paginationServer columns={closedTicketColumn} data={newTicketData} highlightOnHover={true} striped={true} responsive={true} />
          </div>
          {/* <ProductTableData /> */}
      </CardBody>
    </Fragment> 
  )
}

export default Closed