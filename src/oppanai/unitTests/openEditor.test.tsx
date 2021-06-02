import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
import UploadImageOption from '../views/uploadOptions';
import StartEditButton from '../components/startEdit/startEdit';
import OppanaiEditor from '../views/oppanai-editor';
import { mockData } from './mockData';

describe('When user click START TO EDIT button', () => {
    global.URL.createObjectURL = jest.fn();
    const oppanaiHomepageWrapper = shallow(<Oppanai />);
    const oppanaiObj = new Oppanai({});
    const oppanaiUploadOptionWrapper = shallow(<UploadImageOption editView={oppanaiObj.editView} />);
    const uploadImageOptionObj = new UploadImageOption({ editView: oppanaiObj.editView });
    const startEditButtonWrapper = shallow(<StartEditButton isFileUploaded={true} isFileError={false} handleStartEdit={uploadImageOptionObj.handleStartEdit} />);
    const oppanaiEditor = shallow(<OppanaiEditor imageSource={mockData.imageBlobUrl} imageFile={mockData.file} />)
    test('User should get into editor page', () => {
        startEditButtonWrapper.find('#oppanai-start-edit-button').simulate('click');
    });

    test('Change the state and verify is editor component rendered or not', () => {
        oppanaiHomepageWrapper.setState({
            isEditView: true
        });
        oppanaiUploadOptionWrapper.setState({
            startEdit: true
        });
        expect(oppanaiUploadOptionWrapper.find('Fragment').at(0).children().text()).toEqual('<OppanaiEditor />');
    });

    test('Check the oppanai editor is present', () => {
        console.log(oppanaiEditor.find('#oppanai-editor-wrapper').debug());
        expect(oppanaiEditor.find('#oppanai-editor-wrapper')).not.toBeNull();
    });
    test('Verify the oppanai has three segments children', () => {
        console.log(oppanaiEditor.find('.oppanai-download').html());
        expect(oppanaiEditor.find('#oppanai-editor-wrapper').children().length).toBe(3);
        expect(oppanaiEditor.find('.oppanai-download').type()).toBe('label');
        // expect(oppanaiEditor.find('.image-source-wrapper').children().type()).toBe('img');
        expect(oppanaiEditor.find('.oppanai-edit-tool-wrapper').children().length).toBe(2);
    });
});