import { buttonToggleOff, buttonToggleOn } from './toggleActions';

export function carStateListener() {
    return (dispatch, getState) => {
        firebase.database().ref('car_state').on('value', function(snapshot) {
            var car_state = Number(snapshot.val().car_state)
            var car_lock_state = Number(snapshot.val().car_lock_state)
            if (car_state == 1) {
                dispatch(buttonToggleOn('CAR'));
            } else if (car_state == 0) {
                dispatch(buttonToggleOff('CAR'));
            }
            if (car_lock_state == 1) {
                dispatch(buttonToggleOn('CAR_LOCK'));
            } else if (car_lock_state == 0) {
                dispatch(buttonToggleOff('CAR_LOCK'));
            }
        });
    };
}

export function setCarState(url, cmd, name) {
    return (dispatch, getState) => {
        fetch(url);
        var lower_name = name.toLowerCase();
        if (cmd == '_on') {
            firebase.database().ref('car_state/' + lower_name + '_state').set("1");
        } else if (cmd == '_off') {
            firebase.database().ref('car_state/' + lower_name + '_state').set("0");
        }
    };
}