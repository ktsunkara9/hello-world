import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = "Angular"

  onAddCourse() {
    console.log(this.course);
  }

  onRating() {
    console.log('rating given');
  }
}
