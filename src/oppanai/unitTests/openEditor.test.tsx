import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
import UploadImageOption from '../views/uploadOptions';
import StartEditButton from '../components/startEdit/startEdit';
import { mockData } from './mockData';

describe('When user click START TO EDIT button', () => {
    global.URL.createObjectURL = jest.fn();
    const oppanaiHomepageWrapper = shallow(<Oppanai />);
    const oppanaiObj = new Oppanai({});
    const oppanaiUploadOptionWrapper = shallow(<UploadImageOption editView={oppanaiObj.editView} />);
    const uploadImageOptionObj = new UploadImageOption({ editView: oppanaiObj.editView });
    const startEditButtonWrapper = shallow(<StartEditButton isFileUploaded={true} isFileError={false} handleStartEdit={uploadImageOptionObj.handleStartEdit} />);

    test('User should get into editor page', () => {
        startEditButtonWrapper.find('#oppanai-start-edit-button').simulate('click');
    });
});