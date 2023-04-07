import React from 'react';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFilePdf } from 'react-icons/fa';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
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
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },

];
export const ViewRFQColumns = [
  // {
  //   name: 'Image',
  //   selector: (row) => row.image,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '100px',
  // },
  {
    name: 'Ref. ID',
    selector: (row) => row.ref_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Buyer Location',
    selector: (row) => row.buyer_location,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Product',
    selector: (row) => row.product,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'RFQ_Last_date',
    selector: (row) => row.rfq_last_date,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Required Certificates',
    selector: (row) => row.required_certificates,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Trade Terms',
    selector: (row) => row.trade_terms,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Product Description',
    selector: (row) => row.product_description,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: 'Download Spec',
    selector: (row) => row.download_spec,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  {
    name: '	Product Image',
    selector: (row) => row.image,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Samples',
    selector: (row) => row.samples,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Destination',
    selector: (row) => row.destination,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },

  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
    {
    name: 'Submitted Date',
    selector: (row) => row.submitted_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center:true,
    sortable: true,
    
    // minWidth: '160px',
    // maxWidth: '160px',
  },

];


export const productSampleColumns = [
  {
    name: 'RFQID',
    selector: (row) => row.rfq_id,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	RFQ  Date',
    selector: (row) => row.rfq_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
        minWidth: '400px',
  },
  {
    name: '	Buyer Location',
    selector: (row) => row.buyer_location,
    sortable: true,
    center: true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Sample Request Date',
    selector: (row) => row.sample_request_date,
    sortable: true,
    center: true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  
  {
    name: 'Product',
    selector: (row) => row.product,
    sortable: true,
    center: true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Product Description',
    selector: (row) => row.product_description,
    sortable: true,
    center: true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Download Spec',
    selector: (row) => row.download_spec,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'No.Of Samples',
    selector: (row) => row.no_of_sample,
    sortable: true,
    center: true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Payment',
    selector: (row) => row.payment_terms,
    sortable: true,
    center:true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Unit Price(Ex Work)',
    selector: (row) => row.unit_price,
    sortable: true,
    center:true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center:true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Dispatch Copy',
    selector: (row) => row.dispatch_copy,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center:true,
    sortable: true,
    minWidth: '400px',
    // minWidth: '200px',
    // maxWidth: '200px',
  },

];

export const quoteStatusColumns = [
    {
        name: 'RFQID',
        selector: (row) => row.rfq_id,
        sortable: true,
        center: false,
        // wrap: true,
        minWidth: '400px',
    },
     {
        name: '	RFQ  Date',
            selector: (row) => row.rfq_date,
            sortable: true,
            center: true,
            sortable: true,
            // minWidth: '120px',
            // maxWidth: '150px',
        },
     {
        name: '	Quote Ref.No',
            selector: (row) => row.quote_ef_no,
            sortable: true,
            center: true,
            sortable: true,
            // minWidth: '120px',
            // maxWidth: '150px',
        },
     {
        name: '	Quote Submitted Date',
            selector: (row) => row.quote_submitted_date,
            sortable: true,
            center: true,
            sortable: true,
            // minWidth: '120px',
            // maxWidth: '150px',
        },
     {
        name: '	Product',
            selector: (row) => row.product,
            sortable: true,
            center: true,
            sortable: true,
            // minWidth: '120px',
            // maxWidth: '150px',
        },
     {
        name: '	QTY',
            selector: (row) => row.qty,
            sortable: true,
            center: true,
            sortable: true,
            // minWidth: '120px',
            // maxWidth: '150px',
        },
      {
        name: 'Unit Price(Ex Work)',
        selector: (row) => row.unit_price,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Unit Price(FOB)',
        selector: (row) => row.unit_price,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Unit Price(CIF)',
        selector: (row) => row.unit_price,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Unit Price(DDP)',
        selector: (row) => row.unit_price,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Domestic Tax',
        selector: (row) => row.domestic_tax,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Export Tax',
        selector: (row) => row.export_tax,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Product Pic',
        selector: (row) => row.image,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Artwork',
        selector: (row) => row.image,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Specification',
        selector: (row) => row.specification,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Lead Time',
        selector: (row) => row.lead_time,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Origin',
        selector: (row) => row.destination,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Destination',
        selector: (row) => row.destination,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Buyer Notes',
        selector: (row) => row.buyer_notes,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Supplier Notes',
        selector: (row) => row.supplier_notes,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
    {
        name: 'Status',
        selector: (row) => row.action,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
      {
        name: 'Action',
        selector: (row) => row.action2,
        sortable: true,
        center:true,
        sortable: true,
        // minWidth: '200px',
        // maxWidth: '200px',
    },
];


export const productSampleData = [
    {
        stocked: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        lead_time: (
                <div>
                    <p>4 Weeks</p>

                </div>
        ),
        buyer_notes: (
                <div>
                    <p>Buyer notes</p>

                </div>
        ),
        supplier_notes: (
                <div>
                    <p>Buyer notes</p>

                </div>
        ),
        origin: (
                <div>
                    <p>Bengaluru</p>

                </div>
        ),
        destination: (
                <div>
                    <p>Chennai</p>

                </div>
        ),
            specification: (
                <div>
                    <p>asfklajsdf alsdjfl ajsl alskdjflkaj sllk lkajsfldjfla lskjdflka lkajslkdfalsdf </p>

                </div>
            ),
        quote_ef_no: (
                <div>
                    <p>QUTIMEPL12456</p>

                </div>
        ),
        qty: (
                <div>
                    <p>100</p>

                </div>
        ),
        quote_submitted_date: (
                <div>
                    <p>12 FEB, 2023</p>

                </div>
        ),
        rfq_id: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        image: (
            <div>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

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
        stock_uploaded_date: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        rfq_date: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        buyer_location: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        sample_request_date: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        product: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        product_description: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        download_spec: (
                <div>
                    <FontAwesomeIcon icon = {FaFilePdf}/>

                </div>
        ),
        no_of_sample: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        payment_terms: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        unit_price: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
            action: (
                <div>
                    {/* <span> */}
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Awarded</Btn>
                    {/* </span> */}

                </div>
            ),
            dispatch_copy: (
                <div>
                    <p>Buyer Location</p>

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