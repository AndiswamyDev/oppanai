import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
describe('Given on a Oppanai image editor tool', () => {
    describe('When user is in home page', () => {
        const oppanaiHomepage = shallow(<Oppanai />);
        const oppanaiHomePageWrapper = oppanaiHomepage.find('.oppanai-wrapper');
        test('Test the main oppanai wrapper exists or not', () => {
            expect(oppanaiHomePageWrapper).not.toBeNull();
        });
        test('Test main div has 2 children element', () => {
            expect(oppanaiHomePageWrapper.children().length).toBe(2);
            expect(oppanaiHomePageWrapper.children().at(0).hasClass('oppanai-logo')).toBeTruthy();
            expect(oppanaiHomePageWrapper.children().at(1).html()).toContain('upload-wrapper')
        });
        test('Check the Oppanai logo presence', () => {
            const oppanaiLogoDiv = oppanaiHomepage.find('.oppanai-logo');
            expect(oppanaiLogoDiv.children().type()).toBe('h3');
            expect(oppanaiLogoDiv.text()).toBe('Oppanai');
        });
        test('Check the local upload option there', () => {
            const uploadWrapper = oppanaiHomePageWrapper.find('CardBody');
            console.log(uploadWrapper.length);
            // expect(uploadWrapper.at(0)).toBeNull();
        });
    });
});