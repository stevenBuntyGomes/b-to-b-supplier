import React from 'react';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFilePdf } from 'react-icons/fa';
const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 100, fontSize: 14, padding: 4, minWidth:100 };
export const productData = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    ref_id: (
      <div>
        <H6>COMPRO01022022BLR</H6>

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
    stock: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>In Stock</Btn>
        {/* </span> */}

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
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    ref_id: (
      <div>
        <H6>COMPRO01022022BLR</H6>

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
    negotiation: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>No</Btn>
        {/* </span> */}

      </div>
    ),
    dimension: (
      <div>
        <p>90 x 90 x 120</p>

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
    stock: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Out Of Stock</Btn>
        {/* </span> */}

      </div>
    ),
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Active</Btn>
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

  // {
  //   image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
  //   Details: (
  //     <div>
  //       <H6>Black Lipstick</H6>
  //       <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
  //     </div>
  //   ),
  //   amount: '$10',
  //   stock: <div className='font-success'>In Stock</div>,
  //   start_date: '2022/4/19',
  //   action: (
  //     <div>
  //       <span>
  //         <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
  //       </span>{' '}
  //       &nbsp;&nbsp;
  //       <span>
  //         <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Edit </Btn>
  //   //       </span>
  //       </div>
  //     ),
  //   },
];
export const productColumns = [
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
  // {
  //   name: 'Amount',
  //   selector: (row) => row.amount,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '150px',
  // },
  // {
  //   name: 'Stock',
  //   selector: (row) => row.stock,
  //   sortable: true,
  //   center: true,
  //   minWidth: '120px',
  //   maxWidth: '150px',
  // },
  {
    name: '	Image',
    selector: (row) => row.image,
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
    name: '	Specification',
    selector: (row) => row.specification,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'MFG Date',
    selector: (row) => row.mfg,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Available Qty',
    selector: (row) => row.available_qty,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Ex Work Price',
    selector: (row) => row.work_price,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Negotiable ?',
    selector: (row) => row.negotiation,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Dimension ?',
    selector: (row) => row.dimension,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Color',
    selector: (row) => row.color,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Origin',
    selector: (row) => row.origin,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	MOQ',
    selector: (row) => row.moq,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Payment Terms',
    selector: (row) => row.payment_terms,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Samples Available',
    selector: (row) => row.sample_available,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Domestic Tax (%)',
    selector: (row) => row.domestic_tax,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Export Tax (%)',
    selector: (row) => row.export_tax,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Transportation',
    selector: (row) => row.transportation,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Notes',
    selector: (row) => row.notes,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: '	Uploaded Date',
    selector: (row) => row.uploaded_data,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Stock',
    selector: (row) => row.stock,
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
    
    // minWidth: '160px',
    // maxWidth: '160px',
  },

];


export const inqueryReceivedColumns = [
  // {
  //   name: 'Image',
  //   selector: (row) => row.image,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '100px',
  // },
  {
    name: 'Buyer Location',
    selector: (row) => row.buyer_location,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  // {
  //   name: 'Amount',
  //   selector: (row) => row.amount,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '150px',
  // },
  // {
  //   name: 'Stock',
  //   selector: (row) => row.stock,
  //   sortable: true,
  //   center: true,
  //   minWidth: '120px',
  //   maxWidth: '150px',
  // },
  {
    name: '	Inquery Date',
    selector: (row) => row.inquery_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Required Qty',
    selector: (row) => row.required_qty,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Buyer Price (Ex Work)',
    selector: (row) => row.buyer_price,
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
    name: 'Sample Required',
    selector: (row) => row.sample_required,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Sample Terms',
    selector: (row) => row.sample_Terms,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Buyer Time Frame',
    selector: (row) => row.buyer_time_frame,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Payment Terms',
    selector: (row) => row.payment_terms,
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
    name: 'Seller Notes',
    selector: (row) => row.seller_notes,
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

];

export const inqueryReceivedData = [
    {
            buyer_location: (
                <div>
                    <p>Buyer Location</p>

                </div>
            ),
            inquery_date: (
                <div>
                    <p>02 March 2023, 10 AM</p>

                </div>
            ),
        
            required_qty: (
                <div>
                    <p>5000</p>

                </div>
            ),
            buyer_price: (
                <div>
                    <p>5.9</p>

                </div>
            ),
            destination: (
                <div>
                    <p>FOB Chennai</p>

                </div>
            ),
            sample_required: (
                <div>
                    <p>2 Sample</p>

                </div>
            ),
            sample_Terms: (
                <div>
                    <p>Paid Samples</p>

                </div>
            ),
            buyer_time_frame: (
                <div>
                    <p>Immediate</p>

                </div>
            ),
            payment_terms: (
                <div>
                    <p>30 Days Credit</p>

                </div>
            ),
            buyer_notes: (
                <div>
                    <p>notes from buyer</p>

                </div>
            ),
            seller_notes: (
                <div>
                    <p>notes from supplier</p>

                </div>
            ),

            action: (
                <div>
                    {/* <span> */}
                    <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>Select</Btn>
                    {/* </span> */}

                </div>
            ),
    },
    {
            buyer_location: (
                <div>
                    <p>Buyer Location</p>

                </div>
            ),
            inquery_date: (
                <div>
                    <p>02 March 2023, 10 AM</p>

                </div>
            ),
        
            required_qty: (
                <div>
                    <p>5000</p>

                </div>
            ),
            buyer_price: (
                <div>
                    <p>5.9</p>

                </div>
            ),
            destination: (
                <div>
                    <p>FOB Chennai</p>

                </div>
            ),
            sample_required: (
                <div>
                    <p>2 Sample</p>

                </div>
            ),
            sample_Terms: (
                <div>
                    <p>Paid Samples</p>

                </div>
            ),
            buyer_time_frame: (
                <div>
                    <p>Immediate</p>

                </div>
            ),
            payment_terms: (
                <div>
                    <p>30 Days Credit</p>

                </div>
            ),
            buyer_notes: (
                <div>
                    <p>notes from buyer</p>

                </div>
            ),
            seller_notes: (
                <div>
                    <p>notes from supplier</p>

                </div>
            ),
            action: (
                <div>
                    {/* <span> */}
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Accepted</Btn>
                    {/* </span> */}

                </div>
            ),
    },
];


export const productSampleColumns = [
  {
    name: 'STOCKID',
    selector: (row) => row.stocked,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
  },
  {
    name: '	Stock Uploaded Date',
    selector: (row) => row.stock_uploaded_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Buyer Location',
    selector: (row) => row.buyer_location,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: '	Sample Request Date',
    selector: (row) => row.sample_request_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  
  {
    name: 'Product',
    selector: (row) => row.product,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Product Description',
    selector: (row) => row.product_description,
    sortable: true,
    center: true,
    sortable: true,
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
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Payment',
    selector: (row) => row.payment_terms,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
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
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center:true,
    sortable: true,
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
        stock_uploaded_date: (
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
                    <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>Pending</Btn>
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
    {
        stocked: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        stock_uploaded_date: (
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
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Dispatched</Btn>
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
    {
        stocked: (
                <div>
                    <p>Buyer Location</p>

                </div>
        ),
        stock_uploaded_date: (
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
                    <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Canceled</Btn>
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