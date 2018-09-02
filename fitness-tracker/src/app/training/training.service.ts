import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class TrainingService{
    exerciseChanged = new Subject<Exercise>();
    private avaiableExercises: Exercise[] = [
         {id: 'crunces' ,name: 'Crunces', duration: 30 , calories: 8},
         {id: 'touch-toes' ,name: 'Touch Toes', duration: 180 , calories: 100},
         {id: 'side-lunges' ,name: 'Side Lunges', duration: 120 , calories: 18},
         {id: 'burpees' ,name: 'Burpees', duration: 60 , calories: 8},
    ];
    
    private runningExercise: Exercise;
    private exercises: Exercise[] = [];
    
    getAvaiableExercises(){
        return this.avaiableExercises.slice();
    }
    
    startExercise(selectedId: string){
        this.runningExercise = this.avaiableExercises.find(
                ex => ex.id === selectedId
              )
        this.exerciseChanged.next({...this.runningExercise}); // I don't want to return the runningExercise but a copy 
    }
    
    completeExercise(){
        this.exercises.push({
            ...this.runningExercise, 
            date: new Date(), 
            state:'completed'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
    
    cancelExercise(progress: number){
        this.exercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration*(progress / 100), 
            calories: this.runningExercise.calories*(progress / 100),
            date: new Date(), 
            state:'cancelled'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
    
    getRunningExercise(){
        return {...this.runningExercise};
    }
    
    getComplitedOrCancelledExercises(){
        return this.exercises.slice();
    }
    
}