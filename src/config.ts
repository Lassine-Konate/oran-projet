export interface HeaderProps {
  name: string;
  route: string;
}
export interface AccueilProps {
  title: string;
  subtitle: string;
  textbutton: string;
}

export class Config {
  static language = 'Francais';
  static Instance: Config;
  constructor(
    protected _headerPorps: Array<HeaderProps>,
    protected _accueilProps: AccueilProps
  ) {}

  get headerProps(): Array<HeaderProps> {
    return this._headerPorps;
  }
  get accueillProps(): AccueilProps {
    return this._accueilProps;
  }

  /**
   *
   * @param language allow to get the parametre of @CurrentHeader
   */
  static currentHeader(language: string): Array<HeaderProps> {
    const englishHeaderProps: Array<HeaderProps> = [
      { name: 'Welcome', route: 'accueil' },
      { name: 'Actuality', route: 'actualite' },
      { name: 'Adventage', route: 'conseil' },
      { name: 'forum', route: 'forum' },
    ];

    const frenchHeaderProps: Array<HeaderProps> = [
      { name: 'accueil', route: 'accueil' },
      { name: 'Actualite', route: 'actualite' },
      { name: 'Conseil', route: 'conseil' },
      { name: 'forum', route: 'forum' },
    ];

    if (language != 'Francais') {
      return frenchHeaderProps;
    }
    return englishHeaderProps;
  }

  static currentAccueil(language: string): AccueilProps {
    const englishAccueilProps: AccueilProps = {
      title: 'welcome in Kalan blo',
      subtitle:
        'Kalan blo allow you to integrate our communaute in Algérie  and reach the excellente we are happy you join our platteform , thanks excellente we are happy you join our platteform , thanks',
      textbutton: 'find course',
    };

    const frenchAccueilProps: AccueilProps = {
      title: 'Bienvenue en francais',
      subtitle:
        'Kalan blo vous permet facilement votre intégration parmi la communauté étrangere en Algérie et atteint l excellence dans vos études!',
      textbutton: 'Obtenir cours',
    };

    if (language != 'Francais') {
      return frenchAccueilProps;
    }
    return englishAccueilProps;
  }
}
