import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Exercise } from '../exercise.model';
import {TrainingService } from '../training.service';
 
@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
    
  displayedColumns = ['date', 'name', 'calories','duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  
  
    
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
      this.dataSource.data = this.trainingService.getComplitedOrCancelledExercises();
      console.log(this.dataSource.data);
  }

}
