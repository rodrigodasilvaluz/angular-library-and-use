import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonComponent {
    constructor() {
        this.variant = 'primary';
        this.size = 'lg';
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ButtonComponent, selector: "lib-button", inputs: { variant: "variant", size: "size" }, ngImport: i0, template: "<button [ngClass]=\"[variant, size]\">\n    <ng-content></ng-content>\n</button>\n", styles: ["button{border:none;border-radius:4px;cursor:pointer;color:#fff}button.primary{background-color:#8a2be2}button.secundary{background-color:gray}button.primary:hover,button.secundary:hover{color:#ccc;box-shadow:#64646f33 0 7px 29px}button.sm{padding:3px 6px}button.md{padding:6px 12px}button.lg{padding:9px 18px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<button [ngClass]=\"[variant, size]\">\n    <ng-content></ng-content>\n</button>\n", styles: ["button{border:none;border-radius:4px;cursor:pointer;color:#fff}button.primary{background-color:#8a2be2}button.secundary{background-color:gray}button.primary:hover,button.secundary:hover{color:#ccc;box-shadow:#64646f33 0 7px 29px}button.sm{padding:3px 6px}button.md{padding:6px 12px}button.lg{padding:9px 18px}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFPa0IsWUFBTyxHQUE0QixTQUFTLENBQUM7UUFDN0MsU0FBSSxHQUF1QixJQUFJLENBQUM7S0FFakQ7OzRHQUxZLGVBQWU7Z0dBQWYsZUFBZSxnR0NQNUIsb0ZBR0E7MkZESWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZOzhCQU1OLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBwdWJsaWMgdmFyaWFudDogJ3ByaW1hcnknIHwgJ3NlY3VuZGFyeScgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgPSAnbGcnO1xuXG59XG4iLCI8YnV0dG9uIFtuZ0NsYXNzXT1cIlt2YXJpYW50LCBzaXplXVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuIl19