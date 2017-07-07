import { InitialButtonsState, stateOn, stateOff } from './states';

export function buttonToggle(state = InitialButtonsState, action) {
    switch (action.type) {
        case 'BUTTON_TOGGLE_ON_SW01':
            return {
                ...state,
                    sw01: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW01':
            return {
                ...state,
                    sw01: stateOff
            }
        case 'BUTTON_TOGGLE_ON_SW02':
            return {
                ...state,
                    sw02: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW02':
            return {
                ...state,
                    sw02: stateOff
            }
        case 'BUTTON_TOGGLE_ON_SW03':
            return {
                ...state,
                    sw03: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW03':
            return {
                ...state,
                    sw03: stateOff
            }
        case 'BUTTON_TOGGLE_ON_SW04':
            return {
                ...state,
                    sw04: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW04':
            return {
                ...state,
                    sw04: stateOff
            }
        case 'BUTTON_TOGGLE_ON_SW05':
            return {
                ...state,
                    sw05: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_SW05':
            return {
                ...state,
                    sw05: stateOff
            }
        case 'BUTTON_TOGGLE_ON_CAR':
            return {
                ...state,
                    car: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_CAR':
            return {
                ...state,
                    car: stateOff
            }
        case 'BUTTON_TOGGLE_ON_CAR_LOCK':
            return {
                ...state,
                    car_lock: stateOn
            }
        case 'BUTTON_TOGGLE_OFF_CAR_LOCK':
            return {
                ...state,
                    car_lock: stateOff
            }
        default:
            return state;
    }
}