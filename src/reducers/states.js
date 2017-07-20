import { lb_off, lb_on, fan_off, fan_on, heater_off, heater_on, tv_on, tv_off, car_off, car_on, lock_off, lock_on, ac_off, ac_on, heat_off, heat_on, auto_off, auto_on } from '../components/images';

export const swStateOn = {
                    name: 'Turn Off',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: lb_on,
                    toggled: true
                }

export const swStateOff = {
                    name: 'Turn On',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: lb_off,
                    toggled: false
                }

export const carStateOn = {
                    name: 'Stop Car',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: car_on,
                    toggled: true
                }

export const carStateOff = {
                    name: 'Start Car',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: car_off,
                    toggled: false
                }

export const carLockStateOn = {
                    name: 'Unlock Car',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: lock_on,
                    toggled: true
                }

export const carLockStateOff = {
                    name: 'Lock Car',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: lock_off,
                    toggled: false
                }
                
export const acStateOn = {
                    name: 'AC On',
                    cmd: '_off',
                    classname: 'btn-success',
                    img: ac_on,
                    toggled: true
                }

export const acStateOff = {
                    name: 'AC Off',
                    cmd: '_on',
                    classname: 'btn-danger',
                    img: ac_off,
                    toggled: false
                }

export const heatStateOn = {
                    name: 'Heat On',
                    cmd: '_off',
                    classname: 'btn-success',
                    img: heat_on,
                    toggled: true
                }

export const heatStateOff = {
                    name: 'Heat Off',
                    cmd: '_on',
                    classname: 'btn-danger',
                    img: heat_off,
                    toggled: false
                }

export const autoStateOn = {
                    name: 'Auto On',
                    cmd: '_off',
                    classname: 'btn-success',
                    img: auto_on,
                    toggled: true
                }

export const autoStateOff = {
                    name: 'Auto Off',
                    cmd: '_on',
                    classname: 'btn-danger',
                    img: auto_off,
                    toggled: false
                }
                                

export const InitialButtonsState = {
    sw01: swStateOff,
    sw02: { ...swStateOff, img: fan_off},
    sw03: { ...swStateOff, img: heater_off},
    sw04: swStateOff,
    sw05: { ...swStateOff, img: tv_off},
    car: carStateOff,
    car_lock: carLockStateOff,
    ac: acStateOff,
    heat: heatStateOff,
    auto: autoStateOff,
    current_temp: '75.000F',
    desired_temp: 75
}