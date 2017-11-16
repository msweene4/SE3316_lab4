import { Injectable } from '@angular/core';

let myCourses: string[]=[];

@Injectable()
export class CoursesService {
    
    getCourses() : string[] {
         return myCourses;
    }
    saveCourse(aText){
        console.log(aText);
        myCourses.push(aText);
    }
  constructor() { }

}
