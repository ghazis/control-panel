import { lb_off, lb_on, fan_off, fan_on, heater_off, heater_on, tv_on, tv_off, car_off, car_on, lock_off, lock_on } from '../components/images';

export const swStateOn = {
                    name: 'Turn Off',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: lb_on
                }

export const swStateOff = {
                    name: 'Turn On',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: lb_off
                }

export const carStateOn = {
                    name: 'Stop Car',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: car_on
                }

export const carStateOff = {
                    name: 'Start Car',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: car_off
                }

export const carLockStateOn = {
                    name: 'Unlock Car',
                    cmd: '_off',
                    classname: 'btn-danger',
                    img: lock_on
                }

export const carLockStateOff = {
                    name: 'Lock Car',
                    cmd: '_on',
                    classname: 'btn-success',
                    img: lock_off
                }

export const InitialButtonsState = {
    sw01: swStateOff,
    sw02: { ...swStateOff, img: fan_off},
    sw03: { ...swStateOff, img: heater_off},
    sw04: swStateOff,
    sw05: { ...swStateOff, img: tv_off},
    car: carStateOff,
    car_lock: carLockStateOff
}