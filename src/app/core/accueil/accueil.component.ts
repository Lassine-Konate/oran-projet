import { Component, OnInit } from '@angular/core';
import { Shared } from 'src/app/shared.service';
import { AccueilProps } from 'src/config';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  calendrier = [{ date: '' }, { date: '' }, { data: '' }, { data: '' }];
  langue = 'Francais';
  actuality = [
    {
      name: 'premier',
      content: ' 22/2/012 ',
    },
    {
      name: 'Incription a la cité',
      content:
        'les etudiants sont informer que Veuillez vous inscrire avant le 22/2/012 voyez vigilan dans vos incription ',
    },
    {
      name: 'Démarche de la police',
      content:
        'La carte de séjour vous les etudiants sont informer que Veuillez vous inscrire avant le 22/2/012 voyez vigilan dans vos incription ',
    },
    {
      name: 'Démarche de bourse Algérienne',
      content:
        'Ce bourse vous le toucher par semestre vous inscrire avant le 22/2/012 voyez vigilan dans vos incription',
    },
    {
      name: 'Démarche du Diplome',
      content:
        'les proceder du diplome vous inscrire avant le 22/2/012 voyez vigilan dans vos incription moi on sera',
    },
  ];

  accueil: AccueilProps;
  constructor(protected shared: Shared) {}

  ngOnInit(): void {
    this.shared.cast.subscribe((val) => {
      this.accueil = this.shared.instance.accueillProps;
      // this.options = this.shared.instance.headerProps;

      console.log(this.accueil);
    });
  }
}
