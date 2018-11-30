import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class spinnerfieldMetaData {
  public static XTYPE: string = 'spinnerfield';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowBlank": "Boolean",
    "allowOnlyWhitespace": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaErrorText": "String",
    "ariaHelp": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoFitErrors": "Boolean",
    "autoHideInputMask": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseBodyCls": "String",
    "baseCls": "String",
    "beforeBodyEl": "String/Array/Ext.XTemplate",
    "beforeLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTpl": "String/Array/Ext.XTemplate",
    "beforeSubTpl": "String/Array/Ext.XTemplate",
    "bind": "Object/String",
    "blankText": "String",
    "border": "Number/String/Boolean",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "dirtyCls": "String",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableKeyFilter": "Boolean",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "editable": "Boolean",
    "emptyCls": "String",
    "emptyText": "String",
    "enableKeyEvents": "Boolean",
    "enforceMaxLength": "Boolean",
    "errorMsgCls": "String",
    "fieldBodyCls": "String",
    "fieldCls": "String",
    "fieldLabel": "String",
    "fieldStyle": "String",
    "fieldSubTpl": "Ext.XTemplate",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formatText": "String",
    "formBind": "Boolean",
    "formItemCls": "String",
    "frame": "Boolean",
    "grow": "Boolean",
    "growMax": "Number",
    "growMin": "Number",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "hideTrigger": "Boolean",
    "html": "String/Object",
    "id": "String",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputMask": "String/Ext.field.InputMask",
    "inputType": "String",
    "inputWrapCls": "String",
    "invalidCls": "String",
    "invalidText": "String",
    "isTextInput": "Boolean",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "keyNavEnabled": "Boolean",
    "labelableRenderTpl": "String/String[]/Ext.XTemplate",
    "labelAlign": "String",
    "labelAttrTpl": "String/Array/Ext.XTemplate",
    "labelCls": "String",
    "labelClsExtra": "String",
    "labelPad": "Number",
    "labelSeparator": "String",
    "labelStyle": "String",
    "labelWidth": "Number",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maskRe": "RegExp",
    "maxHeight": "Number",
    "maxLength": "Number",
    "maxLengthText": "String",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minLength": "Number",
    "minLengthText": "String",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "mouseWheelEnabled": "Boolean",
    "msgTarget": "String",
    "name": "String",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventMark": "Boolean",
    "publishes": "String/String[]/Object",
    "readOnly": "Boolean",
    "readOnlyCls": "String",
    "reference": "String",
    "regex": "RegExp",
    "regexText": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeatTriggerClick": "Boolean",
    "requiredCls": "String",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "selectOnFocus": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "size": "Number",
    "spinDownEnabled": "Boolean",
    "spinUpEnabled": "Boolean",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "stripCharsRe": "RegExp",
    "style": "String/Object",
    "submitValue": "Boolean",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "triggers": "Object",
    "triggerWrapCls": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "validateBlank": "Boolean",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "validator": "Function",
    "value": "Object",
    "valuePublishEvent": "String[]/String",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "vtype": "String",
    "vtypeText": "String",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoFitErrors',
    'autoHideInputMask',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'disableKeyFilter',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enforceMaxLength',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'grow',
    'growMax',
    'growMin',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'keyNavEnabled',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maskRe',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxWidth',
    'minHeight',
    'minLength',
    'minLengthText',
    'minWidth',
    'modal',
    'modelValidation',
    'mouseWheelEnabled',
    'msgTarget',
    'name',
    'nameable',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'preventMark',
    'publishes',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selectOnFocus',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'size',
    'spinDownEnabled',
    'spinUpEnabled',
    'stateEvents',
    'stateful',
    'stateId',
    'stripCharsRe',
    'style',
    'submitValue',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'spinnerfield'},
		{name:'added',parameters:'spinnerfield,container,pos'},
		{name:'afterlayoutanimation',parameters:'spinnerfield'},
		{name:'afterrender',parameters:'spinnerfield'},
		{name:'autosize',parameters:'spinnerfield,width'},
		{name:'beforeactivate',parameters:'spinnerfield'},
		{name:'beforedeactivate',parameters:'spinnerfield'},
		{name:'beforedestroy',parameters:'spinnerfield'},
		{name:'beforehide',parameters:'spinnerfield'},
		{name:'beforerender',parameters:'spinnerfield'},
		{name:'beforeshow',parameters:'spinnerfield'},
		{name:'beforestaterestore',parameters:'spinnerfield,state'},
		{name:'beforestatesave',parameters:'spinnerfield,state'},
		{name:'blur',parameters:'spinnerfield,event'},
		{name:'boxready',parameters:'spinnerfield,width,height'},
		{name:'change',parameters:'spinnerfield,newValue,oldValue'},
		{name:'deactivate',parameters:'spinnerfield'},
		{name:'destroy',parameters:'spinnerfield'},
		{name:'dirtychange',parameters:'spinnerfield,isDirty'},
		{name:'disable',parameters:'spinnerfield'},
		{name:'enable',parameters:'spinnerfield'},
		{name:'errorchange',parameters:'spinnerfield,error'},
		{name:'focus',parameters:'spinnerfield,event'},
		{name:'focusenter',parameters:'spinnerfield,event'},
		{name:'focusleave',parameters:'spinnerfield,event'},
		{name:'hide',parameters:'spinnerfield'},
		{name:'keydown',parameters:'spinnerfield,e'},
		{name:'keypress',parameters:'spinnerfield,e'},
		{name:'keyup',parameters:'spinnerfield,e'},
		{name:'move',parameters:'spinnerfield,x,y'},
		{name:'paste',parameters:'spinnerfield,e'},
		{name:'removed',parameters:'spinnerfield,ownerCt'},
		{name:'render',parameters:'spinnerfield'},
		{name:'resize',parameters:'spinnerfield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'spinnerfield'},
		{name:'specialkey',parameters:'spinnerfield,e'},
		{name:'spin',parameters:'spinnerfield,direction'},
		{name:'spindown',parameters:'spinnerfield'},
		{name:'spinend',parameters:'spinnerfield'},
		{name:'spinup',parameters:'spinnerfield'},
		{name:'staterestore',parameters:'spinnerfield,state'},
		{name:'statesave',parameters:'spinnerfield,state'},
		{name:'validitychange',parameters:'spinnerfield,isValid'},
		{name:'writeablechange',parameters:'spinnerfield,Read'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'keydown',
		'keypress',
		'keyup',
		'move',
		'paste',
		'removed',
		'render',
		'resize',
		'show',
		'specialkey',
		'spin',
		'spindown',
		'spinend',
		'spinup',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: 'spinnerfield', 
  inputs: spinnerfieldMetaData.PROPERTIES,
  outputs: spinnerfieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSpinnerfieldComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSpinnerfieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,spinnerfieldMetaData)}
  public ngOnInit() {this.baseOnInit(spinnerfieldMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}