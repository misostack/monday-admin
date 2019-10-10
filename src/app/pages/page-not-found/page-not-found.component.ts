import { Component, OnInit } from '@angular/core';
import locale from './page-not-found.locale';

@Component({
  selector: 'monday-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public rubyCode = `
  #!/usr/bin/env ruby

  def welcome
    # $program_name is global variable
    puts "#{$program_name} - Learn Enough Ruby To Be Dangerous!"
  end
  `;
  public locale: object = locale;

  constructor() { }

  ngOnInit() {
  }

}
