import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
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

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonComponent
                    ]
                }]
        }] });

class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularLibModule, imports: [ButtonModule], exports: [ButtonModule] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularLibModule, imports: [[
            ButtonModule,
        ], ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ButtonModule,
                    ],
                    exports: [
                        ButtonModule
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularLibModule, ButtonComponent, ButtonModule };
//# sourceMappingURL=rodrigoluz-angular-lib.mjs.map
