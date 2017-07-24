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