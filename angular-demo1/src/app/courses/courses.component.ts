import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  title = "The title of courses page";
  courses;
  myVal: string;
  constructor(private cs: CoursesService) {
    this.courses = cs.getCourses();
  }
  
  save(){
    this.cs.saveCourse(this.myVal);
    this.courses = this.cs.getCourses();
  }

  ngOnInit() {
  }
  
}
