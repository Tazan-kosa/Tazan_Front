"use strict";
$(document).ready(function() {
    // var ua = window.navigator.userAgent;
    // var msie = ua.indexOf("MSIE ");
    // if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // 	alert("Internet explorer는 지원하지 않습니다. 다른 브라우저를 이용해주시기 바랍니다.");
    // }
    //    if ($(window).width() <= 600) {
    //        alert('MYRO는 지도 및 장소 정보를 한 화면에 모두 표시하기 때문에 모바일 화면에서의 사용이 불편합니다. 원활한 사용을 위해서 PC나 태블릿으로의 접속을 권장드립니다.')
    //    }
    $.ajax({
        type: "GET",
        url: headAddress + "/getRouteAndCityCnt",
        success: function success(data) {
            data.routeCnt += "",
                data.cityCnt += "",
                $("#routeCnt").html(data.routeCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")),
                $("#cityCnt").html(data.cityCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,"))
        }
    }),
        $.ajax({
            type: "GET",
            url: headAddress + "/getCityListForFirstPage",
            success: function success(data) {
                // console.log(data.selectedCntFromCityList);
                // console.log(data.cityIntroductionTxt);
                var engCityName = data.engCityName
                    , korCityName = data.korCityName
                    , selectedCntFromCityList = data.selectedCntFromCityList
                    , otherCityListInfo = data.otherCityListInfo
                    , mostSelectedCities = data.mostSelectedCities;
                // console.log(data);
                // console.log();
                // console.log(data);
                // a.sort(function(a, b) {
                //   return b - a;
                // });
                if (600 >= $(window).width()) {
                    //상위 4개 도시만 노출
                    for (var continentals = [{
                        engName: "Asia",
                        korName: "\uC544\uC2DC\uC544",
                        appendTxt: ""
                    }, {
                        engName: "Europe",
                        korName: "\uC720\uB7FD",
                        appendTxt: ""
                    }, {
                        engName: "America",
                        korName: "\uC544\uBA54\uB9AC\uCE74",
                        appendTxt: ""
                    }, {
                        engName: "Oceania",
                        korName: "\uC624\uC138\uC544\uB2C8\uC544",
                        appendTxt: ""
                    }], topCityListForMobileTxt = "", k = 0; k < mostSelectedCities.length; k++)
                        topCityListForMobileTxt += "\n                                                                <a href=\"#modal-city-detail_idx_".concat(mostSelectedCities[k].engCityName, "\" uk-toggle aria-expanded=\"false\">\n                                                                  <li class=\"popular-card-list\">\n                                                                    <div class=\"popular-card\">\n                                                                        <div class=\"popular-card-image-container\">\n                                                                            <img src=\"/myro_image/city/").concat(mostSelectedCities[k].engCityName, ".jpg\" alt=\"image\" class=\"popular-card-image\" width=\"180\" height=\"193\" loading=\"lazy\"/>\n                                                                        </div>\n                                                                        <div class=\"popular-card-bottom-container\">\n                                                                            <div class=\"popular-card-title\">").concat(mostSelectedCities[k].engCityName.toUpperCase(), "</div>\n                                                                            <div class=\"popular-card-subtitle\">").concat(mostSelectedCities[k].korCityName, "</div>\n                                                                        </div>\n                                                                    </div>\n                                                                  </li>\n                                                                </a>");
                    for (var i = 0; i < continentals.length; i++) {
                        continentals[i].appendTxt += "\n                                                  <div class=\"main-section-container\">\n                                                    <div class=\"main-section-title-container\">\n                                                        <div class=\"main-section-title\">".concat(continentals[i].korName, "</div>\n                                                        <div class=\"main-section-title-eng\">").concat(continentals[i].engName, "</div>\n                                                    </div>\n                                                    <div class=\"uk-position-relative uk-light\" tabindex=\"-1\" uk-slider=\"finite: true\" style=\"margin: 8px 0\">\n                                                        <ul class=\"uk-slider-items\">\n                                                ");
                        for (var j = 0; j < engCityName.length; j++)
                            otherCityListInfo[i].visa || (otherCityListInfo[i].visa = "-"),
                            continentals[i].engName.toLowerCase() == data.continental[j] && (continentals[i].appendTxt += "\n                                                <span name=\"cityCardForMobile\">\n                                                <input type=\"hidden\" value=\"".concat(otherCityListInfo[j].nation).concat(engCityName[j]).concat(korCityName[j], "\">\n                                                  <a href=\"#modal-city-detail_idx_").concat(engCityName[j], "\" uk-toggle aria-expanded=\"false\">\n                                                  <li>\n                                                    <div class=\"uk-inline\" style=\" margin: 8px; margin-left: 0\">\n                                                        <img src=\"/myro_image/city/").concat(engCityName[j], ".jpg\" alt=\"\" style=\"border-radius: 2px\" width=\"140\" height=\"150\" loading=\"lazy\"/>\n                                                        <div class=\"filter-city-card-linear\"></div>\n                                                        <div class=\"uk-position-bottom filter-city-card-container\">\n                                                            <div class=\"filter-city-card-subtitle\" uk-slider-parallax=\"x: 200,-200\">").concat(korCityName[j], "</div>\n                                                            <div class=\"filter-city-card-title\" uk-slider-parallax=\"x: 100,-100\">").concat(engCityName[j].toUpperCase(), "</div>\n                                                        </div>\n                                                    </div>\n                                                </li>\n                                                </a>\n                                                <div id=\"modal-city-detail_idx_").concat(engCityName[j], "\" class=\"uk-flex-top city-info-modal\" uk-modal>\n                                                <div class=\"uk-modal-dialog uk-width-auto uk-margin-auto-vertical\" style=\"max-width: 1400px !important;\">\n                                                <button class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close ></button>\n                                                <div class=\"uk-grid-match uk-grid-small\" uk-grid>\n                                                <div class=\"uk-width-1-3@l\"><div class=\"uk-background-cover\"\n                                                      style=\"background-image: url('https://myro.co.kr/myro_image/city/").concat(engCityName[j], ".jpg');\"></div>\n                                                </div>\n                                                <div class=\"uk-width-2-3@l\"> <div class=\"uk-padding-large\">\n                                                      <h2 style=\"font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;\" >\n                                                      ").concat(engCityName[j].toUpperCase(), "\n                                                      </h2>\n                                                      <div style=\"font-family: 'Montserrat';font-size:1.2rem\" >\n                                                      ").concat(korCityName[j].toUpperCase(), "\n                                                      </div>\n                                                      <p class=\"main-city-info-p\">\n                                                      ").concat(data.cityIntroductionTxt[j], "\n                                                      </p>\n                                                      <div class=\"uk-child-width-1-4 uk-grid-small uk-text-center\" style=\"margin: 16px 0\" uk-grid>\n                                                          <div class=\"main-city-symbol-container\">\n                                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\" >person</i>\n                                                              <div class=\"main-city-info-text\">\n                                                              ").concat(selectedCntFromCityList[j], "\n                                                              </div>\n                                                          </div>\n                                                          <div class=\"main-city-symbol-container\">\n                                                              <i class=\"material-icons\"style=\"font-size: 32px; margin: 8px\">bolt</i>\n                                                              <div class=\"main-city-info-text\">\n                                                                  ").concat(otherCityListInfo[j].voltage, "\n                                                              </div>\n                                                          </div>\n                                                          <div class=\"main-city-symbol-container\">\n                                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\">language</i>\n                                                              <div class=\"main-city-info-text\">\n                                                                  ").concat(otherCityListInfo[j].visa, "\n                                                              </div>\n                                                          </div>\n                                                          <div class=\"main-city-symbol-container\">\n                                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\">history</i>\n                                                              <div class=\"main-city-info-text\">\n                                                                  ").concat(otherCityListInfo[j].timeDifference, " \uC2DC\uAC04\n                                                              </div></div></div><button class=\"uk-button myro-color-button uk-button-large\" onClick=\"window.location.href='/myro2?city=").concat(engCityName[j], "'\">\uC77C\uC815\uB9CC\uB4E4\uAE30</button></div></div></div></div></div>\n                                                        </span>"));
                        continentals[i].appendTxt += "\n                </ul>\n            </div>\n          </div>"
                    }
                    for (var _i = 0; _i < continentals.length; _i++)
                        $("#continentalAreaForMobile").append(continentals[_i].appendTxt);
                    $("#destinationSearchKeyword").keyup(function() {
                        var k = $(this).val();
                        $("span[name='cityCardForMobile']").hide(),
                            $("#cityList > span").hide();
                        //var temp = $("#cityList > div > input[value]:contains('" + k + "')");
                        var temp = $("span[name='cityCardForMobile'] > input[value*='" + k + "']");
                        $(temp).parent().show(),
                        "" == k && $("span[name='cityCardForMobile']").show(),
                            $("#destinationSearchKeyword").off("scroll touchmove mousewheel")
                    }),
                        $("#destinationSearchKeyword").on("scroll touchmove mousewheel", function(e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                !1
                        }),
                        $("#topCityListForMobile").append(topCityListForMobileTxt)
                } else {
                    // console.log(sortSelectedCntFromCityList);
                    for (var topCityListForWebTxt = "", _j = 0; _j < mostSelectedCities.length; _j++)
                        topCityListForWebTxt += "\n                                              <a class=\"uk-width-1-3\" href=\"#modal-city-detail_idx_".concat(mostSelectedCities[_j].engCityName, "\" uk-toggle aria-expanded=\"false\">\n                                                <li>\n                                                  <div class=\"uk-panel\" style=\"width:100%;\">\n                                                      <img style=\"width:100%;\" src=\"/myro_image/city/").concat(mostSelectedCities[_j].engCityName, ".jpg\" alt=\"cityimage\" loading=\"lazy\"/>\n                                                      <div class=\"main-photo-linear\"></div>\n                                                      <div class=\"uk-position-bottom uk-text-center\" style=\"margin-bottom:8px;\">\n                                                          <h3 uk-slider-parallax=\"x: 100,-100\" style=\"font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;\">").concat(mostSelectedCities[_j].engCityName.toUpperCase(), "</h3>\n                                                          <p uk-slider-parallax=\"x: 200,-200\" style=\"margin-top:0;\">").concat(mostSelectedCities[_j].korCityName, "</p>\n                                                      </div>\n                                                  </div>\n                                                </li>\n                                              </a>");
                    for (var appendTxt, _i2 = 0; _i2 < engCityName.length; _i2++)
                        //준영
                        // appendTxt = '<div class="uk-width-1-4"><div class="uk-panel"><img src="/myro_image/city/' + engCityName[i] + '_new.jpg" alt="" />'
                        // + '<div class="uk-position-bottom" style="margin-left:24px;text-align:left;">'
                        // + '<h3 uk-slider-parallax="x: 100,-100" class="city-card-title">' + engCityName[i].toUpperCase() + '</h3><div style="color:#fff;margin-bottom:16px;" uk-slider-parallax="x: 200,-200"> ' + korCityName[i] + '</div></div></div></div>';
                        appendTxt = "",
                        otherCityListInfo[_i2].visa || (otherCityListInfo[_i2].visa = "-"),
                            appendTxt = "<div id=\"modal-city-detail_idx_".concat(engCityName[_i2], "\" class=\"uk-flex-top city-info-modal\" uk-modal>\n                                <div class=\"uk-modal-dialog uk-width-auto uk-margin-auto-vertical\" style=\"max-width: 1400px !important;\">\n                                <button class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close ></button>\n                                <div class=\"uk-grid-match uk-grid-small\" uk-grid>\n                                <div class=\"uk-width-1-3@l\"><div class=\"uk-background-cover\"\n                                      style=\"background-image: url('https://myro.co.kr/myro_image/city/").concat(engCityName[_i2], ".jpg');\"></div>\n                                </div>\n                                <div class=\"uk-width-2-3@l\"> <div class=\"uk-padding-large\">\n                                      <h2 style=\"font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;\" >\n                                      ").concat(engCityName[_i2].toUpperCase(), "\n                                      </h2>\n                                      <div style=\"font-family: 'Montserrat';font-size:1.2rem\" >\n                                      ").concat(korCityName[_i2].toUpperCase(), "\n                                      </div>\n                                      <p class=\"main-city-info-p\">\n                                      ").concat(data.cityIntroductionTxt[_i2], "\n                                      </p>\n                                      <div class=\"uk-child-width-1-4 uk-grid-small uk-text-center\" style=\"margin: 16px 0\" uk-grid>\n                                          <div class=\"main-city-symbol-container\">\n                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\" >person</i>\n                                              <div class=\"main-city-info-text\">\n                                              ").concat(selectedCntFromCityList[_i2], "\n                                              </div>\n                                          </div>\n                                          <div class=\"main-city-symbol-container\">\n                                              <i class=\"material-icons\"style=\"font-size: 32px; margin: 8px\">bolt</i>\n                                              <div class=\"main-city-info-text\">\n                                                  ").concat(otherCityListInfo[_i2].voltage, "\n                                              </div>\n                                          </div>\n                                          <div class=\"main-city-symbol-container\">\n                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\">language</i>\n                                              <div class=\"main-city-info-text\">\n                                                  ").concat(otherCityListInfo[_i2].visa, "\n                                              </div>\n                                          </div>\n                                          <div class=\"main-city-symbol-container\">\n                                              <i class=\"material-icons\" style=\"font-size: 32px; margin: 8px\">history</i>\n                                              <div class=\"main-city-info-text\">\n                                                  ").concat(otherCityListInfo[_i2].timeDifference, " \uC2DC\uAC04\n                                              </div></div></div><button class=\"uk-button myro-color-button uk-button-large\" onClick=\"window.location.href='/myro2?city=").concat(engCityName[_i2], "'\">\uC77C\uC815\uB9CC\uB4E4\uAE30</button></div></div></div></div></div>") + "<div class=\"col s12 m6 l3\" name=\"" + otherCityListInfo[_i2].continental + "\">" + "<input type=\"hidden\" value=\"" + otherCityListInfo[_i2].nation + engCityName[_i2] + korCityName[_i2] + "\">" + "<a\n                                style=\"color:inherit!important;text-decoration: none!important;\"\n                                href=\"#modal-city-detail_idx_".concat(engCityName[_i2], "\"\n                                uk-toggle>") + "<div class=\"card city-card-style hoverable z-depth-2\" style=\"margin:0;\">" + (-1 == ["jeju", "namwon", "yeosu", "pohang", "ulleung"].indexOf(engCityName[_i2]) ? "" : "<div class=\"ribbon-wrapper-1\"><span class=\"uk-label new-label\">New</span></div>") + "<div class=\"card-image imgbox\">" + "<img src=\"/myro_image/city/" + engCityName[_i2] + ".jpg\" alt=\"city\" loading=\"lazy\">" + "</div>" + "<div class=\"city-card-contents-div\" >" + "<span class=\"city-card-contents-title\">" + "<div class=\"citynamefont\">" + "<b>" + engCityName[_i2].toUpperCase() + "</b>" + "<br><h6 class=\"city-card-contents-subtitle\"> " + korCityName[_i2] + "</h6>" + "</div>" + "</span>" + "</div></div></div>" + "</a\n                            >",
                            $("#cityList").append(appendTxt),
                        "-" == otherCityListInfo[_i2].visa && (otherCityListInfo[_i2].visa = "");
                    $("#topCityListForWebPage").append(topCityListForWebTxt)
                }
                // $('.tabs').tabs();
                $("#destinationSearchKeyword").keyup(function() {
                    var k = $(this).val();
                    $("#cityList > div").hide();
                    //var temp = $("#cityList > div > input[value]:contains('" + k + "')");
                    var temp = $("#cityList > div > input[value*='" + k + "']");
                    $(temp).parent().show(),
                    "" == k && $("#cityList > div").show();
                    for (var _j2 = 0; _j2 < engCityName.length; _j2++)
                        UIkit.modal($("#modal-city-detail_idx_".concat(engCityName[_j2]))).hide();
                    $("#destinationSearchKeyword").off("scroll touchmove mousewheel")
                }),
                    $("#destinationSearchKeyword").on("scroll touchmove mousewheel", function(e) {
                        return e.preventDefault(),
                            e.stopPropagation(),
                            !1
                    }),
                    $("#startbutton").click(function() {
                        setTimeout(function() {
                            $("#city").focus()
                        }, 100)
                    })
            }
        })
});
function start() {
    $("#destinationSearchKeyword").focus(),
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#city").offset().top
        }, 1e3)
}
// 가이드모달(width 600px 이상)
// Get the modal
var modal1 = document.getElementById("id01");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.target == modal1 && (modal1.style.display = "none")
}
;
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n)
}
function currentDiv(n) {
    showDivs(slideIndex = n)
}
function showDivs(n) {
    // 유튜브 가이드 영상때문에 필터 안먹어서 임시로 해놓음
    // 유튜브 가이드 영상때문에 필터 안먹어서 임시로 해놓음
    var i, x = document.getElementsByClassName("mySlidesG"), dots = document.getElementsByClassName("demo")
}
$("#filter-bar li").click(function() {
    $("#filter-bar li").removeClass("active"),
        $(this).addClass("active"),
        $("#filter-bar").removeClass().addClass($(this).attr("data-target"))
});
var filterCities = function(area) {
    for (var areaList = ["europe", "asia", "america", "oceania", "africa"], i = 0; i < areaList.length; i++)
        $("[name=" + areaList[i] + "]").addClass("slide-out-bck-center"),
            $("[name=" + areaList[i] + "]").css("display", "none");
    if ("all" == area)
        for (var i = 0; i < areaList.length; i++)
            $("[name=" + areaList[i] + "]").css("display", ""),
                $("[name=" + areaList[i] + "]").addClass("slide-in-fwd-center");
    else
        for (var i = 0; i < areaList.length; i++)
            area == areaList[i] ? ($("[name=" + areaList[i] + "]").css("display", ""),
                $("[name=" + areaList[i] + "]").addClass("slide-in-fwd-center")) : ($("[name=" + areaList[i] + "]").addClass("slide-out-bck-center"),
                $("[name=" + areaList[i] + "]").css("display", "none"))
};
function showNoticeMenu_Main() {
    document.getElementById("noticeModal_Main").style.display = "flex"
}
function hideNoticeMenu_Main() {
    document.getElementById("noticeModal_Main").style.display = "none"
}
function showPopupMenu_Main() {
    document.getElementById("popupModal_Main").style.display = "flex"
}
function hidePopupMenu_Main() {
    document.getElementById("popupModal_Main").style.display = "none"
}
// 유튜브 동영상 링크 모달창(테스트)
//function ShowYoutubeInfoPlayList_Modal(i) {
//
//    $("#InfoPlayList").html("");
//
//    $.ajax({
//        type: 'GET',
//        url: headAddress + '/getCityListForFirstPage',
//        success: function (data) {
//            let engCityName = data.engCityName;
//            let korCityName = data.korCityName;
//            let otherCityListInfo = data.otherCityListInfo
//            let youtubeMovieInfo1 = engCityName[i].toUpperCase() + '의 쇼핑리스트 (Youtube : 방구석TV)'
//            let youtubeMovieInfo2 = engCityName[i].toUpperCase() + '의 여행 꿀팁 (Youtube : 남자여행 김희준)'
//            let youtubeMovieInfo3 = engCityName[i].toUpperCase() + '의 명소 소개 (Youtube : 방구석TV)'
//            let appendtxt =
//
//                '<ul class="collection with-header">' +
//                '<li class="collection-header" style="text-align: center;">' +
//                '<img src="/myro_image/flags/' + otherCityListInfo[i].nation + '.png" alt="flags">' +
//                '<h4 style="margin:5px">' + korCityName[i].split(" ")[0] + '&nbsp;' + engCityName[i].toUpperCase() + '</h4>' +
//                '<hs style="color:#818181">마이로가 추천하는&nbsp;' + engCityName[i].toUpperCase() + '의 여행정보영상 목록입니다.</hs></li>' +
//                '<li class="collection-item">' +
//                '<div>1.&nbsp;' + youtubeMovieInfo1 + '<a href="https://www.youtube.com/results?search_query=' + engCityName[i] + '+%EA%BF%80%ED%8C%81" class="secondary-content"><i class="material-icons" style="color:red">play_circle_filled</i></a></div></li>' +
//                '<li class="collection-item">' +
//                '<div>2.&nbsp;' + youtubeMovieInfo2 + '<a class="secondary-content"><i class="material-icons" style="color:red">play_circle_filled</i></a></div></li>' +
//                '<li class="collection-item">' +
//                '<div>3.&nbsp;' + youtubeMovieInfo3 + '<a class="secondary-content"><i class="material-icons" style="color:red">play_circle_filled</i></a></div></li>' +
//                '</ul>'
//
//            $("#InfoPlayList").append(appendtxt);
//
//        }
//
//    });
//
//    document.getElementById('YoutubeInfoPlayList_Modal').style.display = 'block';
//}
//
//function HideYoutubeInfoPlayList_Modal() {
//
//    document.getElementById('YoutubeInfoPlayList_Modal').style.display = 'none';
//}
// 가이드모달제어 (LSH)
function openYoutubeGideButton() {
    if (600 < $(window).width()) {
        document.getElementById("id01").style.display = "flex",
            document.getElementById("player").style.display = "block";
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else
        document.getElementById("idm").style.display = "block"
}
function closeYoutubeGideButton() {
    document.getElementById("id01").style.display = "none",
        stopVideo(),
        document.getElementsByTagName("script")[0].remove()
}
function openEventPage() {
    window.open("/myro_image/event.jpg")
}
function openEventResultPage() {
    window.open("/myro_image/eventResult.jpg")
}
// function getBlog(){
//     let imgSrc = [
//         "https://getuikit.com/docs/images/photo.jpg",
//         "https://getuikit.com/docs/images/light.jpg",
//         "https://getuikit.com/docs/images/dark.jpg",
//         "https://getuikit.com/docs/images/photo2.jpg"
//     ];
//     let blogText = [
//         "2박 3일 제주 여행 필수 코스",
//         "여행 작가가 추천하는 부산 여행",
//         "SNS에서 유명한 서울의 숨겨진 명소",
//         "당일치기로 즐기는 국내 여행 스팟"
//     ];
//     let appendBlogHtml = '';
//     for (let i = 0; i < 4; i++) {
//         appendBlogHtml = appendBlogHtml + `
//                         <li name="getBlog">
//                             <div class="uk-cover-container">
//                                 <a id="getBlog_idx_${i}" onclick="goToBlog(${i})">
//                                     <img src=${imgSrc[i]} alt="image" loading="lazy" />
//                                 </a>
//                                 <div class="uk-position-center uk-panel">
//                                     <h3>${blogText[i]}</h3>
//                                 </div>
//                             </div>
//                         </li>
//                         `
//     }
//     $("#getBlog").append(appendBlogHtml);
//     console.log(appendBlogHtml);
// }
//블로그 링크 걸기 하드코딩
function goToBlog(_num) {
    0 == _num ? window.open(window.popup = "https://blog.naver.com/minhae9191/222491332798") : 1 == _num ? window.open(window.popup = "https://blog.naver.com/63misschoi/222501862288") : 2 == _num ? window.open(window.popup = "https://blog.naver.com/pih870318/222486173746") : 3 == _num ? window.open(window.popup = "https://blog.naver.com/2ndtori/222503555539") : 4 == _num ? window.open(window.popup = "https://blog.naver.com/withdayfly/222504406402") : 5 == _num ? window.open(window.popup = "https://blog.naver.com/myrocdo/222455559323") : 6 == _num && window.open(window.popup = "https://blog.naver.com/myrocdo/222038363018")
}
