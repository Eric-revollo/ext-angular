var ExtCalendar_listComponent_1;
import * as tslib_1 from "tslib";
//import EWCCalendar_list from '../dist/ext-calendar-list.component.js';
//inputs: (new EWCCalendar_list()).properties,
import EWCCalendar_list from '@sencha/ext-web-components-classic/dist/ext-calendar-list.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtCalendar_listComponent = ExtCalendar_listComponent_1 = class ExtCalendar_listComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCCalendar_list()).events, ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',], vc);
        this.xtype = 'calendar-list';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtCalendar_listComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtCalendar_listComponent = ExtCalendar_listComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtCalendar_list',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtCalendar_listComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtCalendar_listComponent);
export { ExtCalendar_listComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCalendar_list()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2FsZW5kYXJfbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHRDYWxlbmRhcl9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0VBQXdFO0FBQ3hFLDhDQUE4QztBQUM5QyxPQUFPLGdCQUFnQixNQUFNLHdFQUF3RSxDQUFDO0FBQ3RHLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QyxJQUFhLHlCQUF5QixpQ0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxPQUFPO0lBQ2xELFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUMsYUFBYSxF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Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDQ2FsZW5kYXJfbGlzdCBmcm9tICcuLi9kaXN0L2V4dC1jYWxlbmRhci1saXN0LmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NDYWxlbmRhcl9saXN0KCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDQ2FsZW5kYXJfbGlzdCBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWNhbGVuZGFyLWxpc3QuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRDYWxlbmRhcl9saXN0JyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmluZCcsJ2Jsb2NrUmVmcmVzaCcsJ2JvcmRlcicsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmZXJFbXB0eVRleHQnLCdkZWZlckluaXRpYWxSZWZyZXNoJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkb2NrJywnZHJhZ2dhYmxlJywnZW1wdHlUZXh0JywnZW5hYmxlVG9nZ2xlJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaXRlbUNscycsJ2l0ZW1JZCcsJ2l0ZW1TZWxlY3RvcicsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdsb2FkaW5nQ2xzJywnbG9hZGluZ0hlaWdodCcsJ2xvYWRpbmdUZXh0JywnbG9hZGluZ1VzZU1zZycsJ2xvYWRNYXNrJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCd1bmRlZmluZWQnLCduYW1lYWJsZScsJ25hdmlnYXRpb25Nb2RlbCcsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdvdmVySXRlbUNscycsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJlc2VydmVTY3JvbGxPblJlZnJlc2gnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVsb2FkJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RlZEl0ZW1DbHMnLCdzZWxlY3Rpb24nLCdzZWxlY3Rpb25Nb2RlbCcsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzaW5nbGVTZWxlY3QnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3R5bGUnLCd0YWJJbmRleCcsJ3Rocm90dGxlZFVwZGF0ZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlY29udGFpbmVyY2xpY2snLCdiZWZvcmVjb250YWluZXJjb250ZXh0bWVudScsJ2JlZm9yZWNvbnRhaW5lcmRibGNsaWNrJywnYmVmb3JlY29udGFpbmVya2V5ZG93bicsJ2JlZm9yZWNvbnRhaW5lcmtleXByZXNzJywnYmVmb3JlY29udGFpbmVya2V5dXAnLCdiZWZvcmVjb250YWluZXJtb3VzZWRvd24nLCdiZWZvcmVjb250YWluZXJtb3VzZW91dCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3ZlcicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNldXAnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZWl0ZW1jbGljaycsJ2JlZm9yZWl0ZW1jb250ZXh0bWVudScsJ2JlZm9yZWl0ZW1kYmxjbGljaycsJ2JlZm9yZWl0ZW1rZXlkb3duJywnYmVmb3JlaXRlbWtleXByZXNzJywnYmVmb3JlaXRlbWtleXVwJywnYmVmb3JlaXRlbWxvbmdwcmVzcycsJ2JlZm9yZWl0ZW1tb3VzZWRvd24nLCdiZWZvcmVpdGVtbW91c2VlbnRlcicsJ2JlZm9yZWl0ZW1tb3VzZWxlYXZlJywnYmVmb3JlaXRlbW1vdXNldXAnLCdiZWZvcmVyZWZyZXNoJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NvbnRhaW5lcmNsaWNrJywnY29udGFpbmVyY29udGV4dG1lbnUnLCdjb250YWluZXJkYmxjbGljaycsJ2NvbnRhaW5lcmtleWRvd24nLCdjb250YWluZXJrZXlwcmVzcycsJ2NvbnRhaW5lcmtleXVwJywnY29udGFpbmVybW91c2Vkb3duJywnY29udGFpbmVybW91c2VvdXQnLCdjb250YWluZXJtb3VzZW92ZXInLCdjb250YWluZXJtb3VzZXVwJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzY2hhbmdlJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnaGlnaGxpZ2h0aXRlbScsJ2l0ZW1hZGQnLCdpdGVtY2xpY2snLCdpdGVtY29udGV4dG1lbnUnLCdpdGVtZGJsY2xpY2snLCdpdGVta2V5ZG93bicsJ2l0ZW1rZXlwcmVzcycsJ2l0ZW1rZXl1cCcsJ2l0ZW1sb25ncHJlc3MnLCdpdGVtbW91c2Vkb3duJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1tb3VzZXVwJywnaXRlbXJlbW92ZScsJ2l0ZW11cGRhdGUnLCdtb3ZlJywncmVmcmVzaCcsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9saXN0Q29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfbGlzdENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDb3VudGVyJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VDbHMnLCdiaW5kJywnYmxvY2tSZWZyZXNoJywnYm9yZGVyJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZlckVtcHR5VGV4dCcsJ2RlZmVySW5pdGlhbFJlZnJlc2gnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZGlzYWJsZVNlbGVjdGlvbicsJ2RvY2snLCdkcmFnZ2FibGUnLCdlbXB0eVRleHQnLCdlbmFibGVUb2dnbGUnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdodG1sJywnaWQnLCdpdGVtQ2xzJywnaXRlbUlkJywnaXRlbVNlbGVjdG9yJywnaXRlbVRwbCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ2xvYWRpbmdDbHMnLCdsb2FkaW5nSGVpZ2h0JywnbG9hZGluZ1RleHQnLCdsb2FkaW5nVXNlTXNnJywnbG9hZE1hc2snLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ3VuZGVmaW5lZCcsJ25hbWVhYmxlJywnbmF2aWdhdGlvbk1vZGVsJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ292ZXJJdGVtQ2xzJywncGFkZGluZycsJ3BsdWdpbnMnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVmcmVzaCcsJ3ByZXNlcnZlU2Nyb2xsT25SZWxvYWQnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdGVkSXRlbUNscycsJ3NlbGVjdGlvbicsJ3NlbGVjdGlvbk1vZGVsJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3NpbmdsZVNlbGVjdCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHlsZScsJ3RhYkluZGV4JywndGhyb3R0bGVkVXBkYXRlJywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhY2tPdmVyJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXNlckNscycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0NhbGVuZGFyX2xpc3QoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVjb250YWluZXJjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmNvbnRleHRtZW51JywnYmVmb3JlY29udGFpbmVyZGJsY2xpY2snLCdiZWZvcmVjb250YWluZXJrZXlkb3duJywnYmVmb3JlY29udGFpbmVya2V5cHJlc3MnLCdiZWZvcmVjb250YWluZXJrZXl1cCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlZG93bicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3V0JywnYmVmb3JlY29udGFpbmVybW91c2VvdmVyJywnYmVmb3JlY29udGFpbmVybW91c2V1cCcsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXNlbGVjdCcsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlaXRlbWNsaWNrJywnYmVmb3JlaXRlbWNvbnRleHRtZW51JywnYmVmb3JlaXRlbWRibGNsaWNrJywnYmVmb3JlaXRlbWtleWRvd24nLCdiZWZvcmVpdGVta2V5cHJlc3MnLCdiZWZvcmVpdGVta2V5dXAnLCdiZWZvcmVpdGVtbG9uZ3ByZXNzJywnYmVmb3JlaXRlbW1vdXNlZG93bicsJ2JlZm9yZWl0ZW1tb3VzZWVudGVyJywnYmVmb3JlaXRlbW1vdXNlbGVhdmUnLCdiZWZvcmVpdGVtbW91c2V1cCcsJ2JlZm9yZXJlZnJlc2gnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzZWxlY3QnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY29udGFpbmVyY2xpY2snLCdjb250YWluZXJjb250ZXh0bWVudScsJ2NvbnRhaW5lcmRibGNsaWNrJywnY29udGFpbmVya2V5ZG93bicsJ2NvbnRhaW5lcmtleXByZXNzJywnY29udGFpbmVya2V5dXAnLCdjb250YWluZXJtb3VzZWRvd24nLCdjb250YWluZXJtb3VzZW91dCcsJ2NvbnRhaW5lcm1vdXNlb3ZlcicsJ2NvbnRhaW5lcm1vdXNldXAnLCdkZWFjdGl2YXRlJywnZGVzZWxlY3QnLCdkZXN0cm95JywnZGlzYWJsZScsJ2VuYWJsZScsJ2ZvY3VzJywnZm9jdXNjaGFuZ2UnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdoaWdobGlnaHRpdGVtJywnaXRlbWFkZCcsJ2l0ZW1jbGljaycsJ2l0ZW1jb250ZXh0bWVudScsJ2l0ZW1kYmxjbGljaycsJ2l0ZW1rZXlkb3duJywnaXRlbWtleXByZXNzJywnaXRlbWtleXVwJywnaXRlbWxvbmdwcmVzcycsJ2l0ZW1tb3VzZWRvd24nLCdpdGVtbW91c2VlbnRlcicsJ2l0ZW1tb3VzZWxlYXZlJywnaXRlbW1vdXNldXAnLCdpdGVtcmVtb3ZlJywnaXRlbXVwZGF0ZScsJ21vdmUnLCdyZWZyZXNoJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3NlbGVjdCcsJ3NlbGVjdGlvbmNoYW5nZScsJ3Nob3cnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd1bmhpZ2hsaWdodGl0ZW0nLCd2aWV3cmVhZHknLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2FsZW5kYXItbGlzdCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQ2FsZW5kYXJfbGlzdCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19