/**  Copyright 2019 Xello
 *  
 * Name - xellotooltip-component.ts
 * Description - Component for xellotooltip directive.
 * Created By - Dhaval Shah
 * Created On - 2019-04-10  
 * Updated By - 
 * Updated On - 
 */

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-xellotooltip-component',
  templateUrl: './xellotooltip-component.html',
  styleUrls: ['./xellotooltip-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class XellotooltipComponent  {
  // receved text from directive and make it visiable to users.
  @Input() text = '';
}
