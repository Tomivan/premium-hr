import React from 'react';
import { Link } from '@reach/router';
import "./view-company-details.css";

const ViewCompany = () => {
    return(
        <div className="view-company">
            <h2 className="view-heading">View Company Details</h2>
            <Link href="/companies" className="view-link"> Go back to Companies</Link>
            <div className="view-company-card">
                <form>
                    <div className="left-side">
                    <label>Company Name</label>
                    <input type="text" />
                    <label>Business Sector</label>
                    <input type="text" />
                    <label>Staff size</label>
                    <input type="text" />
                    <label>Country</label>
                    <input type="text" />
                    <label>Phone Number</label>
                    <input type="text" />
                    </div>
                    <div className="right-side">
                    <label>Office Address</label>
                    <input type="text" />
                    <label>Give a brief description of your company</label>
                    <input type="text" />
                    <label>Add teams</label>
                    <input type="text" />
                    <label>State/City</label>
                    <input type="text" />
                    <label>Email Address</label>
                    <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ViewCompany;