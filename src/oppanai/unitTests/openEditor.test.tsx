import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
import UploadImageOption from '../views/uploadOptions';
import StartEditButton from '../components/startEdit/startEdit';
import OppanaiEditor from '../views/oppanai-editor';
import EditOptions from '../views/editOptions';
import RotateImage from '../views/rotateImage';
import { mockData } from './mockData';


describe('Given on a Oppanai Home page ', () => {
    global.URL.createObjectURL = jest.fn();
    const oppanaiHomepageWrapper = shallow(<Oppanai />);
    const oppanaiObj = new Oppanai({});
    const oppanaiUploadOptionWrapper = shallow(<UploadImageOption editView={oppanaiObj.editView} />);
    const uploadImageOptionObj = new UploadImageOption({ editView: oppanaiObj.editView });
    const startEditButtonWrapper = shallow(<StartEditButton isFileUploaded={true} isFileError={false} handleStartEdit={uploadImageOptionObj.handleStartEdit} />);
    const oppanaiEditor = shallow(<OppanaiEditor imageSource={mockData.imageBlobUrl} imageFile={mockData.file} />);
    // const oppanaiEditorObj = new OppanaiEditor({ imageSource: mockData.imageBlobUrl, imageFile: mockData.file });
    const rotateImage = shallow(<RotateImage handleRotateImage={oppanaiEditor.instance().handleRotateImage()} />)
    const editOptions = shallow(<EditOptions handleEditOptions={oppanaiEditor.instance().handleEditOptions()} />)
    describe('When user click START TO EDIT button', () => {
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
            expect(oppanaiEditor.find('#oppanai-editor-wrapper')).not.toBeNull();
        });
    });

    describe('When oppanai editor is opened', () => {
        test('Verify the oppanai has three segments children', () => {
            expect(oppanaiEditor.find('#oppanai-editor-wrapper').children().length).toBe(3);
            expect(oppanaiEditor.find('.oppanai-download').type()).toBe('label');
            expect(oppanaiEditor.find('.oppanai-edit-tool-wrapper').children().length).toBe(2);
            expect(oppanaiEditor.find('.image-source-wrapper').children().type()).toBe('img');
        });
        test('Check the rotate options rendered properly', () => {
            const rotateWrapper = rotateImage.find('.oppanai-rotate-wrapper');
            expect(rotateWrapper).not.toBeNull();
            expect(rotateWrapper.children().length).toBe(4);
            expect(rotateWrapper.childAt(0).childAt(0).props().id).toEqual('oppanai-right-rotate-icon');
            expect(rotateWrapper.childAt(1).childAt(0).props().id).toEqual('oppanai-left-rotate-icon');
            expect(rotateWrapper.childAt(2).childAt(0).props().id).toEqual('oppanai-horizontal-rotate-icon');
            expect(rotateWrapper.childAt(3).childAt(0).props().id).toEqual('oppanai-vertical-rotate-icon');
        });
        test('Check the edit options rendered properly', () => {
            const editOptionWrapper = editOptions.find('.edit-options-wrapper');
            expect(editOptionWrapper).not.toBeNull();
            expect(editOptionWrapper.childAt(0).childAt(0).props().id).toEqual('oppanai-rotate-icon');
            expect(editOptionWrapper.childAt(1).childAt(0).props().id).toEqual('oppanai-crop-icon');
            expect(editOptionWrapper.childAt(2).childAt(0).props().id).toEqual('oppanai-filter-icon');
            expect(editOptionWrapper.childAt(3).childAt(0).props().id).toEqual('oppanai-color-icon');
        });
    });
    describe('When user applies rotate options', () => {
        test('Verify the right rotate image', () => {

        });
        test('Verify the left rotate image', () => {

        });
        test('Verify the horizontal rotate image', () => {

        });
        test('Verify the vertical rotate image', () => {

        });
    });
})