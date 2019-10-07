import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { marker as _TRANSLATE } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'monday-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = environment.name;

  ruby_code = `
  #!/usr/bin/env ruby

  def welcome
    # $program_name is global variable
    puts "#{$program_name} - Learn Enough Ruby To Be Dangerous!"
  end  
  `
}
