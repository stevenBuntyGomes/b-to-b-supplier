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
  
};
const style2 = { fontSize: 14, padding: 4, minWidth:100 };


export const ProductSamplesColumn = [
    {
        name: 'RFQID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '		RFQDATE',
        selector: (row) => row.r_date,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Buyer',
        selector: (row) => row.buyer,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Supplier',
        selector: (row) => row.supplier,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Supplier Location',
        selector: (row) => row.supplier_loaction,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Sample Request Date',
        selector: (row) => row.sample_req_date,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Product',
        selector: (row) => row.product,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Product Description',
        selector: (row) => row.product_description,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Download Spec',
        selector: (row) => row.download,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: 'No.Of Samples',
        selector: (row) => row.no_samples,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: 'Payment',
        selector: (row) => row.payment,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: '	Unit Price(Ex Work)',
        selector: (row) => row.unit_price,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: '	Status',
        selector: (row) => row.Status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },

];


export const ProductSamplesData = [
    {
        id: (
            <div>
                <p>RFQ234234</p>
            </div>
        ),
        r_date: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        buyer: (
            <div>
                <p>Jon Doe</p>
            </div>
        ),
        supplier: (
            <div>
                <p>Doe Jon</p>
            </div>
        ),
        supplier_loaction: (
            <div>
                <p>Chrome</p>
            </div>
        ),
        sample_req_date: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        product: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        product_description: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        download: (
            <div className='text-center justify-center'>
                <FontAwesomeIcon role="button" className='h5 text-warning mx-auto cursor-pointer' icon={faArrowAltCircleDown}>02/06/2022</FontAwesomeIcon>
            </div>

        ),
        no_samples: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        payment: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Paid</Btn>
            </div>
        ),
        unit_price: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        Status: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Over Delay</Btn>
            </div>
        ),
    }
];