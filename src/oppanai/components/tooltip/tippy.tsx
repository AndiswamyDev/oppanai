import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import { CONSTANTS } from '../../constants'

export const initiateTooltip = () => {
    tippy(`#${CONSTANTS.OPPANAI_UPLOAD_BUTTON}`, {
        content: 'Upload',
        animation: 'scale',
        placement: 'bottom'
    });
    tippy(`#${CONSTANTS.OPPANAI_START_EDIT_BUTTON}`, {
        content: 'Go to editor',
        animation: 'scale',
        placement: 'bottom'
    });
    tippy(`#${CONSTANTS.OPPANAI_CROP_ICON}`, {
        content: 'Crop',
        animation: 'scale',
        placement: 'bottom'
    });
    tippy(`#${CONSTANTS.OPPANAI_FILTER_ICON}`, {
        content: 'Filter',
        animation: 'scale',
        placement: 'bottom'
    });
    tippy(`#${CONSTANTS.OPPANAI_COLOR_ICON}`, {
        content: 'Color',
        animation: 'scale',
        placement: 'bottom'
    });
}