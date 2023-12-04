import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() public variant: 'primary' | 'secundary' = 'primary';
  @Input() public size: 'sm' | 'md' | 'lg' = 'lg';

}
