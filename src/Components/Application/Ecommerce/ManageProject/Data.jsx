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
    rfq_date: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    etc: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    dispatch: (
      <div>
        <p>not ready</p>

      </div>
    ),
    etd: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    comments: (
      <div>
        <p>df ads fd fdsf ds f</p>

      </div>
    ),
    unit_price: (
      <div>
        <p>200</p>

      </div>
    ),
    eta: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    awarded_date: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    quote_id: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    quote_ref_no: (
      <div>
        <p>PLAST2234ASD</p>

      </div>
    ),
    total_po_ammount: (
      <div>
        <p>1000</p>

      </div>
    ),
    tax_amount: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    tax: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    fob: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    cif: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    work_price: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    order_type: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    qty: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    completion_date: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    lead_time: (
                <div>
                    <p>4 Weeks</p>

                </div>
        ),
    pi: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    project_awarded_date: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    po: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    destination: (
      <div>
        <p>FOB Chennai </p>

      </div>
    ),
    buyer_location: (
      <div>
        <p>Germany</p>

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
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Reject</Btn>
        {/* </span> */}

      </div>
    ),
    status: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Rejected</Btn>
        {/* </span> */}

      </div>
    ),
    status2: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delay</Btn>
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
    dispatch: (
      <div>
        <p>ready</p>

      </div>
    ),
    rfq_date: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    etc: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    etd: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    comments: (
      <div>
        <p>df ads fd fdsf ds f</p>

      </div>
    ),
    unit_price: (
      <div>
        <p>200</p>

      </div>
    ),
    eta: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    awarded_date: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    quote_id: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    quote_ref_no: (
      <div>
        <p>PLAST2234ASD</p>

      </div>
    ),
    total_po_ammount: (
      <div>
        <p>1000</p>

      </div>
    ),
    tax_amount: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    tax: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    fob: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    cif: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    work_price: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    order_type: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    qty: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    completion_date: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    lead_time: (
                <div>
                    <p>4 Weeks</p>

                </div>
        ),
    pi: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    project_awarded_date: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    po: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    destination: (
      <div>
        <p>FOB Chennai </p>

      </div>
    ),
    buyer_location: (
      <div>
        <p>Germany</p>

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
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Accept</Btn>
        {/* </span> */}

      </div>
    ),
    status: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Awarded</Btn>
        {/* </span> */}

      </div>
    ),
    status2: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>On Time</Btn>
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


export const ongoingProjectColumn = [

  {
    name: 'Rfq ID',
    selector: (row) => row.ref_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote ID',
    selector: (row) => row.quote_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote Reference No',
    selector: (row) => row.quote_ref_no,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Rfq Date.',
    selector: (row) => row.rfq_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	PI No.',
    selector: (row) => row.pi,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	PO No',
    selector: (row) => row.po,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Awarded Date',
    selector: (row) => row.awarded_date,
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
    name: '	ETC',
    selector: (row) => row.etc,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETD',
    selector: (row) => row.etd,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETA',
    selector: (row) => row.eta,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Qty',
    selector: (row) => row.qty,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Unit Price',
    selector: (row) => row.unit_price,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Product Name',
    selector: (row) => row.product,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Comments',
    selector: (row) => row.comments,
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
  {
    name: 'Action',
    selector: (row) => row.action,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];

export const canceledProjectColumn = [

  {
    name: 'Rfq ID',
    selector: (row) => row.ref_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote ID',
    selector: (row) => row.quote_id,
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
    name: 'Start Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: 'End Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETC',
    selector: (row) => row.etc,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETD',
    selector: (row) => row.etd,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETA',
    selector: (row) => row.eta,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Qty',
    selector: (row) => row.qty,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: 'Canceled Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: 'Reason',
    selector: (row) => row.comments,
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
  {
    name: 'Action',
    selector: (row) => row.action,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];

export const statusProjectColumn = [

  {
    name: 'Rfq ID',
    selector: (row) => row.ref_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote ID',
    selector: (row) => row.quote_id,
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
    name: 'Start Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: 'End Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETC',
    selector: (row) => row.etc,
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
    {
    name: '	QC Testing',
    selector: (row) => row.image,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: '	Packing',
    selector: (row) => row.image,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
    name: 'Ready To Dispatch',
    selector: (row) => row.dispatch,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];



export const createQuoteColumn = [

  {
    name: 'Rfq ID',
    selector: (row) => row.ref_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote ID',
    selector: (row) => row.quote_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Quote Reference No',
    selector: (row) => row.quote_ref_no,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Start Date',
    selector: (row) => row.awarded_date,
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
    name: '	ETC',
    selector: (row) => row.etc,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETD',
    selector: (row) => row.etd,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	ETA',
    selector: (row) => row.eta,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Qty',
    selector: (row) => row.qty,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Status',
    selector: (row) => row.status2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];





