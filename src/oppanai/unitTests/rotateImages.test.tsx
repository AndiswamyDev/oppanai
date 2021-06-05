import { shallow } from 'enzyme';
import OppanaiEditor from '../views/oppanai-editor';
import RotateImage from '../views/rotateImage';
import { mockData } from './mockData';

describe('Given in Oppanai Editor', () => {
    global.URL.createObjectURL = jest.fn();
    const oppanaiEditor = new OppanaiEditor({ imageSource: mockData.imageBlobUrl, imageFile: mockData.file });
    // const oppanaiEditorWrapper = shallow(<OppanaiEditor imageSource={mockData.imageBlobUrl} imageFile={mockData.file} />)
    const rotateImageWrapper = shallow(<RotateImage handleRotateImage={oppanaiEditor.handleRotateImage} />)
    describe('When user tries rotating an image', () => {
        test('Test the Edit options are rendered', () => {
            expect(rotateImageWrapper.find('.oppanai-rotate-wrapper')).not.toBeNull();
        });
        test('Check rotate wrapper has four rotate option children', () => {
            expect(rotateImageWrapper.children().length).toBe(4);
        });
        test('Test the handleRotateImage function called on clicking right rotate', () => {
            // const spy = jest.spyOn(oppanaiEditorWrapper.instance(), 'handleRotateImage');
            console.log(rotateImageWrapper.childAt(0).childAt(0));
            rotateImageWrapper.childAt(0).childAt(0).simulate('click');
            rotateImageWrapper.childAt(1).childAt(0).simulate('click');
            rotateImageWrapper.childAt(2).childAt(0).simulate('click');
            rotateImageWrapper.childAt(3).childAt(0).simulate('click');
            // expect(spy).toBeCalledTimes(2);
        });
    });
});
