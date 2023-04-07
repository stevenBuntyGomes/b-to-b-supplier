import React from 'react';
import { Btn, p, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { BorderRadius } from '../../../../Constant';

// import product1 from '../../assets/images/ecommerce/product-table-1.png';
// import product2 from '../../assets/images/ecommerce/product-table-2.png';
// import product3 from '../../assets/images/ecommerce/product-table-3.png';
// import product4 from '../../assets/images/ecommerce/product-table-4.png';
// import product5 from '../../assets/images/ecommerce/product-table-5.png';
// import product6 from '../../assets/images/ecommerce/product-table-6.png';

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 100, fontSize: 14, padding: 4, minWidth:100 };
export const newBuyerData = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    company_legal_name : (
      <div>
        <p>company Legal Name</p>

      </div>
    ),
    full_name: (
      <div>
        <p>Name1</p>

      </div>
    ),
    address: (
      <div>
        <p>Bangaluru</p>

      </div>
    ),
    
    location: (
      <div>
        <p>Chrome Browser, LAPTOP</p>

      </div>
    ),
    ip: (
      <div>
        <p>192.168.44.25</p>
      </div>
    ),
    website: (
      <div>
        <p>www.domainname.com</p>

      </div>
    ),
    device: (
      <div>
        <p>Chrome Browser, LAPTOP</p>

      </div>
    ),
    email: (
      <div>
        <p>name@company.com</p>

      </div>
    ),
    phone: (
      <div>
        <p>+91 5589758895</p>

      </div>
    ),
    how_did: (
      <div>
        <p>How did you hear...</p>

      </div>
    ),
    products: (
      <div>
        <p>Product description</p>

      </div>
    ),
    description: (
      <div>
        <p>description</p>

      </div>
    ),
    download: (
      <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

      </div>
    ),
    // start_date: '2022/4/19',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>New</Btn>
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
export const NewBuyerColumns = [
  {
    name: 'Buyer Legal Name',
    selector: (row) => row.company_legal_name,
    sortable: true,
    center: false,
    wrap: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Full Name',
    selector: (row) => row.full_name,
    sortable: true,
    center: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Address',
    selector: (row) => row.address,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Location',
    selector: (row) => row.location,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'IP Address',
    selector: (row) => row.ip,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Device Info',
    selector: (row) => row.device,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Website',
    selector: (row) => row.website,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Phone',
    selector: (row) => row.phone,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'How Did You Hear',
    selector: (row) => row.how_did,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '400px',
  },
  {
    name: 'Products',
    selector: (row) => row.products,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Description',
    selector: (row) => row.description,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Download Spec',
    selector: (row) => row.download,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },

];


export const ExistingSupplierColumns = [
  {
    name: 'Buyer ID',
    selector: (row) => row.id,
    sortable: true,
    center: false,
    wrap: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Legal Company Name',
    selector: (row) => row.legal_name,
    sortable: true,
    center: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Address',
    selector: (row) => row.address,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Location',
    selector: (row) => row.location,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Created Date',
    selector: (row) => row.created_at,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Last Update',
    selector: (row) => row.update,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Last Login',
    selector: (row) => row.login,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Products Interested',
    selector: (row) => row.products_interested,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },

];

export const ExistingSupplierData = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    id : (
      <div>
        <p>COMBLR01022022</p>

      </div>
    ),
    legal_name: (
      <div>
        <p>Company Name PVT LTD</p>

      </div>
    ),
    address: (
      <div>
        <p>Bangaluru</p>

      </div>
    ),
    
    location: (
      <div>
        <p>Chrome Browser, LAPTOP</p>

      </div>
    ),
    created_at: (
      <div>
        <p>01 July, 2022</p>
      </div>
    ),
    update: (
      <div>
        <p>01 Aug, 2022</p>

      </div>
    ),
    login: (
      <div>
        <p>02 Aug, 2022</p>

      </div>
    ),
    products_interested: (
      <div>
        <p>Product description</p>

      </div>
    ),
         action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>New</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    ),
  },
];


export const ReadyToBuyColumns = [
    {
        name: 'REF. ID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
    },
    {
        name: '	Buyer Legal Name',
        selector: (row) => row.buyer_legal_name,
        sortable: true,
        center: false,
    },
    {
        name: 'Buy Price',
        selector: (row) => row.buy_price,
        sortable: true,
        center: false,
    },
    {
        name: 'Buy Qty.',
        selector: (row) => row.buy_qty,
        sortable: true,
        center: false,
    },
    {
        name: 'Deliver To',
        selector: (row) => row.delivered_to,
        sortable: true,
        center: false,
    },
    {
        name: 'Sample Required',
        selector: (row) => row.sample_required,
        sortable: true,
        center: false,
    },
    {
        name: 'No. of Sample',
        selector: (row) => row.no_of_sample,
        sortable: true,
        center: false,
    },
    {
        name: '	Group Buy',
        selector: (row) => row.group_buy,
        sortable: true,
        center: false,
    },
    {
        name: '	Group Buy Qty',
        selector: (row) => row.group_buy_qty,
        sortable: true,
        center: false,
    },
    {
        name: '	Supplier Name',
        selector: (row) => row.supplier_name,
        sortable: true,
        center: false,
    },
    {
        name: '	Product Uploaded Date',
        selector: (row) => row.product_upload_date,
        sortable: true,
        center: false,
    },
    {
        name: '	Last Modified',
        selector: (row) => row.last_modified,
        sortable: true,
        center: false,
    },
    {
        name: '	Supplier Type',
        selector: (row) => row.supplier_type,
        sortable: true,
        center: false,
    },
    {
        name: '	Image',
        selector: (row) => row.image,
        sortable: true,
        center: true,
    },
    {
        name: '		Product',
        selector: (row) => row.Product,
        sortable: true,
        center: true,
    },
    {
        name: 'Specification',
        selector: (row) => row.specification,
        sortable: true,
        center: true,
    },
    {
        name: '	MFG Date',
        selector: (row) => row.mfg_date,
        sortable: true,
        center: true,
    },
    {
        name: '	Available Qty',
        selector: (row) => row.available_qty,
        sortable: true,
        center: true,
    },
    {
        name: '	Unit Price',
        selector: (row) => row.unit_price,
        sortable: true,
        center: true,
    },
    {
        name: '	Negotiable ?',
        selector: (row) => row.negotiable,
        sortable: true,
        center: false,
    },
    {
        name: '	Dimention',
        selector: (row) => row.dimention,
        sortable: true,
        center: false,
    },
    {
        name: '	Color',
        selector: (row) => row.color,
        sortable: true,
        center: false,
    },
    {
        name: '	Origin',
        selector: (row) => row.origin,
        sortable: true,
        center: false,
    },
    {
        name: 'MOQ',
        selector: (row) => row.moq,
        sortable: true,
        center: false,
    },
    {
        name: 'Payment Terms',
        selector: (row) => row.permanent_terms,
        sortable: true,
        center: false,
    },
    {
        name: 'Tax (%)',
        selector: (row) => row.tax,
        sortable: true,
        center: false,
    },
    {
        name: 'Transportation',
        selector: (row) => row.transportation,
        sortable: true,
        center: false,
    },
    {
        name: 'Notes',
        selector: (row) => row.notes,
        sortable: true,
        center: false,
    },
    {
        name: 'Stock',
        selector: (row) => row.stock,
        sortable: true,
        center: false,
    },
    {
        name: '	Status',
        selector: (row) => row.status,
        sortable: true,
        center: true,
    },

     {
        name: 'Action',
        selector: (row) => row.action2,
        sortable: true,
        center:true,
        wrap: true
    },
];
export const readyToBuyData = [
    {
            id: (
                <div>
                    <p>COMPRO01022022BLR</p>

                </div>
            ),
            buyer_legal_name: (
                <div>
                    <p>Company A</p>

                </div>
            ),
            buy_price: (
                <div>
                    <p>200</p>

                </div>
            ),
            buy_qty: (
                <div>
                    <p>30</p>

                </div>
            ),
            delivered_to: (
                <div>
                    <p>Bhwan</p>

                </div>
            ),
            sample_required: (
                <div>
                    <p>sample_required</p>

                </div>
            ),
            no_of_sample: (
                <div>
                    <p>20</p>

                </div>
            ),
            group_buy: (
                <div>
                    <p>group buy</p>

                </div>
            ),
            group_buy_qty: (
                <div>
                    <p>100</p>

                </div>
            ),
            supplier_name: (
                <div>
                    <p>John Doe</p>

                </div>
            ),
            product_upload_date: (
                <div>
                    <p>11 Aug 2022</p>

                </div>
            ),
            last_modified: (
                <div>
                    <p>11 Dec 2022</p>

                </div>
            ),
            supplier_type: (
                <div>
                    <p>supplier_type</p>

                </div>
            ),
            image: (
                <div>
                    {/* <img className = 'rounded-circle w-20 h-20'>Rejected provide reason to reject</img> */}
                    <p>supplier_type</p>
                </div>
            ),
            product: (
                <div>
                    <p>product 1</p>

                </div>
            ),
            specification: (
                <div>
                    <p>product 1</p>

                </div>
            ),
            mfg_date: (
                <div>
                    <p>02 Aug, 2022</p>

                </div>
            ),
            available_quantity: (
                <div>
                    <p>5000</p>

                </div>
            ),
            unit_price: (
                <div>
                    <p>200</p>

                </div>
            ),
            negotiable: (
                <div>
                                {/* <span> */}
                    <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>No</Btn>
                    {/* </span> */}


                </div>
            ),
            dimention: (
                <div>
                    <p>200</p>

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
                    <p>Bengaluru, Karnataka</p>

                </div>
            ),
            permanent_terms: (
                <div>
                    <p>Bengaluru, Karnataka</p>

                </div>
            ),
            tax: (
                <div>
                    <p>20%</p>

                </div>
            ),
            transportation: (
                <div>
                    <p>Car</p>

                </div>
            ),
            notes: (
                <div>
                    <p>ad dg dsf dsf</p>

                </div>
            ),
            stock: (
                <div>
                    <p>100</p>

                </div>
            ),
            status: (
                <div>
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Approved</Btn>
                </div>
            ),
            action2: (
                <div className='d-flex justify-content-center'>
                    <input type={'CheckBox'}/> 
                </div>
            ),
            
    }
];

export const RfqCreatedColumns = [
    {
        name: 'RFQ ID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
    },
    {
        name: 'Buyer Legal Name',
        selector: (row) => row.buyer,
        sortable: true,
        center: false,
    },
    {
        name: 'Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
    },
    {
        name: 'RFQ Created',
        selector: (row) => row.rfq_created,
        sortable: true,
        center: false,
    },
    {
        name: 'Buyer RFQ Submitted Date',
        selector: (row) => row.rfq_submitted_date,
        sortable: true,
        center: false,
    },
    {
        name: 'Product',
        selector: (row) => row.product,
        sortable: true,
        center: false,
    },
    {
        name: 'Product Image',
        selector: (row) => row.product_image,
        sortable: true,
        center: true,
    },
    {
        name: 'Art Work',
        selector: (row) => row.art_work,
        sortable: true,
        center: true,
    },
    {
        name: 'specification',
        selector: (row) => row.specification,
        sortable: true,
        center: true,
    },
    {
        name: 'Lead Time',
        selector: (row) => row.lead_time,
        sortable: true,
        center: false,
    },
    {
        name: 'Purchase Qty.',
        selector: (row) => row.purchase_qty,
        sortable: true,
        center: false,
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
        selector: (row) => row.action,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];

export const RfqCreatedData = [
    {
        id: (
            <div>
                <p>RFQ2342343</p>
            </div>
        ),
        buyer: (
            <div>
                <p>JonDoe</p>
            </div>
        ),
        location: (
            <div>
                <p>India</p>
            </div>
        ),
        rfq_created: (
            <div>
                <p>02 Feb 2023</p>
            </div>
        ),
        rfq_submitted_date: (
            <div>
                <p>04 Feb 2023</p>
            </div>
        ),
        
        product: (
            <div>
                <p>FIBC Food Grade</p>
            </div>
        ),
        product_image: (
            <div>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

            </div>
        ),
        art_work: (
            <div>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

            </div>
        ),
        specification: (
            <div>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

            </div>
        ),
        lead_time: (
            <div>
                <p>right away</p>
            </div>
        ),
        purchase_qty: (
            <div>
                <p>2000</p>
            </div>
        ),
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'warning', className: 'btn btn-xs', type: 'button' }}>Draft</Btn>
            </div>
        ),
        action: (
                <div>
                    <span>
                    <input type={'CheckBox'}/> 
                    </span>
                </div>
            ),
    }
];


export const quoteSentColumns = [
    {
        name: 'Supplier',
        selector: (row) => row.supplier,
        sortable: true,
        center: false,
    },
    {
        name: 'Supplier Type',
        selector: (row) => row.supplier_type,
        sortable: true,
        center: false,
    },
    {
        name: 'Submitted Date',
        selector: (row) => row.submitted_date,
        sortable: true,
        center: false,
        wrap: true,
    },
    {
        name: 'Lead Time',
        selector: (row) => row.lead_time,
        sortable: true,
        center: false,
    },
    {
        name: 'Payment Terms',
        selector: (row) => row.payment_terms,
        sortable: true,
        center: false,
    },
    {
        name: 'Unit Price',
        selector: (row) => row.unit_price,
        sortable: true,
        center: false,
    },
    {
        name: 'Documents',
        selector: (row) => row.documents,
        sortable: true,
        center: false,
    },
    {
        name: 'Details',
        selector: (row) => row.details,
        sortable: true,
        center: false,
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
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

export const quoteData = [
    {
    supplier: (
            <div>
                <p>JSPL Company</p>
            </div>
        ),
    supplier_type: (
            <div>
                <p>JSPL Company</p>
            </div>
        ),
    submitted_date: (
            <div>
                <p>02/06/2022</p>
            </div>
        ),
    lead_time: (
            <div>
                <p>4 Weeks</p>
            </div>
        ),
        payment_terms: (
            <div>
                <p>Credit 3 Months</p>
            </div>
        ),
        unit_price: (
            <div>
                <p>USD 2.5</p>
            </div>
        ),
        documents: (
            <div className='text-center justify-center'>
                <FontAwesomeIcon role="button" className='h5 text-warning mx-auto cursor-pointer' icon={faArrowAltCircleDown}>02/06/2022</FontAwesomeIcon>
            </div>
        ),      
        details: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>View</Btn>
            </div>
        ),      
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Approved</Btn>
            </div>
        ),
        action2: (
            <div>
                <span>
                <input type={'CheckBox'}/> 
                </span>
            </div>
        )
    }        
];

export const groupBuyingColumns = [
    {
        name: 'Product Image',
        selector: (row) => row.product_image,
        sortable: true,
        center: false,
    },
    {
        name: 'Product Name',
        selector: (row) => row.product_name,
        sortable: true,
        center: false,
    },
    {
        name: 'Supplier',
        selector: (row) => row.supplier,
        sortable: true,
        center: false,
    },
    {
        name: 'Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
    },
    {
        name: 'Specification',
        selector: (row) => row.specification,
        sortable: true,
        center: false,
    },
    {
        name: 'Download Spec',
        selector: (row) => row.download_spec,
        sortable: true,
        center: false,
    },
    {
        name: 'Bag Dimention',
        selector: (row) => row.bag_dimention,
        sortable: true,
        center: false,
    },
    {
        name: 'Bag Dimention',
        selector: (row) => row.bag_dimention,
        sortable: true,
        center: false,
    },
    {
        name: 'MF. Date',
        selector: (row) => row.mf_date,
        sortable: true,
        center: false,
    },
    {
        name: 'MF. Date',
        selector: (row) => row.mf_date,
        sortable: true,
        center: false,
    },
    {
        name: 'Color',
        selector: (row) => row.color,
        sortable: true,
        center: false,
    },
    {
        name: 'Color',
        selector: (row) => row.color,
        sortable: true,
        center: false,
    },
    {
        name: 'Available Qty',
        selector: (row) => row.available_qty,
        sortable: true,
        center: false,
    },
    {
        name: 'No Of Buyers Ready',
        selector: (row) => row.no_of_buyers_ready,
        sortable: true,
        center: false,
    },
    {
        name: 'Qty Booked',
        selector: (row) => row.qty_booked,
        sortable: true,
        center: false,
    },
    {
        name: 'Buyer Price',
        selector: (row) => row.buyer_price,
        sortable: true,
        center: false,
    },
    {
        name: 'Origin',
        selector: (row) => row.origin,
        sortable: true,
        center: false,
    },
    {
        name: 'MOQ',
        selector: (row) => row.moq,
        sortable: true,
        center: false,
    },
    {
        name: 'Payment Terms',
        selector: (row) => row.payment_terms,
        sortable: true,
        center: false,
    },
    {
        name: 'Unit Price (Ex Wrk)',
        selector: (row) => row.unit_price,
        sortable: true,
        center: false,
    },
    {
        name: 'Negotiable',
        selector: (row) => row.negotiable,
        sortable: true,
        center: false,
    },
    {
        name: 'Tax (%)',
        selector: (row) => row.tax,
        sortable: true,
        center: false,
    },
    {
        name: 'Transportation',
        selector: (row) => row.transportation,
        sortable: true,
        center: false,
    },
    {
        name: 'Notes',
        selector: (row) => row.notes,
        sortable: true,
        center: false,
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
    },
];

export const groupBuyingData = [
  {
    product_image: (
          <div>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" style = {{ width: "50px", height: "50px", BorderRadius: "50%" }} className = "rounded-circle" alt = ""/>

          </div>
      ),
    product_name: (
            <div>
                <p>Product Name 1</p>
            </div>
        ),
    supplier: (
            <div>
                <p>ABC Company</p>
            </div>
        ),
    location: (
            <div>
                <p>Lisbon, Portugal</p>
            </div>
        ),
    specification: (
            <div>
                <p>REquired Specification</p>
            </div>
        ),
    download_spec: (
            <div>
                <p>download_spec Specification</p>
            </div>
        ),
    bag_dimention: (
            <div>
                <p>bag_dimention bag_dimention</p>
            </div>
        ),
    mf_date: (
            <div>
                <p>2 Feb 2022</p>
            </div>
        ),
    color: (
            <div>
                <p>Red</p>
            </div>
        ),
    available_qty: (
            <div>
                <p>200</p>
            </div>
        ),
    no_of_buyers_ready: (
            <div>
                <p>20</p>
            </div>
        ),
    qty_booked: (
            <div>
                <p>100</p>
            </div>
        ),
    buyer_price: (
            <div>
                <p>150</p>
            </div>
        ),
    origin: (
            <div>
                <p>China</p>
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
    unit_price: (
            <div>
                <p>5.5</p>
            </div>
        ),
    negotiable: (

                <div>
                  <Btn attrBtn={{ style: style2, color: 'Success', className: 'btn btn-xs', type: 'button' }}>Yes</Btn>
              </div>

        ),
        tax: (
            <div>
                <p>20%</p>
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
      status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>View</Btn>
            </div>
        ),
  },
];
