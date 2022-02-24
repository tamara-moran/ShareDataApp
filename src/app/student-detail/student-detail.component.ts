import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  id: number = 0;
  studentDetail = [
    {id: 0, name: 'Harry', hostel: 'Gryffindor', college: 'Hogwarts', team: 'Quidich', specialization: 'Seeker', knownFor: 'The boy who defeated you-know-who'},
    {id: 1, name: 'Navil Logbottom', hostel: 'Gryffindor', college: 'Hogwarts', team: 'Magic Study', specialization: 'Study', knownFor: 'The man of perseverance in Dumbledore army'},
    {id: 2, name: 'Prof. Snape', hostel: 'Slytherin', college: 'Hogwarts', team: 'Death Eaters', specialization: 'Black Magic', knownFor: 'Half Blood Price'},
    {id: 3, name: 'Albus', hostel: 'Gryffindor', college: 'Hogwarts', team: 'Headmaster Hogwarts', specialization: 'Advanced magic', knownFor: 'The only person Voldemart was scared of'}
  ];

  constructor(private router: Router) {
    try {
      this.id = this.router.getCurrentNavigation()!.extras.state!.id;
    } catch (error){
      this.router.navigate(['home']).then(r => {});
    }
   }

  ngOnInit(): void {
  }

}
