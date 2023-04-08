import React from 'react';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFilePdf } from 'react-icons/fa';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Input, Label } from 'reactstrap';

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 100, fontSize: 14, padding: 4, minWidth:100 };
export const data = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    ref_id: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    total_po_ammount: (
      <div>
        <H6>1000</H6>

      </div>
    ),
    tax_amount: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    tax: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    fob: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    cif: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    work_price: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    order_type: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    qty: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    completion_date: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    lead_time: (
                <div>
                    <p>4 Weeks</p>

                </div>
        ),
    pi: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    project_awarded_date: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    po: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    destination: (
      <div>
        <H6>FOB Chennai </H6>

      </div>
    ),
    buyer_location: (
      <div>
        <H6>Germany</H6>

      </div>
    ),
    image: (
      <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

      </div>
    ),
    product: (
      <div>
        <p>product name1</p>

      </div>
    ),

    specification: (
      <div>
        <p>asfklajsdf alsdjfl ajsl alskdjflkaj sllk lkajsfldjfla lskjdflka lkajslkdfalsdf </p>

      </div>
    ),
    mfg: (
      <div>
        <p>02 Aug, 2022 </p>

      </div>
    ),
    available_qty: (
      <div>
        <p>5000 </p>

      </div>
    ),
    work_price: (
      <div>
        <p>INR 5.9</p>

      </div>
    ),
    download_spec: (
      <div>
        <FontAwesomeIcon icon = {faDownload}/>

      </div>
    ),
    negotiation: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>yes</Btn>
        {/* </span> */}

      </div>
    ),
    dimension: (
      <div>
        <p>90 x 90 x 120</p>

      </div>
    ),
    product_description: (
      <div>
        <p>dsffdsaf sd dsf</p>

      </div>
    ),
    color: (
      <div>
        <p>White</p>

      </div>
    ),
    origin: (
      <div>
        <p>Bengaluru, Karnataka</p>

      </div>
    ),
    moq: (
      <div>
        <p>1000</p>

      </div>
    ),
    payment_terms: (
      <div>
        <p>100% Advance</p>

      </div>
    ),
    sample_available: (
      <div>
        <p>Available</p>

      </div>
    ),
    domestic_tax: (
      <div>
        <p>18</p>

      </div>
    ),
    export_tax: (
      <div>
        <p>No Tax</p>

      </div>
    ),
    transportation: (
      <div>
        <p>Actuals</p>

      </div>
    ),
    notes: (
      <div>
        <p>asasdfasdf asdfasdfasfd</p>

      </div>
    ),
    uploaded_data: (
      <div>
        <p>02 March 2023, 10 AM</p>

      </div>
    ),
    rfq_last_date: (
      <div>
        <p>02 March 2023, 10 AM</p>

      </div>
    ),
    required_certificates: (
      <div>
        <p>BRC,ISO,FSSC</p>

      </div>
    ),
    trade_terms: (
      <div>
        <p>FOB</p>

      </div>
    ),
    submitted_date: (
      <div>
        <p>12 FEB, 2022</p>

      </div>
    ),
    stock: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>In Stock</Btn>
        {/* </span> */}

      </div>
    ),
    samples: (
      <div>
        <p>Required 5</p>

      </div>
    ),
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    status: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Approved</Btn>
        {/* </span> */}

      </div>
    ),
    status: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>rejected</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    ref_id: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    total_po_ammount: (
      <div>
        <H6>1000</H6>

      </div>
    ),
    tax_amount: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    tax: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    fob: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    cif: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    work_price: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    order_type: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    qty: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    completion_date: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    lead_time: (
                <div>
                    <p>4 Weeks</p>

                </div>
        ),
    pi: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    project_awarded_date: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    po: (
      <div>
        <H6>COMPRO01022022BLR</H6>

      </div>
    ),
    destination: (
      <div>
        <H6>FOB Chennai </H6>

      </div>
    ),
    buyer_location: (
      <div>
        <H6>Germany</H6>

      </div>
    ),
    image: (
      <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

      </div>
    ),
    product: (
      <div>
        <p>product name1</p>

      </div>
    ),

    specification: (
      <div>
        <p>asfklajsdf alsdjfl ajsl alskdjflkaj sllk lkajsfldjfla lskjdflka lkajslkdfalsdf </p>

      </div>
    ),
    mfg: (
      <div>
        <p>02 Aug, 2022 </p>

      </div>
    ),
    available_qty: (
      <div>
        <p>5000 </p>

      </div>
    ),
    work_price: (
      <div>
        <p>INR 5.9</p>

      </div>
    ),
    download_spec: (
      <div>
        <FontAwesomeIcon icon = {faDownload}/>

      </div>
    ),
    negotiation: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>yes</Btn>
        {/* </span> */}

      </div>
    ),
    dimension: (
      <div>
        <p>90 x 90 x 120</p>

      </div>
    ),
    product_description: (
      <div>
        <p>dsffdsaf sd dsf</p>

      </div>
    ),
    color: (
      <div>
        <p>White</p>

      </div>
    ),
    origin: (
      <div>
        <p>Bengaluru, Karnataka</p>

      </div>
    ),
    moq: (
      <div>
        <p>1000</p>

      </div>
    ),
    payment_terms: (
      <div>
        <p>100% Advance</p>

      </div>
    ),
    sample_available: (
      <div>
        <p>Available</p>

      </div>
    ),
    domestic_tax: (
      <div>
        <p>18</p>

      </div>
    ),
    export_tax: (
      <div>
        <p>No Tax</p>

      </div>
    ),
    transportation: (
      <div>
        <p>Actuals</p>

      </div>
    ),
    notes: (
      <div>
        <p>asasdfasdf asdfasdfasfd</p>

      </div>
    ),
    uploaded_data: (
      <div>
        <p>02 March 2023, 10 AM</p>

      </div>
    ),
    rfq_last_date: (
      <div>
        <p>02 March 2023, 10 AM</p>

      </div>
    ),
    required_certificates: (
      <div>
        <p>BRC,ISO,FSSC</p>

      </div>
    ),
    trade_terms: (
      <div>
        <p>FOB</p>

      </div>
    ),
    submitted_date: (
      <div>
        <p>12 FEB, 2022</p>

      </div>
    ),
    stock: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>In Stock</Btn>
        {/* </span> */}

      </div>
    ),
    samples: (
      <div>
        <p>Required 5</p>

      </div>
    ),
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    status: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Approved</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },

];


export const createQuoteColumn = [
  {
    name: 'PI',
    selector: (row) => row.pi,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'PO',
    selector: (row) => row.po,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Project Awarded Date',
    selector: (row) => row.project_awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Completion Date',
    selector: (row) => row.completion_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Lead Time',
    selector: (row) => row.lead_time,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'QTY',
    selector: (row) => row.qty,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Order Type',
    selector: (row) => row.order_type,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Payment Terms',
    selector: (row) => row.payment_terms,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Ex Work Price',
    selector: (row) => row.work_price,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'FOB',
    selector: (row) => row.fob,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'CIF',
    selector: (row) => row.cif,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Tax %',
    selector: (row) => row.tax,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Tax Amount',
    selector: (row) => row.tax_amount,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Transportation',
    selector: (row) => row.transportation,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Origin',
    selector: (row) => row.origin,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Destination',
    selector: (row) => row.destination,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Total PO Ammount',
    selector: (row) => row.total_po_ammount,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Status',
    selector: (row) => row.status,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];



