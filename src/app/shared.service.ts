import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Config } from 'src/config';

@Injectable()
export class Shared {
  instance: Config;
  buttonClick = new BehaviorSubject<string>('Francais');
  cast = this.buttonClick.asObservable();
  constructor() {}
  init(langue: string): Config {
    this.instance = new Config(
      Config.currentHeader(langue),
      Config.currentAccueil(langue)
    );
    return this.instance;
  }
}
