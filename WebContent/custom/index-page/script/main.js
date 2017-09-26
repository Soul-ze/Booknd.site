$().ready(function(){

    // Index page start animation
    $("#index-search-container").delay(400);
    $("#index-search-container").fadeIn(400);

    function resizeGifAdaption() {
        if($(window).width() < $(window).height()) {
            $("#bg-gif").css({
                width: "100%",
                height: "auto"
            });
        } else {
            $("#bg-gif").css({
                height: "100%",
                width: "auto"
            });
        }
    }
    resizeGifAdaption()
    $(window).resize(function () {
        resizeGifAdaption();
    });
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $("#float-btn-group").hide();
    }

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
        var current_input = $this.parent().parent().children(".custom-input").eq(0);
        current_input.val($this[0].innerText);
        author_id = Number($this.attr("id"));

        // 触发icon的提交请求
        $(".icon:visible").trigger("click");
    }
    function resizeRecommend() {
        $("#recommend-container").animate({
            height: ($("#recommend-container .recommend-author").length)*50 + "px"
        },200);
    }

    // Book Preview
    var $book_card_mother = $("#book-card-mother");
    function getBookPreview(data) {
        var size = data["size"];
        var $books = new Array(size);
        for(var i = 0;i < size;i ++) {
            var $book_preview = $book_card_mother.clone();
            $book_preview.css("display", "block");
            $book_preview.attr("id", data["book" + i]["bookID"]);
            //$book_preview.children(".book-cover-container").children(".book-cover")[0].src = "images/" + data["book" + i]["coverURL"];
            $book_preview.children(".book-cover-container").children(".book-cover")[0].src = data["book" + i]["coverURL"];
            $book_preview.children(".book-name")[0].innerText = data["book" + i]["title"];
            $book_preview.children(".book-writer")[0].innerText = data["book" + i]["author"];
            $book_preview.on("click", function () {
                setInfoCard($(this));
            });
            $books[i] = $book_preview;
        }
        return $books;
    }
    function ShowBooks($book_cards) {
        var time = 500;
        for(var i = 0;i < $book_cards.length; i++) {
            $($book_cards[i]).css("display","block");
            $($book_cards[i]).delay(time+=100);
            $($book_cards[i]).animate({
                top: "-=50px",
                opacity: 1
            },400,function () {
                $search_result_container.css("height","auto");
                $scroll_container.css("height","auto");
            })
        }
    }
    function deleteBook(bookID) {
        var deleteID = bookID;
        $.ajax({
            type: "post",
            url: "DeleteBook",
            data: {
                bookID: deleteID
            },
            dataType: "json",
            beforeSend: function (XHR) {
                //在发送以前展示等待动画
                ShowLog("正在删除，请稍等...XD");
            },
            success: function(data) {
                var state = data["state"];
                if(state == 1) {
                    ShowLog("删除成功<");
                    //对已经有的书进行标记删除
                    var $delete_card = $("#"+deleteID);
                    //尝试提供恢复删除的功能
                    $delete_card.children(".delete-state").fadeIn(200);
                    closeInfoCard();
                }
                else {
                    ShowLog("删除失败，请重试<");
                }
            }
        });
    }
    function recoveryBook(bookID) {
        var recID = bookID;
        $.ajax({
            type: "post",
            url: "RecoveryBook",
            data: {
                bookID: recID
            },
            dataType: "json",
            beforeSend: function (XHR) {
                //在发送以前展示等待动画
                ShowLog("正在恢复，请稍等...XD");
            },
            success: function(data) {
                var state = data["state"];
                if(state == 1) {
                    ShowLog("恢复成功<");
                    //对已经有的书进行标记删除
                    var $rec_card = $("#"+recID);
                    //尝试提供恢复删除的功能
                    $rec_card.children(".delete-state").fadeOut(200);
                }
                else {
                    ShowLog("恢复失败，请重试<");
                }
            }
        });
    }

    // Info card
    var open_card_y = 0;
    var $outer_container = $("#outer-container");
    var $scroll_container = $("#scroll-container");
    var $search_result_container = $("#search-result-container");
    var $info_card_container = $("#info-card-container");
    var $info_card = $("#info-card-container #info-card");

    //openInfoCard();

    $("#info-card-container").click(function () {
        closeInfoCard();
    })

    $("#info-card").click(function () {
        return false;
    })

    function setInfoCard($this) {
        var book_id = Number($this.attr("id"));
        view_book_id = book_id;
        if($this.children(".delete-state:visible").length != 0) {
            //进行恢复操作
            recoveryBook(view_book_id);
        }
        else {
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
                    $("#info-card #info-book-cover")[0].src = data["book"]["coverURL"];
                    $("#info-card #info-book-name")[0].innerText = data["book"]["title"];
                    $("#info-card #info-book-writer")[0].innerText = data["book"]["author"];
                    $("#info-card #info-publisher")[0].innerText = data["book"]["publisher"];
                    $("#info-card #info-publish-date")[0].innerText = data["book"]["publishDate"];
                    $("#info-card #info-isbn")[0].innerText = "ISBN:" + data["book"]["isbn"];
                    $("#info-card #info-price")[0].innerText = "￥" + data["book"]["price"];
                    $("#info-card #info-book-intro")[0].innerText = data["book"]["intro"];
                    $("#info-card #info-author-name")[0].innerText = data["book"]["author"];
                    $("#info-card #info-author-intro")[0].innerText = data["book"]["authorIntro"];
                    $("#writer-avatar")[0].src = data["book"]["avatarURL"];
                    //年龄
                    $("#info-card #writer-age")[0].innerText = "年龄：" + data["book"]["authorAge"];
                    //城市
                    $("#info-card #writer-country")[0].innerText = "城市：" + data["book"]["authorCountry"];
                    openInfoCard();

                    ShowLog("信息获取完毕√");
                }
            });
        }


    }

    $("#info-book-cover")[0].onload = function () {
        $(this).width(150);
    };

    $("#writer-avatar")[0].onload = function () {
        $(this).width(70);
    };

    function openInfoCard() {
        var scroll_width,top_height;
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            scroll_width = 0;
            top_height = -40;
            $("#info-close-text").css("top","20%");
        }else{
            scroll_width = 17;
            top_height = 0;
        }
        open_card_y = $outer_container.scrollTop();
        $search_result_container.css({
            "position":"fixed",
            "padding-right":scroll_width+"px",
            "top":"50px"
        });
        $scroll_container.css({
            "margin-top": "+=" + (-open_card_y) +"px"
        });
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            $info_card_container.fadeIn(300,function () {
                $info_card.css({
                    marginTop: top_height + "%",
                    opacity: 1
                });
            });
            $info_card_container.scrollTop(0);
        }
        else {
            $info_card_container.fadeIn(300,function () {
                $info_card.animate({
                    marginTop: top_height + "%",
                    opacity: 1
                },400,"easeOutExpo");
            });
            $info_card_container.scrollTop(0);
            $("#create-book").fadeOut(400);
            $("#edit-book").animate({
                marginBottom: "+=100px"
            });
        }

    }

    function closeInfoCard() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            $info_card.css({
                marginTop: "+=210%",
                opacity: 0
            });
            $info_card_container.delay(400);
            $info_card_container.fadeOut(300,function () {
                $info_card.css("margin-top", "30%");
            })
        }
        else {
            $info_card.animate({
                marginTop: "+=30%",
                opacity: 0
            }, 400, "easeInCubic", function () {
                $info_card.css("margin-top", "30%");
                $info_card_container.fadeOut();
            });
            $("#create-book").fadeIn(400);
            $("#edit-book").animate({
                marginBottom: "-=100px"
            });
        }
        $search_result_container.css({
            "position": "absolute",
            "padding-right": "0px",
            "top": "0%"
        });
        $scroll_container.css({
            "margin-top": "10%"
        });
        $outer_container.scrollTop(open_card_y);
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

    // Search Input
    var $index_input = $("#index-search-container .custom-input");
    $index_input.focus(function () {
        $recommend_container.fadeIn(200);
        resizeRecommend();
    });
    $index_input.blur(function () {
        if($(this).val() == "") {
            $recommend_container.animate({
                height: "0px"
            },200);
            $recommend_container.empty();
        }
        $recommend_container.fadeOut(200);
    });
    var author_id = -1;
    $index_input.on('input propertychange',function () {
        if($index_input.val().length >= 1) {
            //超过两位输入进行作者名匹配获取
            $.ajax({
                type: "post",
                url: "AuthorBeforeSearch",
                data: {
                    search: $index_input.val()
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
        } else {
            $recommend_container.animate({
                height: "0px"
            },200);
            $recommend_container.empty();
            resizeRecommend();
        }
        author_id = -1;
    });


    var $top_bar_input = $("#top-bar-search-container .custom-input");
    $top_bar_input.blur(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            $("#top-bar-logo").fadeIn(200);
            $top_bar_input.fadeOut(200);
        }
    });

    var search_content;
    var $top_bar_shadow = $("#top-bar-container #top-bar-shadow");
    var $top_bar_search_container = $("#top-bar-search-container");
    var $float_btn_group = $("#float-btn-group");

    $(".icon").click(function () {
        var $search_input = $(this).parent().children(".custom-input").eq(0);
        if($search_input.css("display") == "none") {
            $search_input.fadeIn(200);
            $("#top-bar-logo").fadeOut(200);
            $search_input.trigger("focus");
            return;
        }
        ShowLog("正在搜索：" + $search_input.val());
        if($search_input.val() != "") {
            $search_result_container.animate({
                top: "0%"
            },300,function () {
                $search_result_container.css("position","absolute");
            });
            $float_btn_group.delay(300);
            $float_btn_group.animate({
                bottom: "10%"
            },400,"swing");
            $top_bar_shadow.delay(100);
            $top_bar_shadow.fadeIn(200);
            $top_bar_search_container.delay(100);
            $top_bar_search_container.fadeIn(200);
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                $("#top-bar-logo").delay(100).fadeIn(200);
            }
            var $books;
            //TODO 进行异步的搜索数据的上传
            $.ajax({
                type: "post",
                url: "BookSearchMode",
                data: {
                    search: $search_input.val(),
                    authorID: author_id
                },
                dataType: "json",
                beforeSend: function (XHR) {
                    //在发送以前展示等待动画
                    ShowLog("正在搜索，请稍等...XD");
                },
                success: function(data) {
                    //进行数据的封装以及载入
                    ShowLog("找到" + data["size"] + "个结果");
                    var size = data["size"];
                    //Step 1 清空之前的容器内容以及保存的索引
                    var $container = $("#scroll-container .book-col:visible");
                    $container.empty();
                    $books = getBookPreview(data);
                    var cols = $container.length;
                    //Step 2 对容器进行推荐作者数据封装对象注入DOM
                    for(var i = 0;i < size;i++) {
                        $container.eq(i%cols).append($books[i]);
                    }
                    //Step 3 如果没有搜索到书籍，进行提示
                    if(size == 0) {
                        ShowLog("没有找到喔QWQ");
                    }
                    ShowBooks($books);
                    author_id = -1;
                    $("#index-search-container .custom-input").fadeOut(300);
                }
            });
        }
        else {
            ShowLog("你也在寻找虫洞么？");
        }
    });
    $(document).keydown(function() {
        if (event.keyCode == "13") {//keyCode=13是回车键
            if($("input:focus").length != 0) {
                $('.icon:visible').trigger("click");
            }
        }
    });


    var view_book_id = -1;

    $("#edit-book").click(function () {
        $("#bookID-driver").val(view_book_id);
        $("#edit-open").trigger("click");
    });

    $("#create-book").click(function () {
        $("#bookID-driver").val(-1);
        $("#edit-open").trigger("click");
    });

    $("#delete-book").click(function () {
        var deleteID = view_book_id;
        deleteBook(deleteID);
    })
    
    $("#top-bar span").click(function () {
        location.reload();
    });
    

});