import { filter, map, mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from './../assets/i18n/en.json';

@Component({
  selector: 'monday-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private titleService: Title
    ) {
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang(environment.language);
    // use language
    this.translate.use(environment.language);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
         while (route.firstChild) {
           route = route.firstChild;
         }
         return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
      ).subscribe((event) => {
        const pageTitle = event.title ? event.title : 'app.title';
        this.translate.get(pageTitle).subscribe(translatedPageTitle => {
          this.titleService.setTitle(translatedPageTitle);
        });
      });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
