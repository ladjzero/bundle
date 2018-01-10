"use strict";
exports.__esModule = true;
var SimpleMessage = /** @class */ (function () {
    function SimpleMessage() {
        this.listeners = [];
    }
    SimpleMessage.prototype.matchIntent = function (i) {
        return ['msg', 'msg:on', 'msg:off'].indexOf(i.action) > -1;
    };
    SimpleMessage.prototype.onIntent = function (i) {
        switch (i.action) {
            case 'msg':
                this.listeners.forEach(function (l) { return l(i.data); });
                break;
            case 'msg:on':
                this.listeners.push(i.data);
            default:
                {
                    var index = this.listeners.indexOf(i.data);
                    if (index > -1)
                        this.listeners.splice(index, 1);
                }
                return Promise.resolve();
        }
    };
    return SimpleMessage;
}());
exports["default"] = SimpleMessage;
