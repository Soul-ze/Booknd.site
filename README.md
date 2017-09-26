# Booknd.site

目前来说只是一个本地可用且暂无非攻击性输入BUG的简单书库。

使用的工具有：

+ 饱经风霜的jQuery(承担了直接操作DOM以及各种AJAX、伪组件封装、动画等沉重任任务，不过就是动画的确渲染起来的确不如人意，以后看看其他框架的实际渲染情况吧)
+ 样式库Bootstrap的轻度多分辨率列控制使用
+ 不存在的G家MaterialDesign的robot font/button/input/textaera样式(所以其他的可见样式基本上都是手动CSS撸出来的)
+ 谜一样的Struts2(2.5.x.x版本)，可能是最后一次写javaWeb了,java的确学的太菜了(有需要看Struts json使用样例的还是可以看看)
+  Mysql57
+ Sm.ms 目前还算是开放免费的图床API

目录里上传了完整的前端后端以及数据库导入文件，需要使用的话需要对数据库类中的连接信息自行修改。

## Web demo

### Index page
![index-page](https://raw.githubusercontent.com/RheaBubbles/Booknd.site/master/WebContent/prototype-demo/index-page.jpg)

### Result page
![result-page](https://raw.githubusercontent.com/RheaBubbles/Booknd.site/master/WebContent/prototype-demo/index-result-page.jpg)

### Info card
![info-card](https://raw.githubusercontent.com/RheaBubbles/Booknd.site/master/WebContent/prototype-demo/index-page-info-card.jpg)

### Home page
![home-page](https://raw.githubusercontent.com/RheaBubbles/Booknd.site/master/WebContent/prototype-demo/home-page.jpg)

### Edit page
![edit-page](https://raw.githubusercontent.com/RheaBubbles/Booknd.site/master/WebContent/prototype-demo/edit-page.jpg)


## REPORT

### 2017/09/25

目前完成度仅限于：
1. 在本地环境上运行No BUG
2. 在云端部署上遇到JAVAFILE IO文件流bug,无法对上传的文件进行保存和访问。

Lab 2 可能目前来说就只做到这个程度了，后续将会将此仓库转型为三人组项目的仓库。

### 2017/09/26

1. 从棺材板里出来把图片上传BUG给解决了，换成了API调用图片返回URL方式进行加载。
2. 上传了数据库的导入文件(虽然Eclipse导入项目的各种迷之问题估计都够折腾老半天了)。
3. jQuery纯手动操作DOM树的确还是有点太累了，自行伪封装组件可能用的还不够深入，基本上没有用到JS对象的构建，可能用对象去保存一些缓存数据并进行操作可能会更加优雅整洁一点，之后准备走一趟VueJS->AngularJS，对前端框架进行一个初步认识。

### 三人组项目环境配置计划

+ 前端框架 Vue.js 
+ 后端框架 Node.js (javaweb struts还是太难用了,可能技术太菜)
+ 爬虫机制采用python(可能是) 
+ 数据库仍然是Mysql(Nosql暂时不采用，移动端可能会用到)
+ 自动化运维(暂时先不考虑该部分，根据项目需求进行一定程度的跟进)

