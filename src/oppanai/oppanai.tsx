import React from 'react';
import './oppanai.css';
import UploadOptions from './views/uploadOptions';
import { CONSTANTS } from './constants';

class Oppanai extends React.Component {
    render() {
        return (
            <div className='container-fluid oppanai-wrapper'>
                <div className='d-flex justify-content-center oppanai-logo m-2'>
                    <h1>{CONSTANTS.OPPANAI}</h1>
                </div>
                <UploadOptions />
            </div>
        )
    }
}

export default Oppanai;