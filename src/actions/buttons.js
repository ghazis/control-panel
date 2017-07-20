export function setCurrentTemp(current_temp) {
    return {
        type: 'SET_CURRENT_TEMP',
        current_temp: current_temp
    }
}

export function setDesiredTemp(desired_temp) {
    return {
        type: 'SET_DESIRED_TEMP',
        desired_temp: desired_temp
    }
}

export function disableToggle(){
    return{
        type: 'DISABLE_TOGGLE'
    }
}

export function enableToggle(){
    return{
        type: 'ENABLE_TOGGLE'
    }
}

export function buttonToggleOn(name) {
    return {
        type: 'BUTTON_TOGGLE_ON_' + name
    };
}

export function buttonToggleOff(name) {
    return {
        type: 'BUTTON_TOGGLE_OFF_' + name
    };
}

export function thermStateListener() {
    return (dispatch, getState) => {
        firebase.database().ref('therm_state').on('value', function(snapshot) {
            var auto_state = Number(snapshot.val().auto_state)
            var ac_state = Number(snapshot.val().ac_state)
            var heat_state = Number(snapshot.val().heat_state)
            var desired_temp = snapshot.val().desired_temp;
            if (auto_state == 1) {
                dispatch(buttonToggleOn('AUTO'));
            } else if (ac_state == 1 && auto_state == 0) {
                dispatch(buttonToggleOn('AC'));
            } else if (heat_state == 1 && auto_state == 0) {
                dispatch(buttonToggleOn('HEAT'));
            } else {
                dispatch(buttonToggleOff('AC'));
                dispatch(buttonToggleOff('HEAT'));
                dispatch(buttonToggleOff('AUTO'));
            }
            dispatch(setDesiredTemp(desired_temp));
        });
    };
}

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



export function getCurrentTemp() {
    return (dispatch, getState) => {
        fetch('http://73.209.181.138:7000/get_temp')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((res) => dispatch(setCurrentTemp(res[0].current_temp)))
    };
}

export function decrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        firebase.database().ref('therm_state/desired_temp').set(new_temp);
    };
}

export function incrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        firebase.database().ref('therm_state/desired_temp').set(new_temp);
    };
}

export function runAutoMode(name) {
    return (dispatch, getState) => {
        const name = 'AUTO'
        const current_temp = Number(getState().buttonToggle.current_temp.substring(0, 2))
        const desired_temp = getState().buttonToggle.desired_temp
        const cmd = getState().buttonToggle.auto.cmd
        if (cmd == '_on') {
            if (current_temp > desired_temp){
                dispatch(buttonToggleOn(name, 'AC'));
                fetch('http://73.209.181.138:7000/set_auto_state?auto_state=1');
                const auto_type = getState().buttonToggle.auto_type;
                console.log(auto_type);
            } else if (current_temp < desired_temp) {
                dispatch(buttonToggleOn(name, 'HEAT'));
                fetch('http://73.209.181.138:7000/set_auto_state?auto_state=1');
                const auto_type = getState().buttonToggle.auto_type;
                console.log(auto_type);     
            }
        } else {
            dispatch(buttonToggleOff(name));
            fetch('http://73.209.181.138:7000/set_auto_state?auto_state=0')
            const auto_type = getState().buttonToggle.auto_type;
            console.log(auto_type);
        }
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


export function setThermState(url, cmd, name) {
    return (dispatch, getState) => {
        var lower_name = name.toLowerCase();
        fetch(url);
        if (cmd == '_on') {
            if (lower_name == 'heat') {
                firebase.database().ref('therm_state/ac_state').set("0");
                firebase.database().ref('therm_state/auto_state').set("0");
                firebase.database().ref('therm_state/' + lower_name + '_state').set("1");
            } else if (lower_name == 'ac') {
                firebase.database().ref('therm_state/heat_state').set("0");
                firebase.database().ref('therm_state/auto_state').set("0");
                firebase.database().ref('therm_state/' + lower_name + '_state').set("1");
            } else if (lower_name == 'auto') {
                firebase.database().ref('therm_state/ac_state').set("0");
                firebase.database().ref('therm_state/heat_state').set("0");
                firebase.database().ref('therm_state/' + lower_name + '_state').set("1");
            }
        } else if (cmd == '_off') {
            firebase.database().ref('therm_state/' + lower_name + '_state').set("0");
        }
    };
}