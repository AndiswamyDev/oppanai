import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
import UploadImageOption from '../views/uploadOptions';
import StartEditButton from '../components/startEdit/startEdit';
describe('Given on a Oppanai image editor tool', () => {
    describe('When user is in home page', () => {
        const OppanaiObj = new Oppanai();
        const UploadImageOptionObj = new UploadImageOption();
        const oppanaiHomepageWrapper = shallow(<Oppanai />);
        const oppanaiUploadOptionWrapper = shallow(<UploadImageOption editView={OppanaiObj.editView} />);
        const StartEditButtonWrapper = shallow(<StartEditButton isFileUploaded={UploadImageOptionObj.state.isFileUploaded} isFileError={UploadImageOptionObj.state.isFileError} handleStartEdit={UploadImageOptionObj.handleStartEdit} />);
        const oppanaiHomePageWrapper = oppanaiHomepageWrapper.find('.oppanai-wrapper');
        test('Test the main oppanai wrapper exists or not', () => {
            expect(oppanaiHomePageWrapper).not.toBeNull();
        });
        test('Test main div has 2 children element', () => {
            expect(oppanaiHomePageWrapper.children().length).toBe(2);
            expect(oppanaiHomePageWrapper.children().at(0).hasClass('oppanai-logo')).toBeTruthy();
            expect(oppanaiHomePageWrapper.children().at(1).html()).toContain('upload-wrapper')
        });
        test('Check the Oppanai logo presence', () => {
            const oppanaiLogoDiv = oppanaiHomepageWrapper.find('.oppanai-logo');
            expect(oppanaiLogoDiv.children().type()).toBe('h3');
            expect(oppanaiLogoDiv.text()).toBe('Oppanai');
        });
        test('Check the local upload option there', () => {

            expect(oppanaiUploadOptionWrapper.find('h5').text()).toEqual('Upload from PC');
            expect(oppanaiUploadOptionWrapper.find('CardText').text()).toEqual('Browse an Image from your device to edit')
            expect(oppanaiUploadOptionWrapper.find('#oppanai-upload-button').children().at(0).type().render().props.children).toEqual('upload-image-icon.svg')
            expect(oppanaiUploadOptionWrapper.find('#oppanai-upload-button').children().at(1).type()).toBe('input')
        });
        test('Verify Image upload input accepts only Image', () => {
            expect(oppanaiUploadOptionWrapper.find('#oppanai-upload-button').children().at(1).prop('accept')).toEqual('image/*')
        });
        test('Test the Start Edit button should be inactive, when no image is uploaded', () => {
            expect(StartEditButtonWrapper.find('#oppanai-start-edit-button').at(0).prop('disabled')).toBeTruthy();
        });
    });
});