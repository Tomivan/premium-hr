import React from 'react';
import SideBar from '../../components/sidebar/sidebar';
import PausedAccounts from './paused-accounts/paused-accounts';
import UpdateCompany from './update-company-details/update-company-details';
import ViewCompany from './view-company-details/view-company-details';
import AddCompany from './add-company/add-company';
import './companies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';


const Companies = () => {

    function addCompany() {
        const overlay = document.querySelector('.overlay');
        const company = document.querySelector('.add-company-card');

        if(overlay.style.display === 'none') {
            overlay.style.display = "block";
            company.style.display = "block";
        } else {
            overlay.style.display = 'none';
            company.style.display = 'none';
        }
    }
    function viewCompany() {
        
    }
    function displayBox() {
        const box = document.querySelector('.box');

         if(box.style.display === 'none') {
                box.style.display = 'block'
         } else {
                 box.style.display = 'none'
         }
    }
    return (
        <>
        <div className="overlay"></div>
        <SideBar />
        <div className="companies">
        {/* <h2 className="companies-header"> Companies</h2>
        <button className="add-company" onClick={addCompany}> Add Company</button>
        <div className="companies-card">
            <div className="select">
            <label className="show-by"> Show by:</label>
            <select name="options">
                <option value="all">All</option>
                <option value="invited">Invited</option>
                <option value="paused">Paused</option>
                <option value="inactive">Inactive</option>
            </select>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-row">
                        <th>ONBOARDING DATE</th>
                        <th>COMPANY NAME</th>
                        <th>EMPLOYEE SIZE</th>
                        <th>LOCATION</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row">
                        <td>24-07-2020</td>
                        <td>The Logic Brand </td>
                        <td>---</td>
                        <td>---</td>
                        <td><button className="invited">Invited</button></td>
                        <td>
                        <FontAwesomeIcon icon={ faEllipsisV } onClick={displayBox}/>
                        <div className="box">
                            <p className="paused-link">Paused accounts</p>
                            <Link to={viewCompany} className="view-company-link">View company details</Link>
                        </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>22-07-20</td>
                        <td>Global Infometrics Ltd</td>
                        <td>123</td>
                        <td>Toronto, Canada</td>
                        <td><button className="active">Active</button></td>
                        <FontAwesomeIcon icon={ faEllipsisV } onClick={displayBox}/>
                        <div className="box">
                            <p className="paused-link">Paused accounts</p>
                            <Link to={viewCompany} className="view-company-link">View company details</Link>
                        </div>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Aero Contractors</td>
                        <td>241</td>
                        <td>Dakar, Senegal</td>
                        <td><button className="inactive">Inactive</button></td>
                        <FontAwesomeIcon icon={ faEllipsisV } onClick={displayBox}/>
                        <div className="box">
                            <p className="paused-link">Paused accounts</p>
                            <Link to={viewCompany} className="view-company-link">View company details</Link>
                        </div>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Arik Air</td>
                        <td>540</td>
                        <td>Lagos Nigeria</td>
                        <td><button className="paused">Paused</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>24-07-20</td>
                        <td>The Logic Brand </td>
                        <td>---</td>
                        <td>---</td>
                        <td><button className="invited">Invited</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>22-07-20</td>
                        <td>Global Infometrics Ltd</td>
                        <td>123</td>
                        <td>Toronto, Canada</td>
                        <td><button className="active">Active</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Aero Contractors</td>
                        <td>241</td>
                        <td>Dakar, Senegal</td>
                        <td><button className="inactive">Inactive</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Arik Air</td>
                        <td>540</td>
                        <td>Lagos Nigeria</td>
                        <td><button className="paused">Paused</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>24-07-20</td>
                        <td>The Logic Brand </td>
                        <td>---</td>
                        <td>---</td>
                        <td><button className="invited">Invited</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>22-07-20</td>
                        <td>Global Infometrics Ltd</td>
                        <td>123</td>
                        <td>Toronto, Canada</td>
                        <td><button className="active">Active</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Aero Contractors</td>
                        <td>241</td>
                        <td>Dakar, Senegal</td>
                        <td><button className="inactive">Inactive</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr className="table-row">
                        <td>20-07-20</td>
                        <td>Arik Air</td>
                        <td>540</td>
                        <td>Lagos Nigeria</td>
                        <td><button className="paused">Paused</button></td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                </tbody>
            </table>
            </div>
        <PausedAccounts /> */}
    <AddCompany />
    {/* <UpdateCompany /> */}
    {/* <ViewCompany /> */}
    </div>
    </>
    );
};
export default Companies;