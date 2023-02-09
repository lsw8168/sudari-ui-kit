(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[463],{"./stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sizes:()=>Sizes,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_jest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/jest/dist/esm/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/testing-library/dist/esm/index.js"),ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/ui/dist/es/index.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"ui/Button",component:ui__WEBPACK_IMPORTED_MODULE_2__.zx,tags:["autodocs"],argTypes:{children:{control:"text"},onClick:{action:!0},size:{control:{type:"select"},options:["sm","md","lg"]}},args:{children:"Click!",size:"md"}},Default={name:"Default",play:({args,canvasElement})=>{const button=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByRole("button");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(button).toBeInTheDocument(),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(button),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(button).toHaveFocus(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(args.onClick).toHaveBeenCalledTimes(1),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(canvasElement),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(button).not.toHaveFocus()}};var _ref={name:"1h3hore",styles:"display:flex;align-items:flex-end;column-gap:1rem"};const Sizes={name:"Sizes",render:args=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{css:_ref},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,args,"Small"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,_extends({},args,{size:"md"}),"Medium"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,_extends({},args,{size:"lg"}),"Large")),argTypes:{children:{table:{disable:!0}},size:{table:{disable:!0}}}};var _ref2={name:"1h3hore",styles:"display:flex;align-items:flex-end;column-gap:1rem"};const Variants={name:"Variants",render:args=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{css:_ref2},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,_extends({},args,{variant:"filled"}),"Filled"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,_extends({},args,{variant:"outlined"}),"Outlined"),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(ui__WEBPACK_IMPORTED_MODULE_2__.zx,_extends({},args,{variant:"text"}),"Text")),argTypes:{children:{table:{disable:!0}},variant:{table:{disable:!0}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Default",\n  play: ({\n    args,\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole("button");\n    expect(button).toBeInTheDocument();\n    userEvent.click(button);\n    expect(button).toHaveFocus();\n    expect(args.onClick).toHaveBeenCalledTimes(1);\n    userEvent.click(canvasElement);\n    expect(button).not.toHaveFocus();\n  }\n}',...Default.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  name: "Sizes",\n  render: args => <div tw="flex items-end gap-x-4">\n      <Button {...args}>Small</Button>\n      <Button {...args} size="md">\n        Medium\n      </Button>\n      <Button {...args} size="lg">\n        Large\n      </Button>\n    </div>,\n  argTypes: {\n    children: {\n      table: {\n        disable: true\n      }\n    },\n    size: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}',...Sizes.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  name: "Variants",\n  render: args => <div tw="flex items-end gap-x-4">\n      <Button {...args} variant="filled">\n        Filled\n      </Button>\n      <Button {...args} variant="outlined">\n        Outlined\n      </Button>\n      <Button {...args} variant="text">\n        Text\n      </Button>\n    </div>,\n  argTypes: {\n    children: {\n      table: {\n        disable: true\n      }\n    },\n    variant: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}',...Variants.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Sizes","Variants"]},"?c95a":()=>{}}]);