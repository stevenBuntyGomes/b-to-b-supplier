import React from 'react';
import { Btn, p, Image, H6 } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowAltCircleDown, faFile, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'reactstrap';

// import product1 from '../../assets/images/ecommerce/product-table-1.png';
// import product2 from '../../assets/images/ecommerce/product-table-2.png';
// import product3 from '../../assets/images/ecommerce/product-table-3.png';
// import product4 from '../../assets/images/ecommerce/product-table-4.png';
// import product5 from '../../assets/images/ecommerce/product-table-5.png';
// import product6 from '../../assets/images/ecommerce/product-table-6.png';

const style = {
  
};
const style2 = { fontSize: 14, padding: 4, minWidth:100 };


export const closedTicketColumn = [
    {
        name: 'Duration To Close',
        selector: (row) => row.duration_to_close,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'User Type',
        selector: (row) => row.user_type,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Legal name',
        selector: (row) => row.legal_name,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Full Name',
        selector: (row) => row.name,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Contact',
        selector: (row) => row.contact,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Issue Category',
        selector: (row) => row.issue_category,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Country',
        selector: (row) => row.country,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Subject',
        selector: (row) => row.subject,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Description',
        selector: (row) => row.description,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Attachment',
        selector: (row) => row.attachment,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];


export const newTicketColumn = [
    {
        name: 'Ticket ID',
        selector: (row) => row.ticket_id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Issue Category',
        selector: (row) => row.issue_category,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Description',
        selector: (row) => row.description,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },

    {
        name: 'Attachment',
        selector: (row) => row.image,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Action',
        selector: (row) => row.action2,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];

export const ticketStatusColumn = [
    {
        name: 'Ticket ID',
        selector: (row) => row.ticket_id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Issue Category',
        selector: (row) => row.issue_category,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Description',
        selector: (row) => row.description,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },

    {
        name: 'Attachment',
        selector: (row) => row.image,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Response',
        selector: (row) => row.description,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Close Date',
        selector: (row) => row.close_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Action',
        selector: (row) => row.action2,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];


export const newTicketData = [
    {
        duration_to_close: (
            <div>
                <p>2 Days</p>
            </div>
        ),
        user_type: (
            <div>
                <p>Supplier</p>
            </div>
        ),
        legal_name: (
            <div>
                <p>ARJ Corp</p>
            </div>
        ),
        name: (
            <div>
                <p>Jon Doe</p>
            </div>
        ),
        email: (
            <div>
                <p>example@gmail.com</p>
            </div>
        ),
        contact: (
            <div>
                <p>+91 6689523365</p>
            </div>
        ),
        issue_category: (
            <div>
                <p>issue_category</p>
            </div>
        ),
        country: (
            <div>
                <p>India</p>
            </div>
        ),
        subject: (
            <div>
                <p>Not able to login</p>
            </div>
        ),
        description: (
            <div>
                <p>laksjldkfj laskjdf l ajslkdfjl akjsfkdjalsdl aksdf</p>
            </div>
        ),
        date: (
            <div>
                <p>1 Jan 2023</p>
            </div>
        ),
        attachment: (
            <div className='text-center justify-center'>
                <FontAwesomeIcon role="button" className='h5 text-warning mx-auto cursor-pointer' icon={faArrowAltCircleDown}>02/06/2022</FontAwesomeIcon>
            </div>
        ),
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>Draft</Btn>
            </div>
        ),
    }
];


export const pendingTicketColumn = [
    {
        name: 'Ticket ID',
        selector: (row) => row.ticket_id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Pending Since',
        selector: (row) => row.pending_since,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'User Type',
        selector: (row) => row.user_type,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Legal name',
        selector: (row) => row.legal_name,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Full Name',
        selector: (row) => row.name,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Contact',
        selector: (row) => row.contact,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Issue Category',
        selector: (row) => row.issue_category,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Country',
        selector: (row) => row.country,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Subject',
        selector: (row) => row.subject,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Description',
        selector: (row) => row.description,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Attachment',
        selector: (row) => row.attachment,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Previous Comments',
        selector: (row) => row.comments,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];
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

export const pendingTicketData = [
    {
        responded_data: (
            <div>
                <p>29 July, 2022</p>
            </div>
        ),
        ticket_id: (
            <div>
                <p>TEC13215465</p>
            </div>
        ),
        
        close_date: (
         <div>
            <p>21 Feb 2024</p>
         </div>   
        ),
        sortable: true,
        description: (
            <div>
                <p>dsf sdf sd s</p>
            </div>
        ),
        image: (
            <div>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

            </div>
        ),
        pending_since: (
            <div>
                <p>4 Days</p>
            </div>
        ),
        user_type: (
            <div>
                <p>Supplier</p>
            </div>
        ),
        legal_name: (
            <div>
                <p>ARJ Corp</p>
            </div>
        ),
        name: (
            <div>
                <p>Jon Doe</p>
            </div>
        ),
        email: (
            <div>
                <p>example@gmail.com</p>
            </div>
        ),
        contact: (
            <div>
                <p>+91 6689523365</p>
            </div>
        ),
        issue_category: (
            <div>
                <p>issue_category</p>
            </div>
        ),
        country: (
            <div>
                <p>India</p>
            </div>
        ),
        subject: (
            <div>
                <p>Not able to login</p>
            </div>
        ),
        description: (
            <div>
                <p>laksjldkfj laskjdf l ajslkdfjl akjsfkdjalsdl aksdf</p>
            </div>
        ),
        comments: (
            <div>
                <p>laksjldkfj laskjdf l ajslkdfjl</p>
            </div>
        ),
        date: (
            <div>
                <p>1 Jan 2023</p>
            </div>
        ),
        attachment: (
            <div className='text-center justify-center'>
                <FontAwesomeIcon role="button" className='h5 text-warning mx-auto cursor-pointer' icon={faArrowAltCircleDown}>02/06/2022</FontAwesomeIcon>
            </div>
        ),
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>Draft</Btn>
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
        responded_data: (
            <div>
                <p>29 July, 2022</p>
            </div>
        ),
        ticket_id: (
            <div>
                <p>TEC13215465</p>
            </div>
        ),
        close_date: (
         <div>
            <p>21 Feb 2024</p>
         </div>   
        ),
        sortable: true,
        description: (
            <div>
                <p>dsf sdf sd s</p>
            </div>
        ),
        pending_since: (
            <div>
                <p>4 Days</p>
            </div>
        ),
        image: (
            <div>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

            </div>
        ),
        user_type: (
            <div>
                <p>Supplier</p>
            </div>
        ),
        legal_name: (
            <div>
                <p>ARJ Corp</p>
            </div>
        ),
        name: (
            <div>
                <p>Jon Doe</p>
            </div>
        ),
        email: (
            <div>
                <p>example@gmail.com</p>
            </div>
        ),
        contact: (
            <div>
                <p>+91 6689523365</p>
            </div>
        ),
        issue_category: (
            <div>
                <p>issue_category</p>
            </div>
        ),
        country: (
            <div>
                <p>India</p>
            </div>
        ),
        subject: (
            <div>
                <p>Not able to login</p>
            </div>
        ),
        description: (
            <div>
                <p>laksjldkfj laskjdf l ajslkdfjl akjsfkdjalsdl aksdf</p>
            </div>
        ),
        comments: (
            <div>
                <p>laksjldkfj laskjdf l ajslkdfjl</p>
            </div>
        ),
        date: (
            <div>
                <p>1 Jan 2023</p>
            </div>
        ),
        attachment: (
            <div className='text-center justify-center'>
                <FontAwesomeIcon role="button" className='h5 text-warning mx-auto cursor-pointer' icon={faArrowAltCircleDown}>02/06/2022</FontAwesomeIcon>
            </div>
        ),
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>Open</Btn>
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


