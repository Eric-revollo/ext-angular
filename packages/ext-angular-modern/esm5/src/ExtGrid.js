import * as tslib_1 from "tslib";
//import EWCGrid from '../dist/ext-grid.component.js';
//inputs: (new EWCGrid()).properties,
import EWCGrid from '@sencha/ext-web-components-modern/dist/ext-grid.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridComponent, _super);
    function ExtGridComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'columnLines', 'columnMenu', 'columnResize', 'columns', 'columnsMenuItem', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'enableColumnMove', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideHeaders', 'hideMode', 'hideOnMaskTap', 'hideScrollbar', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'rowNumbers', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'title', 'titleBar', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'undefined', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCGrid()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecomplete', 'beforedisabledchange', 'beforedockedchange', 'beforeedit', 'beforegroupcollapse', 'beforegroupexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeselectionextend', 'beforeshow', 'beforestartedit', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'canceledit', 'canceledit', 'cellselection', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'columnadd', 'columnhide', 'columnmenucreated', 'columnmove', 'columnremove', 'columnresize', 'columnselection', 'columnshow', 'columnsort', 'complete', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'disclose', 'dockedchange', 'edit', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'groupcollapse', 'groupexpand', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemaction', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'select', 'selectionextenderdrag', 'show', 'specialkey', 'startedit', 'storechange', 'tofront', 'topchange', 'updatedata', 'validateedit', 'widthchange',], vc) || this;
        _this.xtype = 'grid';
        return _this;
    }
    ExtGridComponent_1 = ExtGridComponent;
    ExtGridComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridComponent_1;
    ExtGridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtGridComponent = ExtGridComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtGrid',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'columnLines', 'columnMenu', 'columnResize', 'columns', 'columnsMenuItem', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'enableColumnMove', 'undefined', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideHeaders', 'hideMode', 'hideOnMaskTap', 'hideScrollbar', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'rowNumbers', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'title', 'titleBar', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'undefined', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecomplete', 'beforedisabledchange', 'beforedockedchange', 'beforeedit', 'beforegroupcollapse', 'beforegroupexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeselectionextend', 'beforeshow', 'beforestartedit', 'beforestorechange', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'canceledit', 'canceledit', 'cellselection', 'centeredchange', 'childdoubletap', 'childlongpress', 'childmouseenter', 'childmouseleave', 'childsingletap', 'childtap', 'childtaphold', 'childtouchcancel', 'childtouchend', 'childtouchmove', 'childtouchstart', 'columnadd', 'columnhide', 'columnmenucreated', 'columnmove', 'columnremove', 'columnresize', 'columnselection', 'columnshow', 'columnsort', 'complete', 'deactivate', 'deselect', 'destroy', 'disabledchange', 'disclose', 'dockedchange', 'edit', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'groupcollapse', 'groupexpand', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'itemaction', 'itemdoubletap', 'itemlongpress', 'itemmouseenter', 'itemmouseleave', 'itemsingletap', 'itemswipe', 'itemtap', 'itemtaphold', 'itemtouchcancel', 'itemtouchend', 'itemtouchmove', 'itemtouchstart', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'navigate', 'orientationchange', 'painted', 'positionedchange', 'refresh', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'select', 'selectionextenderdrag', 'show', 'specialkey', 'startedit', 'storechange', 'tofront', 'topchange', 'updatedata', 'validateedit', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtGridComponent);
    return ExtGridComponent;
}(EngBase));
export { ExtGridComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCGrid()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0R3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsic3JjL0V4dEdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNEQUFzRDtBQUN0RCxxQ0FBcUM7QUFDckMsT0FBTyxPQUFPLE1BQU0sOERBQThELENBQUM7QUFDbkYsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDO0lBQXNDLDRDQUFPO0lBQ3pDLDBCQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFdBQVcs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QUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FIMUIsZ0JBQWdCLENBZ0M1QjtJQUFELHVCQUFDO0NBQUEsQUFoQ0QsQ0FBc0MsT0FBTyxHQWdDNUM7U0FoQ1ksZ0JBQWdCO0FBbUM3Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLDBDQUEwQztBQUMxQyx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0dyaWQgZnJvbSAnLi4vZGlzdC9leHQtZ3JpZC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDR3JpZCgpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ0dyaWQgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtbW9kZXJuL2Rpc3QvZXh0LWdyaWQuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRHcmlkJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUl0ZW0nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2Fzc29jaWF0ZWREYXRhJywnYXV0b0Rlc3Ryb3knLCdhdXRvU2l6ZScsJ2F4aXNMb2NrJywnYmluZCcsJ2JvZHlDbHMnLCdib3JkZXInLCdib3R0b20nLCdidWZmZXJTaXplJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xzJywnY29sbGFwc2VEZWZhdWx0cycsJ2NvbGxhcHNpYmxlJywnY29sdW1uTGluZXMnLCdjb2x1bW5NZW51JywnY29sdW1uUmVzaXplJywnY29sdW1ucycsJ2NvbHVtbnNNZW51SXRlbScsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVmZXJFbXB0eVRleHQnLCdkZXNlbGVjdE9uQ29udGFpbmVyQ2xpY2snLCdkaXNhYmxlZCcsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkaXNjbG9zdXJlUHJvcGVydHknLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlbXB0eUl0ZW1UZXh0JywnZW1wdHlTdGF0ZScsJ2VtcHR5VGV4dCcsJ2VtcHR5VGV4dERlZmF1bHRzJywnZW1wdHlUZXh0UHJvcGVydHknLCdlbmFibGVDb2x1bW5Nb3ZlJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdncm91cGVkJywnZ3JvdXBGb290ZXInLCdncm91cEhlYWRlcicsJ2dyb3VwaW5nJywnZ3JvdXBQbGFjZWhvbGRlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlSGVhZGVycycsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hpZGVTY3JvbGxiYXInLCdob3Jpem9udGFsT3ZlcmZsb3cnLCdodG1sJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbmRleEJhcicsJ2luZmluaXRlJywnaW5saW5lJywnaW5uZXJDbHMnLCdpbm5lckN0SGVpZ2h0JywnaW5uZXJXaWR0aCcsJ2luc3RhbmNlQ2xzJywnaXRlbUJ1dHRvbk1vZGUnLCdpdGVtQ2xzJywnaXRlbUNvbmZpZycsJ2l0ZW1Db250ZW50Q2xzJywnaXRlbURhdGFNYXAnLCdpdGVtSWQnLCdpdGVtSW5uZXJDbHMnLCdpdGVtUmlwcGxlJywnaXRlbXMnLCdpdGVtc0ZvY3VzYWJsZScsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ21haW50YWluQ2hpbGROb2RlcycsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXJrRGlydHknLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhJdGVtQ2FjaGUnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbmltdW1CdWZmZXJEaXN0YW5jZScsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCdtdWx0aUNvbHVtblNvcnQnLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb25JdGVtRGlzY2xvc3VyZScsJ3BhZGRpbmcnLCdwaW5Gb290ZXJzJywncGluSGVhZGVycycsJ3Bpbm5lZEZvb3RlcicsJ3Bpbm5lZEZvb3RlckhlaWdodCcsJ3Bpbm5lZEhlYWRlcicsJ3Bpbm5lZEhlYWRlckhlaWdodCcsJ3BsdWdpbnMnLCdwcmVzc2VkRGVsYXknLCdwcmV2ZW50U2VsZWN0aW9uT25EaXNjbG9zZScsJ3ByZXZlbnRTZWxlY3Rpb25PblRvb2wnLCdwdWJsaXNoZXMnLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVzZXJ2ZVNjcm9sbGJhcicsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3JpZ2h0JywncmlwcGxlJywncm93TGluZXMnLCdyb3dOdW1iZXJzJywnc2Nyb2xsYWJsZScsJ3Njcm9sbERvY2snLCdzY3JvbGxUb1RvcE9uUmVmcmVzaCcsJ3NlbGVjdGFibGUnLCdzZWxlY3Rpb24nLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc29ydGFibGUnLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHJpcGVkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RpdGxlJywndGl0bGVCYXInLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvcFJlbmRlcmVkSW5kZXgnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJDdEV2ZW50JywndHJpZ2dlckV2ZW50JywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3VuZGVmaW5lZCcsJ3ZhcmlhYmxlSGVpZ2h0cycsJ3ZlcnRpY2FsT3ZlcmZsb3cnLCd2aWV3TW9kZWwnLCd2aXNpYmxlSGVpZ2h0JywndmlzaWJsZUxlZnQnLCd2aXNpYmxlVG9wJywndmlzaWJsZVdpZHRoJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlY29tcGxldGUnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWVkaXQnLCdiZWZvcmVncm91cGNvbGxhcHNlJywnYmVmb3JlZ3JvdXBleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNlbGVjdGlvbmV4dGVuZCcsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGFydGVkaXQnLCdiZWZvcmVzdG9yZWNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjYW5jZWxlZGl0JywnY2FuY2VsZWRpdCcsJ2NlbGxzZWxlY3Rpb24nLCdjZW50ZXJlZGNoYW5nZScsJ2NoaWxkZG91YmxldGFwJywnY2hpbGRsb25ncHJlc3MnLCdjaGlsZG1vdXNlZW50ZXInLCdjaGlsZG1vdXNlbGVhdmUnLCdjaGlsZHNpbmdsZXRhcCcsJ2NoaWxkdGFwJywnY2hpbGR0YXBob2xkJywnY2hpbGR0b3VjaGNhbmNlbCcsJ2NoaWxkdG91Y2hlbmQnLCdjaGlsZHRvdWNobW92ZScsJ2NoaWxkdG91Y2hzdGFydCcsJ2NvbHVtbmFkZCcsJ2NvbHVtbmhpZGUnLCdjb2x1bW5tZW51Y3JlYXRlZCcsJ2NvbHVtbm1vdmUnLCdjb2x1bW5yZW1vdmUnLCdjb2x1bW5yZXNpemUnLCdjb2x1bW5zZWxlY3Rpb24nLCdjb2x1bW5zaG93JywnY29sdW1uc29ydCcsJ2NvbXBsZXRlJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZGlzY2xvc2UnLCdkb2NrZWRjaGFuZ2UnLCdlZGl0JywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2dyb3VwY29sbGFwc2UnLCdncm91cGV4cGFuZCcsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnaXRlbWFjdGlvbicsJ2l0ZW1kb3VibGV0YXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1zaW5nbGV0YXAnLCdpdGVtc3dpcGUnLCdpdGVtdGFwJywnaXRlbXRhcGhvbGQnLCdpdGVtdG91Y2hjYW5jZWwnLCdpdGVtdG91Y2hlbmQnLCdpdGVtdG91Y2htb3ZlJywnaXRlbXRvdWNoc3RhcnQnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ25hdmlnYXRlJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzZWxlY3QnLCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXJ0ZWRpdCcsJ3N0b3JlY2hhbmdlJywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd2YWxpZGF0ZWVkaXQnLCd3aWR0aGNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0R3JpZENvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEdyaWRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUl0ZW0nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2Fzc29jaWF0ZWREYXRhJywnYXV0b0Rlc3Ryb3knLCdhdXRvU2l6ZScsJ2F4aXNMb2NrJywnYmluZCcsJ2JvZHlDbHMnLCdib3JkZXInLCdib3R0b20nLCdidWZmZXJTaXplJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xzJywnY29sbGFwc2VEZWZhdWx0cycsJ2NvbGxhcHNpYmxlJywnY29sdW1uTGluZXMnLCdjb2x1bW5NZW51JywnY29sdW1uUmVzaXplJywnY29sdW1ucycsJ2NvbHVtbnNNZW51SXRlbScsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVmZXJFbXB0eVRleHQnLCdkZXNlbGVjdE9uQ29udGFpbmVyQ2xpY2snLCdkaXNhYmxlZCcsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkaXNjbG9zdXJlUHJvcGVydHknLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlbXB0eUl0ZW1UZXh0JywnZW1wdHlTdGF0ZScsJ2VtcHR5VGV4dCcsJ2VtcHR5VGV4dERlZmF1bHRzJywnZW1wdHlUZXh0UHJvcGVydHknLCdlbmFibGVDb2x1bW5Nb3ZlJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdncm91cGVkJywnZ3JvdXBGb290ZXInLCdncm91cEhlYWRlcicsJ2dyb3VwaW5nJywnZ3JvdXBQbGFjZWhvbGRlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlSGVhZGVycycsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hpZGVTY3JvbGxiYXInLCdob3Jpem9udGFsT3ZlcmZsb3cnLCdodG1sJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbmRleEJhcicsJ2luZmluaXRlJywnaW5saW5lJywnaW5uZXJDbHMnLCdpbm5lckN0SGVpZ2h0JywnaW5uZXJXaWR0aCcsJ2luc3RhbmNlQ2xzJywnaXRlbUJ1dHRvbk1vZGUnLCdpdGVtQ2xzJywnaXRlbUNvbmZpZycsJ2l0ZW1Db250ZW50Q2xzJywnaXRlbURhdGFNYXAnLCdpdGVtSWQnLCdpdGVtSW5uZXJDbHMnLCdpdGVtUmlwcGxlJywnaXRlbXMnLCdpdGVtc0ZvY3VzYWJsZScsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ21haW50YWluQ2hpbGROb2RlcycsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXJrRGlydHknLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhJdGVtQ2FjaGUnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbmltdW1CdWZmZXJEaXN0YW5jZScsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCdtdWx0aUNvbHVtblNvcnQnLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb25JdGVtRGlzY2xvc3VyZScsJ3BhZGRpbmcnLCdwaW5Gb290ZXJzJywncGluSGVhZGVycycsJ3Bpbm5lZEZvb3RlcicsJ3Bpbm5lZEZvb3RlckhlaWdodCcsJ3Bpbm5lZEhlYWRlcicsJ3Bpbm5lZEhlYWRlckhlaWdodCcsJ3BsdWdpbnMnLCdwcmVzc2VkRGVsYXknLCdwcmV2ZW50U2VsZWN0aW9uT25EaXNjbG9zZScsJ3ByZXZlbnRTZWxlY3Rpb25PblRvb2wnLCdwdWJsaXNoZXMnLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVzZXJ2ZVNjcm9sbGJhcicsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3JpZ2h0JywncmlwcGxlJywncm93TGluZXMnLCdyb3dOdW1iZXJzJywnc2Nyb2xsYWJsZScsJ3Njcm9sbERvY2snLCdzY3JvbGxUb1RvcE9uUmVmcmVzaCcsJ3NlbGVjdGFibGUnLCdzZWxlY3Rpb24nLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc29ydGFibGUnLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHJpcGVkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RpdGxlJywndGl0bGVCYXInLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvcFJlbmRlcmVkSW5kZXgnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJDdEV2ZW50JywndHJpZ2dlckV2ZW50JywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3VuZGVmaW5lZCcsJ3ZhcmlhYmxlSGVpZ2h0cycsJ3ZlcnRpY2FsT3ZlcmZsb3cnLCd2aWV3TW9kZWwnLCd2aXNpYmxlSGVpZ2h0JywndmlzaWJsZUxlZnQnLCd2aXNpYmxlVG9wJywndmlzaWJsZVdpZHRoJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0dyaWQoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlY29tcGxldGUnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWVkaXQnLCdiZWZvcmVncm91cGNvbGxhcHNlJywnYmVmb3JlZ3JvdXBleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNlbGVjdGlvbmV4dGVuZCcsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGFydGVkaXQnLCdiZWZvcmVzdG9yZWNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjYW5jZWxlZGl0JywnY2FuY2VsZWRpdCcsJ2NlbGxzZWxlY3Rpb24nLCdjZW50ZXJlZGNoYW5nZScsJ2NoaWxkZG91YmxldGFwJywnY2hpbGRsb25ncHJlc3MnLCdjaGlsZG1vdXNlZW50ZXInLCdjaGlsZG1vdXNlbGVhdmUnLCdjaGlsZHNpbmdsZXRhcCcsJ2NoaWxkdGFwJywnY2hpbGR0YXBob2xkJywnY2hpbGR0b3VjaGNhbmNlbCcsJ2NoaWxkdG91Y2hlbmQnLCdjaGlsZHRvdWNobW92ZScsJ2NoaWxkdG91Y2hzdGFydCcsJ2NvbHVtbmFkZCcsJ2NvbHVtbmhpZGUnLCdjb2x1bW5tZW51Y3JlYXRlZCcsJ2NvbHVtbm1vdmUnLCdjb2x1bW5yZW1vdmUnLCdjb2x1bW5yZXNpemUnLCdjb2x1bW5zZWxlY3Rpb24nLCdjb2x1bW5zaG93JywnY29sdW1uc29ydCcsJ2NvbXBsZXRlJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZGlzY2xvc2UnLCdkb2NrZWRjaGFuZ2UnLCdlZGl0JywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2dyb3VwY29sbGFwc2UnLCdncm91cGV4cGFuZCcsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnaXRlbWFjdGlvbicsJ2l0ZW1kb3VibGV0YXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1zaW5nbGV0YXAnLCdpdGVtc3dpcGUnLCdpdGVtdGFwJywnaXRlbXRhcGhvbGQnLCdpdGVtdG91Y2hjYW5jZWwnLCdpdGVtdG91Y2hlbmQnLCdpdGVtdG91Y2htb3ZlJywnaXRlbXRvdWNoc3RhcnQnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ25hdmlnYXRlJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzZWxlY3QnLCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXJ0ZWRpdCcsJ3N0b3JlY2hhbmdlJywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd2YWxpZGF0ZWVkaXQnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdncmlkJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NHcmlkKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=