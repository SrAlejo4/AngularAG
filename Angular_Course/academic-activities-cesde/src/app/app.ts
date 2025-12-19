import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Activity } from './models/activity';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  activityArray: Activity[] = [
  ];

  activityTypes: string[] = ['Taller','Guía','Proyecto','Evaluación'];
  activityProgrammes: string[] = ['Desarrollo de software','Diseño gráfico','Logística','Auxiliar farmaceutico', 'Fotografía'];

  selectedActivity: Activity = new Activity();

  addOrEdit(){

  const duplicate = this.activityArray.some( activity =>
    activity.name === this.selectedActivity.name &&
    activity.subject === this.selectedActivity.subject
  );      

    if(this.selectedActivity.id == 0){
      if(duplicate)
      {
        alert('Ya existe una actividad con ese nombre y módulo');
        this.selectedActivity = new Activity();
      }else{
        this.selectedActivity.id = this.activityArray.length + 1;
        this.activityArray.push(this.selectedActivity);
      }
    }
    this.selectedActivity = new Activity();
  }

  openForEdit(activity: Activity){
    this.selectedActivity = activity;
  }

  delete(){
    if(confirm('Estás seguro de eliminarlo?')){
      this.activityArray = this.activityArray.filter(x => x != this.selectedActivity);
      this.selectedActivity = new Activity();
    }
  }

}
