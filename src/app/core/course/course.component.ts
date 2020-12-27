import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  course = [
    {
      name: 'Informatique',
      des: 'c est filliere baser sur les machine',
      route: '',
    },
    {
      name: 'Genie Mecanique',
      des: 'c est filliere baser sur les machine',
      route: '',
    },
    {
      name: 'Genie Civile',
      des: 'c est filliere baser sur les machine',
      route: '',
    },
    {
      name: 'Francais',
      des: 'c est filliere baser sur les machine',
      route: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
