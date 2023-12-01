function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import express from "express";
import { MONGO_COLLECTIONS } from "../common/common.js";
import { generateImage, generatePrompt, getMongoData } from "../services/services.js";
import { createAboutPrompt } from "../utils/utils.js";
var router = express.Router();
router.get("/workExperience", function() {
    var _ref = _async_to_generator(function(_req, res) {
        var results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getMongoData([
                            MONGO_COLLECTIONS.WORKEXPERIENCE
                        ])
                    ];
                case 1:
                    results = _state.sent();
                    res.send(results).status(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(_req, res) {
        return _ref.apply(this, arguments);
    };
}());
router.get("/education", function() {
    var _ref = _async_to_generator(function(_req, res) {
        var results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getMongoData([
                            MONGO_COLLECTIONS.EDUCATION
                        ])
                    ];
                case 1:
                    results = _state.sent();
                    res.send(results).status(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(_req, res) {
        return _ref.apply(this, arguments);
    };
}());
router.get("/default", function() {
    var _ref = _async_to_generator(function(_req, res) {
        var results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getMongoData([
                            MONGO_COLLECTIONS.DEFAULT
                        ])
                    ];
                case 1:
                    results = _state.sent();
                    res.send(results).status(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(_req, res) {
        return _ref.apply(this, arguments);
    };
}());
router.post("/about", function() {
    var _ref = _async_to_generator(function(req, res) {
        var aboutParams, data, prompt, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    aboutParams = req.body;
                    return [
                        4,
                        getMongoData([
                            "education",
                            "workExperience",
                            "skills",
                            "history"
                        ])
                    ];
                case 1:
                    data = _state.sent();
                    prompt = createAboutPrompt(_object_spread({
                        data: data,
                        type: "about"
                    }, aboutParams));
                    return [
                        4,
                        generatePrompt(prompt, "about")
                    ];
                case 2:
                    text = _state.sent();
                    res.send(text).status(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
router.post("/home", function() {
    var _ref = _async_to_generator(function(req, res) {
        var aboutParams, data, prompt, words, image;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    aboutParams = req.body;
                    return [
                        4,
                        getMongoData([
                            "education",
                            "workExperience",
                            "skills",
                            "history"
                        ])
                    ];
                case 1:
                    data = _state.sent();
                    prompt = createAboutPrompt(_object_spread({
                        data: data,
                        type: "home"
                    }, aboutParams));
                    return [
                        4,
                        generatePrompt(prompt, "about")
                    ];
                case 2:
                    words = _state.sent();
                    return [
                        4,
                        generateImage(words)
                    ];
                case 3:
                    image = _state.sent();
                    res.send({
                        words: words,
                        image: image
                    }).status(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
export default router;

//# sourceMappingURL=routes.js.map