import React, { ReactNode, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';



import { fetchPatients } from '../../redux/patients/actions';

import className from '../../utils/class-names';

import { IAppSettings } from '../../interfaces/settings';
import { IAppState } from '../../interfaces/app-state';
import { IPageData } from '../../interfaces/page';

import './BaseLayout.scss';

const patientsUrl = '/data/patients.json';

type Props = {
  nav: ReactNode;
  sideNav?: ReactNode;
  topNav?: ReactNode;
  children: ReactNode;
  orientation: 'vertical' | 'horizontal';
};

const BaseLayout = ({ nav, topNav, sideNav, orientation, children }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  const dispatch = useDispatch();

  const settings = useSelector<IAppState, IAppSettings>((state) => state.settings);
  const pageData = useSelector<IAppState, IPageData>((state) => state.pageData);

  useEffect(() => {
    dispatch(fetchPatients(patientsUrl));
  }, [patientsUrl]);

  const handleScroll = (event) => {
    setScrolled(event.target.scrollTop > 0);
  };

  const mainContentClasses = className({
    'main-content': true,
    loaded: pageData.loaded,
    fulfilled: pageData.fulFilled
  });

  const mainContentWrapClasses = className({
    'main-content-wrap': true
  });


  return (
    <div className={`layout ${orientation}`}>
      <div className={`app-container ${settings.boxed && 'boxed'} ${scrolled && 'scrolled'}`}>
        {nav}

        {topNav}

        {sideNav}

        <main onScroll={handleScroll} className={mainContentClasses}>
          <div className='app-loader'>
            <i className='icofont-spinner-alt-4 rotate' />
          </div>

          <div className={mainContentWrapClasses}>
            {pageData && !!pageData.title && (
              <header className='page-header'>
                <h1 className='page-title'>{pageData.title}</h1>
              </header>
            )}
            {children}
          </div>
        </main>


      </div>
    </div>
  );
};

export default BaseLayout;
