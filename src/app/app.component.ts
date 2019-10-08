import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from './../assets/i18n/en.json';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'monday-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private titleService: Title
    ) {
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang(environment.language);
    this.titleService.setTitle(translate.instant('app.title'));
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
