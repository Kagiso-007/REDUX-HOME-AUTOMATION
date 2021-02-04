export interface HomeState {
    tvIsOn: boolean;
    fridgeTemperature: number;
    fanRotationSpeed: number;
    soundSystemVolume: number;
    lightsBrightnessLevel: BRIGHTNESS_LEVEL;
}

export enum BRIGHTNESS_LEVEL {
    VERY_BRIGHT = 'VERY BRIGHT',
    BRIGHT = 'BRIGHT',
    DIM = 'DIM',
    VERY_DIM = 'VERY_DIM',
    OFF = 'OFF'
}