# FAQ

::: tip 问题1:关于控制台挡住工具窗口 
答:目前官方在工具窗口和控制台同时可见时,不支持工具窗口的显示优先于控制台,所以你只能通过调整[视图模式](https://www.jetbrains.com/help/idea/viewing-modes.html)
来控制,或者通过快捷键来快速隐藏和显示控制台(快捷键:view->toolWindow->run/debug可见快捷键)，使得工具窗口中的内容全部可见。当然你可以点击隐藏Request部分来看Response
:::

::: danger 问题2:为啥插件没反应
答:请优先按照第一章节介绍的使用步骤配置相关的配置,再点击图标
:::

::: warning 问题3:点击图标后idea卡死 
答:你设计的实体类嵌套递归,插件不支持
:::

::: tip 问题4:插件配置文件在哪  
答:全局配置:点击[参考](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) ,进入对应版本的目录`xxx/options/fastRequest.xml`  
API集合配置:`项目 -> .idea -> fastRequestCollection.xml`  

如果需要在不同idea之间同步配置  
1.快速导入配置 File->Manage IDE Setting->Import Setting/Export Setting  
2.同时将fastRequestCollection.xml复制进入.idea文件  
:::
