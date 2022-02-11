import { Goals } from '../goalList';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  [x: string]: any;
  getGoals(){
    return Goals
  }

  constructor() { }
}
