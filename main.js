/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/create.js":
/*!***************************!*\
  !*** ./modules/create.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./modules/crud.js\");\n/* harmony import */ var _crud2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud2.js */ \"./modules/crud2.js\");\n\n\n\nconst createTodo = (item, todoListss, todoUl) => {\n  const itemContainer = document.createElement('li');\n  itemContainer.className = 'todo';\n  itemContainer.draggable = true;\n\n  itemContainer.addEventListener('dragstart', (e) => {\n    itemContainer.classList.add('draggable');\n    itemContainer.style.opacity = 0.4;\n    e.dataTransfer.effectAllowed = 'move';\n    e.dataTransfer.setData('text/html', e.target.innerHTML);\n  });\n\n  itemContainer.addEventListener('dragend', () => {\n    itemContainer.style.opacity = 1;\n    itemContainer.classList.remove('draggable');\n  });\n\n  todoUl.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    const draggable = document.querySelector('.draggable');\n    const afterElement = (0,_crud2_js__WEBPACK_IMPORTED_MODULE_1__.getDragAfetrElement)(todoUl, e.clientY);\n    if (afterElement === null) {\n      todoUl.appendChild(draggable);\n    } else {\n      todoUl.insertBefore(draggable, afterElement);\n    }\n  });\n\n  const itemForm = document.createElement('form');\n  itemForm.className = 'todo_form';\n  const todoTitle = document.createElement('input');\n  todoTitle.className = 'todo_title';\n  todoTitle.value = item.description;\n  todoTitle.disabled = item.disabled;\n  const checkBox = document.createElement('input');\n  checkBox.type = 'checkbox';\n  checkBox.checked = item.completed;\n  checkBox.className = 'checkbox';\n  checkBox.addEventListener('click', () => {\n    (0,_crud2_js__WEBPACK_IMPORTED_MODULE_1__.selectTodo)(checkBox, todoTitle, item, itemContainer);\n  });\n  const option = document.createElement('span');\n  option.className = 'material-symbols-outlined';\n  option.innerText = item.icon;\n  option.style.cursor = option.innerText === 'more_vert' ? 'move' : 'pointer';\n\n  const div = document.createElement('div');\n  div.appendChild(checkBox);\n  div.appendChild(todoTitle);\n  div.className = 'todo_right';\n  itemForm.appendChild(div);\n  itemContainer.appendChild(itemForm);\n  itemContainer.appendChild(option);\n\n  itemForm.addEventListener('click', (e) => {\n    const el = e.target.type;\n    if (el === 'more_vert' || el === 'checkbox') {\n      return;\n    }\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(todoTitle, item.id, itemForm, option, itemContainer, todoListss);\n  });\n\n  todoUl.appendChild(itemContainer);\n\n  option.addEventListener('click', (e) => {\n    const el = e.target;\n    if (el.textContent === 'more_vert') {\n      return;\n    }\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(item.id, itemContainer, todoListss);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://todolist-project/./modules/create.js?");

/***/ }),

/***/ "./modules/crud.js":
/*!*************************!*\
  !*** ./modules/crud.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"idReset\": () => (/* binding */ idReset),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n// reset todo id\nconst idReset = (lists) => {\n  lists.forEach((todo, ind) => {\n    todo.id = ind + 1;\n  });\n};\n\n// logic to delete a single todo\nconst deleteTodo = (id, itemContainer, todoListss) => {\n  const newTodos = todoListss.filter((item) => item.id !== id);\n  localStorage.setItem('todos', JSON.stringify(newTodos));\n  if (itemContainer.parentNode) {\n    itemContainer.parentNode.removeChild(itemContainer);\n  }\n};\n\n// logic to update the the description of a todo\nconst updateTodo = (\n  input,\n  id,\n  itemForm,\n  option,\n  itemContainer,\n  todoListss,\n) => {\n  input.disabled = false;\n  input.focus();\n  itemContainer.style.background = 'rgb(224, 224, 149)';\n  todoListss.forEach((todo) => {\n    todo.icon = 'more_vert';\n    if (todo.id === id) {\n      todo.disabled = false;\n      if (todo.disabled === false) {\n        todo.icon = 'delete';\n        option.innerText = todo.icon;\n        option.style.cursor = 'pointer';\n        itemForm.addEventListener('submit', (e) => {\n          e.preventDefault();\n          todo.description = input.value;\n          input.disabled = true;\n          todo.icon = 'more_vert';\n          option.innerText = 'more_vert';\n          itemContainer.style.background = 'none';\n          localStorage.setItem('todos', JSON.stringify(todoListss));\n        });\n      }\n    } else {\n      todo.disabled = true;\n    }\n  });\n};\n\n\n//# sourceURL=webpack://todolist-project/./modules/crud.js?");

/***/ }),

/***/ "./modules/crud2.js":
/*!**************************!*\
  !*** ./modules/crud2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCompletedTodos\": () => (/* binding */ deleteCompletedTodos),\n/* harmony export */   \"getDragAfetrElement\": () => (/* binding */ getDragAfetrElement),\n/* harmony export */   \"idReset\": () => (/* binding */ idReset),\n/* harmony export */   \"selectTodo\": () => (/* binding */ selectTodo)\n/* harmony export */ });\n// reset todo id\nconst idReset = (lists) => {\n  lists.forEach((todo, ind) => {\n    todo.id = ind + 1;\n  });\n};\n\n// logic to delete all completed todos\nconst deleteCompletedTodos = (todoListss, todoUl) => {\n  const newTodos = todoListss.filter((item) => item.completed !== true);\n  idReset(newTodos);\n  localStorage.setItem('todos', JSON.stringify(newTodos));\n\n  const elements = [...todoUl.children];\n  elements.forEach((ele) => {\n    if (ele.id === 'completed') {\n      ele.remove();\n    }\n  });\n};\n\n// functionality to mark a todo as completed\nconst selectTodo = (checkBox, todoTitle, item, itemContainer) => {\n  itemContainer.id = 'completed';\n  if (checkBox.checked) {\n    todoTitle.style.textDecoration = 'line-through';\n    item.completed = true;\n  } else {\n    todoTitle.style.textDecoration = 'none';\n    item.completed = false;\n  }\n};\n\n// functionality for drag and drop\n\nconst getDragAfetrElement = (container, y) => {\n  const draggableElements = [\n    ...container.querySelectorAll('.todo:not(.draggable)'),\n  ];\n  return draggableElements.reduce(\n    (closest, child) => {\n      const box = child.getBoundingClientRect();\n      const offset = y - box.top - box.height / 2;\n      if (offset < 0 && offset > closest.offset) {\n        return { offset, element: child };\n      }\n      return closest;\n    },\n    { offset: Number.NEGATIVE_INFINITY },\n  ).element;\n};\n\n\n//# sourceURL=webpack://todolist-project/./modules/crud2.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  border: 1px solid #efefef;\\r\\n  width: 50%;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  display: flex;\\r\\n  border: 1px solid #eee;\\r\\n  padding: 5px 10px;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo_right {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  align-items: center;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.add_todo {\\r\\n  width: 100%;\\r\\n  padding: 10px 10px;\\r\\n  box-sizing: border-box;\\r\\n  border: 1px solid #eee;\\r\\n  font-style: italic;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.add_todo:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.header h1 {\\r\\n  font-size: 1.4rem;\\r\\n  font-weight: 900;\\r\\n  color: rgb(99, 98, 98);\\r\\n}\\r\\n\\r\\n.todo_title {\\r\\n  margin: 0;\\r\\n  color: rgb(41, 40, 40);\\r\\n  font-weight: 400;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  flex: 1;\\r\\n  height: max-content;\\r\\n  background-color: inherit;\\r\\n  padding: 10px 5px;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.todo_form {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.todo_title:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  height: 1.5rem;\\r\\n  width: 1.5rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.options {\\r\\n  content: '\\\\2807';\\r\\n  font-size: 100px;\\r\\n}\\r\\n\\r\\n#delete_icon {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n  font-size: 1.1rem;\\r\\n  color: gray;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-size: 2rem;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.header .material-symbols-outlined {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.over {\\r\\n  border: 3px dotted #666;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"todo\": () => (/* binding */ todo),\n/* harmony export */   \"todoListss\": () => (/* binding */ todoListss),\n/* harmony export */   \"todoUl\": () => (/* binding */ todoUl)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/create.js */ \"./modules/create.js\");\n/* harmony import */ var _modules_crud2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/crud2.js */ \"./modules/crud2.js\");\n\n\n\n\nconst form = document.getElementById('form');\nconst todo = document.querySelector('.add_todo');\nconst todoUl = document.getElementById('todoList');\nconst todoListss = JSON.parse(localStorage.getItem('todos')) || [];\nconst deleteButton = document.getElementById('clear_button');\n\n// functionality to clear all the todos\ndeleteButton.addEventListener('click', () => {\n  (0,_modules_crud2_js__WEBPACK_IMPORTED_MODULE_2__.deleteCompletedTodos)(todoListss, todoUl);\n});\n\nclass NewTodo {\n  constructor(description) {\n    this.description = description;\n    this.id = todoListss.length + 1;\n  }\n\n  add = () => {\n    const item = {\n      id: this.id,\n      description: this.description,\n      completed: false,\n      disabled: true,\n      icon: 'more_vert',\n    };\n    (0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, todoListss, todoUl);\n    todoListss.push(item);\n  };\n}\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const newTodo = new NewTodo(todo.value);\n  newTodo.add();\n  localStorage.setItem('todos', JSON.stringify(todoListss));\n  form.reset();\n});\n\nconst displayTodos = () => {\n  todoListss.forEach((todo, ind) => {\n    todo.id = ind + 1;\n    (0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo, todoListss, todoUl);\n  });\n};\n\n// localStorage.removeItem('todos');\n\nwindow.addEventListener('load', () => {\n  displayTodos();\n  return false;\n});\n\n\n//# sourceURL=webpack://todolist-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;