import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList = [
    {id: 0, name: 'Harry'},
    {id: 1, name: 'Navil Logbottom'},
    {id: 2, name: 'Prof. Snape'},
    {id: 3, name: 'Albus'}
   ];

  constructor(private router: Router) { }

  ngOnInit(): void {

    goToDetailsPage = (id: number) => {
      this.router.navigate(['detail'], {state: {id}}).then(r => {});
     }

  }

}
