import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Exercise } from './exercise.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubscription: Subscription;
  currentExercise: Exercise;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.currentExercise
      .subscribe(
        (exercise: Exercise) => {
          if (exercise) this.ongoingTraining = true;
          else this.ongoingTraining = false;
        }
      );
  }

}
