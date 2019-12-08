import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, ViewChildren } from '@angular/core';
//import * as JsonStringifySafe from 'json-stringify-safe'
const Ext = window['Ext'];
export class EngBase {
    constructor(eRef, hostComponent, properties, events, eventnames, vc) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        //this.events = events;
        this.eventnames = eventnames;
        this.vc = vc;
        var me = this;
        this.eventnames.forEach(function (eventname) {
            //console.log(eventname)
            //(<any>this)[eventname] = new EventEmitter()
            me[eventname] = new EventEmitter();
        });
        this.A = {};
        this.A.props = {};
        this.base = EngBase;
    }
    get childComponents() {
        if (this._childComponents == undefined) {
            return [];
        }
        return this._childComponents.filter(item => item !== this);
    }
    baseOnInit() {
        //console.log('baseOnInit')
        // console.log(this['html'])
        // if (this['html'] == 'route') {
        //   console.log('in route')
        //   this.node.newDiv = document.createElement('router-outlet');
        //   this.node.newDiv.setAttribute('id', 'route');
        //   console.log(this.node.newDiv)
        // }
        // else {
        //   this.node.newDiv = document.createElement('ext-' + this.xtype);
        // }
        this.node.newDiv = document.createElement('ext-' + this.xtype);
        for (var i = 0; i < this.properties.length; i++) {
            var property = this.properties[i];
            if (this[property] !== undefined) {
                //o[property] = this[property];
                // why does this need to be done??
                if (property != 'fullscreen' && property != 'xtype') {
                    // var propertyVal = '';
                    //   if (typeof this[property] == 'string') {
                    //       propertyVal = this[property];
                    //   }
                    //   else {
                    //       propertyVal = JSON.stringify(this[property]);
                    //       // if (property == 'store') {
                    //       //   propertyVal = this[property];
                    //       // }
                    //       // else {
                    //       //   propertyVal = JSON.stringify(this[property]);
                    //       //   //propertyVal = JsonStringifySafe(this[property]);
                    //       // }
                    //   }
                    //this.node.newDiv.setAttribute(property, propertyVal);
                    if (typeof this[property] == 'function') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'function');
                    }
                    else if (typeof this[property] == 'object') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'object');
                    }
                    else {
                        this.node.newDiv.setAttribute(property, this[property]);
                    }
                }
            }
        }
        var me = this;
        this.eventnames.forEach(function (eventname) {
            me.node.newDiv.addEventListener(eventname, function (event) {
                //me[eventname].emit(event.detail);
                if (me[eventname] != false) {
                    me[eventname].emit(event.detail);
                }
            });
        });
        if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
            //console.log('parent not ext')
            //this.node.parentNode.appendChild(this.newDiv);
            this.node.after(this.node.newDiv);
            //EngBase.rootNode = this.newDiv
        }
        else {
            //console.log('parent is ext')
            //console.dir(this)
            //console.dir(EngBase.rootNode)
            //this.parentNode.newDiv.appendChild(this.newDiv);
            //this.node.parentNode.nextSibling.appendChild(this.newDiv);
            this.node.parentNode.newDiv.appendChild(this.node.newDiv);
            //EngBase.rootNode.appendChild(this.newDiv);
        }
        // console.log(this.vc)
        // console.log(this.vc._data.renderElement)
        // console.log(this.vc._data.renderElement.parentNode)
        // if (this.vc._data.renderElement.parentNode != null) {
        //     console.log('removing')
        //     this.vc._data.renderElement.parentNode.removeChild(this.vc._data.renderElement)
        // }
        //this.node.insertAdjacentElement('beforebegin', this.newDiv);
    }
    baseAfterViewInit() {
        var me = this;
        this._extitems.toArray().forEach(item => {
            //console.log(item.nativeElement)
            //var el = Ext.get(item.nativeElement);
            me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
        });
        // //console.log(this.xtype)
        // //console.log(this.childComponents)
        // //console.log(this._viewchildComponents)
        // //console.log(this._extitems)
        // if (this._extitems != undefined) {
        //     if (this._extitems.length == 1) {
        //         // var router = document.createElement('router-outlet');
        //         // router.setAttribute('id', 'route');
        //         // this.newDiv.appendChild(router);
        //         var el = Ext.get(this._extitem.nativeElement);
        //         console.dir(this)
        //         console.dir(el)
        //         console.log(this.newDiv)
        //         //var widget = document.createElement('ext-' + 'widget');
        //         //widget['element'] = el;
        //         //widget.setAttribute('element', el);
        //         //var widget = document.createElement('ext-' + 'panel');
        //         //widget.setAttribute('title', 'hi');
        //         this.newDiv.appendChild(el.dom);
        //         //this.node.after(el)
        //         //console.dir(el)
        //         //var w = Ext.create({xtype:'widget', element: el});
        //         //this.addTheChild(A.ext, w, null);
        //     }
        // }
    }
    // newCreateProps(properties) {
    //     //console.log('store prop')
    //     //console.log(this.store)
    //     let listenersProvided = false;
    //     var o = {};
    //     o['xtype'] = this.xtype;
    //     if (this['config'] !== {}) {
    //         Ext.apply(o, this['config']);
    //     }
    //     if (true === this['fitToParent']) {
    //         o['height']='100%'
    //     }
    //     for (var i = 0; i < properties.length; i++) {
    //         var property = properties[i]
    //         //if (this.getAttribute(property) !== null) {
    //         if (this[property] !== null) {
    //             if (property == 'handler') {
    //                 o[property] = this[property];
    //             }
    //             // else if ((o['xtype'] === 'cartesian' || o['xtype'] === 'polar') && property === 'layout') {
    //             // }
    //             else if (property == 'listeners' && this[property] != undefined) {
    //                 o[property] = this[property];
    //                 listenersProvided = true;
    //             }
    //             else if (this[property] != undefined &&
    //                 property != 'listeners' &&
    //                 property != 'config' &&
    //                 property != 'handler' &&
    //                 property != 'fitToParent') {
    //                 //props[property] = property[prop];
    //                 //console.log('here??')
    //                 //console.log(property)
    //                 //o[property] = filterProp(this.getAttribute(property), property, this);
    //                 o[property] = this[property]
    //             }
    //             // else {
    //             //     o[property] = filterProp(this.getAttribute(property));
    //             // }
    //         }
    //         // if (!listenersProvided) {
    //         //     o.listeners = {};
    //         //     var me = this;
    //         //     this.events.forEach(function (event, index, array) {
    //         //         me.setEvent(event,o,me)
    //         //     })
    //         // }
    //     }
    //     this.A.o = o;
    //     //console.log(o)
    // }
    baseOnChanges(changes) {
        for (let propName in changes) {
            let val = changes[propName].currentValue;
            if (this.node.newDiv != undefined) {
                var propertyVal = '';
                if (typeof val == 'string') {
                    propertyVal = val;
                }
                else {
                    propertyVal = JSON.stringify(val);
                }
                this.node.newDiv.setAttribute(propName, propertyVal);
            }
        }
    }
    baseOnDestroy() {
        try {
            if (this.node.parentNode != undefined) {
                if (this.node.parentNode.newDiv != undefined) {
                    this.node.parentNode.newDiv.removeChild(this.node.newDiv);
                }
            }
        }
        catch (e) {
            console.log(e.toString());
        }
    }
}
tslib_1.__decorate([
    ContentChild('extitem', { static: false })
], EngBase.prototype, "_extitem", void 0);
tslib_1.__decorate([
    ContentChildren('extitem')
], EngBase.prototype, "_extitems", void 0);
tslib_1.__decorate([
    ContentChildren(EngBase)
], EngBase.prototype, "_childComponents", void 0);
tslib_1.__decorate([
    ViewChildren(EngBase)
], EngBase.prototype, "_viewchildComponents", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvYW5ndWxhcmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsMERBQTBEO0FBRzVELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUxQixNQUFNLE9BQU8sT0FBTztJQThCaEIsWUFDSSxJQUFTLEVBQ1QsYUFBa0IsRUFDbEIsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsRUFBRztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3Qix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFYixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVM7WUFDdkMsd0JBQXdCO1lBQ3hCLDZDQUE2QztZQUM3QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUE5QkQsSUFBSSxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUE7U0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQTZCRCxVQUFVO1FBQ1IsMkJBQTJCO1FBRTNCLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsNEJBQTRCO1FBQzVCLGdFQUFnRTtRQUNoRSxrREFBa0Q7UUFDbEQsa0NBQWtDO1FBQ2xDLElBQUk7UUFDSixTQUFTO1FBQ1Qsb0VBQW9FO1FBQ3BFLElBQUk7UUFJSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5QiwrQkFBK0I7Z0JBQy9CLGtDQUFrQztnQkFDbEMsSUFBSSxRQUFRLElBQUksWUFBWSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7b0JBRW5ELHdCQUF3QjtvQkFDeEIsNkNBQTZDO29CQUM3QyxzQ0FBc0M7b0JBQ3RDLE1BQU07b0JBQ04sV0FBVztvQkFDWCxzREFBc0Q7b0JBRXRELHNDQUFzQztvQkFDdEMsMkNBQTJDO29CQUMzQyxhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsMkRBQTJEO29CQUMzRCxnRUFBZ0U7b0JBQ2hFLGFBQWE7b0JBRWIsTUFBTTtvQkFDSix1REFBdUQ7b0JBQ3ZELElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFFO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7cUJBQ3JEO3lCQUNJLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxFQUFFO3dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ25EO3lCQUNJO3dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQ3pEO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUN2QyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxLQUFLO2dCQUN0RCxtQ0FBbUM7Z0JBQ25DLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3pELCtCQUErQjtZQUMvQixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxnQ0FBZ0M7U0FDbkM7YUFDSTtZQUNELDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsK0JBQStCO1lBQy9CLGtEQUFrRDtZQUNsRCw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFELDRDQUE0QztTQUMvQztRQUNELHVCQUF1QjtRQUN2QiwyQ0FBMkM7UUFDM0Msc0RBQXNEO1FBQ3RELHdEQUF3RDtRQUN4RCw4QkFBOEI7UUFDOUIsc0ZBQXNGO1FBQ3RGLElBQUk7UUFDSiw4REFBOEQ7SUFDbEUsQ0FBQztJQUVDLGlCQUFpQjtRQUNiLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3JDLGlDQUFpQztZQUNqQyx1Q0FBdUM7WUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO1FBS0YsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QywyQ0FBMkM7UUFDM0MsZ0NBQWdDO1FBRWhDLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFHeEMsbUVBQW1FO1FBQ25FLGlEQUFpRDtRQUNqRCw4Q0FBOEM7UUFFOUMseURBQXlEO1FBQ3pELDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLG9FQUFvRTtRQUNwRSxvQ0FBb0M7UUFDcEMsZ0RBQWdEO1FBQ2hELG1FQUFtRTtRQUNuRSxnREFBZ0Q7UUFDaEQsMkNBQTJDO1FBQzNDLGdDQUFnQztRQUVoQyw0QkFBNEI7UUFDNUIsK0RBQStEO1FBQy9ELDhDQUE4QztRQUM5QyxRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFFRCwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUUvQixtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLFFBQVE7SUFFUiwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixvREFBb0Q7SUFDcEQsdUNBQXVDO0lBQ3ZDLHdEQUF3RDtJQUN4RCx5Q0FBeUM7SUFFekMsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFFaEIsNkdBQTZHO0lBQzdHLG1CQUFtQjtJQUNuQixpRkFBaUY7SUFDakYsZ0RBQWdEO0lBQ2hELDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLCtDQUErQztJQUMvQyxzREFBc0Q7SUFDdEQsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQywyRkFBMkY7SUFDM0YsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUVoQix3QkFBd0I7SUFDeEIsNEVBQTRFO0lBQzVFLG1CQUFtQjtJQUNuQixZQUFZO0lBRVosdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsc0VBQXNFO0lBQ3RFLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLElBQUk7SUFFSixhQUFhLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDMUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsRUFBRTtvQkFDMUIsV0FBVyxHQUFHLEdBQUcsQ0FBQztpQkFDbkI7cUJBQ0k7b0JBQ0gsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDdEQ7U0FDSjtJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSTtZQUNGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsT0FBTSxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQzFCO0lBQ0gsQ0FBQztDQUNKO0FBL1ArQztJQUEzQyxZQUFZLENBQUMsU0FBUyxFQUFDLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFDO3lDQUFlO0FBQzlCO0lBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7MENBQTJCO0FBQzVCO0lBQXpCLGVBQWUsQ0FBQyxPQUFPLENBQUM7aURBQXNDO0FBQ3hDO0lBQXRCLFlBQVksQ0FBQyxPQUFPLENBQUM7cURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgLy9pbXBvcnQgKiBhcyBKc29uU3RyaW5naWZ5U2FmZSBmcm9tICdqc29uLXN0cmluZ2lmeS1zYWZlJ1xuXG5cbmNvbnN0IEV4dCA9IHdpbmRvd1snRXh0J107XG5cbmV4cG9ydCBjbGFzcyBFbmdCYXNlIHtcbiAgICAvL3N0YXRpYyByb290Tm9kZTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgZXh0OiBhbnlcbiAgICBuZXdEaXY6IGFueVxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICAvL2V2ZW50czogYW55XG4gICAgQTogYW55O1xuICAgIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIG5vZGVOYW1lOiBhbnlcbiAgICBld2NDaGlsZHJlbjogYW55XG4gICAgcmF3Q2hpbGRyZW46IGFueVxuICAgIGhhc1BhcmVudDogYW55XG4gICAgcGFyZW50VHlwZTogYW55XG4gICAgY2hpbGRyZW46IGFueVxuICAgIGxhc3Q6IGFueVxuICAgIHB1YmxpYyB2YzogYW55O1xuICAgIGV2ZW50bmFtZXM6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBAVmlld0NoaWxkcmVuKEVuZ0Jhc2UpIF92aWV3Y2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xuICAgICAgICBpZiAodGhpcy5fY2hpbGRDb21wb25lbnRzID09IHVuZGVmaW5lZCkgeyByZXR1cm4gW119XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBlUmVmOiBhbnksXG4gICAgICAgIGhvc3RDb21wb25lbnQ6IGFueSxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRzLFxuICAgICAgICBldmVudG5hbWVzLFxuICAgICAgICB2Yz9cbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBob3N0Q29tcG9uZW50O1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgICAgICAvL3RoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMgPSBldmVudG5hbWVzO1xuICAgICAgICB0aGlzLnZjID0gdmM7XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudG5hbWUpXG4gICAgICAgICAgICAvLyg8YW55PnRoaXMpW2V2ZW50bmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLkEgPSB7fTtcbiAgICAgICAgdGhpcy5BLnByb3BzID0ge31cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcbiAgICB9XG5cbiAgICBiYXNlT25Jbml0KCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnYmFzZU9uSW5pdCcpXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNbJ2h0bWwnXSlcbiAgICAgIC8vIGlmICh0aGlzWydodG1sJ10gPT0gJ3JvdXRlJykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnaW4gcm91dGUnKVxuICAgICAgLy8gICB0aGlzLm5vZGUubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncm91dGVyLW91dGxldCcpO1xuICAgICAgLy8gICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncm91dGUnKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2codGhpcy5ub2RlLm5ld0RpdilcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICB0aGlzLm5vZGUubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyB0aGlzLnh0eXBlKTtcbiAgICAgIC8vIH1cblxuXG5cbiAgICAgIHRoaXMubm9kZS5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArIHRoaXMueHR5cGUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy9vW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgICAvLyB3aHkgZG9lcyB0aGlzIG5lZWQgdG8gYmUgZG9uZT8/XG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSAhPSAnZnVsbHNjcmVlbicgJiYgcHJvcGVydHkgIT0gJ3h0eXBlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gdmFyIHByb3BlcnR5VmFsID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gICBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgcHJvcGVydHlWYWwgPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodGhpc1twcm9wZXJ0eV0pO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgLy8gaWYgKHByb3BlcnR5ID09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAvLyAgIHByb3BlcnR5VmFsID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgLy8gICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vICAgcHJvcGVydHlWYWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgLy8gICAvL3Byb3BlcnR5VmFsID0gSnNvblN0cmluZ2lmeVNhZmUodGhpc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgLy90aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgcHJvcGVydHlWYWwpO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ2Z1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgbWUubm9kZS5uZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAvL21lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICBpZiAobWVbZXZlbnRuYW1lXSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lLnN1YnN0cmluZygwLCAzKSAhPT0gJ0VYVCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgbm90IGV4dCcpXG4gICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgdGhpcy5ub2RlLmFmdGVyKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIC8vRW5nQmFzZS5yb290Tm9kZSA9IHRoaXMubmV3RGl2XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgaXMgZXh0JylcbiAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMpXG4gICAgICAgICAgLy9jb25zb2xlLmRpcihFbmdCYXNlLnJvb3ROb2RlKVxuICAgICAgICAgIC8vdGhpcy5wYXJlbnROb2RlLm5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50Tm9kZS5uZXh0U2libGluZy5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LmFwcGVuZENoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIC8vRW5nQmFzZS5yb290Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50KVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICAvLyBpZiAodGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZycpXG4gICAgICAvLyAgICAgdGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50KVxuICAgICAgLy8gfVxuICAgICAgLy90aGlzLm5vZGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIHRoaXMubmV3RGl2KTtcbiAgfVxuXG4gICAgYmFzZUFmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2V4dGl0ZW1zLnRvQXJyYXkoKS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLy92YXIgZWwgPSBFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hcHBlbmRDaGlsZChFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCkuZG9tKTtcbiAgICAgICAgfSlcblxuXG5cblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMueHR5cGUpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jaGlsZENvbXBvbmVudHMpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5fdmlld2NoaWxkQ29tcG9uZW50cylcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLl9leHRpdGVtcylcblxuICAgICAgICAvLyBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZXh0aXRlbXMubGVuZ3RoID09IDEpIHtcblxuXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHJvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3JvdXRlci1vdXRsZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvLyByb3V0ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdyb3V0ZScpO1xuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKHJvdXRlcik7XG5cbiAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSBFeHQuZ2V0KHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmRpcihlbClcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld0RpdilcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArICd3aWRnZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvL3dpZGdldFsnZWxlbWVudCddID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCdlbGVtZW50JywgZWwpO1xuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgJ3BhbmVsJyk7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICdoaScpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKGVsLmRvbSk7XG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLm5vZGUuYWZ0ZXIoZWwpXG5cbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUuZGlyKGVsKVxuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogZWx9KTtcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMuYWRkVGhlQ2hpbGQoQS5leHQsIHcsIG51bGwpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICB9XG5cbiAgICAvLyBuZXdDcmVhdGVQcm9wcyhwcm9wZXJ0aWVzKSB7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ3N0b3JlIHByb3AnKVxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RvcmUpXG4gICAgLy8gICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgbyA9IHt9O1xuICAgIC8vICAgICBvWyd4dHlwZSddID0gdGhpcy54dHlwZTtcblxuICAgIC8vICAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgLy8gICAgICAgICBFeHQuYXBwbHkobywgdGhpc1snY29uZmlnJ10pO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAvLyAgICAgICAgIG9bJ2hlaWdodCddPScxMDAlJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXVxuICAgIC8vICAgICAgICAgLy9pZiAodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IG51bGwpIHtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PSAnaGFuZGxlcicpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBlbHNlIGlmICgob1sneHR5cGUnXSA9PT0gJ2NhcnRlc2lhbicgfHwgb1sneHR5cGUnXSA9PT0gJ3BvbGFyJykgJiYgcHJvcGVydHkgPT09ICdsYXlvdXQnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIC8vICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnbGlzdGVuZXJzJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnY29uZmlnJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnaGFuZGxlcicgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgIC8vICAgICAgICAgICAgICAgICAvL3Byb3BzW3Byb3BlcnR5XSA9IHByb3BlcnR5W3Byb3BdO1xuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlPz8nKVxuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BlcnR5KVxuICAgIC8vICAgICAgICAgICAgICAgICAvL29bcHJvcGVydHldID0gZmlsdGVyUHJvcCh0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSksIHByb3BlcnR5LCB0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBvW3Byb3BlcnR5XSA9IGZpbHRlclByb3AodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIC8vIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICBvLmxpc3RlbmVycyA9IHt9O1xuICAgIC8vICAgICAgICAgLy8gICAgIHZhciBtZSA9IHRoaXM7XG4gICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4LCBhcnJheSkge1xuICAgIC8vICAgICAgICAgLy8gICAgICAgICBtZS5zZXRFdmVudChldmVudCxvLG1lKVxuICAgIC8vICAgICAgICAgLy8gICAgIH0pXG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5BLm8gPSBvO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG8pXG4gICAgLy8gfVxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsID0gJyc7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wZXJ0eVZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYXNlT25EZXN0cm95KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSlcbiAgICAgIH1cbiAgICB9XG59XG5cblxuIl19