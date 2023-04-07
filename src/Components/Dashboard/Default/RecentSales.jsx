import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Table, Row } from 'reactstrap';
import { Image, H5, P } from '../../../AbstractElements';
import { DailyDropdown, RecentSalesTitle } from '../../../Constant';
import { RecentSalesData } from '../../../Data/DefaultDashboard';
import DropdownCommon from '../../Common/Dropdown';

const RecentSales = () => {
  return (
    <Col xxl='8'xl = '8' md='6' className='appointment-sec box-col-6'>
      <div className='appointment'>
        <Card>
          <CardHeader className='card-no-border'>
            <div className='header-top'>
              <H5 attrH5={{ className: 'm-0' }}>{RecentSalesTitle}</H5>
              <div className='card-header-right-icon'>
                <DropdownCommon icon={false} options={DailyDropdown} btn={{ caret: true }} />
              </div>
            </div>
          </CardHeader>
          <CardBody className='pt-0'>
            <div className='appointment-table'>
              {/* <Table borderless responsive>
                  <tbody>
                    {RecentSalesData.map((item, i) => (
                        <>
                          <tr key={i}>
                            <td>
                              <Image attrImage={{ className: 'img-fluid img-40 rounded-circle', src: require(`../../../assets/images/dashboard/user/${item.image}`), alt: 'user' }} />
                            </td>
                            <td className='img-content-box'>
                              <Link className='d-block f-w-500' to={`${process.env.PUBLIC_URL}/app/users/profile`}>
                                {item.title}
                              </Link>
                              <span className='f-light'>{item.subTitle}</span>
                            </td>
                            <td className='text-end'>
                              <P attrPara={{ className: 'font-success me-5' }}>{item.badge}</P>
                            </td>
                            <td>
                              <Image attrImage={{ className: 'img-fluid img-40 rounded-circle', src: require(`../../../assets/images/dashboard/user/${item.image}`), alt: 'user' }} />
                            </td>
                            <td className='img-content-box'>
                              <Link className='d-block f-w-500' to={`${process.env.PUBLIC_URL}/app/users/profile`}>
                                {item.title}
                              </Link>
                              <span className='f-light'>{item.subTitle}</span>
                            </td>
                            <td className='text-end'>
                              <P attrPara={{ className: 'font-success me-5' }}>{item.badge}</P>
                            </td>
                          </tr>
                        </>
                        

                    ))}
                  </tbody>
              </Table> */}
              <Row>
                {RecentSalesData.map((item, i) => (
                  <Col className='mb-3' sm = '12' xl='6' key = {i}>
                    <div className='d-flex justify-content-center justify-content-between'>
                      <div>
                        <td className='mx-3'>
                          <Image attrImage={{ className: 'img-fluid img-40 rounded-circle mt-3 mx-3', src: require(`../../../assets/images/dashboard/user/${item.image}`), alt: 'user' }} />
                        </td>
                        <td className='img-content-box me-5'>
                          <Link className='d-block f-w-500' to={`${process.env.PUBLIC_URL}/app/users/profile`}>
                            {item.title}
                          </Link>
                          <span className='f-light'>{item.subTitle}</span>
                        </td>
                      </div>
                      <td className='text-end'>
                        <P attrPara={{ className: 'font-success mt-4' }}>{item.badge}</P>
                      </td>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default RecentSales;
