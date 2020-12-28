import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  m = [
    {
      name: 'Energetique',
      e: [
        { level: 'm1', sem: '1' },
        { level: 'm1', sem: '1' },
      ],
    },
    {
      name: 'Installation Energetique',
      e: [
        { level: 'm1', sem: '1' },
        { level: 'm1', sem: '1' },
      ],
    },
  ];
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
