import * as tslib_1 from "tslib";
var ExtDataviewComponent_1;
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class dataviewMetaData {
}
dataviewMetaData.XTYPE = 'dataview';
dataviewMetaData.PROPERTIES = [
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inline',
    'innerCls',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemId',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastSelected',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selected',
    'selection',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
dataviewMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,dataview,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'dataview' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'dataview,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'childdoubletap', parameters: 'dataview,location' },
    { name: 'childlongpress', parameters: 'dataview,location' },
    { name: 'childmouseenter', parameters: 'dataview,location' },
    { name: 'childmouseleave', parameters: 'dataview,location' },
    { name: 'childsingletap', parameters: 'dataview,location' },
    { name: 'childtap', parameters: 'dataview,location' },
    { name: 'childtaphold', parameters: 'dataview,location' },
    { name: 'childtouchcancel', parameters: 'dataview,location' },
    { name: 'childtouchend', parameters: 'dataview,location' },
    { name: 'childtouchmove', parameters: 'dataview,location' },
    { name: 'childtouchstart', parameters: 'dataview,location' },
    { name: 'deactivate', parameters: 'oldActiveItem,dataview,newActiveItem' },
    { name: 'deselect', parameters: 'dataview,records' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'dataview,event' },
    { name: 'focusenter', parameters: 'dataview,event' },
    { name: 'focusleave', parameters: 'dataview,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'itemdoubletap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemlongpress', parameters: 'dataview,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'dataview,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'dataview,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemswipe', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchcancel', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'dataview,index,target,record,e' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'navigate', parameters: 'dataview,to,from' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'refresh', parameters: 'dataview' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'dataview,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'rowselection', parameters: 'view,selection' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'select', parameters: 'dataview,selected' },
    { name: 'selectionchange', parameters: 'view,records,selected,selection' },
    { name: 'show', parameters: 'sender' },
    { name: 'storechange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'dataview' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
dataviewMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforestorechange',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'childdoubletap',
    'childlongpress',
    'childmouseenter',
    'childmouseleave',
    'childsingletap',
    'childtap',
    'childtaphold',
    'childtouchcancel',
    'childtouchend',
    'childtouchmove',
    'childtouchstart',
    'deactivate',
    'deselect',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'itemdoubletap',
    'itemlongpress',
    'itemmouseenter',
    'itemmouseleave',
    'itemsingletap',
    'itemswipe',
    'itemtap',
    'itemtaphold',
    'itemtouchcancel',
    'itemtouchend',
    'itemtouchmove',
    'itemtouchstart',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'move',
    'moved',
    'navigate',
    'orientationchange',
    'painted',
    'positionedchange',
    'refresh',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'rightchange',
    'rowselection',
    'scrollablechange',
    'select',
    'selectionchange',
    'show',
    'storechange',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
let ExtDataviewComponent = ExtDataviewComponent_1 = class ExtDataviewComponent extends base {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, dataviewMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(dataviewMetaData);
    }
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
};
ExtDataviewComponent = ExtDataviewComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'dataview',
        inputs: dataviewMetaData.PROPERTIES,
        outputs: dataviewMetaData.EVENTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(() => ExtDataviewComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, base])
], ExtDataviewComponent);
export { ExtDataviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGF2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWRhdGF2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsMkJBQVUsR0FBYTtJQUNuQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsS0FBSztJQUNMLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixNQUFNO0lBQ04sY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFB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LENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURGLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7Q0FHRixDQUFBO0FBZFksb0JBQW9CO0lBUGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1FBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFvQixDQUFDLEVBQUMsQ0FBQztRQUNqRixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFHb0IsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBOzZDQUEzQyxVQUFVLEVBQXlELElBQUk7R0FGbkUsb0JBQW9CLENBY2hDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBkYXRhdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2RhdGF2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2Fzc29jaWF0ZWREYXRhJyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlDbHMnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRGb2N1cycsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdHMnLFxuICAgICdkZWZhdWx0VHlwZScsXG4gICAgJ2RlZmVyRW1wdHlUZXh0JyxcbiAgICAnZGVzZWxlY3RPbkNvbnRhaW5lckNsaWNrJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlU2VsZWN0aW9uJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZW1wdHlJdGVtVGV4dCcsXG4gICAgJ2VtcHR5U3RhdGUnLFxuICAgICdlbXB0eVRleHQnLFxuICAgICdlbXB0eVRleHREZWZhdWx0cycsXG4gICAgJ2VtcHR5VGV4dFByb3BlcnR5JyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW5hY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnaW5saW5lJyxcbiAgICAnaW5uZXJDbHMnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1CdXR0b25Nb2RlJyxcbiAgICAnaXRlbUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1SaXBwbGUnLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1zRm9jdXNhYmxlJyxcbiAgICAnaXRlbVRwbCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXN0U2VsZWN0ZWQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9hZGluZ0hlaWdodCcsXG4gICAgJ2xvYWRpbmdUZXh0JyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hcmtEaXJ0eScsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNldEZvY3VzUG9zaXRpb24nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzY3JvbGxEb2NrJyxcbiAgICAnc2Nyb2xsVG9Ub3BPblJlZnJlc2gnLFxuICAgICdzZWxlY3RhYmxlJyxcbiAgICAnc2VsZWN0ZWQnLFxuICAgICdzZWxlY3Rpb24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0cmlnZ2VyQ3RFdmVudCcsXG4gICAgJ3RyaWdnZXJFdmVudCcsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3ZWlnaHRlZCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0sZGF0YXZpZXcsb2xkQWN0aXZlSXRlbSd9LFxue25hbWU6J2FjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2FkZCcscGFyYW1ldGVyczonJ30sXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXN0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZGF0YXZpZXcnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGV2ZW50J30sXG57bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2hpbGRkb3VibGV0YXAnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGRsb25ncHJlc3MnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGRtb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkbW91c2VsZWF2ZScscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHNpbmdsZXRhcCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRhcCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRhcGhvbGQnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0b3VjaGNhbmNlbCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRvdWNoZW5kJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdG91Y2htb3ZlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdG91Y2hzdGFydCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidvbGRBY3RpdmVJdGVtLGRhdGF2aWV3LG5ld0FjdGl2ZUl0ZW0nfSxcbntuYW1lOidkZXNlbGVjdCcscGFyYW1ldGVyczonZGF0YXZpZXcscmVjb3Jkcyd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGV2ZW50J30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonZGF0YXZpZXcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpdGVtZG91YmxldGFwJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbG9uZ3ByZXNzJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbW91c2VlbnRlcicscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbW1vdXNlbGVhdmUnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1zaW5nbGV0YXAnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1zd2lwZScscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXRhcCcscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXRhcGhvbGQnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaGNhbmNlbCcscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXRvdWNoZW5kJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2htb3ZlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2hzdGFydCcscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbW92ZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOiduYXZpZ2F0ZScscGFyYW1ldGVyczonZGF0YXZpZXcsdG8sZnJvbSd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonZGF0YXZpZXcnfSxcbntuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczonZGF0YXZpZXcsaXRlbSxyZW5kZXJlZCd9LFxue25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Jvd3NlbGVjdGlvbicscGFyYW1ldGVyczondmlldyxzZWxlY3Rpb24nfSxcbntuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzZWxlY3QnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LHNlbGVjdGVkJ30sXG57bmFtZTonc2VsZWN0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOid2aWV3LHJlY29yZHMsc2VsZWN0ZWQsc2VsZWN0aW9uJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2RhdGF2aWV3J30sXG57bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxue25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4nYWN0aXZhdGUnLFxuJ2FjdGl2ZUl0ZW1jaGFuZ2UnLFxuJ2FkZCcsXG4nYWRkZWQnLFxuJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLFxuJ2JlZm9yZWJvdHRvbWNoYW5nZScsXG4nYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuJ2JlZm9yZWhlaWdodGNoYW5nZScsXG4nYmVmb3JlaGlkZGVuY2hhbmdlJyxcbidiZWZvcmVoaWRlJyxcbidiZWZvcmVsZWZ0Y2hhbmdlJyxcbidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcbidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1pbldpZHRoY2hhbmdlJyxcbidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG4nYmVmb3JlcmlnaHRjaGFuZ2UnLFxuJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLFxuJ2JlZm9yZXNob3cnLFxuJ2JlZm9yZXN0b3JlY2hhbmdlJyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV0b3BjaGFuZ2UnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidib3R0b21jaGFuZ2UnLFxuJ2NlbnRlcmVkY2hhbmdlJyxcbidjaGlsZGRvdWJsZXRhcCcsXG4nY2hpbGRsb25ncHJlc3MnLFxuJ2NoaWxkbW91c2VlbnRlcicsXG4nY2hpbGRtb3VzZWxlYXZlJyxcbidjaGlsZHNpbmdsZXRhcCcsXG4nY2hpbGR0YXAnLFxuJ2NoaWxkdGFwaG9sZCcsXG4nY2hpbGR0b3VjaGNhbmNlbCcsXG4nY2hpbGR0b3VjaGVuZCcsXG4nY2hpbGR0b3VjaG1vdmUnLFxuJ2NoaWxkdG91Y2hzdGFydCcsXG4nZGVhY3RpdmF0ZScsXG4nZGVzZWxlY3QnLFxuJ2Rlc3Ryb3knLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidkb2NrZWRjaGFuZ2UnLFxuJ2VyYXNlZCcsXG4nZmxvYXRpbmdjaGFuZ2UnLFxuJ2ZvY3VzJyxcbidmb2N1c2VudGVyJyxcbidmb2N1c2xlYXZlJyxcbidmdWxsc2NyZWVuJyxcbidoZWlnaHRjaGFuZ2UnLFxuJ2hpZGRlbmNoYW5nZScsXG4naGlkZScsXG4naW5pdGlhbGl6ZScsXG4naXRlbWRvdWJsZXRhcCcsXG4naXRlbWxvbmdwcmVzcycsXG4naXRlbW1vdXNlZW50ZXInLFxuJ2l0ZW1tb3VzZWxlYXZlJyxcbidpdGVtc2luZ2xldGFwJyxcbidpdGVtc3dpcGUnLFxuJ2l0ZW10YXAnLFxuJ2l0ZW10YXBob2xkJyxcbidpdGVtdG91Y2hjYW5jZWwnLFxuJ2l0ZW10b3VjaGVuZCcsXG4naXRlbXRvdWNobW92ZScsXG4naXRlbXRvdWNoc3RhcnQnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdmUnLFxuJ21vdmVkJyxcbiduYXZpZ2F0ZScsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bvc2l0aW9uZWRjaGFuZ2UnLFxuJ3JlZnJlc2gnLFxuJ3JlbW92ZScsXG4ncmVtb3ZlZCcsXG4ncmVuZGVyZWRjaGFuZ2UnLFxuJ3Jlc2l6ZScsXG4ncmlnaHRjaGFuZ2UnLFxuJ3Jvd3NlbGVjdGlvbicsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2VsZWN0JyxcbidzZWxlY3Rpb25jaGFuZ2UnLFxuJ3Nob3cnLFxuJ3N0b3JlY2hhbmdlJyxcbid0b2Zyb250Jyxcbid0b3BjaGFuZ2UnLFxuJ3VwZGF0ZWRhdGEnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdmlldycsIFxuICBpbnB1dHM6IGRhdGF2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGF0YXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RGF0YXZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREYXRhdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsZGF0YXZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChkYXRhdmlld01ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19