import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  trainingData = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingData = this.trainingService.getExcercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exerciseSelect);
  }

}
