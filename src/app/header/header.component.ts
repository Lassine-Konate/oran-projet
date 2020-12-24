import { Component, OnInit } from '@angular/core';
import { config } from 'process';
import { Config } from 'src/config';
import { Shared } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langue: 'Francais' | 'English';
  // options = [
  //   {
  //     name: 'Accueil',
  //     route: 'accueil',
  //   },
  //   {
  //     name: 'Actualité',
  //   },
  //   {
  //     name: 'Conseil',
  //   },
  //   {
  //     name: 'Forum',
  //     route: 'forum',
  //   },
  // ];
  // options = Config.currentHeader(Config.language);
  options: unknown;
  constructor(private shared: Shared) {}

  ngOnInit(): void {
    this.langue = 'Francais';
    this.shared.init(this.langue);
    this.options = this.shared.instance.headerProps;
    this.shared.cast.subscribe(() => {
      this.options = this.shared.instance.headerProps;
    });
  }

  changeLangage() {
    if (this.langue === 'Francais') {
      this.langue = 'English';
    } else if (this.langue === 'English') {
      this.langue = 'Francais';
    }
    console.log(this.langue);
    this.shared.init(this.langue);
    this.shared.buttonClick.next(this.langue);
  }
}
