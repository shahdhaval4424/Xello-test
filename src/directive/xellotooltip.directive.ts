/**  Copyright 2017 Xello
 * 
 * Name - directive.ts
 * Description - Custom tooltip directive.
 * Created By - Dhaval Shah
 * Created On - 2019-04-10  
 * Updated By - 
 * Updated On - 
 */

import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { XellotooltipComponent } from 'src/app/xellotooltip-component/xellotooltip-component';

@Directive({
  selector: '[xellotooltip]'
})
export class XellotooltipDirective implements OnInit {
 // provate variables.
  private overlayRef: OverlayRef;
  private wasInside = false;
  private lastBtnClicked : string = '';
  @Input('xellotooltip') text = '';

  constructor(private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef,
              private overlay: Overlay) { }
  
  //override init
  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      // Create position attached to the elementRef
      .flexibleConnectedTo(this.elementRef)
      // Describe how to connect overlay to the elementRef
      // Means, attach overlay's center bottom point to the         
      // top center point of the elementRef.
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);

      this.overlayRef = this.overlay.create({positionStrategy});
  }
  // handle click event anywhere inside of the component
  @HostListener('click',['$event.target'])
  show(btn) {
      if(this.lastBtnClicked != btn.id || this.lastBtnClicked === '') // handle same button click
      {
        // Create tooltip portal
        const tooltipPortal = new ComponentPortal(XellotooltipComponent);
      
        // Attach tooltip portal to overlay
        const tooltipRef: ComponentRef<XellotooltipComponent> = this.overlayRef.attach(tooltipPortal);

        tooltipRef.instance.text = this.text;
        this.wasInside = true;
      }

      this.lastBtnClicked = btn.id;
      // Pass content to tooltip component instance
   }

  // handle click event anywhere outside of the component
  @HostListener('document:click',['$event.target'])
  hide(btn) 
  { 
    if (!this.wasInside && this.lastBtnClicked != btn.id) {
      this.overlayRef.detach();
    }
    this.lastBtnClicked = btn.id;
    this.wasInside = false;
  }

  //Handle escape event
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.overlayRef.detach();
}

}
