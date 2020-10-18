import { IRoute } from '../interfaces/routing';


import PatientsPage from '../pages/dashboards/patients/Patients';
import DashboardPage from '../pages/dashboards/dashboard/Dashboard';
import DoctorsPage from '../pages/dashboards/doctors/Doctors';
import DoctorProfilePage from '../pages/medic/DoctorsProfilePage';
import PatientProfilePage from '../pages/medic/PatientProfilePage';
import EventsCalendarPage from '../pages/services/EventsCalendarPage';



export const defaultRoutes: IRoute[] = [
  {
    path: 'patients',
    component: PatientsPage
  },
  {
    path: 'default-dashboard',
    component: DashboardPage
  },
  {
    path: 'doctors',
    component: DoctorsPage
  },
  {
    path: 'doctor-profile',
    component: DoctorProfilePage
  },
  {
    path: 'patient-profile',
    component: PatientProfilePage
  },
  {
    path: 'events-calendar',
    component: EventsCalendarPage
  }
];
