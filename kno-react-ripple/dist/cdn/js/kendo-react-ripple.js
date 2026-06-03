/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("@progress/kno-ripple"),require("@progress/kno-react-common")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","@progress/kno-ripple","@progress/kno-react-common"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).KendoReactRipple={},e.React,e.PropTypes,e.KendoRipple,e.KendoReactCommon)}(this,function(e,t,s,r,o){"use strict";function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach(function(s){if("default"!==s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}}),t.default=e,Object.freeze(t)}var i=n(t);const c=Object.freeze({name:"@progress/kno-react-ripple",productName:"knoReact",productCode:"KNOUIREACT",productCodes:["KNOUIREACT"],publishDate:0,version:"15.0.0",licensingDocsUrl:""}),p=class extends i.PureComponent{constructor(e){super(e),this._element=null,this.removeListeners=()=>{},this.showLicenseWatermark=!1,this.registerListeners=()=>{const e=this._element;this.removeListeners();const t=r.register(e,[{selector:".k-button:not(li)"},{selector:".k-list>.k-item,.k-list>.k-list-item",options:{global:!0}},{selector:".k-checkbox-label,.k-radio-label"},{selector:".k-checkbox,.k-radio",options:{events:["focusin","animationend","click"]}}]);this.removeListeners=t},this.showLicenseWatermark=!o.validatePackage(c,{component:"Ripple"}),this.licenseMessage=o.getLicenseMessage(c)}componentDidMount(){this.registerListeners()}componentDidUpdate(){const{disabled:e}=this.props;e?this.removeListeners():this.registerListeners()}componentWillUnmount(){this.removeListeners()}render(){const e=this.props.className?"k-ripple-container "+this.props.className:"k-ripple-container";return i.createElement("span",{className:e,ref:e=>{this._element=e}},this.props.children,this.showLicenseWatermark&&i.createElement(o.WatermarkOverlay,{message:this.licenseMessage}))}};p.propTypes={disabled:s.bool};let a=p;e.Ripple=a});
