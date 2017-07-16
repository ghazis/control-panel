import { InitialButtonsState, swStateOn, swStateOff, carStateOn, carStateOff, carLockStateOn, carLockStateOff, acStateOn, acStateOff, heatStateOn, heatStateOff } from './states';
import { fan_off, fan_on, heater_off, heater_on, tv_off, tv_on } from '../components/images';

export function buttonToggle(state = InitialButtonsState, action) {
    switch (action.type) {
        case 'SET_TEMP':
            return {
                ...state,
                    temp: action.temp
            }
        case 'BUTTON_TOGGLE_ON_SW01':
            return {
                ...state,
                    sw01:swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW01':
            return {
                ...state,
                    sw01: swStateOff
            }
        case 'BUTTON_TOGGLE_ON_SW02':
            return {
                ...state,
                    sw02: {...swStateOn, img: fan_on}
            }
        case 'BUTTON_TOGGLE_OFF_SW02':
            return {
                ...state,
                    sw02: {...swStateOff, img: fan_off}
            }
        case 'BUTTON_TOGGLE_ON_SW03':
            return {
                ...state,
                    sw03: {...swStateOn, img: heater_on}
            }
        case 'BUTTON_TOGGLE_OFF_SW03':
            return {
                ...state,
                    sw03: {...swStateOff, img: heater_off}
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
        case 'BUTTON_TOGGLE_ON_CAR':
            return {
                ...state,
                    car: carStateOn
            }
        case 'BUTTON_TOGGLE_OFF_CAR':
            return {
                ...state,
                    car: carStateOff
            }
        case 'BUTTON_TOGGLE_ON_CAR_LOCK':
            return {
                ...state,
                    car_lock: carLockStateOn
            }
        case 'BUTTON_TOGGLE_OFF_CAR_LOCK':
            return {
                ...state,
                    car_lock: carLockStateOff
            }
        case 'BUTTON_TOGGLE_ON_AC':
            return {
                ...state,
                    ac: acStateOn,
                    heat: heatStateOff
            }
        case 'BUTTON_TOGGLE_OFF_AC':
            return {
                ...state,
                    ac: acStateOff
            }
        case 'BUTTON_TOGGLE_ON_HEAT':
            return {
                ...state,
                    heat: heatStateOn,
                    ac: acStateOff
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