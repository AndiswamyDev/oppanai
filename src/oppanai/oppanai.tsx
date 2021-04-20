import React from 'react';
import './oppanai.css';
import UploadOptions from './views/uploadOptions';
import { CONSTANTS } from './constants';
import { initiateTooltip } from './components/tooltip/tippy';

class Oppanai extends React.Component {
    componentDidMount() {
        initiateTooltip();
    }
    render() {
        return (
            <div className='container-fluid oppanai-wrapper'>
                <div className='d-flex justify-content-center oppanai-logo m-2'>
                    <h3>{CONSTANTS.OPPANAI}</h3>
                </div>
                <UploadOptions />
            </div>
        )
    }
}

export default Oppanai;