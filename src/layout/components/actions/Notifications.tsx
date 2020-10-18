import React, { useEffect, useState } from 'react';
import { Badge, Button, Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { INotification } from '../../../interfaces/notification';

const defaultNotifications = [
  {
    text: 'Jon Ling has a higher fever',
    icon: 'icofont-heart',
    time: '17 minutes ago'
  }
];

type Props = {
  data?: INotification[];
};

const homeRoute = 'vertical/default-dashboard';

const Notifications = ({ data = defaultNotifications }: Props) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setNotifications(data);
  }, [data]);

  const handleClearAll = () => setNotifications([]);

  const notificationsMenu = (
    <Menu className='action-menu' style={{ minWidth: '280px' }}>
      <span className='dropdown-header'>
        <h3 className='dropdown-title'>Notifications</h3>

        <a onClick={handleClearAll} className='text-danger'>
          Clear all
        </a>
      </span>

      {notifications.length &&
        notifications.map((item, index) => (
          <Menu.Item className='action-item' key={index}>
            <NavLink className='d-flex w-100' to={homeRoute}>
              <span className={`icon mr-3 ${item.icon}`} />
              <span className='text'>
                <span className='message'>{item.text}</span>
                <span className='sub-text'>{item.time}</span>
              </span>
            </NavLink>
          </Menu.Item>
        ))}

      {!notifications.length && (
        <span className='empty-item'>No notifications</span>
      )}

      {notifications.length && (
        <div className='dropdown-actions'>
          <Button type='primary' className='w-100'>
            View all notifications
            <span
              style={{ fontSize: '1.2rem' }}
              className='icofont-calendar ml-3'
            />
          </Button>
        </div>
      )}
    </Menu>
  );
  return (
    <Dropdown
      className='mr-3'
      overlay={notificationsMenu}
      trigger={['click']}
      visible={visible}
      onVisibleChange={setVisible}
      placement='bottomRight'
    >
      <Badge className='action-badge' count={notifications.length}>
        <span
          className={`notification-icon icofont-notification ${
            visible ? 'active' : null
          }`}
          style={{ fontSize: '22px', cursor: 'pointer' }}
        />
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
