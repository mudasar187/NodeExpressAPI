exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules\n */\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\ndotenv.config();\n/**\n * App Variables\n */\nif (!process.env.PORT) {\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\n/**\n *  App Configuration\n */\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\n/**\n * Server Activation\n */\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(function () { return server.close(); });\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};