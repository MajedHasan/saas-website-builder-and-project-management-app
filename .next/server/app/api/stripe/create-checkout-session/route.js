"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/stripe/create-checkout-session/route";
exports.ids = ["app/api/stripe/create-checkout-session/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_majidhasan_Desktop_learning_websites_saas_website_builder_original_src_app_api_stripe_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/stripe/create-checkout-session/route.ts */ \"(rsc)/./src/app/api/stripe/create-checkout-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stripe/create-checkout-session/route\",\n        pathname: \"/api/stripe/create-checkout-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/stripe/create-checkout-session/route\"\n    },\n    resolvedPagePath: \"/Users/majidhasan/Desktop/learning/websites/saas-website-builder-original/src/app/api/stripe/create-checkout-session/route.ts\",\n    nextConfigOutput,\n    userland: _Users_majidhasan_Desktop_learning_websites_saas_website_builder_original_src_app_api_stripe_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/stripe/create-checkout-session/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJpcGUlMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3RyaXBlJTJGY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdHJpcGUlMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hamlkaGFzYW4lMkZEZXNrdG9wJTJGbGVhcm5pbmclMkZ3ZWJzaXRlcyUyRnNhYXMtd2Vic2l0ZS1idWlsZGVyLW9yaWdpbmFsJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hamlkaGFzYW4lMkZEZXNrdG9wJTJGbGVhcm5pbmclMkZ3ZWJzaXRlcyUyRnNhYXMtd2Vic2l0ZS1idWlsZGVyLW9yaWdpbmFsJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZFO0FBQzFKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicHJvZGlnaWVzLXBsdXJhLz9iZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYWppZGhhc2FuL0Rlc2t0b3AvbGVhcm5pbmcvd2Vic2l0ZXMvc2Fhcy13ZWJzaXRlLWJ1aWxkZXItb3JpZ2luYWwvc3JjL2FwcC9hcGkvc3RyaXBlL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdHJpcGUvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdHJpcGUvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N0cmlwZS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tYWppZGhhc2FuL0Rlc2t0b3AvbGVhcm5pbmcvd2Vic2l0ZXMvc2Fhcy13ZWJzaXRlLWJ1aWxkZXItb3JpZ2luYWwvc3JjL2FwcC9hcGkvc3RyaXBlL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N0cmlwZS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/stripe/create-checkout-session/route.ts":
/*!*************************************************************!*\
  !*** ./src/app/api/stripe/create-checkout-session/route.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/stripe */ \"(rsc)/./src/lib/stripe/index.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\nasync function POST(req) {\n    const { subAccountConnectAccId, prices, subaccountId } = await req.json();\n    const origin = req.headers.get(\"origin\");\n    if (!subAccountConnectAccId || !prices.length) return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Stripe Account Id or price id is missing\", {\n        status: 400\n    });\n    if (false) {}\n    // Not needed unless we want to send payments to this account.\n    //CHALLENGE Transfer money to a connected\n    // const agencyIdConnectedAccountId = await db.subAccount.findUnique({\n    //   where: { id: subaccountId },\n    //   include: { Agency: true },\n    // })\n    const subscriptionPriceExists = prices.find((price)=>price.recurring);\n    // if (!agencyIdConnectedAccountId?.Agency.connectAccountId) {\n    //   console.log('Agency is not connected')\n    //   return NextResponse.json({ error: 'Agency account is not connected' })\n    // }\n    try {\n        const session = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n            line_items: prices.map((price)=>({\n                    price: price.productId,\n                    quantity: 1\n                })),\n            ...subscriptionPriceExists && {\n                subscription_data: {\n                    metadata: {\n                        connectAccountSubscriptions: \"true\"\n                    },\n                    application_fee_percent: +\"1\"\n                }\n            },\n            ...!subscriptionPriceExists && {\n                payment_intent_data: {\n                    metadata: {\n                        connectAccountPayments: \"true\"\n                    },\n                    application_fee_amount: +\"2\" * 100\n                }\n            },\n            mode: subscriptionPriceExists ? \"subscription\" : \"payment\",\n            ui_mode: \"embedded\",\n            redirect_on_completion: \"never\"\n        }, {\n            stripeAccount: subAccountConnectAccId\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            clientSecret: session.client_secret\n        }, {\n            headers: {\n                \"Access-Control-Allow-Origin\": origin || \"*\",\n                \"Access-Control-Allow-Methods\": \"GET,OPTIONS,PATCH,DELETE,POST,PUT\",\n                \"Access-Control-Allow-Headers\": \"Content-Type, Authorization\"\n            }\n        });\n    } catch (error) {\n        console.log(\"\\uD83D\\uDD34 Error\", error);\n        //@ts-ignore\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: error.message\n        });\n    }\n}\nasync function OPTIONS(request) {\n    const allowedOrigin = request.headers.get(\"origin\");\n    const response = new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](null, {\n        status: 200,\n        headers: {\n            \"Access-Control-Allow-Origin\": allowedOrigin || \"*\",\n            \"Access-Control-Allow-Methods\": \"GET, POST, PUT, DELETE, OPTIONS\",\n            \"Access-Control-Allow-Headers\": \"Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version\",\n            \"Access-Control-Max-Age\": \"86400\"\n        }\n    });\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdHJpcGUvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNxQztBQUNLO0FBRW5DLGVBQWVFLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUNKQyxzQkFBc0IsRUFDdEJDLE1BQU0sRUFDTkMsWUFBWSxFQUNiLEdBSUcsTUFBTUgsSUFBSUksSUFBSTtJQUVsQixNQUFNQyxTQUFTTCxJQUFJTSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUMvQixJQUFJLENBQUNOLDBCQUEwQixDQUFDQyxPQUFPTSxNQUFNLEVBQzNDLE9BQU8sSUFBSVYsa0ZBQVlBLENBQUMsNENBQTRDO1FBQ2xFVyxRQUFRO0lBQ1Y7SUFDRixJQUNFLEtBRStDLEVBQy9DLEVBR0Q7SUFFRCw4REFBOEQ7SUFDOUQseUNBQXlDO0lBQ3pDLHNFQUFzRTtJQUN0RSxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLEtBQUs7SUFFTCxNQUFNUywwQkFBMEJoQixPQUFPaUIsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLFNBQVM7SUFDdEUsOERBQThEO0lBQzlELDJDQUEyQztJQUMzQywyRUFBMkU7SUFDM0UsSUFBSTtJQUVKLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU16QiwrQ0FBTUEsQ0FBQzBCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQ25EO1lBQ0VDLFlBQVl4QixPQUFPeUIsR0FBRyxDQUFDLENBQUNQLFFBQVc7b0JBQ2pDQSxPQUFPQSxNQUFNUSxTQUFTO29CQUN0QkMsVUFBVTtnQkFDWjtZQUVBLEdBQUlYLDJCQUEyQjtnQkFDN0JZLG1CQUFtQjtvQkFDakJDLFVBQVU7d0JBQUVDLDZCQUE2QjtvQkFBTztvQkFDaERDLHlCQUNFLENBQUN2QixHQUFxRDtnQkFDMUQ7WUFDRixDQUFDO1lBRUQsR0FBSSxDQUFDUSwyQkFBMkI7Z0JBQzlCZ0IscUJBQXFCO29CQUNuQkgsVUFBVTt3QkFBRUksd0JBQXdCO29CQUFPO29CQUMzQ0Msd0JBQ0UsQ0FBQzFCLEdBQTRDLEdBQUc7Z0JBQ3BEO1lBQ0YsQ0FBQztZQUVEMkIsTUFBTW5CLDBCQUEwQixpQkFBaUI7WUFDakRvQixTQUFTO1lBQ1RDLHdCQUF3QjtRQUMxQixHQUNBO1lBQUVDLGVBQWV2QztRQUF1QjtRQUcxQyxPQUFPSCxrRkFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUNFcUMsY0FBY25CLFFBQVFvQixhQUFhO1FBQ3JDLEdBQ0E7WUFDRXBDLFNBQVM7Z0JBQ1AsK0JBQStCRCxVQUFVO2dCQUN6QyxnQ0FBZ0M7Z0JBQ2hDLGdDQUFnQztZQUNsQztRQUNGO0lBRUosRUFBRSxPQUFPWSxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQyxzQkFBWUM7UUFDeEIsWUFBWTtRQUNaLE9BQU9uQixrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVhLE9BQU9BLE1BQU0wQixPQUFPO1FBQUM7SUFDbEQ7QUFDRjtBQUVPLGVBQWVDLFFBQVFDLE9BQWdCO0lBQzVDLE1BQU1DLGdCQUFnQkQsUUFBUXZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQzFDLE1BQU13QyxXQUFXLElBQUlqRCxrRkFBWUEsQ0FBQyxNQUFNO1FBQ3RDVyxRQUFRO1FBQ1JILFNBQVM7WUFDUCwrQkFBK0J3QyxpQkFBaUI7WUFDaEQsZ0NBQWdDO1lBQ2hDLGdDQUNFO1lBQ0YsMEJBQTBCO1FBQzVCO0lBQ0Y7SUFFQSxPQUFPQztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicHJvZGlnaWVzLXBsdXJhLy4vc3JjL2FwcC9hcGkvc3RyaXBlL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzPzMyMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYidcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJ0AvbGliL3N0cmlwZSdcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3Qge1xuICAgIHN1YkFjY291bnRDb25uZWN0QWNjSWQsXG4gICAgcHJpY2VzLFxuICAgIHN1YmFjY291bnRJZCxcbiAgfToge1xuICAgIHN1YkFjY291bnRDb25uZWN0QWNjSWQ6IHN0cmluZ1xuICAgIHByaWNlczogeyByZWN1cnJpbmc6IGJvb2xlYW47IHByb2R1Y3RJZDogc3RyaW5nIH1bXVxuICAgIHN1YmFjY291bnRJZDogc3RyaW5nXG4gIH0gPSBhd2FpdCByZXEuanNvbigpXG5cbiAgY29uc3Qgb3JpZ2luID0gcmVxLmhlYWRlcnMuZ2V0KCdvcmlnaW4nKVxuICBpZiAoIXN1YkFjY291bnRDb25uZWN0QWNjSWQgfHwgIXByaWNlcy5sZW5ndGgpXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1N0cmlwZSBBY2NvdW50IElkIG9yIHByaWNlIGlkIGlzIG1pc3NpbmcnLCB7XG4gICAgICBzdGF0dXM6IDQwMCxcbiAgICB9KVxuICBpZiAoXG4gICAgIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQVRGT1JNX1NVQlNDUklQVElPTl9QRVJDRU5UIHx8XG4gICAgIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQVRGT1JNX09ORVRJTUVfRkVFIHx8XG4gICAgIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQVRGT1JNX0FHRU5ZX1BFUkNFTlRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ1ZBTFVFUyBET05UIEVYSVRTJylcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZlZXMgZG8gbm90IGV4aXN0JyB9KVxuICB9XG5cbiAgLy8gTm90IG5lZWRlZCB1bmxlc3Mgd2Ugd2FudCB0byBzZW5kIHBheW1lbnRzIHRvIHRoaXMgYWNjb3VudC5cbiAgLy9DSEFMTEVOR0UgVHJhbnNmZXIgbW9uZXkgdG8gYSBjb25uZWN0ZWRcbiAgLy8gY29uc3QgYWdlbmN5SWRDb25uZWN0ZWRBY2NvdW50SWQgPSBhd2FpdCBkYi5zdWJBY2NvdW50LmZpbmRVbmlxdWUoe1xuICAvLyAgIHdoZXJlOiB7IGlkOiBzdWJhY2NvdW50SWQgfSxcbiAgLy8gICBpbmNsdWRlOiB7IEFnZW5jeTogdHJ1ZSB9LFxuICAvLyB9KVxuXG4gIGNvbnN0IHN1YnNjcmlwdGlvblByaWNlRXhpc3RzID0gcHJpY2VzLmZpbmQoKHByaWNlKSA9PiBwcmljZS5yZWN1cnJpbmcpXG4gIC8vIGlmICghYWdlbmN5SWRDb25uZWN0ZWRBY2NvdW50SWQ/LkFnZW5jeS5jb25uZWN0QWNjb3VudElkKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0FnZW5jeSBpcyBub3QgY29ubmVjdGVkJylcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0FnZW5jeSBhY2NvdW50IGlzIG5vdCBjb25uZWN0ZWQnIH0pXG4gIC8vIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKFxuICAgICAge1xuICAgICAgICBsaW5lX2l0ZW1zOiBwcmljZXMubWFwKChwcmljZSkgPT4gKHtcbiAgICAgICAgICBwcmljZTogcHJpY2UucHJvZHVjdElkLFxuICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB9KSksXG5cbiAgICAgICAgLi4uKHN1YnNjcmlwdGlvblByaWNlRXhpc3RzICYmIHtcbiAgICAgICAgICBzdWJzY3JpcHRpb25fZGF0YToge1xuICAgICAgICAgICAgbWV0YWRhdGE6IHsgY29ubmVjdEFjY291bnRTdWJzY3JpcHRpb25zOiAndHJ1ZScgfSxcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uX2ZlZV9wZXJjZW50OlxuICAgICAgICAgICAgICArcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUExBVEZPUk1fU1VCU0NSSVBUSU9OX1BFUkNFTlQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLi4uKCFzdWJzY3JpcHRpb25QcmljZUV4aXN0cyAmJiB7XG4gICAgICAgICAgcGF5bWVudF9pbnRlbnRfZGF0YToge1xuICAgICAgICAgICAgbWV0YWRhdGE6IHsgY29ubmVjdEFjY291bnRQYXltZW50czogJ3RydWUnIH0sXG4gICAgICAgICAgICBhcHBsaWNhdGlvbl9mZWVfYW1vdW50OlxuICAgICAgICAgICAgICArcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUExBVEZPUk1fT05FVElNRV9GRUUgKiAxMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgbW9kZTogc3Vic2NyaXB0aW9uUHJpY2VFeGlzdHMgPyAnc3Vic2NyaXB0aW9uJyA6ICdwYXltZW50JyxcbiAgICAgICAgdWlfbW9kZTogJ2VtYmVkZGVkJyxcbiAgICAgICAgcmVkaXJlY3Rfb25fY29tcGxldGlvbjogJ25ldmVyJyxcbiAgICAgIH0sXG4gICAgICB7IHN0cmlwZUFjY291bnQ6IHN1YkFjY291bnRDb25uZWN0QWNjSWQgfVxuICAgIClcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgY2xpZW50U2VjcmV0OiBzZXNzaW9uLmNsaWVudF9zZWNyZXQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IG9yaWdpbiB8fCAnKicsXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULE9QVElPTlMsUEFUQ0gsREVMRVRFLFBPU1QsUFVUJyxcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIEF1dGhvcml6YXRpb24nLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygn8J+UtCBFcnJvcicsIGVycm9yKVxuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIE9QVElPTlMocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBhbGxvd2VkT3JpZ2luID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnb3JpZ2luJylcbiAgY29uc3QgcmVzcG9uc2UgPSBuZXcgTmV4dFJlc3BvbnNlKG51bGwsIHtcbiAgICBzdGF0dXM6IDIwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogYWxsb3dlZE9yaWdpbiB8fCAnKicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzpcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSwgQXV0aG9yaXphdGlvbiwgWC1DU1JGLVRva2VuLCBYLVJlcXVlc3RlZC1XaXRoLCBBY2NlcHQsIEFjY2VwdC1WZXJzaW9uLCBDb250ZW50LUxlbmd0aCwgQ29udGVudC1NRDUsIERhdGUsIFgtQXBpLVZlcnNpb24nLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLU1heC1BZ2UnOiAnODY0MDAnLFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG4iXSwibmFtZXMiOlsic3RyaXBlIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsInN1YkFjY291bnRDb25uZWN0QWNjSWQiLCJwcmljZXMiLCJzdWJhY2NvdW50SWQiLCJqc29uIiwib3JpZ2luIiwiaGVhZGVycyIsImdldCIsImxlbmd0aCIsInN0YXR1cyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QTEFURk9STV9TVUJTQ1JJUFRJT05fUEVSQ0VOVCIsIk5FWFRfUFVCTElDX1BMQVRGT1JNX09ORVRJTUVfRkVFIiwiTkVYVF9QVUJMSUNfUExBVEZPUk1fQUdFTllfUEVSQ0VOVCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN1YnNjcmlwdGlvblByaWNlRXhpc3RzIiwiZmluZCIsInByaWNlIiwicmVjdXJyaW5nIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJsaW5lX2l0ZW1zIiwibWFwIiwicHJvZHVjdElkIiwicXVhbnRpdHkiLCJzdWJzY3JpcHRpb25fZGF0YSIsIm1ldGFkYXRhIiwiY29ubmVjdEFjY291bnRTdWJzY3JpcHRpb25zIiwiYXBwbGljYXRpb25fZmVlX3BlcmNlbnQiLCJwYXltZW50X2ludGVudF9kYXRhIiwiY29ubmVjdEFjY291bnRQYXltZW50cyIsImFwcGxpY2F0aW9uX2ZlZV9hbW91bnQiLCJtb2RlIiwidWlfbW9kZSIsInJlZGlyZWN0X29uX2NvbXBsZXRpb24iLCJzdHJpcGVBY2NvdW50IiwiY2xpZW50U2VjcmV0IiwiY2xpZW50X3NlY3JldCIsIm1lc3NhZ2UiLCJPUFRJT05TIiwicmVxdWVzdCIsImFsbG93ZWRPcmlnaW4iLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/stripe/create-checkout-session/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/stripe/index.ts":
/*!*********************************!*\
  !*** ./src/lib/stripe/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stripe: () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY ?? \"\", {\n    apiVersion: \"2023-10-16\",\n    appInfo: {\n        name: \"Plura App\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N0cmlwZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUVwQixNQUFNQyxTQUFTLElBQUlELDhDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixJQUFJLElBQUk7SUFDcEVDLFlBQVk7SUFDWkMsU0FBUztRQUNQQyxNQUFNO1FBQ05DLFNBQVM7SUFDWDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwcm9kaWdpZXMtcGx1cmEvLi9zcmMvbGliL3N0cmlwZS9pbmRleC50cz8wNjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSA/PyAnJywge1xuICBhcGlWZXJzaW9uOiAnMjAyMy0xMC0xNicsXG4gIGFwcEluZm86IHtcbiAgICBuYW1lOiAnUGx1cmEgQXBwJyxcbiAgICB2ZXJzaW9uOiAnMC4xLjAnLFxuICB9LFxufSlcblxuXG4iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/stripe/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/define-data-property"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmajidhasan%2FDesktop%2Flearning%2Fwebsites%2Fsaas-website-builder-original&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();