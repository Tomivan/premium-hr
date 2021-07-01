import React from 'react';
import { Link, useLocation } from '@reach/router';
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import './sidebar.css'

const items = [
    { name: 'Dashboard', path: '/'},
    { name: 'Companies', path: '/companies'},
    { name: 'Notifications', path: '/notifications'},
    { name: 'Report', path: '/report'},
    { name: 'Help', path: '/help'}
];

const Sidebar = () => {
    const location = useLocation();
    console.log(location);

    return( 
        <SideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation">
            <h2 className="h2">Premium HR</h2>
            <img src={require('../../assets/images/adult@2x.png')} alt="super admin" className="super-admin"/>
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                    isActive={
                        location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                    }
                    element={Link}
                    to={i.path}
                    key={i.name}
                    >
                        {i.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </SideNav>
    );
};

export default Sidebar;