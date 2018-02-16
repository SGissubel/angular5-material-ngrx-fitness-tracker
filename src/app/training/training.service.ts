import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

export class TrainingService {
  currentExercise = new Subject<Exercise>();
  availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lounges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runningExercise: Exercise;
  private exercise: Exercise[] = [];

  getExcercises() {
    return this.availableExercises.slice();
  }

  startExercise(id: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === id
    );
    this.currentExercise.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.exercise.push({ ...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.currentExercise.next(null);
  }

  cancelExercise(progress: number) {
    this.exercise.push({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.duration * (progress / 100),
      state: 'cancelled'});
    this.runningExercise = null;
    this.currentExercise.next(null);
  }

}
