import { initialSwState, swStateOn, swStateOff } from './states';
import { fan_off, fan_on, heater_off, heater_on, tv_off, tv_on } from '../components/images';

export function swState(state = initialSwState, action) {
    switch (action.type) {
        case 'BUTTON_TOGGLE_ON_SW01':
            return {
                ...state,
                    sw01: swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW01':
            return {
                ...state,
                    sw01: swStateOff
            }
        case 'BUTTON_TOGGLE_ON_SW02':
            return {
                ...state,
                    sw02: swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW02':
            return {
                ...state,
                    sw02: swStateOff
            }
        case 'BUTTON_TOGGLE_ON_SW03':
            return {
                ...state,
                    sw03: swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW03':
            return {
                ...state,
                    sw03: swStateOff
            }
        case 'BUTTON_TOGGLE_ON_SW04':
            return {
                ...state,
                    sw04: swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW04':
            return {
                ...state,
                    sw04: swStateOff
            }
        case 'BUTTON_TOGGLE_ON_SW05':
            return {
                ...state,
                    sw05: {...swStateOn, img: tv_on}
            }
        case 'BUTTON_TOGGLE_OFF_SW05':
            return {
                ...state,
                    sw05: {...swStateOff, img: tv_off}
            }
        default:
            return state;
    }
}