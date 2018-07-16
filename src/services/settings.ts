
export class SettingsService {

  private alternativeBackground = false;

  setAltBackgroundToggle(isAlt: boolean){
    this.alternativeBackground = isAlt;
  }

  isAltBackground(){
    return this.alternativeBackground;
  }

}
