import React from 'react';
import { Btn, p, Image } from '../../../../AbstractElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import product1 from '../../assets/images/ecommerce/product-table-1.png';
// import product2 from '../../assets/images/ecommerce/product-table-2.png';
// import product3 from '../../assets/images/ecommerce/product-table-3.png';
// import product4 from '../../assets/images/ecommerce/product-table-4.png';
// import product5 from '../../assets/images/ecommerce/product-table-5.png';
// import product6 from '../../assets/images/ecommerce/product-table-6.png';

const style = {
  
};
const style2 = { fontSize: 14, padding: 4, minWidth:100 };


export const supplierColumn = [
    {
        name: 'Buyer',
        selector: (row) => row.buyer,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'RFQID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'PO#',
        selector: (row) => row.po,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Notes',
        selector: (row) => row.notes,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Feedback Date',
        selector: (row) => row.feed_back_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: '	Action',
        selector: (row) => row.action,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },

];


export const settingsData = [
    {
        buyer: (
            <div>
                <p>GRAIN Crop Packaging</p>
            </div>
        ),
        supplier: (
            <div>
                <p>GRAIN Crop Packaging</p>
            </div>
        ),
        location: (
            <div>
                <p>India</p>
            </div>
        ),
        id: (
            <div>
                <p>RFQ8838</p>
            </div>
        ),
        po: (
            <div>
                <p>PO23443</p>
            </div>
        ),
        rating: (
            <div>
                <FontAwesomeIcon color='green' icon = {faStar}/>
                <FontAwesomeIcon color='green' icon = {faStar}/>
                <FontAwesomeIcon color='green' icon = {faStar}/>
                <FontAwesomeIcon color='green' icon = {faStar}/>
                <FontAwesomeIcon color='green' icon = {faStar}/>
            </div>
        ),
        notes: (
            <div>
                <p>ALSKJD FAS LKLDFJA ;SLKDJF LKAJSDKLFJA;LSKDJFLAKSJDFKLASDF</p>
            </div>
        ),
        feed_back_date: (
            <div>
                <p>02/02/2022</p>
            </div>
        ),
        status: (
            <div>
                <p>Project Completed</p>
            </div>
        ),
        action: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Posted</Btn>
            </div>
        ),
    }
];


export const buyerColumn = [
    {
        name: 'Supplier',
        selector: (row) => row.supplier,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Location',
        selector: (row) => row.location,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'RFQID',
        selector: (row) => row.id,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'PO#',
        selector: (row) => row.po,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Notes',
        selector: (row) => row.notes,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Feedback Date',
        selector: (row) => row.feed_back_date,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },
    {
        name: '	Action',
        selector: (row) => row.action,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },

];
