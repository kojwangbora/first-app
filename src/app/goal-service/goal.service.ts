import { Goals } from '../goalList';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return Goals
  }

  constructor() { }
}
