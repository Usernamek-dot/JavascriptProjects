"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var estructuras_1 = require("./estructuras");
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    // ?
    function Bear(name, kind) {
        return _super.call(this, name) || this;
    }
    Bear.prototype.move = function (distance) {
        console.log("Oso Moviendo");
        _super.prototype.move.call(this, distance);
    };
    return Bear;
}(estructuras_1.Animal));
//instanciar
var bearOne = new Bear("fulano");
console.log(bearOne.move(9));
