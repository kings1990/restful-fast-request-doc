# FAQ

::: tip Question 1:About the console blocking the tool window
Answer:At present, when the tool window and console are visible at the same time, It does not support the display of tool windows prior to the console. So you can only adjust [view mode](https://www.jetbrains.com/help/idea/viewing-modes.html)
to control the view,Or use shortcut keys to quickly hide and show the console(shortcut:look at view->toolWindow->run/debug) to make all the content in the tool window visible。Of course, you can click to hide the Request part to see the Response  
:::

::: danger Question 2:Why the plugin doesn't respond
Answer:Please configure the relevant configuration according to the steps introduced in the first chapter first, and then click the icon  
:::

::: warning Question 3:idea freezes after clicking the icon
Answer:The entity class you designed is nested and recursive, the plugin does not support  
:::

::: tip Question 4:Where is the plugin configuration file  
答:Global configuration:Click on [reference](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) ,go to the directory of the corresponding version`xxx/options/fastRequest.xml`  
API collection configuration:`project -> .idea ->fastRequestCollection.xml`  
:::