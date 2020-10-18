import React from 'react';

import { IUser } from '../../../interfaces/user';
import { history } from '../../../redux/store';
import { Button } from 'antd';

import './Contact.scss';

type OwnProps = {
  className?: string;
};

type Props = IUser & OwnProps;

const Contact = ({ address, img, name, role, className }: Props) => {
  const handleGoToProfile = () => {
    const layout = history.location.pathname.split('/')[1];
    history.push(`/${layout}/doctor-profile`);
  };

  return (
    <div className={`contact ${className}`}>
      <div className='img-box'>
        <img width='400' src={img as string} height='400' alt='avatar' />
      </div>

      <div className='info-box'>
        <h4 className='name'>{name}</h4>

        <p className='role'>{role}</p>

        <p className='address'>{address}</p>

        <p>(Not a real doctor)</p>

        <div className='button-box'>
          <Button type='primary' onClick={handleGoToProfile}>
            View profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
