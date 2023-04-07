import React from 'react';
import { Btn, p, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

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
export const newSupplierData = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    id : (
      <div>
        <p>1</p>

      </div>
    ),
    legal_name: (
      <div>
        <p>Name1</p>

      </div>
    ),
    address: (
      <div>
        <p>Bangaluru</p>

      </div>
    ),
    name: (
      <div>
        <p>Jon Doe</p>

      </div>
    ),
    designation: (
      <div>
        <p>Managing Director</p>

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
    products: (
      <div>
        <p>Product description</p>

      </div>
    ),
    supplier_type: (
      <div>
        <p>Supplier type</p>

      </div>
    ),
    // start_date: '2022/4/19',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Rejected</Btn>
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
export const NewSupplierColumns = [
  {
    name: 'Supplier ID',
    selector: (row) => row.id,
    sortable: true,
    center: false,
    wrap: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Supplier Legal Name',
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
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Designation',
    selector: (row) => row.designation,
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
    name: 'Products',
    selector: (row) => row.products,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Supplier Type',
    selector: (row) => row.supplier_type,
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
    name: 'Supplier ID',
    selector: (row) => row.id,
    sortable: true,
    center: false,
    wrap: true,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Legal Name',
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
    name: 'Supplier Type',
    selector: (row) => row.supplier_type,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
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
    name: 'Action',
    selector: (row) => row.action,
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '400px',
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
    products: (
      <div>
        <p>Product description</p>

      </div>
    ),
    supplier_type: (
      <div>
        <p>Manufacturer</p>

      </div>
    ),
    // start_date: '2022/4/19',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Rejected provide reason to reject</Btn>
        {/* </span> */}

      </div>
    ),
  },
];


export const ReadyToSellSupplierColumns = [
    {
        name: 'REF. ID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Supplier Name',
        selector: (row) => row.name,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Stock Uploaded Date',
        selector: (row) => row.stock_update_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Last Modified',
        selector: (row) => row.last_modified,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Supplier Type',
        selector: (row) => row.supplier_type,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Image',
        selector: (row) => row.image,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Product',
        selector: (row) => row.product,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Specification',
        selector: (row) => row.specification,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	MFG Date',
        selector: (row) => row.mfg_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Available Qty',
        selector: (row) => row.available_quantity,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Unit Price',
        selector: (row) => row.unit_price,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Negotiable ?',
        selector: (row) => row.negotiable,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Dimention',
        selector: (row) => row.dimention,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Color',
        selector: (row) => row.dimention,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Origin',
        selector: (row) => row.origin,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'MOQ',
        selector: (row) => row.moq,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Payment Terms',
        selector: (row) => row.permanent_terms,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Tax (%)',
        selector: (row) => row.tax,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Transportation',
        selector: (row) => row.transportation,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Notes',
        selector: (row) => row.notes,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Stock',
        selector: (row) => row.stock,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Last Edited Date',
        selector: (row) => row.last_edit_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: '	Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Buyer Status',
        selector: (row) => row.buyer_status,
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
        minWidth: '200px',
        maxWidth: '400px',
    },
];
export const readyToSellData = [
    {
            id: (
                <div>
                    <p>COMPRO01022022BLR</p>

                </div>
            ),
            name: (
                <div>
                    <p>Company A</p>

                </div>
            ),
            location: (
                <div>
                    <p>India</p>

                </div>
            ),
            stock_update_date: (
                <div>
                    <p>01 Aug, 20202</p>

                </div>
            ),
            last_modified: (
                <div>
                    <p>04 Aug, 2022</p>

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
            last_edit_date: (
                <div>
                    <p>100</p>

                </div>
            ),
            status: (
                <div>
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Approved</Btn>

                </div>
            ),
            buyer_status: (
                <div>
                    <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>10 buyers</Btn>

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

export const RfqReceivedColumns = [
    {
        name: 'RFQ ID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Buyer',
        selector: (row) => row.buyer,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Product',
        selector: (row) => row.product,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Product Image',
        selector: (row) => row.product_image,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Required Certificates',
        selector: (row) => row.required_certificates,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Trade Terms',
        selector: (row) => row.trade_terms,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Product Description',
        selector: (row) => row.product_description,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Spec',
        selector: (row) => row.spec,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Art Work',
        selector: (row) => row.art_work,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Samples',
        selector: (row) => row.samples,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Destination',
        selector: (row) => row.destination,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Last Updated',
        selector: (row) => row.last_updated,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Published Date',
        selector: (row) => row.published_date,
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
        selector: (row) => row.action,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
];

export const RfqReceivedData = [
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
        product: (
            <div>
                <p>FIBC Food Grade</p>
            </div>
        ),
        product_image: (
            <div>
                <p>FIBC Food Grade</p>
            </div>
        ),
        required_certificates: (
            <div>
                <p>FIBC Food Grade</p>
            </div>
        ),
        trade_terms: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        product_description: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        spec: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        art_work: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        samples: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        destination: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        last_updated: (
            <div>
                <p>Trade Terms</p>
            </div>
        ),
        published_date: (
            <div>
                <p>Trade Terms</p>
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
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Submitted Date',
        selector: (row) => row.submitted_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Lead Time',
        selector: (row) => row.lead_time,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Payment Terms',
        selector: (row) => row.payment_terms,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Unit Price',
        selector: (row) => row.unit_price,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        name: 'Documents',
        selector: (row) => row.documents,
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
        status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>View</Btn>
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
