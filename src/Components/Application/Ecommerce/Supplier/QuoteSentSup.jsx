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
import { quoteSentColumns, quoteData } from './SupplierTableList';

const QuoteSentSup = () => {
  return (
    <Fragment>
       <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="List Of Quotes Submitted" mainTitle="List Of Quotes Submitted" />
        <Container fluid = {true}>
          <Row>
            <Col sm="12">
              <Card>
                <HeaderCard title="List of quotes Submitted from the Manufacturers in this page." span1="" />
                <CardHeader className='pt-0'>
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
                      <DataTable noHeader pagination paginationServer columns={quoteSentColumns} data={quoteData} highlightOnHover={true} striped={true} responsive={true} />
                  </div>
                  {/* <ProductTableData /> */}
              </CardBody>
              </Card>1``
            </Col>
          </Row>
        </Container>
    </Fragment>
  )
}

export default QuoteSentSup