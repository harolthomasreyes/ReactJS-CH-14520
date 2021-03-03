//https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEYHYEsC2YQG8BQwD2cIBcAnAV2H20IAp8BPABwFMBKTaafACwQgDpbHoAXnb0GGAL4Y2U9qgDWlFjLY482EAx4hsAc0oByEggAm2fUxmTxQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=true&timeTravel=true&sourceType=module&lineWrap=true&presets=env%2Ces2015%2Cenv&prettier=true&targets=&version=7.12.3&externalPlugins=

//ES6
class animal {
    constructor(type) {
        this.type = type
    }
    talk() {
        console.log('ruido')
    }
}


/*******************************************************************/
//ES5
"use strict";

function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var animal = /*#__PURE__*/ (function() {
    function animal(type) {
        _classCallCheck(this, animal);

        this.type = type;
    }

    _createClass(animal, [{
        key: "talk",
        value: function talk() {
            console.log("ruido");
        }
    }]);

    return animal;
})();