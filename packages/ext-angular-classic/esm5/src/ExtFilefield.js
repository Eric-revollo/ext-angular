import * as tslib_1 from "tslib";
//import EWCFilefield from '../dist/ext-filefield.component.js';
//inputs: (new EWCFilefield()).properties,
import EWCFilefield from '@sencha/ext-web-components-classic/dist/ext-filefield.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtFilefieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFilefieldComponent, _super);
    function ExtFilefieldComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'accept', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'buttonConfig', 'buttonMargin', 'buttonOnly', 'buttonText', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clearOnSubmit', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',], (new EWCFilefield()).events, ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',], vc) || this;
        _this.xtype = 'filefield';
        return _this;
    }
    ExtFilefieldComponent_1 = ExtFilefieldComponent;
    ExtFilefieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtFilefieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtFilefieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtFilefieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtFilefieldComponent_1;
    ExtFilefieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtFilefieldComponent = ExtFilefieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtFilefield',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'accept', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'buttonConfig', 'buttonMargin', 'buttonOnly', 'buttonText', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clearOnSubmit', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtFilefieldComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtFilefieldComponent);
    return ExtFilefieldComponent;
}(EngBase));
export { ExtFilefieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCFilefield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RmlsZWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dEZpbGVmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0VBQWdFO0FBQ2hFLDBDQUEwQztBQUMxQyxPQUFPLFlBQVksTUFBTSxvRUFBb0UsQ0FBQztBQUM5RixPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEM7SUFBMkMsaURBQU87SUFDOUMsK0JBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxxQkFBcUIsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMs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QUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLG9CQUFvQixFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUU7WUFDL3JGLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLG9CQUFvQixFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBRTtZQUM5ZixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBQyxDQUFDO1lBQ3JGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQixxQkFBcUIsQ0FnQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhDRCxDQUEyQyxPQUFPLEdBZ0NqRDtTQWhDWSxxQkFBcUI7QUFtQ2xDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDRmlsZWZpZWxkIGZyb20gJy4uL2Rpc3QvZXh0LWZpbGVmaWVsZC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDRmlsZWZpZWxkKCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDRmlsZWZpZWxkIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMvZGlzdC9leHQtZmlsZWZpZWxkLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0RmlsZWZpZWxkJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWNjZXB0JywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2J1dHRvbkNvbmZpZycsJ2J1dHRvbk1hcmdpbicsJ2J1dHRvbk9ubHknLCdidXR0b25UZXh0JywnY2hlY2tDaGFuZ2VCdWZmZXInLCdjaGVja0NoYW5nZUV2ZW50cycsJ2NoaWxkRWxzJywnY2xlYXJPblN1Ym1pdCcsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkb2NrJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlbXB0eUNscycsJ2VtcHR5VGV4dCcsJ2VuYWJsZUtleUV2ZW50cycsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlcnJvck1zZ0NscycsJ2ZpZWxkQm9keUNscycsJ2ZpZWxkQ2xzJywnZmllbGRMYWJlbCcsJ2ZpZWxkU3R5bGUnLCdmaWVsZFN1YlRwbCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ3VuZGVmaW5lZCcsJ2Zvcm1CaW5kJywnZm9ybUl0ZW1DbHMnLCdmcmFtZScsJ2dyb3cnLCdncm93TWF4JywnZ3Jvd01pbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwdWJsaXNoZXMnLCdyZWFkT25seScsJ3JlYWRPbmx5Q2xzJywncmVmZXJlbmNlJywncmVnZXgnLCdyZWdleFRleHQnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXBlYXRUcmlnZ2VyQ2xpY2snLCdyZXF1aXJlZENscycsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0T25Gb2N1cycsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0cmlwQ2hhcnNSZScsJ3N0eWxlJywnc3VibWl0VmFsdWUnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyaWdnZXJzJywndHJpZ2dlcldyYXBDbHMnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsaWRhdGVCbGFuaycsJ3ZhbGlkYXRlT25CbHVyJywndmFsaWRhdGVPbkNoYW5nZScsJ3ZhbGlkYXRlT25Gb2N1c0xlYXZlJywndmFsaWRhdGlvbicsJ3ZhbGlkYXRpb25GaWVsZCcsJ3ZhbGlkYXRvcicsJ3ZhbHVlJywndmFsdWVQdWJsaXNoRXZlbnQnLCd2aWV3TW9kZWwnLCd2dHlwZScsJ3Z0eXBlVGV4dCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYXV0b3NpemUnLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZScsJ2VuYWJsZScsJ2Vycm9yY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdrZXlkb3duJywna2V5cHJlc3MnLCdrZXl1cCcsJ21vdmUnLCdwYXN0ZScsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3ZhbGlkaXR5Y2hhbmdlJywnd3JpdGVhYmxlY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRGaWxlZmllbGRDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRGaWxlZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWNjZXB0JywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2J1dHRvbkNvbmZpZycsJ2J1dHRvbk1hcmdpbicsJ2J1dHRvbk9ubHknLCdidXR0b25UZXh0JywnY2hlY2tDaGFuZ2VCdWZmZXInLCdjaGVja0NoYW5nZUV2ZW50cycsJ2NoaWxkRWxzJywnY2xlYXJPblN1Ym1pdCcsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkb2NrJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlbXB0eUNscycsJ2VtcHR5VGV4dCcsJ2VuYWJsZUtleUV2ZW50cycsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlcnJvck1zZ0NscycsJ2ZpZWxkQm9keUNscycsJ2ZpZWxkQ2xzJywnZmllbGRMYWJlbCcsJ2ZpZWxkU3R5bGUnLCdmaWVsZFN1YlRwbCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ3VuZGVmaW5lZCcsJ2Zvcm1CaW5kJywnZm9ybUl0ZW1DbHMnLCdmcmFtZScsJ2dyb3cnLCdncm93TWF4JywnZ3Jvd01pbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwdWJsaXNoZXMnLCdyZWFkT25seScsJ3JlYWRPbmx5Q2xzJywncmVmZXJlbmNlJywncmVnZXgnLCdyZWdleFRleHQnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXBlYXRUcmlnZ2VyQ2xpY2snLCdyZXF1aXJlZENscycsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0T25Gb2N1cycsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0cmlwQ2hhcnNSZScsJ3N0eWxlJywnc3VibWl0VmFsdWUnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyaWdnZXJzJywndHJpZ2dlcldyYXBDbHMnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsaWRhdGVCbGFuaycsJ3ZhbGlkYXRlT25CbHVyJywndmFsaWRhdGVPbkNoYW5nZScsJ3ZhbGlkYXRlT25Gb2N1c0xlYXZlJywndmFsaWRhdGlvbicsJ3ZhbGlkYXRpb25GaWVsZCcsJ3ZhbGlkYXRvcicsJ3ZhbHVlJywndmFsdWVQdWJsaXNoRXZlbnQnLCd2aWV3TW9kZWwnLCd2dHlwZScsJ3Z0eXBlVGV4dCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0ZpbGVmaWVsZCgpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhZGRlZCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdhdXRvc2l6ZScsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoYW5nZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlydHljaGFuZ2UnLCdkaXNhYmxlJywnZW5hYmxlJywnZXJyb3JjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2tleWRvd24nLCdrZXlwcmVzcycsJ2tleXVwJywnbW92ZScsJ3Bhc3RlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzcGVjaWFsa2V5Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndmFsaWRpdHljaGFuZ2UnLCd3cml0ZWFibGVjaGFuZ2UnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZmlsZWZpZWxkJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NGaWxlZmllbGQoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==