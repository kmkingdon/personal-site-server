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
import { OpenAI } from "openai";
import db from "../db/conn.js";
import { MONGO_COLLECTIONS } from "../common/common.js";
export var getMongoData = function() {
    var _ref = _async_to_generator(function(type) {
        var results, workExperience, workResults, education, eduResults, skills, skillsResults, history, historyResults, defaultData, defaultResults;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    results = {};
                    if (!type.includes(MONGO_COLLECTIONS.WORKEXPERIENCE)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        db === null || db === void 0 ? void 0 : db.collection("workExperience")
                    ];
                case 1:
                    workExperience = _state.sent();
                    return [
                        4,
                        workExperience === null || workExperience === void 0 ? void 0 : workExperience.find({}).toArray()
                    ];
                case 2:
                    workResults = _state.sent();
                    if (workResults) {
                        results = Object.assign(results, workResults[0]);
                    }
                    _state.label = 3;
                case 3:
                    if (!type.includes(MONGO_COLLECTIONS.EDUCATION)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        db === null || db === void 0 ? void 0 : db.collection(MONGO_COLLECTIONS.EDUCATION)
                    ];
                case 4:
                    education = _state.sent();
                    return [
                        4,
                        education === null || education === void 0 ? void 0 : education.find({}).toArray()
                    ];
                case 5:
                    eduResults = _state.sent();
                    if (eduResults) {
                        results = Object.assign(results, eduResults[0]);
                    }
                    _state.label = 6;
                case 6:
                    if (!type.includes(MONGO_COLLECTIONS.SKILLS)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        db === null || db === void 0 ? void 0 : db.collection(MONGO_COLLECTIONS.SKILLS)
                    ];
                case 7:
                    skills = _state.sent();
                    return [
                        4,
                        skills === null || skills === void 0 ? void 0 : skills.find({}).toArray()
                    ];
                case 8:
                    skillsResults = _state.sent();
                    if (skillsResults) {
                        results = Object.assign(results, skillsResults[0]);
                    }
                    _state.label = 9;
                case 9:
                    if (!type.includes(MONGO_COLLECTIONS.HISTORY)) return [
                        3,
                        12
                    ];
                    return [
                        4,
                        db === null || db === void 0 ? void 0 : db.collection(MONGO_COLLECTIONS.HISTORY)
                    ];
                case 10:
                    history = _state.sent();
                    return [
                        4,
                        history === null || history === void 0 ? void 0 : history.find({}).toArray()
                    ];
                case 11:
                    historyResults = _state.sent();
                    if (historyResults) {
                        results = Object.assign(results, historyResults[0]);
                    }
                    _state.label = 12;
                case 12:
                    if (!type.includes(MONGO_COLLECTIONS.DEFAULT)) return [
                        3,
                        15
                    ];
                    return [
                        4,
                        db === null || db === void 0 ? void 0 : db.collection(MONGO_COLLECTIONS.DEFAULT)
                    ];
                case 13:
                    defaultData = _state.sent();
                    return [
                        4,
                        defaultData === null || defaultData === void 0 ? void 0 : defaultData.find({}).toArray()
                    ];
                case 14:
                    defaultResults = _state.sent();
                    if (defaultResults) {
                        results = Object.assign(results, defaultResults[0]);
                    }
                    _state.label = 15;
                case 15:
                    return [
                        2,
                        results
                    ];
            }
        });
    });
    return function getMongoData(type) {
        return _ref.apply(this, arguments);
    };
}();
export var generatePrompt = function() {
    var _ref = _async_to_generator(function(prompt, type) {
        var configuration, format, openai, completion, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    configuration = {
                        apiKey: process.env.OPENAI_API_KEY
                    };
                    format = type === "about" ? {
                        type: "text"
                    } : {
                        type: "json_object"
                    };
                    openai = new OpenAI(configuration);
                    return [
                        4,
                        openai.chat.completions.create({
                            messages: [
                                {
                                    role: "user",
                                    content: prompt
                                }
                            ],
                            model: "gpt-3.5-turbo",
                            response_format: format
                        })
                    ];
                case 1:
                    completion = _state.sent();
                    text = completion.choices[0].message.content;
                    return [
                        2,
                        text
                    ];
            }
        });
    });
    return function generatePrompt(prompt, type) {
        return _ref.apply(this, arguments);
    };
}();
export var generateImage = function() {
    var _ref = _async_to_generator(function(prompt) {
        var configuration, openai, finalPrompt, image;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    configuration = {
                        apiKey: process.env.OPENAI_API_KEY
                    };
                    openai = new OpenAI(configuration);
                    finalPrompt = "In more abstracted or impressionistic style, without legible text, depict the ideas of these concepts: ".concat(JSON.stringify(prompt));
                    return [
                        4,
                        openai.images.generate({
                            model: "dall-e-3",
                            prompt: finalPrompt || "Software engineer, educator, artist",
                            n: 1,
                            size: "1024x1024"
                        })
                    ];
                case 1:
                    image = _state.sent();
                    return [
                        2,
                        image
                    ];
            }
        });
    });
    return function generateImage(prompt) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=services.js.map