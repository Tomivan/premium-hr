import React from 'react';
import './paused-accounts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const PausedAccounts = () => {
    return(
        <div className="paused-accounts">
            <table>
                <thead>
                    <tr>
                        <th>LAST ACTIVE</th>
                        <th>COMPANY NAME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24-07-21</td>
                        <td>The Logic Brand</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Global Infometrics</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Unilever & Son.co</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>20-07-21</td>
                        <td>Aero contractors</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>24-07-21</td>
                        <td>The Logic Brand</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Global Infometrics</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Unilever & Son.co</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>20-07-21</td>
                        <td>Aero contractors</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>24-07-21</td>
                        <td>The Logic Brand</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Global Infometrics</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>22-07-21</td>
                        <td>Unilever & Son.co</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                    <tr>
                        <td>20-07-21</td>
                        <td>Aero contractors</td>
                        <td><FontAwesomeIcon icon={ faEllipsisV } /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default PausedAccounts;