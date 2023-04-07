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


export const settingsColumn = [
    {
        name: 'Account',
        selector: (row) => row.account,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Logout Date/Time',
        selector: (row) => row.logout_date,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Last Seen Date/Time',
        selector: (row) => row.last_seen,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Device',
        selector: (row) => row.device,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	Browser',
        selector: (row) => row.browser,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: '	IP Address',
        selector: (row) => row.ip_address,
        sortable: true,
        center: false,
        minWidth: '200px',
    },
    {
        name: 'Country',
        selector: (row) => row.country,
        sortable: true,
        center: false,
        wrap: true,
        minWidth: '200px',
    },

];


export const settingsData = [
    {
        account: (
            <div>
                <p>Graiden</p>
            </div>
        ),
        logout_date: (
            <div>
                <p>01 Aug, 2022, 12.53 PM IST</p>
            </div>
        ),
        last_seen: (
            <div>
                <p>076 4820 8838</p>
            </div>
        ),
        device: (
            <div>
                <p>Laptop</p>
            </div>
        ),
        browser: (
            <div>
                <p>Chrome</p>
            </div>
        ),
        ip_address: (
            <div>
                <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs', type: 'button' }}>192.168.55.17</Btn>
            </div>
        ),
        country: (
            <div>
                <p>India</p>
            </div>
        ),
    }
];
