import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `
    <h2>This is an example component</h2>
  `,
  //templateUrl: './example.component.html',
  //styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  title = 'Example';
}
