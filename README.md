# 东北师范大学爱心超市系统2024 说明文档

## 环境
本项目为面向用户的前端部分，目前基于如下工具：
* Vue3
* Vite
* Vue Router
* Vuex
* Axios
* Stylus/Sass/Less
* pinia
## 组件库
* ElementPlus
* ArcoVue
* NaiveUI
* Varlet(移动端UI库)
### 移动端和桌面端适配方案
#### Varlet
在移动端，使用 postcss-px-to-viewport 方案进行适配。
在桌面端，使用 @varlet/touch-emulator 方案进行适配。

# 存在问题
-[ ] 解析ts时有一些神秘问题qwq
-[ ] postcss-px-to-viewport的引入一直失败//?