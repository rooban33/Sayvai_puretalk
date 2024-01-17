import React, { useState } from 'react';
import './logs.css';

function Logs() {
    const [stype, setStype] = useState("Oldest First");
    const [current, setCurrent] = useState(0);
    const [total, setTotal] = useState(0);

    function sort() {
        if (stype === "Oldest First") {
            setStype("Newest First");
        } else {
            setStype("Oldest First");
        }
    }

    function csv(){
        window.alert("File is exporting");
    }

    function page()
    {

    }

    return (
        <div>
            <div className='upper'>
                <h2>Call Logs</h2>
                <button className='round'><i className="fa-solid fa-arrows-rotate"></i></button>
                &nbsp;
                <button onClick={sort} className='button'>{stype}</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={csv} className='button'><i class="fa-solid fa-download"></i>&nbsp;CSV</button>
                <center>
                <table>
                    <tr>
                    <td><h4>Minimum call length:</h4></td>
                    <td>&nbsp;<input type='number'/></td>
                    </tr>
                    <tr>
                    <td><h4>Maximum call length:</h4></td>
                    <td>&nbsp;<input type='number'/></td>
                    </tr>
                </table>
                </center>
                
            </div>
            <div className='table-wrapper'>
            <table class="fl-table">
  
                <tr>
                    <th>To</th>
                    <th>From</th>
                    <th>Length</th>
                    <th>Cost</th>
                    <th>Created at</th>
                    <th>Status</th>
                    <th>Call ID</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>To</td>
                    <td>From</td>
                    <td>Length</td>
                    <td>Cost</td>
                    <td>Created at</td>
                    <td>Status</td>
                    <td>Call ID</td>
                    <td>Actions</td>
                </tr>
                
            </table>
            <center>
            <table>
                <tr>
                    <td><button className='round' onClick={page}><i class="fa-solid fa-circle-chevron-left"></i></button></td>
                    <td><h5> {current}/{total}</h5></td>
                    <td><button className='round' onClick={page}><i class="fa-solid fa-circle-chevron-right"></i></button></td>
                </tr>
            </table>
            </center>
            </div>
        </div>
    );
}

export default Logs;
