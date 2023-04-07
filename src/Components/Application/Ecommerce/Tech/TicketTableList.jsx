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
        name: 'Responded Data',
        selector: (row) => row.responded_data,
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

export const pendingTicketData = [
    {
        responded_data: (
            <div>
                <p>29 July, 2022</p>
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
    }
];


