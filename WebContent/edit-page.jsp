    <%@ page language="java" contentType="text/html; charset=UTF-8"
             pageEncoding="UTF-8"%>
        <%@ taglib prefix="s" uri="/struts-tags" %>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd" "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,  initial-scale=1">
    <title>Edit page</title>

    <!-- jQuery -->
    <script src="scripts/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="scripts/jquery-ui.js" type="text/javascript"></script>

    <script src="custom/edit-page/script/main.js" type="text/javascript"></script>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Material CSS -->
    <link rel="stylesheet"
          href="node_modules/material-components-web/dist/material-components-web.css">

    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

    <link rel="stylesheet" href="custom/edit-page/css/main.css" >
</head>
<body class="mdc-typography">
<div style="display:none;" id="book-id-get">
    <s:property value="bookID" />
</div>

<div id="top-bar-container">
    <div id="top-bar-shadow">

    </div>
    <div id="top-bar">
        <span class="mdc-typography--display2">Booknd.site</span>
        <img class="avatar" src="custom/index-page/img/avatar-default.jpeg"/>
    </div>
</div>

<div id="outer-container">

    <div id="info-card-container">
        <div id="info-card" class="card">
            <div id="book-info">
                <div id="book-cover-container">
                    <img src="images/defaultCover.jpg" id="info-book-cover"/>
                </div>
                <h3 class="book-name mdc-typography--display3">书名</h3>
                <h2 class="book-writer mdc-typography--display2">作者名</h2>
                <p class="publisher mdc-typography--headline">出版社</p>
                <p class="publish-date mdc-typography--headline">出版日期</p>
                <p class="isbn mdc-typography--headline">ISBN:</p>
                <p class="price mdc-typography--display4">￥</p>
            </div>
            <div id="book-intro">
                <h3 class="title">简介</h3>
                <p class="content">
                    书籍简介
                </p>
            </div>
            <div id="writer-intro">
                <div id="writer-info-container">
                    <div>
                        <img id="writer-avatar" src="authors/defaultAvatar.jpg"/>
                    </div>
                    <div>
                        <span id="author-name" class="book-writer">作者名</span><br>
                    </div>
                    <div>
                        <span id="writer-age">年龄： </span>
                        <span id="writer-country">城市： </span>
                    </div>
                </div>
                <p class="content">
                    作者简介
                </p>
            </div>
        </div>
    </div>
    <div id="book-edit-card" class="card">
        <button id="change-cover" class="mdc-button" data-mdc-auto-init="MDCRipple" >更换封面</button>
        <button id="switch-author-edit" class="mdc-button" data-mdc-auto-init="MDCRipple" >编辑作者</button>
        <button class="mdc-button upload" data-mdc-auto-init="MDCRipple" >提交书籍</button>
        <input type="file" name="img" id="img-input" style="display:none;" accept="image/png, image/jpeg">
        <div class="mdc-textfield">
            <input type="text" id="book-name" class="mdc-textfield__input" placeholder="书名">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="publish-date" class="mdc-textfield__input" placeholder="出版日期">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="isbn" class="mdc-textfield__input" placeholder="ISBN">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="publisher" class="mdc-textfield__input" placeholder="出版社">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="price" class="mdc-textfield__input" placeholder="价格">
        </div>
        <div class="mdc-textfield mdc-textfield--multiline">
            <textarea type="text" id="book-intro-edit" class="mdc-textfield__input" placeholder="简介" rows="7" cols="40"></textarea>
        </div>
        <div class="help-bubbles">
            <div class="help-bubble book-name-bubble">
                <div class="help-text">
                    不超过30个字符
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble publisher-bubble">
                <div class="help-text">
                    不超过30个字符
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble publish-date-bubble">
                <div class="help-text">
                    格式如：1998/06/09
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble isbn-bubble">
                <div class="help-text">
                    ISBN-10 or ISBN-13
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble price-bubble">
                <div class="help-text">
                    不超过三位数
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble book-intro-bubble">
                <div class="help-text">
                    不超过1024个字符
                </div>
                <div class="triangle"></div>
            </div>
        </div>
    </div>
    <div id="author-edit-card" class="card">
        <button id="change-avatar" class="mdc-button" data-mdc-auto-init="MDCRipple" >更换头像</button>
        <button id="switch-book-edit" class="mdc-button" data-mdc-auto-init="MDCRipple" >编辑书籍</button>
        <button class="mdc-button upload" data-mdc-auto-init="MDCRipple" >提交书籍</button>
        <input type="file" name="img" id="avatar-input" style="display:none;" accept="image/png, image/jpeg">
        <div class="mdc-textfield">
            <input type="text" id="writer-name-input" class="mdc-textfield__input" placeholder="作者">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="writer-age-input" class="mdc-textfield__input" placeholder="年龄">
        </div>
        <div class="mdc-textfield">
            <input type="text" id="writer-country-input" class="mdc-textfield__input" placeholder="城市">
        </div>
        <div class="mdc-textfield mdc-textfield--multiline">
            <textarea type="text" id="writer-intro-edit" class="mdc-textfield__input" placeholder="作者信息" rows="7" cols="40"></textarea>
        </div>
        <div class="help-bubbles">
            <div class="help-bubble writer-name-bubble">
                <div class="help-text">
                    不超过30个字符
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble writer-age-bubble">
                <div class="help-text">
                    不超过三位数
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble writer-country-bubble">
                <div class="help-text">
                    不超过30个字符
                </div>
                <div class="triangle"></div>
            </div>
            <div class="help-bubble writer-intro-bubble">
                <div class="help-text">
                    不超过1024个字符
                </div>
                <div class="triangle"></div>
            </div>
        </div>

        <div id="recommend-container" style="display: none">
        </div>
        <div id="recommend-mother" class="recommend-author" style="display: none">
            无该作者记录，将创建作者
        </div>
    </div>
</div>

<div></div>

<div id="log-container">
    <div class="custom-log card">
    </div>
</div>

<script src="node_modules/material-components-web/dist/material-components-web.js"></script>
<script>mdc.autoInit()</script>
</body>
</html>