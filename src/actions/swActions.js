import { buttonToggleOff, buttonToggleOn } from './toggleActions';

export function swStateListener() {
    return (dispatch, getState) => {
        firebase.database().ref('sw_state').on('value', function(snapshot) {
            var sw01_state = Number(snapshot.val().sw01_state)
            var sw02_state = Number(snapshot.val().sw02_state)
            var sw03_state = Number(snapshot.val().sw03_state)
            var sw04_state = Number(snapshot.val().sw04_state)
            var sw05_state = Number(snapshot.val().sw05_state)
            if (sw01_state == 1) {
                dispatch(buttonToggleOn('SW01'));
            } else if (sw01_state == 0) {
                dispatch(buttonToggleOff('SW01'));
            }
            if (sw02_state == 1) {
                dispatch(buttonToggleOn('SW02'));
            } else if (sw02_state == 0) {
                dispatch(buttonToggleOff('SW02'));
            }
            if (sw03_state == 1) {
                dispatch(buttonToggleOn('SW03'));
            } else if (sw03_state == 0) {
                dispatch(buttonToggleOff('SW03'));
            }
            if (sw04_state == 1) {
                dispatch(buttonToggleOn('SW04'));
            } else if (sw04_state == 0) {
                dispatch(buttonToggleOff('SW04'));
            }
            if (sw05_state == 1) {
                dispatch(buttonToggleOn('SW05'));
            } else if (sw05_state == 0) {
                dispatch(buttonToggleOff('SW05'));
            }
        });
    };
}

export function setSwState(url, cmd, name) {
    return (dispatch, getState) => {
        fetch(url);
        var lower_name = name.toLowerCase();
        if (cmd == '_on') {
            firebase.database().ref('sw_state/' + lower_name + '_state').set("1");
        } else if (cmd == '_off') {
            firebase.database().ref('sw_state/' + lower_name + '_state').set("0");
        }
    };
}