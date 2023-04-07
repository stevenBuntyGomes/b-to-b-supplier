import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { groupBuyingColumns, groupBuyingData } from './BuyerTableList';

const GroupBuying = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="" mainTitle="REady To Buy (Grou[p Buying])" />
      <CardHeader className='pt-0'>
        <HeaderCard title="Consolidation is the biggest advantage in group buying. The greater the number the lower the price." span1="" />
            <Row>
              <Col xl = "8" >
                <Row>
                  <Col xl = '8'>
                    <FormGroup className=''>
                      <Input className="form-control" type="text" placeholder="Search By Product" />
                    </FormGroup>
                  </Col>
                  <Col xl = '3'>
                    <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                        <FontAwesomeIcon className='me-2' icon={faSearch}/> Search
                    </Btn>
                  </Col>
                </Row>
                  
                  
              </Col>
            </Row>
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
              <DataTable noHeader pagination paginationServer columns={groupBuyingColumns} data={groupBuyingData} highlightOnHover={true} striped={true} responsive={true} />
          </div>
          {/* <ProductTableData /> */}
      </CardBody>
    </Fragment>
  )
}

export default GroupBuying