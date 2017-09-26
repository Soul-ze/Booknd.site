$().ready(function(){
    //检测当前页面是否有指定向的编辑页面
    //Yes 则加载指定书籍的书籍信息
    //No 则设置为添加书籍的模式

    var edit_mode = 0;
    var book_id = -1;
    //绑定输入更改状态同步到卡片
    var $info_card = $("#info-card");

    //书名
    {
        var book_name_input = $("#book-name");
        var book_name = $info_card.find(".book-name");
        var book_bubble = $(".book-name-bubble");
        var book_name_valid = 1;
        book_name_input.focus(function () {
            book_bubble.fadeIn(200);
        });
        book_name_input.blur(function () {
            if(book_name_valid == 1) {
                book_bubble.fadeOut(200);
            }
        });
        book_name_input.on('input propertychange',function () {
            var book_name_value = book_name_input.val();
            if(book_name_value != "") {
                //TODO 实现字体数不超过30但是超出显示情况的轮播功能
                book_name[0].innerText = book_name_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[!?,.！？，。 -]){1,30}$/;
                if (!patrn.exec(book_name_value)) {
                    book_name_valid = 0;
                    if(book_name_value.length > 30) {
                        WarningBubble(book_bubble,"超出字符数限制");
                    } else {
                        WarningBubble(book_bubble,"请勿输入非法字符");
                    }
                } else {
                    book_name_valid = 1;
                    CorrectBubble(book_bubble,"√");
                }
            } else {
                book_name_valid = 1;
                book_name[0].innerText = "书名";
                DefaultBubble(book_bubble,"不超过30个字符");
            }
        });
    }

    //出版社
    {
        var publisher_input = $("#publisher");
        var publisher = $info_card.find(".publisher");
        var publisher_bubble = $(".publisher-bubble");
        var publisher_valid = 1;
        publisher_input.focus(function () {
            publisher_bubble.fadeIn(200);
        });
        publisher_input.blur(function () {
            if(publisher_valid == 1) {
                publisher_bubble.fadeOut(200);
            }
        });
        publisher_input.on('input propertychange',function () {
            var publisher_value = publisher_input.val();
            if(publisher_value != "") {
                //TODO 实现字体数不超过30但是超出显示情况的轮播功能
                publisher[0].innerText = publisher_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[· ，,]){1,30}$/;
                if (!patrn.exec(publisher_value)) {
                    publisher_valid = 0;
                    if(publisher_value.length > 30) {
                        WarningBubble(publisher_bubble,"超出字符数限制");
                    } else {
                        WarningBubble(publisher_bubble,"请勿输入非法字符");
                    }
                } else {
                    publisher_valid = 1;
                    CorrectBubble(publisher_bubble,"√");
                }
            } else {
                publisher_valid = 1;
                publisher[0].innerText = "出版社"
                DefaultBubble(publisher_bubble, "不超过30个字符");
            }
        });
    }

    //出版日期
    {
        var publish_date_input =$("#publish-date");
        var publish_date = $info_card.find(".publish-date");
        var publish_date_bubble = $(".publish-date-bubble");
        var publish_date_valid = 1;
        publish_date_input.focus(function () {
            publish_date_bubble.fadeIn(200);
        });
        publish_date_input.blur(function () {
            if(publish_date_valid == 1) {
                publish_date_bubble.fadeOut(200);
            }
        });
        publish_date_input.on('input propertychange',function () {
            var publish_date_value = publisher_input.val();
            if(publish_date_value != "") {
                publish_date[0].innerText = publish_date_input.val();
                //TODO 书写date匹配
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[· ，,]){1,30}$/;
                if (!patrn.exec(publish_date_value)) {
                    publish_date_valid = 0;
                    WarningBubble(publish_date_bubble,"不符合格式规范");
                } else {
                    publish_date_valid = 1;
                    CorrectBubble(publish_date_bubble,"√");
                }
            } else {
                publish_date_valid = 1;
                publish_date[0].innerText = "出版日期"
                DefaultBubble(publish_date_bubble, "格式如：1998/06/09");
            }
        });
    }

    //ISBN
    {
        var isbn_input = $("#isbn");
        var isbn = $info_card.find(".isbn");
        var isbn_bubble = $(".isbn-bubble");
        var isbn_valid  = 1;
        isbn_input.focus(function () {
            isbn_bubble.fadeIn(200);
        });
        isbn_input.blur(function () {
            if(isbn_valid == 1) {
                isbn_bubble.fadeOut(200);
            }
        });
        isbn_input.on('input propertychange',function () {
            var isbn_value = isbn_input.val();
            if(isbn_value != "") {
                isbn[0].innerText = "ISBN:" + isbn_input.val();
                var patrn = /^([0-9]|[-]){1,20}$/;
                if (!patrn.exec(isbn_value)) {
                    isbn_valid = 0;
                    if(isbn_value.length<=20) {
                        WarningBubble(isbn_bubble,"请勿输入非法字符");
                    } else {
                        WarningBubble(isbn_bubble,"请输入国际标准ISBN码");
                    }
                } else {
                    isbn_valid = 1;
                    CorrectBubble(isbn_bubble,"√");
                }
            } else {
                isbn_valid = 1;
                isbn[0].innerText = "ISBN:";
                DefaultBubble(isbn_bubble, "ISBN-10 or ISBN-13");
            }
        });
    }

    //价格
    {
        var price_input =$("#price");
        var price = $info_card.find(".price");
        var price_bubble = $(".price-bubble");
        var price_valid = 1;
        price_input.focus(function () {
            price_bubble.fadeIn(200);
        });
        price_input.blur(function () {
            if(price_valid == 1) {
                price_bubble.fadeOut(200);
            }
        });
        price_input.on('input propertychange',function () {
            var price_value = price_input.val();
            if(price_value != "") {
                price[0].innerText = "￥" + price_input.val();
                var patrn = /^([0-9]){1,3}$/;
                if (!patrn.exec(price_value)) {
                    price_valid = 0;
                    if(price_value.length<=3) {
                        WarningBubble(price_bubble,"请勿输入非法字符");
                    } else {
                        WarningBubble(price_bubble,"这书是得多贵啊......");
                    }
                } else {
                    price_valid = 1;
                    CorrectBubble(price_bubble,"√");
                }
            } else {
                price_valid = 1;
                price[0].innerText = "￥";
                DefaultBubble(price_bubble, "不超过三位数");
            }
        });
    }

    //简介
    {
        var book_intro_input = $("#book-intro-edit");
        var book_intro = $info_card.find("#book-intro .content");
        var book_intro_bubble = $(".book-intro-bubble");
        var book_intro_valid = 1;
        book_intro_input.focus(function () {
            book_intro_bubble.fadeIn(200);
        });
        book_intro_input.blur(function () {
            if(book_intro_valid == 1) {
                book_intro_bubble.fadeOut(200);
            }
        });
        book_intro_input.on('input propertychange',function () {
            var book_intro_value = book_intro_input.val();
            if(book_intro_value != "") {
                book_intro[0].innerText = book_intro_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[!?,.;；！？，。 -/\r\n/g()（）《》、—‘’“”"']){1,1024}$/;
                if (!patrn.exec(book_intro_value)) {
                    book_intro_valid = 0;
                    if(book_intro_value.length<=1024) {
                        WarningBubble(book_intro_bubble,"请勿输入非法字符");
                    } else {
                        WarningBubble(book_intro_bubble,"请勿超过字符数限制");
                    }
                } else {
                    book_intro_valid = 1;
                    CorrectBubble(book_intro_bubble,"√");
                }
            } else {
                book_intro_valid = 1;
                book_intro[0].innerText = "书籍简介";
                DefaultBubble(book_intro_bubble, "不超过1024个字符");
            }
        });
    }

    //更换封面
    {
        var change_cover = $("#change-cover");
        var cover = $info_card.find("#book-cover");
        var cover_valid = 0;
        var frequency = -1;
        var uploadHASH = getRandomHash(5); //生成一个当前提交任务的HASH
        change_cover.click(function () {
            $("#img-input").trigger('click');
        });

        // 点击选择图片后进行图片预览显示
        $('#img-input').change(function(){
            if($('#img-input').val() != "") {
                var img = $("#img-input")[0].files[0];
                if(img.type != "image/jpeg" && img.type != "image/png"){
                    ShowLog("请选择正确文件");
                }
                else {
                    if(img.size >= 2*1024*1024) {
                        ShowLog("当前文件大小: " + (img.size/1024/1024).toFixed(2) + "MB,超出2MB");
                    }
                    else {
                        AjaxUploadImg();
                    }
                }
            }
        });

        function AjaxUploadImg() {
            var fd = new FormData();
            var img = $("#img-input")[0].files[0];
            //fd.append("fileTest", img);
            //fd.append("HASH",uploadHASH + frequency);
            fd.append("smfile",img);
            $.ajax({
                type: "post",
                url: "https://sm.ms/api/upload",
                data:fd,
                processData: false,
                cache: false,
                contentType: false,
                dataType: "json",
                beforeSend: function () {
                    ShowLog("封面上传中...");
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 出现错误的提醒
                    console.log("XMLHttpRequest.status: " + XMLHttpRequest.status);
                    console.log("XMLHttpRequest.readyState: " + XMLHttpRequest.readyState);
                    console.log("textStatus: " + textStatus);
                    ShowLog("封面上传失败<");
                },
                success: function(data, textStatus) {
                    //回调函数
                    if(data["code"] == "success"){
                        //上传成功
                        $("#info-book-cover")[0].src = data["data"]["url"];
                        cover_valid = 1;
                        ShowLog("封面上传完毕<");
                    }
                    else {
                        //上传失败
                        cover_valid = 0;
                        ShowLog("封面上传失败<");
                    }
                }
            });
        }
        $("#info-book-cover")[0].onload = function () {
            $(this).width(150);
        };
        
        function getRandomHash(size) {
            var hash="";
            var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C',
                'D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'];
            for(var i = 0; i < size ; i ++) {
                var id = Math.ceil(Math.random()*35);
                hash += chars[id];
            }
            return hash;
        }
    }

    //作者
    {
        var author_id = -1;
        var writer_name_input = $("#writer-name-input");
        var writer_name = $info_card.find(".book-writer");
        var writer_name_bubble = $(".writer-name-bubble");
        var writer_name_valid = 1;
        writer_name_input.focus(function () {
            writer_name_bubble.fadeIn(200);
            $recommend_container.fadeIn(200);
            resizeRecommend();
        });
        writer_name_input.blur(function () {
            if(writer_name_valid == 1) {
                writer_name_bubble.fadeOut(200);
            }
            if($(this).val() == "") {
                $recommend_container.animate({
                    height: "0px"
                },200);
                $recommend_container.empty();
            }
            $recommend_container.fadeOut(200);
        });

        writer_name_input.on('input propertychange',function () {
            var writer_name_value = writer_name_input.val();
            if(writer_name_value != "") {
                //TODO 实现字体数不超过30但是超出显示情况的轮播功能
                writer_name[0].innerText = writer_name_input.val();
                writer_name.eq(1)[0].innerText = writer_name_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[· ，,]){1,30}$/;
                if (!patrn.exec(writer_name_value)) {
                    writer_name_valid = 0;
                    if(writer_name_value.length > 30) {
                        WarningBubble(writer_name_bubble,"超出字符数限制");
                    } else {
                        WarningBubble(writer_name_bubble,"请勿输入非法字符");
                    }
                } else {
                    writer_name_valid = 1;
                    CorrectBubble(writer_name_bubble,"√");
                    $.ajax({
                        type: "post",
                        url: "AuthorBeforeSearch",
                        data: {
                            search: writer_name_value
                        },
                        dataType: "json",
                        success: function(data) {
                            var size = data["size"];
                            //Step 1 清空之前的容器内容以及保存的索引
                            var $container = $("#recommend-container");
                            $container.empty();
                            var $author_recommends = getAuthorRecommends(data);
                            //Step 2 对容器进行推荐作者数据封装对象注入DOM
                            for(var i = 0;i < size;i ++) {
                                $container.append($author_recommends[i]);
                            }
                            //Step 3 如果没有能匹配上的作者，则显示当前搜索模式
                            if(size == 0) {
                                var none_recommend = $("#recommend-mother").clone();
                                none_recommend.css("display","block");
                                $container.append(none_recommend);
                            }
                            resizeRecommend();
                        }
                    });
                    author_id = -1;
                }
            } else {
                writer_name_valid = 1;
                writer_name[0].innerText = "作者名";
                writer_name.eq(1)[0].innerText = "作者名";
                DefaultBubble(writer_name_bubble,"不超过30个字符");
            }
        });

        // Search recommend
        var $recommend_mother = $("#recommend-mother");
        var $recommend_container = $("#recommend-container");
        function getAuthorRecommends(data) {
            var size = data["size"];
            var $author_recommends = new Array(size);
            for(var i = 0;i < size;i ++) {
                var $author_recommend = $recommend_mother.clone();
                $author_recommend.css("display", "block");
                $author_recommend.attr("id", data["author" + i]["authorID"]);
                $author_recommend[0].innerText = data["author" + i]["NAME"];
                $author_recommend.on("click", function () {
                    recommendFuc($(this));
                });
                $author_recommends[i] = $author_recommend;
            }
            return $author_recommends;
        }
        function recommendFuc($this) {
            var current_input = writer_name_input;
            current_input.val($this[0].innerText);
            writer_name[0].innerText = $this[0].innerText;
            author_id = Number($this.attr("id"));
            $.ajax({
                type: "post",
                url: "GetAuthorInfo",
                data: {
                    authorID: author_id
                },
                dataType: "json",
                success: function(data) {
                    writer_intro[0].innerText = data["author"]["intro"];
                    writer_intro_input.val(data["author"]["intro"]);
                    $("#info-card #writer-avatar")[0].src = "authors/" + data["author"]["avatarURL"];
                    age[0].innerText = "年龄：" + data["author"]["authorAge"];
                    age_input.val(data["author"]["authorAge"]);
                    country[0].innerText = "城市：" + data["author"]["authorCountry"];
                    country_input.val(data["author"]["authorCountry"]);
                }
            });
        }
        function resizeRecommend() {
            $("#recommend-container").animate({
                height: ($("#recommend-container .recommend-author").length)*40 + "px"
            },200);
        }
    }

    //作者年龄
    {
        var age_input =$("#writer-age-input");
        var age = $("#writer-age");
        var age_bubble = $(".writer-age-bubble");
        var age_valid = 1;
        age_input.focus(function () {
            age_bubble.fadeIn(200);
        });
        age_input.blur(function () {
            if(age_valid == 1) {
                age_bubble.fadeOut(200);
            }
        });
        age_input.on('input propertychange',function () {
            var age_value = age_input.val();
            if(age_value != "") {
                age[0].innerText = "年龄：" + age_input.val();
                var patrn = /^([0-9]){1,3}$/;
                if (!patrn.exec(age_value)) {
                    age_valid = 0;
                    if(age_value.length<=3) {
                        WarningBubble(age_bubble,"请勿输入非法字符");
                    } else {
                        WarningBubble(age_bubble,"xuming大法?!");
                    }
                } else {
                    age_valid = 1;
                    CorrectBubble(age_bubble,"√");
                }
            } else {
                age_valid = 1;
                age[0].innerText = "年龄：";
                DefaultBubble(age_bubble, "不超过三位数");
            }
        });
    }

    //作者城市
    {
        var country_input = $("#writer-country-input");
        var country = $("#writer-country");
        var country_bubble = $(".writer-country-bubble");
        var country_valid = 1;
        country_input.focus(function () {
            country_bubble.fadeIn(200);
        });
        country_input.blur(function () {
            if(country_valid == 1) {
                country_bubble.fadeOut(200);
            }
        });
        country_input.on('input propertychange',function () {
            var country_value = country_input.val();
            if(country_value != "") {
                //TODO 实现字体数不超过30但是超出显示情况的轮播功能
                country[0].innerText = "城市：" + country_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[!?,.！？，。 -]){1,30}$/;
                if (!patrn.exec(country_value)) {
                    country_valid = 0;
                    if(country_value.length > 30) {
                        WarningBubble(country_bubble,"超出字符数限制");
                    } else {
                        WarningBubble(country_bubble,"请勿输入非法字符");
                    }
                } else {
                    country_valid = 1;
                    CorrectBubble(country_bubble,"√");
                }
            } else {
                country_valid = 1;
                country[0].innerText = "城市：";
                DefaultBubble(country_bubble,"不超过30个字符");
            }
        });
    }

    //作者信息
    {
        var writer_intro_input = $("#writer-intro-edit");
        var writer_intro = $info_card.find("#writer-intro .content");
        var writer_intro_bubble = $(".writer-intro-bubble");
        var writer_intro_valid = 1;
        writer_intro_input.focus(function () {
            writer_intro_bubble.fadeIn(200);
        });
        writer_intro_input.blur(function () {
            if(writer_intro_valid == 1) {
                writer_intro_bubble.fadeOut(200);
            }
        });
        writer_intro_input.on('input propertychange',function () {
            var writer_intro_value = writer_intro_input.val();
            if(writer_intro_value != "") {
                writer_intro[0].innerText = writer_intro_input.val();
                var patrn = /^([a-zA-Z0-9\u4e00-\u9fa5]|[!?,.;；！？，。 -/\r\n/g()（）《》、—‘’“”"']){1,1024}$/;
                if (!patrn.exec(writer_intro_value)) {
                    writer_intro_valid = 0;
                    if(writer_intro_value.length<=1024) {
                        WarningBubble(writer_intro_bubble,"请勿输入非法字符");
                    } else {
                        WarningBubble(writer_intro_bubble,"请勿超过字符数限制");
                    }
                } else {
                    writer_intro_valid = 1;
                    CorrectBubble(writer_intro_bubble,"√");
                }
            } else {
                writer_intro_valid = 1;
                writer_intro[0].innerText = "作者简介";
                DefaultBubble(writer_intro_bubble, "不超过1024个字符");
            }
        });
    }

    //作者头像更换
    {
        var change_avatar = $("#change-avatar");
        var avatar = $("#writer-avatar");
        var avatar_valid = 0;
        var avatar_frequency = -1;
        var avatarHASH = getRandomHash(5); //生成一个当前提交任务的HASH
        change_avatar.click(function () {
            $("#avatar-input").trigger('click');
        });

        // 点击选择图片后进行图片预览显示
        $('#avatar-input').change(function(){
            if($('#avatar-input').val() != "") {
                var img = $("#avatar-input")[0].files[0];
                if(img.type != "image/jpeg" && img.type != "image/png"){
                    ShowLog("请选择正确文件");
                }
                else {
                    if(img.size >= 2*1024*1024) {
                        ShowLog("当前文件大小: " + (img.size/1024/1024).toFixed(2) + "MB,超出2MB");
                    }
                    else {
                        AjaxUploadAvatar();
                    }
                }
            }
        });

        function AjaxUploadAvatar() {
            // 存储后返回在服务器位置上的URL
            // 赋值到图片SRC上
            /*
            avatar_frequency++;
            var fd = new FormData();
            var avatar =
            fd.append("fileTest", avatar);
            fd.append("HASH",avatarHASH + avatar_frequency);
            */
            var fd = new FormData();
            var img = $("#avatar-input")[0].files[0];
            fd.append("smfile",img);
            $.ajax({
                type: "post",
                url: "https://sm.ms/api/upload",
                data:fd,
                processData: false,
                cache: false,
                contentType: false,
                dataType: "json",
                beforeSend: function () {
                    ShowLog("头像上传中...");
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 出现错误的提醒
                    console.log("XMLHttpRequest.status: " + XMLHttpRequest.status);
                    console.log("XMLHttpRequest.readyState: " + XMLHttpRequest.readyState);
                    console.log("textStatus: " + textStatus);
                    ShowLog("封面上传失败<");
                    avatar_valid = 0;
                },
                success: function(data, textStatus) {
                    //回调函数
                    if(data["code"] == "success") {
                        $("#writer-avatar")[0].src = data["data"]["url"];
                        ShowLog("封面上传完毕<");
                        avatar_valid = 1;
                    }
                    else {
                        ShowLog("封面上传失败<");
                        avatar_valid = 0;
                    }
                }
            });
        }
        $("#writer-avatar")[0].onload = function () {
            $(this).width(70);
        };

        function getRandomHash(size) {
            var hash="";
            var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C',
                'D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'];
            for(var i = 0; i < size ; i ++) {
                var id = Math.ceil(Math.random()*35);
                hash += chars[id];
            }
            return hash;
        }
    }

    //切换作者编辑
    $("#switch-author-edit").click(function () {
        var $book_edit_card = $("#book-edit-card");
        var $author_edit_card = $("#author-edit-card");
        $book_edit_card.fadeOut(400);
        $author_edit_card.fadeIn(400);
    });

    //切换书籍编辑
    $("#switch-book-edit").click(function () {
        var $book_edit_card = $("#book-edit-card");
        var $author_edit_card = $("#author-edit-card");
        $author_edit_card.fadeOut(400);
        $book_edit_card.fadeIn(400);
    });

    //提交书籍
    var upload = $(".upload");

    upload.click(function () {
        //首先检查各项有效性
        var all_valid = book_name_valid && writer_name_valid && publisher_valid &&
            publish_date_valid && isbn_valid && price_valid && book_intro_valid &&
            writer_intro_valid && cover_valid && age_valid && country_valid && avatar_valid;
        if(book_name_input.val() == "" || writer_name_input.val() == ""
            || publisher_input.val() == "" || publish_date_input.val() == ""
            || isbn_input.val() == "" || price_input.val() == ""
            || book_intro_input.val() == "" || writer_intro_input.val() == ""
            || age_input.val() =="" || country_input.val() == "") {
            all_valid = 0;
        }
        if(all_valid == 1) {
            //进行异步上传书籍信息
            ShowLog("上传书籍中...");
            $.ajax({
                type: "post",
                url: "UploadBook",
                data: {
                    editMode: edit_mode,
                    bookID: book_id,
                    bookName: book_name_input.val(),
                    writerName: writer_name_input.val(),
                    authorID: author_id,
                    publisher: publisher_input.val(),
                    publishDate: publish_date_input.val(),
                    isbn: isbn_input.val(),
                    price: price_input.val(),
                    bookIntro: book_intro_input.val(),
                    writerIntro: writer_intro_input.val(),
                    authorAge: age_input.val(),
                    authorCountry: country_input.val(),
                    coverURL: $("#info-book-cover")[0].src,
                    avatarURL: $("#writer-avatar")[0].src
                },
                dataType: "json",
                success: function(data) {
                    ShowLog("书籍上传完毕√");
                    book_id = data["bookID"];
                    author_id = data["authorID"];
                }
            });
            //上传结束后进行页面的跳转？或者交由用户选择吧
        } else {
            ShowLog("信息还没有填写完整喔");
        }

    });

    // Custom Bubbles
    function WarningBubble(bubble,message) {
        bubble.find(".help-text").stop().animate({
            backgroundColor: "red"
        },200);
        bubble.find(".triangle").stop().animate({
            borderTopColor: "red"
        },200);
        bubble.find(".help-text")[0].innerText = message;

    }

    function CorrectBubble(bubble, message) {
        bubble.find(".help-text").stop().animate({
            backgroundColor: "green"
        },200);
        bubble.find(".triangle").stop().animate({
            borderTopColor: "green"
        },200);
        bubble.find(".help-text")[0].innerText = message;
    }

    function DefaultBubble(bubble,message) {
        bubble.find(".help-text").stop().animate({
            backgroundColor: "#3f51b5"
        },200);
        bubble.find(".triangle").stop().animate({
            borderTopColor: "#3f51b5"
        },200);
        bubble.find(".help-text")[0].innerText = message;
    }

    // Custom Log
    var $log_container = $("#log-container");
    var $log_mother = $("#log-container .custom-log").eq(0);
    function ShowLog(log) {
        var $custom_log = $log_mother.clone();
        $custom_log[0].innerText = log;
        $log_container.append($custom_log);
        $custom_log.animate({
            marginTop: "70px",
            opacity: 0.8
        },300,"easeOutCubic",function () {
            $custom_log.delay(2000);
            $custom_log.animate({
                marginTop: "0px",
                opacity: 0
            },300,"easeInCubic",function () {
                $log_container[0].removeChild($custom_log[0]);
            });
        });
    }

    book_id = Number($("#book-id-get")[0].innerText);

    if(book_id != -1) {
        $.ajax({
            type: "post",
            url: "GetTargetBook",
            data: {
                bookID: book_id
            },
            dataType: "json",
            beforeSend: function (XHR) {
                ShowLog("正在获取书籍信息");
            },
            success: function(data) {
                author_id = data["book"]["authorID"];
                //$("#info-card #info-book-cover")[0].src = "images/" + data["book"]["coverURL"];
                $("#info-card #info-book-cover")[0].src = data["book"]["coverURL"];
                //$("#info-card #writer-avatar")[0].src = "authors/" + data["book"]["avatarURL"];
                $("#info-card #writer-avatar")[0].src = data["book"]["avatarURL"];
                book_name[0].innerText = data["book"]["title"];
                book_name_input.val(data["book"]["title"]);
                writer_name[0].innerText = data["book"]["author"];
                writer_name_input.val(data["book"]["author"]);
                writer_name.eq(1)[0].innerText = data["book"]["author"];
                writer_name_input.val(data["book"]["author"]);
                publisher[0].innerText = data["book"]["publisher"];
                publisher_input.val(data["book"]["publisher"]);
                publish_date[0].innerText = data["book"]["publishDate"];
                publish_date_input.val(data["book"]["publishDate"]);
                isbn[0].innerText = "ISBN:" + data["book"]["isbn"];
                isbn_input.val(data["book"]["isbn"]);
                price[0].innerText = "￥" + data["book"]["price"];
                price_input.val(data["book"]["price"]);
                book_intro[0].innerText = data["book"]["intro"];
                book_intro_input.val(data["book"]["intro"]);
                writer_intro[0].innerText = data["book"]["authorIntro"];
                writer_intro_input.val(data["book"]["authorIntro"]);
                age[0].innerText = "年龄：" + data["book"]["authorAge"];
                    age_input.val(data["book"]["authorAge"]);
                country[0].innerText = "城市：" + data["book"]["authorCountry"];
                    country_input.val(data["book"]["authorCountry"]);

                ShowLog("书籍信息获取完毕√");
                edit_mode = 1;
                cover_valid = 1;
                avatar_valid = 1;

                //作者推荐的输入进行触发
                writer_name_input.trigger("input propertychange");
            }
        });
    }
});