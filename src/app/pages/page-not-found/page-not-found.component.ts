import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monday-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  
  public ruby_code: string = `
  #!/usr/bin/env ruby

  def welcome
    # $program_name is global variable
    puts "#{$program_name} - Learn Enough Ruby To Be Dangerous!"
  end  
  `

  constructor() { }

  ngOnInit() {
  }

}
