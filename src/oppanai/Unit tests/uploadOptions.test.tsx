import { shallow } from 'enzyme';
import Oppanai from '../oppanai';
describe('Given on a Oppanai image editor tool', () => {
    describe('When user is in home page', () => {
        const oppanaiHomepage = shallow(<Oppanai />);
        test('Check the upload option presence', () => {
            console.log(oppanaiHomepage.find('.oppanai-logo').at(0).text());
        });
    });
});