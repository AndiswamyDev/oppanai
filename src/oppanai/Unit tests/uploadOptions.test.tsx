import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
import UploadImageOption from '../views/uploadOptions';
import StartEditButton from '../components/startEdit/startEdit';
describe('Given on a Oppanai image editor tool', () => {
    const oppanaiObj = new Oppanai();
    const uploadImageOptionObj = new UploadImageOption();
    const oppanaiHomepageWrapper = shallow(<Oppanai />);
    const oppanaiUploadOptionWrapper = shallow(<UploadImageOption editView={oppanaiObj.editView} />);
    const StartEditButtonWrapper = shallow(<StartEditButton isFileUploaded={uploadImageOptionObj.state.isFileUploaded} isFileError={uploadImageOptionObj.state.isFileError} handleStartEdit={uploadImageOptionObj.handleStartEdit} />);
    describe('When user is in home page', () => {
        const oppanaiHomePageWrapper = oppanaiHomepageWrapper.find('.oppanai-wrapper');
        test('Test the main oppanai wrapper exists or not', () => {
            expect(oppanaiHomePageWrapper).not.toBeNull();
        });
        test('Test main div has 2 children element', () => {
            const homePageChildren = oppanaiHomePageWrapper.children();
            expect(homePageChildren.length).toBe(2);
            expect(homePageChildren.at(0).hasClass('oppanai-logo')).toBeTruthy();
            expect(homePageChildren.at(1).html()).toContain('upload-wrapper')
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
    });
    describe('When user tries upload image', () => {
        test('Verify Image upload input accepts only Image', () => {
            expect(oppanaiUploadOptionWrapper.find('#oppanai-upload-button').children().at(1).prop('accept')).toEqual('image/*')
        });
        test('Test the Start Edit button should be inactive, when no image is uploaded', () => {
            expect(StartEditButtonWrapper.find('#oppanai-start-edit-button').at(0).props().disabled).toBeTruthy();
        });
        test('Check the image uploaded as valid', () => {
            const loginComponent = shallow(<UploadImageOption editView={oppanaiObj.editView} />);
            const file = {
                lastModified: 1621266984867,
                name: "photo.png",
                size: 110573,
                type: "image/png",
            }
            // const readFileMock = jest.spyOn(uploadImageOptionObj, 'handleLocalFileUpload');
            loginComponent.find('#oppanai-upload-button').children().at(1).simulate('change', { target: { files: [file] } });
            const StartButton = shallow(<StartEditButton isFileUploaded={true} isFileError={false} handleStartEdit={uploadImageOptionObj.handleStartEdit} />);
            expect(StartButton.find('#oppanai-start-edit-button').at(0).props().disabled).not.toBeTruthy();
        });
    });
});