import { initialThermState, acStateOn, acStateOff, heatStateOn, heatStateOff, autoStateOn, autoStateOff } from './states';
import { fan_off, fan_on, heater_off, heater_on, tv_off, tv_on } from '../components/images';

export function thermState(state = initialThermState, action) {
    switch (action.type) {
        case 'SET_CURRENT_TEMP':
            return {
                ...state,
                    current_temp: action.current_temp
            }
        case 'SET_DESIRED_TEMP':
            return {
                ...state,
                    desired_temp: action.desired_temp
            }
        case 'SET_DP_MSG':
            return {
                ...state,
                    dp_msg: action.msg
            }
        case 'BUTTON_TOGGLE_ON_AC':
            return {
                ...state,
                    ac: acStateOn
            }
        case 'BUTTON_TOGGLE_OFF_AC':
            return {
                ...state,
                    ac: acStateOff
            }
        case 'BUTTON_TOGGLE_ON_HEAT':
            return {
                ...state,
                    heat: heatStateOn
            }
        case 'BUTTON_TOGGLE_OFF_HEAT':
            return {
                ...state,
                    heat: heatStateOff
            }

        default:
            return state;
    }
}