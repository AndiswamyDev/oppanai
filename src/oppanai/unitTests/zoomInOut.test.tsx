import * as actions from '../utils/oppanaiActions';
import { mockData } from './mockData';

describe('Given on a Oppanai editor', () => {
    global.URL.createObjectURL = jest.fn();
    beforeEach(() => {
        const editorWrapper = document.createElement('div');
        editorWrapper.id = 'oppanai-editor-wrapper';
        const editingImageWrapper = document.createElement('img');
        editingImageWrapper.id = 'oppanai-editing-image';
        editingImageWrapper.src = mockData.imageBlobUrl;
        editingImageWrapper.style.width = '100px';
        editorWrapper.appendChild(editingImageWrapper);
        document.body.appendChild(editorWrapper);
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });
    describe('When user do scroll up', () => {
        test.only('Check the image in editor is zooming in', () => {
            const zoomInSpy = jest.spyOn(actions, 'zoomIn');
            actions.handleWheelEvent({ deltaY: -50 } as WheelEvent);
            // expect(zoomInSpy).toHaveBeenCalled();
            expect(document.body.innerHTML).toContain('style="width: 1px;');
        });
    });
    describe('When user do scroll up', () => {
        test.only('Check the image in editor is zooming out', () => {
            const zoomInSpy = jest.spyOn(actions, 'zoomOut');
            actions.handleWheelEvent({ deltaY: 50 } as WheelEvent);
            // expect(zoomInSpy).toHaveBeenCalled();
            expect(document.body.innerHTML).toContain('style="width: -1px;');
        });
    });
});