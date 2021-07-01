import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard/dashboard';
import Companies from './Companies/companies';
import Notifications from './Notifications/notifications';
import Report from './Report/report';
import Help from './Help/help';


const Pages = () => {
    return(
        <Router>
            <Dashboard path="/" />
            <Companies path="/companies" />
            <Notifications path="/notifications" />
            <Report path="/report" />
            <Help path="/help" />
        </Router>
    );
};

export default Pages;