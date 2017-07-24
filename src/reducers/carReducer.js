import { initialCarState, carStateOn, carStateOff, carLockStateOn, carLockStateOff} from './states';
import { fan_off, fan_on, heater_off, heater_on, tv_off, tv_on } from '../components/images';

export function carState(state = initialCarState, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}