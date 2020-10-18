import React from 'react';

import { Card } from 'antd';

import ReactEcharts from 'echarts-for-react';


import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';

import patientsOptions from '../../../pages/chart-options/patients';

import {
  pi2Options
} from '../../charts/echarts/charts-options';

import { Pie} from 'react-chartjs-2';

import pieChart from '../../../pages/charts/chart-js/options/pie-chart';

const pageData: IPageData = {
  fulFilled: false,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Default'
    }
  ]
};

const DashboardPage = () => {
  const [appointments] = useFetchPageData<IAppointment[]>('./data/last-appointments.json', []);
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-first-aid-alt'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Appointments</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  23
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-wheelchair'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>New patients</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  10
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-blood'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Operations</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>
                  3
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>

      <div className='patients-graph'>
          <Card title='Patients by Month' className='mb-0'>
            <ReactEcharts className='chart-container container-h-400' option={patientsOptions} />
          </Card>
        </div>


      <div className='row'>
      <div className='col-12 col-md-4'>
          <Card title='Patient Ages'>
            <ReactEcharts option={{
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['0-10', '10-20', '20-30', '30-40', '40+']
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  series: [
    {
      name: 'area',
      type: 'pie',
      radius: [30, 110],
      roseType: 'area',
      data: [
        { value: 347, name: '0-10' },
        { value: 310, name: '10-20' },
        { value: 234, name: '20-30' },
        { value: 195, name: '30-40' },
        { value: 670, name: '40+' }
      ]
    }
  ]
}} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
        
          <Card title='Patient Sex Breakdown'>
            <Pie {...pieChart} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title='Current Patient Diagnoses'>
            <ReactEcharts option={pi2Options} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
