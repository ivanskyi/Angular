import { Renderer2 } from "@angular/core";
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private el: ElementRef, private r: Renderer2) {
        this.r.setStyle(el.nativeElement, 'color', 'red')
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', 'green')
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)
    }
}
