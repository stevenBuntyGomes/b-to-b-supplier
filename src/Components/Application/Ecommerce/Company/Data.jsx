import React from 'react';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFilePdf, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { faDownload, faFile, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    credit_debit: (
      <div>
        <p>Debit</p>

      </div>
    ),
    create_date: (
      <div>
        <p>02/05/2022</p>

      </div>
    ),
    incorporation_document: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    company_broucher: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    gst: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    import_export_lisence: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    other_documents: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    certificates: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    seal_type: (
      <div>
        <p>FOR SEAL</p>

      </div>
    ),
    last_updated_date: (
      <div>
        <p>02/05/2022</p>

      </div>
    ),
    company_name: (
      <div>
        <p>PlasticCity</p>

      </div>
    ),
    signature_authority_name: (
      <div>
        <p>Srinath Chowdappa</p>

      </div>
    ),
    designation: (
      <div>
        <p>Co-Founder</p>

      </div>
    ),
    company_legal_name: (
      <div>
        <p>Plasticcity Packaging Export India PVT LTD</p>

      </div>
    ),
    total_amount: (
      <div>
        <p>INR 125689.00</p>

      </div>
    ),
    transaction_type: (
      <div>
        <p>Domestic</p>

      </div>
    ),
    invoice: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    invoice_amount: (
      <div>
        <p>5.9</p>

      </div>
    ),
    vendor: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    sl_no: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    package_description: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    description_of_goods: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    action_input: (
      <div>
        <FontAwesomeIcon icon = {faTrash}/>
        <FontAwesomeIcon icon = {faPlusCircle}/>

      </div>
    ),
    total: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    unit_price_input: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    uom: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    table_qty: (
      <div>
        <Input className="form-control" type="text"/>

      </div>
    ),
    rfq_date: (
      <div>
        <p>01/01/2022</p>

      </div>
    ),
    pi_date: (
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
    credit_debit: (
      <div>
        <p>Debit</p>

      </div>
    ),
    company_name: (
      <div>
        <p>PlasticCity</p>

      </div>
    ),
    incorporation_document: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    company_broucher: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    import_export_lisence: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    other_documents: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    gst: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    certificates: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    seal_type: (
      <div>
        <p>FOR SEAL</p>

      </div>
    ),
    create_date: (
      <div>
        <p>02/05/2022</p>

      </div>
    ),
    last_updated_date: (
      <div>
        <p>02/05/2022</p>

      </div>
    ),
    company_legal_name: (
      <div>
        <p>Plasticcity Packaging Export India PVT LTD</p>

      </div>
    ),
    signature_authority_name: (
      <div>
        <p>Srinath Chowdappa</p>

      </div>
    ),
    designation: (
      <div>
        <p>Co-Founder</p>

      </div>
    ),
    total_amount: (
      <div>
        <p>INR 125689.00</p>

      </div>
    ),
    transaction_type: (
      <div>
        <p>International</p>

      </div>
    ),
    invoice: (
      <div>
        <FontAwesomeIcon icon = {faFile}/>

      </div>
    ),
    vendor: (
      <div>
        <p>COMPRO01022022BLR</p>

      </div>
    ),
    invoice_amount: (
      <div>
        <p>5.9</p>

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

export const legalDocumentColumn = [

  {
    name: 'Company Name.',
    selector: (row) => row.company_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Incorporation Document',
    selector: (row) => row.incorporation_document,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '		GST',
    selector: (row) => row.gst,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Certificates',
    selector: (row) => row.certificates,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Import Export Licence',
    selector: (row) => row.import_export_lisence,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Company Brochure',
    selector: (row) => row.company_broucher,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Other Documents	',
    selector: (row) => row.other_documents,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Create Date	',
    selector: (row) => row.create_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Last Updated Date	',
    selector: (row) => row.last_updated_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Notes',
    selector: (row) => row.notes,
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
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];

export const companySealColumn = [

  {
    name: 'Company Name.',
    selector: (row) => row.company_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Company Leagal Name',
    selector: (row) => row.company_legal_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Seal Type',
    selector: (row) => row.seal_type,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Create Date',
    selector: (row) => row.create_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Last Updated Date',
    selector: (row) => row.last_updated_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Seal',
    selector: (row) => row.image,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Notes',
    selector: (row) => row.notes,
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
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];



export const digitalSignatureColumn = [

  {
    name: 'Company Name.',
    selector: (row) => row.company_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Company Leagal Name',
    selector: (row) => row.company_legal_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Signature Authority Name.',
    selector: (row) => row.signature_authority_name,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Designation',
    selector: (row) => row.designation,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Create Date',
    selector: (row) => row.create_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Last Updated Date',
    selector: (row) => row.last_updated_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Signature',
    selector: (row) => row.image,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Notes',
    selector: (row) => row.notes,
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
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];


export const debitNotesColumn = [

  {
    name: 'PO No.',
    selector: (row) => row.po,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'PO Date',
    selector: (row) => row.pi_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Invoice No',
    selector: (row) => row.pi,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Invoice Date',
    selector: (row) => row.pi_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Credit Or Debit',
    selector: (row) => row.credit_debit,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Created Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Last Update',
    selector: (row) => row.rfq_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Transaction Type',
    selector: (row) => row.transaction_type,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Total Amount',
    selector: (row) => row.total_amount,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Description',
    selector: (row) => row.description,
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
export const poColumn = [

  {
    name: 'PO NO#',
    selector: (row) => row.po,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Product',
    selector: (row) => row.product,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Product Description',
    selector: (row) => row.product_description,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Project Awarded Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Completion Date',
    selector: (row) => row.completion_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
    {
      name: '	Lead Time',
      selector: (row) => row.lead_time,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
  {
    name: '	QTY',
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
    name: 'Total PO Ammount',
    selector: (row) => row.total_amount,
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
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];


export const inputColumn = [
     {
      name: 'SL. NO.',
      selector: (row) => row.sl_no,
      sortable: true,
      center: false,
      // wrap: true,
    },
     {
      name: 'Package Description',
      selector: (row) => row.package_description,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'Description of Goods',
      selector: (row) => row.description_of_goods,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'Qty.',
      selector: (row) => row.table_qty,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'UOM.',
      selector: (row) => row.uom,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'Unit Price.',
      selector: (row) => row.unit_price_input,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'Total.',
      selector: (row) => row.total,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
     {
      name: 'Action',
      selector: (row) => row.action_input,
      sortable: true,
      center: false,
      // wrap: true,
      minWidth: '400px',
    },
];


export const traxInvoiceColumn = [

  {
    name: 'Vendor',
    selector: (row) => row.vendor,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Location',
    selector: (row) => row.location,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	PI#',
    selector: (row) => row.pi,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	PO#',
    selector: (row) => row.po,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	PO Date',
    selector: (row) => row.pi_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Invoice',
    selector: (row) => row.invoice,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Project Awarded Date',
    selector: (row) => row.awarded_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: 'Complition Date',
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
    name: '	QTY',
    selector: (row) => row.qty,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Order Type',
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
    name: '	FOB',
    selector: (row) => row.fob,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	CIF',
    selector: (row) => row.cif,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Tax %',
    selector: (row) => row.tax,
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
    name: 'Total Invoice Ammount',
    selector: (row) => row.total_amount,
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
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
];




