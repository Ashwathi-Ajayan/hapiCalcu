"use strict";
exports.__esModule = true;
var ImplCalculator = /** @class */ (function () {
    function ImplCalculator() {
    }
    ImplCalculator.prototype.add = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 0;
        num2.forEach(function (element) {
            result = result + element;
        });
        return result + num;
    };
    ImplCalculator.prototype.subtract = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 0;
        num2.forEach(function (element) {
            result = result - element;
        });
        return num + result;
    };
    ImplCalculator.prototype.divide = function (num, num2) {
        return num / num2;
    };
    ImplCalculator.prototype.multiply = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 1;
        num2.forEach(function (element) {
            result = result * element;
        });
        return result * num;
    };
    return ImplCalculator;
}());
exports.ImplCalculator = ImplCalculator;
