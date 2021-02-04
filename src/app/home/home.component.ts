import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { BRIGHTNESS_LEVEL, HomeState } from '../interfaces/home-state';
import { Action } from '../redux/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @select() tvIsOn;
  @select() fridgeTemperature;
  @select() fanRotationSpeed;
  @select() soundSystemVolume;
  @select() lightsBrightnessLevel;
  brightnessLevels: BRIGHTNESS_LEVEL[];

  constructor(private ngRedux: NgRedux<HomeState>) { }

  ngOnInit(): void {
    this.brightnessLevels = [
      BRIGHTNESS_LEVEL.OFF,
      BRIGHTNESS_LEVEL.VERY_DIM,
      BRIGHTNESS_LEVEL.DIM,
      BRIGHTNESS_LEVEL.BRIGHT,
      BRIGHTNESS_LEVEL.VERY_BRIGHT
    ]
  }

  toggleTVSwitch(){
    this.ngRedux.dispatch({type: Action.TOGGLE_TV_SWITCH});
  }

  increaseSoundSystemVolume(){
    this.ngRedux.dispatch({type: Action.INCREASE_SOUND_SYSTEM_VOLUME});
  }

  decreaseSoundSystemVolume(){
    this.ngRedux.dispatch({type: Action.DECREASE_SOUND_SYSTEM_VOLUME});
  }

  increaseFridgeTemperature(){
    this.ngRedux.dispatch({type: Action.INCREASE_FRIDGE_TEMP});
  }
  
  decreaseFridgeTemperature(){
    this.ngRedux.dispatch({type: Action.DECREASE_FRIDGE_TEMP});
  }

  increaseFanRotationSpeed(){
    this.ngRedux.dispatch({type: Action.INCREASE_FAN_ROTATION_SPEED});
  }

  decreaseFanRotationSpeed(){
    this.ngRedux.dispatch({type: Action.DECREASE_FAN_ROTATION_SPEED});
  }

  changeLightsBrightnessLevel(brightnessLevel: BRIGHTNESS_LEVEL){
    this.ngRedux.dispatch({type: Action.CHANGE_LIGHTS_BRIGHTNESS_LEVEL, brightnessLevel: brightnessLevel});
  }
}
