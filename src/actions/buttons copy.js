export function storeIntervalID(IntervalID) {
    return {
        type: 'STORE_INTERVAL_ID',
        intervalID:IntervalID
    }
}

export function storeAutoIntervalID(IntervalID) {
    return {
        type: 'STORE_AUTO_INTERVAL_ID',
        autoIntervalID:IntervalID
    }
}

export function displayCurrentTemp(current_temp) {
    return {
        type: 'DISPLAY_CURRENT_TEMP',
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

export function buttonToggleOn(name, auto_type=0) {
    return {
        type: 'BUTTON_TOGGLE_ON_' + name,
        auto_type: auto_type
    };
}

export function buttonToggleOff(name) {
    return {
        type: 'BUTTON_TOGGLE_OFF_' + name
    };
}

export function setState(dispatch, ac_state, heat_state, current_temp, desired_temp, auto_state) {
    auto_state = Number(auto_state);
    if (auto_state == 1) {
        if (ac_state == 1) {
            dispatch(buttonToggleOn('AUTO', 'AC'));
        } else {
            dispatch(buttonToggleOn('AUTO', 'HEAT'));
        }
    } else if (ac_state == 1 && auto_state == 0) {
        dispatch(buttonToggleOn('AC'));
    } else if (heat_state == 1 && auto_state == 0) {
        dispatch(buttonToggleOn('HEAT'));
    } else {
        dispatch(buttonToggleOff('AC'));
        dispatch(buttonToggleOff('HEAT'));
        dispatch(buttonToggleOff('AUTO'));
    }
    dispatch(displayCurrentTemp(current_temp));
    dispatch(setDesiredTemp(desired_temp))
}

export function get_state() {
    return (dispatch, getState) => {
        fetch('http://73.209.181.138/get_state')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((res) => setState(dispatch, res[0].ac, res[0].heat, res[0].current_temp, res[0].desired_temp, res[0].auto_state))
    };
}

export function decrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        fetch('http://73.209.181.138/set_temp?temp=' + new_temp);
    };
}

export function incrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        fetch('http://73.209.181.138/set_temp?temp=' + new_temp);
    };
}

export function setIntervalID(IntervalID) {
    return (dispatch, getState) => {
        dispatch(storeIntervalID(IntervalID));
    }
}

export function setAutoIntervalID(IntervalID) {
    return (dispatch, getState) => {
        dispatch(storeAutoIntervalID(IntervalID));
    }
}

export function runAutoMode(current_temp, desired_temp, name, cmd) {
    current_temp = Number(current_temp.substring(0, 2))
    return (dispatch, getState) => {
        {/*clearInterval(getState().buttonToggle.intervalID);*/}
        if (cmd == '_on') {
            const autoIntervalID = setInterval(() => dispatch(AutoModeOn()), 5000)
            dispatch(setAutoIntervalID(autoIntervalID));
        } else {
            clearInterval(getState().buttonToggle.autoIntervalID);
            clearInterval(getState().buttonToggle.intervalID);
            const auto_type = getState().buttonToggle.auto_type;
            fetch('http://73.209.181.138/set_auto_state?auto_state=0')
            dispatch(buttonToggleOff(name));
            if (auto_type == 'AC') {
                fetch('http://73.209.181.138/cmd?cmd=ac_off');
            } else {
                fetch('http://73.209.181.138/cmd?cmd=heat_off');
            }
        }
        const intervalID = setInterval(() => dispatch(get_state()), 5000);
        dispatch(setIntervalID(intervalID));
    };
}

export function AutoModeOn() {
    return (dispatch, getState) => {
        console.log(getState());
        const current_temp = Number(getState().buttonToggle.current_temp.substring(0, 2));
        const desired_temp = getState().buttonToggle.desired_temp;
        const name = 'AUTO'
        const cmd = getState().buttonToggle.auto.cmd;
        const auto_type = getState().buttonToggle.auto_type;
        {/*clearInterval(getState().buttonToggle.intervalID);*/}
        dispatch(buttonToggleOn(name));
        fetch('http://73.209.181.138/set_auto_state?auto_state=1');
        if (current_temp > desired_temp) {
            fetch('http://73.209.181.138/cmd?cmd=ac_on');
        } else if (current_temp < desired_temp) {
            fetch('http://73.209.181.138/cmd?cmd=heat_on');
        } else if (current_temp == desired_temp && auto_type == 'AC') {
            fetch('http://73.209.181.138/cmd?cmd=ac_off');
        } else if (current_temp == desired_temp && auto_type == 'HEAT') {
            fetch('http://73.209.181.138/cmd?cmd=heat_off');
        }
    };
}

export function runScript(url, cmd, name) {
    return (dispatch, getState) => {
        clearInterval(getState().buttonToggle.intervalID);
        fetch(url);
        if (cmd == '_on') {
            dispatch(buttonToggleOn(name));
        } else {
            dispatch(buttonToggleOff(name));
        }
        const intervalID = setInterval(() => dispatch(get_state()), 5000);
        dispatch(setIntervalID(intervalID));
    };
}