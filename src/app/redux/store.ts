import { BRIGHTNESS_LEVEL, HomeState } from "../interfaces/home-state";
import { Action } from "./actions";

export const INITIAL_HOME_STATE: HomeState = {
    tvIsOn: false,
    fridgeTemperature: 5,
    fanRotationSpeed: 0,
    soundSystemVolume: 0,
    lightsBrightnessLevel: BRIGHTNESS_LEVEL.OFF
}

export function rootReducer(state: HomeState, action): HomeState{
    switch(action.type){
        case Action.TOGGLE_TV_SWITCH:
            //Switch TV on/off
            return Object.assign({}, state, {
                tvIsOn: !state.tvIsOn
            });
        case Action.INCREASE_SOUND_SYSTEM_VOLUME:
            //Increase sound system volume
            if(state.soundSystemVolume == 100){ return state; }

            return Object.assign({}, state, {
                soundSystemVolume: (state.soundSystemVolume + 5)
            });
        case Action.DECREASE_SOUND_SYSTEM_VOLUME:
            //Decrease sound system volume
            if(state.soundSystemVolume == 0){ return state; }
            
            return Object.assign({}, state, {
                soundSystemVolume: (state.soundSystemVolume - 5)
            });
        case Action.INCREASE_FRIDGE_TEMP:
            //Increase fridge temperature
            if(state.fridgeTemperature == 6){ return state; }
            
            return Object.assign({}, state, {
                fridgeTemperature: ++state.fridgeTemperature
            });
        case Action.DECREASE_FRIDGE_TEMP:
            //Decrease fridge temperature
            if(state.fridgeTemperature == -4){ return state; }
            
            return Object.assign({}, state, {
                fridgeTemperature: --state.fridgeTemperature
            });
        case Action.INCREASE_FAN_ROTATION_SPEED:
            //Increase fan rotation speed
            if(state.fanRotationSpeed == 200){ return state; }
            
            return Object.assign({}, state, {
                fanRotationSpeed: (state.fanRotationSpeed + 10)
            });
        case Action.DECREASE_FAN_ROTATION_SPEED:
            //Decrease fan rotation speed
            if(state.fanRotationSpeed == 0){ return state; }
            
            return Object.assign({}, state, {
                fanRotationSpeed: (state.fanRotationSpeed - 10)
            });
        case Action.CHANGE_LIGHTS_BRIGHTNESS_LEVEL:
            //Change lights brightness level
            return Object.assign({}, state, {
                lightsBrightnessLevel: action.brightnessLevel
            });
    }
    return state;
}