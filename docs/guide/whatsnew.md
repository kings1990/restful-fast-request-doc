# 最新变化

## v2.0.6
* Fix "Light files should have PSI only in one project"
* 添加对json的语法支持
* 添加对PATCH的支持
* 添加API保存时候存入对应的模块分组的支持
* 修复响应中null值不输出的问题
* 添加对JAX-RS的支持
* 最新功能展示


在不影响使用的情况下,有时候会经常弹出*Light files should have PSI only in one project*.2.0.6版本得到修复

::: tip json语法支持
![json](../.vuepress/public/img/json.png)
:::

::: tip 添加API保存时候存入对应的模块分组的支持
![apiGroup](../.vuepress/public/img/apiGroup.gif)

同时模块支持快速搜索
![apiGroup](../.vuepress/public/img/moduleSearch.gif)
:::

::: tip JAX-RS的支持
![apiGroup](../.vuepress/public/img/jaxrs.gif)
:::

::: tip 最新功能展示  
只会展示一次
![apiGroup](../.vuepress/public/img/whatsnew.png)
:::

## v2.0.5

* JSON内置编辑器支持
* 修复全选参数框隐藏问题
* 修复API回显Headers参数异常
* 优化了请求进度条显示

## v2.0.4

* 修复因response内容过道导致的界面错乱问题
* Response json超长显示优化
* 优化图标尺寸
* 中文文档迁移至gitee

## v2.0.3

* 删除API的时候增加了确认
* 添加了参数全选反选的功能
* 修复诸如【@RequestParam(value="address[]") Set address】的参数解析
* 修复快速添加headers界面错乱

## v2.0.2

* 修复项目多开情况下A请求显示到B项目
* 修复@ResponseBody修饰的数组与集合解析问题
* 修复List参数无泛型解析问题
* 添加对文件下载的支持
* 发送请求时展示进度条
* 全新的document,点击工具栏doc图标
* 一些优化

## v2.0.1

* rename from Fast Request to Restful Fast Request
* Json、Form URL-Encoded、Multipart Tab合并减小工具窗口宽度
* 修复全局配置下修改配置报错
* 将get、post、delete、put图标添加到保存的请求
* 保存的请求支持更多搜索策略
* tab重命名collection->APIs
* YearMonth解析支持

## v2.0.0

* 支持请求的存储
* 支持参数可选
* 优化了UI
* 修复了一些bug