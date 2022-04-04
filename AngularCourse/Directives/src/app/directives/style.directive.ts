import { Renderer2 } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private el: ElementRef, private r: Renderer2) {
        this.r.setStyle(el.nativeElement, 'color', 'green')
    }
}
