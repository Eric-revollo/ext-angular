import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, OnInit, AfterContentInit, OnChanges, ElementRef } from '@angular/core';
import { base } from './base';
export declare class d3_treemapMetaData {
    static XTYPE: string;
    static PROPERTIESOBJECT: any;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtD3_treemapComponent extends base implements OnInit, AfterContentInit, OnChanges {
    private location;
    private resolver;
    private changeDetector;
    hostComponent: base;
    constructor(location: ViewContainerRef, resolver: ComponentFactoryResolver, changeDetector: ChangeDetectorRef, eRef: ElementRef, hostComponent: base);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
