import { Renderer2 } from "@angular/core";
import { Input } from "@angular/core";
import { HostBinding } from "@angular/core";
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue'
    @Input() dStyles?: { border?: string, fontWeight?: string, borderRadius?: string }
    @HostBinding('style.color') elColor: string | null = null

    constructor(private el: ElementRef, private r: Renderer2) {
        this.r.setStyle(el.nativeElement, 'color', 'red')
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles?.fontWeight)
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles?.border)
        this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles?.borderRadius)
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
        this.r.setStyle(this.el.nativeElement, 'border', null)
        this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
    }
}
