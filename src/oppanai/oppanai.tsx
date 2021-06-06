import React from 'react';
import './oppanai.css';
import UploadOptions from './views/uploadOptions';
import { CONSTANTS } from './constants';
import { initiateTooltip } from './components/tooltip/tippy';

class Oppanai extends React.Component {
    state = {
        isEditView: false
    }
    componentDidMount() {
        initiateTooltip();
    }
    editView = (isEditView: boolean) => {
        this.setState({
            isEditView: isEditView
        });
    }
    render() {
        return (
            <div className={`container-fluid ${CONSTANTS.OPPANAI_WRAPPER}`}>
                {!this.state.isEditView ?
                    <div className='d-flex justify-content-center oppanai-logo m-2'>
                        <h3>{CONSTANTS.OPPANAI}</h3>
                    </div> : null
                }
                <UploadOptions editView={this.editView} />
            </div>
        )
    }
}

export default Oppanai;