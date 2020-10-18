import React from 'react';
import { Button, Card, Form, Input, Select, Timeline } from 'antd';

import { useFormik } from 'formik';

import { IPageData } from '../../interfaces/page';

import { usePageData } from '../../hooks/usePage';
import { useGetPatient } from '../../hooks/useGetPatient';

import ImageLoader from '../../layout/components/patients/ImageLoader';

import ReactEcharts from 'echarts-for-react';

import {
  line2Options,
  lineOptions
} from '../charts/echarts/charts-options';

const pageData: IPageData = {
  title: 'Patient profile page',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'default-dashboard'
    },
    {
      title: 'Doctors',
      route: 'default-dashboard'
    },
    {
      title: 'Liam Jouns'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const ProfileForm = ({ patient }) => {
  const { values } = useFormik({
    initialValues: { ...patient },
    onSubmit: () => null
  });

  return (
    <Form layout='vertical'>
      <FormItem label='Full name'>
        <Input defaultValue={values.fullName} placeholder='Full name' />
      </FormItem>

      <FormItem label='Id'>
        <Input defaultValue={values.id} placeholder='Id' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Age'>
            <Input defaultValue={values.age} placeholder='Age' />
          </FormItem>
        </div>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Gender'>
            <Select defaultValue={values.gender} placeholder='Gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
            </Select>
          </FormItem>
        </div>
      </div>

      <FormItem label='Phone'>
        <Input defaultValue={values.phone} placeholder='Phone' />
      </FormItem>

      <FormItem label='Address'>
        <Input.TextArea rows={4} defaultValue={values.address} placeholder='Address' />
      </FormItem>

      <FormItem label='Last visit'>
        <Input defaultValue={values.lastVisit} placeholder='Last visit' readOnly />
      </FormItem>

      <FormItem label='Status'>
        <Select defaultValue={values.status} placeholder='Status'>
          <Option value='Approved'>Approved</Option>
          <Option value='Pending'>Pending</Option>
        </Select>
      </FormItem>
    </Form>
  );
};

const PatientTimeline = () => (
  <Timeline mode='left'>
    <Timeline.Item color='red'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>New prescription</h4>
        <span className='text-base text-color-100'>Now</span>
        <span className='text-base'>
          Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula
          ut id elit.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item color='blue'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Temperature Spike</h4>
        <span className='text-base text-color-100'>2m ago</span>
        <span className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item color='pink'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Operation</h4>
        <span className='text-base text-color-100'>15h ago</span>
        <span className='text-base'>
          Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula
          ut id elit.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item color='blue'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Admitted</h4>
        <span className='text-base text-color-100'>Jul 10</span>
        <span className='text-base'>Lorem ipsum dolor sit.</span>
      </div>
    </Timeline.Item>

    <Timeline.Item color='red'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Examination</h4>
        <span className='text-base text-color-100'>Jul 11</span>
        <span className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item color='green'>
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Re-Examination</h4>
        <span className='text-base text-color-100'>Jul 25</span>
        <span className='text-base'>
          Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula
          ut id elit.
        </span>
      </div>
    </Timeline.Item>
  </Timeline>
);

const PatientProfilePage = () => {
  const { patient } = useGetPatient('Liam');

  usePageData(pageData);

  return (
    patient && (
      <>
        <div className='row mb-4'>
          <div className='col-md-6 col-sm-12'>
            <div className='header mb-3'>
              <h6 className='mt-0 mb-3'>Photo</h6>
              <ImageLoader src={patient.profileImg as string} size={100} />
            </div>

            <div className='info stack'>
              <ProfileForm patient={patient} />
              <Button type='primary'>Save Changes</Button>
            </div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <Card>
              <PatientTimeline />
            </Card>
          </div>
        </div>
        <Card title='Average Patient Temperature by Hour'>
        <ReactEcharts option={line2Options} />
      </Card>
      <Card title='Average Heart Rate by Hour'>
        <ReactEcharts option={lineOptions} />
      </Card>
      <Card title='Average Blood Oxygen by Hour'>
        <ReactEcharts option={{
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
  },
  yAxis: {
    type: 'value',
    min: 'dataMin'
  },
  series: [
    {
      data: [97, 98, 98, 99, 97, 98, 98],
      type: 'line',
      lineStyle: {
        normal: {
          color: '#ed5564'
        }
      }
    }
  ]
}} />
      </Card>

        
      </>
    )
  );
};

export default PatientProfilePage;
