"use strict";
function _typeof(obj) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ,
        _typeof(obj)
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg)
            , value = info.value
    } catch (error) {
        return void reject(error)
    }
    info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this
            , args = arguments;
        return new Promise(function(resolve, reject) {
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value)
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err)
                }
                var gen = fn.apply(self, args);
                _next(void 0)
            }
        )
    }
}
// import Sortable from 'sortablejs/modular/sortable.core.esm.js';
var spot, spotsByDay, map, map2, opened = !0, psOpened = !0, SsOpened = !1, travelDay = 5, firstSpotSearchFlag = !0, isModifyingMode = !1, colors = ["#FF2600", "#FFC649", "#1F6AEC", "#008F00", "#FF8AD8", "#03A9F4", "#9C27B0", "#8BC34A", "#FF9E07", "#607D8B"];
w3_PSclose(),
    window.onbeforeunload = function() {
        return ""
    }
;
function w3_open_or_close() {
    opened ? w3_close() : w3_open()
}
function w3_open() {
    opened = !0,
        document.getElementById("mySidebar").style.display = "block",
        1600 >= $(window).width() ? ($(".myro2-multibtndiv").css("left", "290px"),
            $(".msb-bookmarkdiv").css("left", "260px")) : ($(".myro2-multibtndiv").css("left", "320px"),
            $(".msb-bookmarkdiv").css("left", "290px")),
        $(".msb-bookmarkdiv-i").html("keyboard_arrow_left"),
        $(".msb-bookmarkdiv").addClass("animate-left")
}
function w3_close() {
    opened = !1,
        document.getElementById("mySidebar").style.display = "none",
        $(".myro2-multibtndiv").css("left", "20px"),
        $(".msb-bookmarkdiv").css("left", "-10px"),
        $(".msb-bookmarkdiv-i").html("keyboard_arrow_right"),
        $(".msb-bookmarkdiv").removeClass("animate-left")
}
function w3_PSopen_or_PSclose() {
    psOpened ? w3_PSclose() : w3_PSopen()
}
function w3_PSopen() {
    psOpened = !0,
        document.getElementById("PSidebar").style.display = "block",
        1600 >= $(window).width() ? $(".ssb-bookmarkdiv").css("right", "220px") : $(".ssb-bookmarkdiv").css("right", "290px"),
        $(".ssb-bookmarkdiv-i").html("keyboard_arrow_right"),
        $(".ssb-bookmarkdiv").addClass("animate-right")
}
function w3_PSclose() {
    psOpened = !1,
        document.getElementById("PSidebar").style.display = "none",
        $(".ssb-bookmarkdiv").css("right", "-10px"),
        $(".ssb-bookmarkdiv-i").html("keyboard_arrow_left"),
        $(".ssb-bookmarkdiv").removeClass("animate-right")
}
function w3_SSopen_or_SSclose() {
    SsOpened ? w3_SSclose() : w3_SSopen()
}
function w3_SSopen() {
    // document.getElementById("SSbarAfterMakeRoute").style.display = "block";
    SsOpened = !0,
        $("#ssbmbtndiv-Lbtn").css("display", "none"),
        $("#ssbmbtndiv").css("display", "block"),
        600 >= $(window).width() ? ($("#ssbmbtndiv").css("right", "210px"),
            $("#userGuideMenu").css("display", "none")) : 1600 >= $(window).width() ? $("#ssbmbtndiv").css("right", "210px") : $("#ssbmbtndiv").css("right", "230px"),
        $("#ssbmbtntext").html(i18nSvc.get("closePannel")),
        $("#searchSpotKeywordAfterMakeRoute").focus()
}
function w3_SSclose() {
    // document.getElementById("SSbarAfterMakeRoute").style.display = "none";
    SsOpened = !1,
        $("#ssbmbtndiv-Lbtn").css("display", "block"),
        $("#ssbmbtndiv").css("display", "none"),
        $("#ssbmbtntext").html(i18nSvc.get("openPannel")),
    600 >= $(window).width() && $("#userGuideMenu").css("display", "block")
}
var hotelMarker, marker, dataFromServer, backupDataFromServer, backupDataFromSavedToken, infowindow, stayingInfos, hideToast, tempMarkerForInfobox, startTravelDate, endTravelDate, savedRouteToken, socket, savedXForOpenPage, recommendedcoursesNo, searchInfoForRegSpot, directionsService, directionsDisplay, searchKeywordForNextPageAfterMakeRoute, pageNumForNextPageAfterMakeRoute, searchedSpotsListAfterMakeRoute, savedRouteTokenAfterSavingByUser, hotelMarkers = [], markers = [], markersOnRouteMap = [], hotelMarkersOnRouteMap = [], searchedSpotsList = [], searchedSpotsListFromRecommendedCourse = [], selectedSpots = [], selectedHotels = [], flightPath = [], pageNumForNextPage = 1, spotOrHotelForNextPage = "", lastPage = 0, totalTravelMins = 3600, sumOfSpotStayingMins = 0, openPlanPageWidely = !1, isClickedToPreventMaker = !1, trackingData = cityName + " || " + ("" == userEmail ? " no user " : "userEmail : ".concat(userEmail)) + "||", durationSec = 0, weekDayKor = i18nSvc.get("weekDays"), modal2 = document.getElementById("userGuideModalPage2"), mobileEditScheduleBool = !1;
setInterval(function() {
    durationSec++
}, 1e3);
//검색목록 페이징
//검색목록 제일 아래에 "<",">" 버튼 onclick.
//myro2.html검색 <a id="spotpageN" href="#" onclick="searchSpotsNextPage('n')">
function searchSpotsNextPage(np) {
    if ("n" == np) {
        if (pageNumForNextPage == lastPage - 1)
            return;
        pageNumForNextPage++
    } else if ("p" == np) {
        if (0 == pageNumForNextPage)
            return;
        pageNumForNextPage--
    }
    // let searchKeywordIsFromMobile = $("#searchSpotsOrHotelsButtonInMobileWeb").val() ? true : false;
    // console.log(6363,searchKeywordIsFromMobile);
    // console.log(123);
    $.ajax({
        type: "GET",
        url: headAddress + "/search" + spotOrHotelForNextPage + "s",
        data: {
            cityName: cityName,
            keyword: $("#searchSpotsOrHotelsButtonInMobileWeb").val() ? $("#searchSpotsOrHotelsButtonInMobileWeb").val() : $("#searchSpotOrHotelKeyword").val(),
            pageNumForNextPage: pageNumForNextPage
        },
        success: function success(data) {
            //장소
            if ($("#PSidebar").scrollTop(0),
                makePagesForSearchedList(pageNumForNextPage, lastPage),
                deleteAllSpotsList(),
                searchedSpotsList = data,
            "Spot" == spotOrHotelForNextPage)
                for (var addFlag, i = 0; i < searchedSpotsList.length; i++) {
                    addFlag = !0;
                    for (var j = 0; j < selectedSpots.length; j++)
                        if (selectedSpots[j].no == searchedSpotsList[i].no) {
                            addFlag = !1;
                            continue
                        }
                    addFlag && appendSearchedSpotsList(searchedSpotsList[i])
                }
            //호텔
            else if ("Hotel" == spotOrHotelForNextPage)
                for (var _i2 = 0; _i2 < searchedSpotsList.length; _i2++)
                    appendSearchedHotelList(searchedSpotsList[_i2])
        }
    }),
        addUserTrackingData("searchSpotsNextPage|" + np + "|" + pageNumForNextPage)
}
//추천호텔 출력
function searchMostSelectedHotels() {
    $("#spotsNoListText2").css("display", "none"),
        deleteAllSpotsList(),
        $("#searchOrRecommend").html(i18nSvc.get("recommendedHotels")),
        $("#searchResultCnt").html(""),
        $.ajax({
            type: "GET",
            url: headAddress + "/searchMostSelectedHotels",
            data: {
                cityName: cityName
            },
            success: function success(data) {
                $("[name=searchSpotOrHotelRadio]")[0].checked = !0,
                    searchedSpotsList = data,
                    $("#pageList").html(""),
                    $("#spotsNoListText").css("display", "none");
                for (var i = 0; i < searchedSpotsList.length; i++)
                    appendSearchedHotelList(searchedSpotsList[i]),
                        w3_PSopen()
            }
        })
}
//추천장소 출력
function searchMostSelectedSpots() {
    $("#spotsNoListText2").css("display", "none"),
        deleteAllSpotsList(),
        $("#searchOrRecommend").html(i18nSvc.get("recommendedSpots")),
        $("#searchResultCnt").html(""),
        $.ajax({
            type: "GET",
            url: headAddress + "/searchMostSelectedSpots",
            data: {
                cityName: cityName
            },
            success: function success(data) {
                $("[name=searchSpotOrHotelRadio]")[1].checked = !0,
                    searchedSpotsList = data,
                    $("#pageList").html(""),
                    $("#spotsNoListText").css("display", "none");
                for (var addFlag, i = 0; i < searchedSpotsList.length; i++) {
                    addFlag = !0;
                    for (var j = 0; j < selectedSpots.length; j++)
                        if (selectedSpots[j].no == searchedSpotsList[i].no) {
                            addFlag = !1;
                            continue
                        }
                    addFlag && appendSearchedSpotsList(searchedSpotsList[i]),
                        w3_PSopen()
                }
            }
        })
}
//페이징 숫자 출력
function makePagesForSearchedList(currentPage, lastPage) {
    $("#searchOrRecommend").html(i18nSvc.get("searchedResult"));
    var showingPage = 5
        , realCurrentPage = currentPage;
    5 > lastPage ? (showingPage = lastPage,
        currentPage = 0) : 0 == currentPage || 1 == currentPage || 2 == currentPage ? currentPage = 0 : currentPage == lastPage - 1 ? currentPage -= 4 : currentPage == lastPage - 2 ? currentPage -= 3 : currentPage -= 2,
        $("#spotsNoListText").css("display", "none"),
        $("#pageSectionDiv").css("display", "block"),
        $("#pageList").html("");
    for (var i = currentPage; i < currentPage + showingPage; i++)
        $("#pageList").append("<a onclick=\"searchSpotsCertainPage(" + i + ")\" id=\"pageButton" + i + "\" class=\"s-button\">" + (i + 1) + "</a>"),
        i == realCurrentPage && $("#pageButton" + i).css({
            "font-weight": "bold",
            "background-color": "#000000",
            color: "#ffffff",
            "border-radius": "2px"
        })
}
function searchSpotsCertainPage(pageNum) {
    pageNumForNextPage = pageNum,
        searchSpotsNextPage(),
        makePagesForSearchedList(pageNum, lastPage)
}
//호텔 혹은 장소 검색
function searchSpotsOrHotels() {
    !0 == $("[name=searchSpotOrHotelRadio]")[0].checked ? searchHotels() : !0 == $("[name=searchSpotOrHotelRadio]")[1].checked && searchSpots()
}
//일정생성 후 장소 추가등록 검색
function searchSpotsAfterMakeRoute() {
    return 2 > $("#searchSpotKeywordAfterMakeRoute").val().length ? void showToastMsg(i18nSvc.get("moreThanTwoLettersForSearchingKeyword")) : void (searchKeywordForNextPageAfterMakeRoute = $("#searchSpotKeywordAfterMakeRoute").val(),
        pageNumForNextPageAfterMakeRoute = 0,
        w3_SSopen(),
        $.ajax({
            type: "GET",
            url: headAddress + "/searchSpotsAfterMakeRoute",
            data: {
                cityName: cityName,
                keyword: $("#searchSpotKeywordAfterMakeRoute").val()
            },
            success: function success(data) {
                $.ajax({
                    type: "GET",
                    url: headAddress + "/getSpotsCnt",
                    data: {
                        cityName: cityName,
                        keyword: $("#searchSpotKeywordAfterMakeRoute").val()
                    },
                    success: function success(cnt) {
                        15 < cnt[0].cnt && showToastMsg(i18nSvc.get("moreThan15Results")),
                        0 == cnt[0].cnt && ($("#AfterMakeRouteText").css("display", "none"),
                            showToastMsg(i18nSvc.get("noSearchResult")))
                    }
                }),
                    deleteAllSpotsListAfterMakeRoute(),
                    searchedSpotsListAfterMakeRoute = data;
                for (var i = 0; i < searchedSpotsListAfterMakeRoute.length; i++) {
                    for (var j = 0; j < dataFromServer.spotsByDay.length; j++)
                        for (var k = 1; k < dataFromServer.spotsByDay[j].length; k++)
                            dataFromServer.spotsByDay[j][k];
                    // if (spot.no == searchedSpotsListAfterMakeRoute[i].no) {
                    //     addFlag = false;
                    //     continue;
                    // }
                    appendSearchedSpotsListAfterMakeRoute(searchedSpotsListAfterMakeRoute[i])
                }
            }
        }),
        addUserTrackingData("searchSpotsAfterMakeRoute|" + searchKeywordForNextPageAfterMakeRoute))
}
//장소 추가등록 검색결과에서 포함되지 않은 장소 목록에 선택장소 추가
function addSpotToOmittedPlaces(no) {
    for (var _spot2, i = 0; i < searchedSpotsListAfterMakeRoute.length; i++)
        if (_spot2 = searchedSpotsListAfterMakeRoute[i],
        _spot2.no == no) {
            dataFromServer.stayingInfos[0].push({
                start: 0,
                finish: 0,
                fromPrevious: 0
            });
            var addingSpotToOmittedPlacesAfterMakeRoute = JSON.parse(JSON.stringify(_spot2));
            addingSpotToOmittedPlacesAfterMakeRoute.openTime = JSON.parse(addingSpotToOmittedPlacesAfterMakeRoute.openTime),
                addingSpotToOmittedPlacesAfterMakeRoute.realStaySec = addingSpotToOmittedPlacesAfterMakeRoute.recommendedStaySec,
                addingSpotToOmittedPlacesAfterMakeRoute.memo = "",
                dataFromServer.spotsByDay[0].push(addingSpotToOmittedPlacesAfterMakeRoute),
                setMap(dataFromServer),
                $("#searchSpotKeywordAfterMakeRoute").val(""),
            600 < $(window).width() && $("#searchSpotKeywordAfterMakeRoute").focus(),
                modifyModeActivate(),
                setMsidebar2AsItIs();
            break
        }
}
//호텔검색
function searchHotels() {
    var searchHotelKeyword;
    return searchHotelKeyword = 600 >= $(window).width() ? $("#searchSpotsOrHotelsButtonInMobileWeb").val() : $("#searchSpotOrHotelKeyword").val(),
        2 > searchHotelKeyword.length ? void showToastMsg(i18nSvc.get("moreThanTwoLettersForSearchingKeyword")) : void (pageNumForNextPage = 0,
            spotOrHotelForNextPage = "Hotel",
            w3_PSopen(),
            $.ajax({
                type: "GET",
                url: headAddress + "/searchHotels",
                data: {
                    cityName: cityName,
                    keyword: searchHotelKeyword
                },
                success: function success(data) {
                    $.ajax({
                        type: "GET",
                        url: headAddress + "/getHotelsCnt",
                        data: {
                            cityName: cityName,
                            keyword: searchHotelKeyword
                        },
                        success: function success(cnt) {
                            $("#searchResultCnt").html("(" + cnt[0].cnt + i18nSvc.get("resultCnt") + ")"),
                                lastPage = Math.ceil(cnt[0].cnt / 15),
                                makePagesForSearchedList(0, lastPage)
                        }
                    }),
                        firstSpotSearchFlag ? (registerSpotToast(),
                            firstSpotSearchFlag = !1,
                        0 == data.length && $("#spotsNoListText2").css("display", "block")) : 0 == data.length ? (registerSpotToast(),
                            $("#spotsNoListText2").css("display", "block")) : $("#spotsNoListText2").css("display", "none"),
                        deleteAllSpotsList(),
                        searchedSpotsList = data;
                    for (var i = 0; i < searchedSpotsList.length; i++)
                        appendSearchedHotelList(searchedSpotsList[i])
                }
            }),
            addUserTrackingData("searchHotels|" + searchHotelKeyword))
}
//장소검색
function searchSpots() {
    var searchSpotKeyword;
    return searchSpotKeyword = 600 >= $(window).width() ? $("#searchSpotsOrHotelsButtonInMobileWeb").val() : $("#searchSpotOrHotelKeyword").val(),
        2 > searchSpotKeyword.length ? void showToastMsg(i18nSvc.get("moreThanTwoLettersForSearchingKeyword")) : void ((-1 != searchSpotKeyword.indexOf("\uACF5\uD56D") || -1 != searchSpotKeyword.indexOf("airport")) && (firstSpotSearchFlag ? setTimeout(function() {
            showToastMsg(i18nSvc.get("noNeedToSelectAirport"))
        }, 3e3) : showToastMsg(i18nSvc.get("noNeedToSelectAirport"))),
            pageNumForNextPage = 0,
            spotOrHotelForNextPage = "Spot",
            w3_PSopen(),
            $.ajax({
                type: "GET",
                url: headAddress + "/searchSpots",
                data: {
                    cityName: cityName,
                    keyword: searchSpotKeyword
                },
                success: function success(data) {
                    $.ajax({
                        type: "GET",
                        url: headAddress + "/getSpotsCnt",
                        data: {
                            cityName: cityName,
                            keyword: searchSpotKeyword
                        },
                        success: function success(cnt) {
                            $("#searchResultCnt").html("(" + cnt[0].cnt + i18nSvc.get("resultCnt") + ")"),
                                lastPage = Math.ceil(cnt[0].cnt / 15),
                                makePagesForSearchedList(0, lastPage)
                        }
                    }),
                        firstSpotSearchFlag ? (registerSpotToast(),
                            firstSpotSearchFlag = !1,
                        0 == data.length && $("#spotsNoListText2").css("display", "block")) : 0 == data.length ? (registerSpotToast(),
                            $("#spotsNoListText2").css("display", "block")) : $("#spotsNoListText2").css("display", "none"),
                        deleteAllSpotsList(),
                        searchedSpotsList = data;
                    for (var i = 0; i < searchedSpotsList.length; i++) {
                        for (var j = 0; j < selectedSpots.length; j++)
                            ;
                        appendSearchedSpotsList(searchedSpotsList[i])
                    }
                }
            }),
            addUserTrackingData("searchSpots|" + searchSpotKeyword))
}
//여행일자 세팅
function setTravelDay() {
    travelDay = $("#travelDay").val()
}
//장소 검색결과 목록에 추가
function appendSearchedSpotsList(spot) {
    var backgroundColor, bookmark = "", titleForPlaceType = "";
    0 == spot.isSpot ? (bookmark = "restaurant",
        titleForPlaceType = i18nSvc.get("restaurant"),
        backgroundColor = "#ff4081") : 1 == spot.isSpot && (bookmark = "account_balance",
        titleForPlaceType = i18nSvc.get("spot"));
    var showingName = spot.showingName;
    -1 != showingName.indexOf("(") && (600 >= $(window).width() ? showingName = showingName.split("(")[0] : showingName = showingName.split("(")[0] + "<br><div class=\"spot-eng-small-text\">" + showingName.split("(")[1].replace(/\)/g, "") + "<div>");
    var newSearchedSpot = "<li class=\"spot-card\" id=\"appendDiv" + spot.no + "\">" + "<div><div><div class=\"centered\"><div class=\"spotphotolinear\"><div class=\"spotselectedCnt\"><h7 class=\"spotselectedCntText\"><i class=\"material-icons\">place</i>" + spot.selectedCnt.toLocaleString() + "</h7></div></div><img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" id=\"cartImgNo" + spot.no + "\" loading=\"lazy\"></div></div></div>" + "<div class=\"placecardbookmark\" style=\"top:2px!important;background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\" class=\"material-icons placecardbookmark_mi\">" + bookmark + "</i></div>" + "<div class=\"placelistndwrap\"><span class=\"placelistnd2\" title=\"" + spot.showingName + "\" ><h7>" + showingName + "</h7></span></div>" + "<div class=\"spotBtnWrap\">" + "<div title=\"" + i18nSvc.get("spotInfo") + "\" class=\"btn spotbtncss\" onclick=\"spotInfoModal(" + spot.no + ")\"><i class=\"material-icons\" style=\"color:#e0e0e0;\">info</i></div>" + "<div title=\"" + i18nSvc.get("selectPlace") + "\" class=\"btn spotbtncss\" onclick=\"addSpotToSelectedSpots(" + spot.no + ")\"><i class=\"material-icons\">add</i></div></div></li>";
    $("#spotsList").append(newSearchedSpot),
        $("#appendDiv" + spot.no).hover(function() {
            isClickedToPreventMaker || (map.panTo({
                lat: spot.lat,
                lng: spot.lng
            }),
                setMarkerOnMap(spot),
                setInfoboxOnMap(i18nSvc.get("placeName") + " : " + spot.showingName + "<br>" + i18nSvc.get("address") + " : " + spot.address, marker))
        }, function() {
            deleteMarkerOnMap(spot),
            infowindow && infowindow.close()
        })
}
//일정 생성 후 장소 검색결과 목록에 추가
function appendSearchedSpotsListAfterMakeRoute(spot) {
    spot.whatDay = 0;
    var backgroundColor, bookmark = "", titleForPlaceType = "";
    0 == spot.isSpot ? (bookmark = "restaurant",
        titleForPlaceType = i18nSvc.get("restaurant"),
        backgroundColor = "#ff4081") : 1 == spot.isSpot ? (bookmark = "account_balance",
        titleForPlaceType = i18nSvc.get("spot")) : 2 == spot.isSpot && (bookmark = "hotel",
        titleForPlaceType = i18nSvc.get("hotel"));
    var showingName = spot.showingName;
    -1 != showingName.indexOf("(") && (600 >= $(window).width() ? showingName = showingName.split("(")[0] : showingName = showingName.split("(")[0] + "<br><div class=\"spot-eng-small-text\">" + showingName.split("(")[1].replace(/\)/g, "") + "<div>");
    var newSearchedSpot;
    newSearchedSpot = 600 >= $(window).width() ? "<li class=\"spot-card\" style=\"padding:0;margin:4px;\" id=\"appendDivAfterMakeRoute" + spot.no + "\">" + "<div><div><div class=\"centered\"><img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" class=\"AfterMakeRouteSpotImg\" loading=\"lazy\"></div></div></div>" + "<div class=\"placecardbookmark\" style=\"background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\" class=\"material-icons placecardbookmark_mi_AMR\">" + bookmark + "</i></div>" + "<div class=\"placelistndwrap-route\"><span class=\"placelistnd3\" style=\"color: #000;text-align: start;\" title=\"" + spot.showingName + "\"><h7 style=\"font-size: 11px;\">" + showingName + "</h7></span></div>" + "<div class=\"spotBtnWrap-route\"><div title=\"" + i18nSvc.get("addSpotToOmittedPlaces") + "\" class=\"spotbtncss-route\" onclick=\"addSpotToOmittedPlaces(" + spot.no + ")\"><i class=\"material-icons\" style=\"font-size:14px\">add</i></div>" + "</div></li>" : "<li class=\"spot-card\" style=\"padding:0;margin:4px;\" id=\"appendDivAfterMakeRoute" + spot.no + "\">" + "<div><div><div class=\"centered\"><img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" class=\"AfterMakeRouteSpotImg\" loading=\"lazy\"></div></div></div>" + "<div class=\"placecardbookmark\" style=\"background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\" class=\"material-icons placecardbookmark_mi_AMR\">" + bookmark + "</i></div>" + "<div class=\"placelistndwrap-route\"><span class=\"placelistnd3\" style=\"color: #000;text-align: start;\" title=\"" + spot.showingName + "\"><h7 style=\"font-size: 11px;\">" + showingName + "</h7></span></div>" + "<div class=\"spotBtnWrap-route\"><div title=\"" + i18nSvc.get("addSpotToOmittedPlaces") + "\" class=\"spotbtncss-route\" onclick=\"addSpotToOmittedPlaces(" + spot.no + ")\"><i class=\"material-icons\" style=\"font-size:14px\">add</i></div>" + "</div></li>",
        $("#AfterMakeRouteText").css("display", "block"),
        $("#spotsListAfterMakeRoute").append(newSearchedSpot),
        $("#appendDivAfterMakeRoute" + spot.no).hover(function() {
            isClickedToPreventMaker || (map2.panTo({
                lat: spot.lat,
                lng: spot.lng
            }),
                setMarkerOnRouteMap(spot),
                setInfoboxOnMap(i18nSvc.get("placeName") + " : " + spot.showingName + "<br>" + i18nSvc.get("address") + " : " + spot.address, marker))
        }, function() {
            deleteMarkerOnRouteMap(spot),
                infowindow.close()
        })
}
//검색장소 구글에서 장소 검색
function searchInWeb(site, searchKeyword, x, y) {
    var searchUrl;
    if ("naver" == site)
        searchUrl = "https://search.naver.com/search.naver?query=" + searchKeyword;
    else if ("google" == site)
        searchUrl = "https://www.google.com/maps/search/" + searchKeyword + "/@" + x + "," + y + ",12z/data=!3m1!4b1";
    else if ("instagram" == site)
        searchUrl = "https://www.instagram.com/explore/tags/" + searchKeyword;
    else if ("myrealtrip" == site)
        searchUrl = "https://www.myrealtrip.com/q/" + searchKeyword;
    else
        return;
    window.open(searchUrl),
        addUserTrackingData("searchInWeb|" + site + "|" + searchKeyword)
}
//호텔 검색결과 목록에 추가
function appendSearchedHotelList(spot) {
    var showingName = spot.showingName;
    -1 != showingName.indexOf("(") && (600 >= $(window).width() ? showingName = showingName.split("(")[0] : showingName = showingName.split("(")[0] + "<br><div class=\"spot-eng-small-text\">" + showingName.split("(")[1].replace(/\)/g, "") + "<div>");
    var newSearchedSpot = "<li class=\"spot-card\" style=\"padding:0;\" id=\"appendDiv" + spot.no + "\">" + "<div><div class=\"centered\"><div class=\"dayDisplayWrapStyle\" id=\"dayDisplayWrap" + spot.no + "\"></div><div class=\"spotphotolinear\"><div class=\"spotselectedCnt\"><h7 class=\"spotselectedCntText\"><i class=\"material-icons\">place</i>" + spot.selectedCnt.toLocaleString() + "</h7></div></div><img src=\"" + headAddress + "/getHotelImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" loading=\"lazy\"></div></div>" + "<div class=\"placelistndwrap\"><span class=\"placelistnd2\" title=\"" + spot.showingName + "\"><h7>" + showingName + "</h7></span>" + //이벤트용 임시. 9월말까지만. 추후 삭제 후 아래 주석 제거
        // ((cityName=='namwon' && spot.no==1383 || cityName=='jeju' && spot.no==1581) ? '<div class="hotel-event-badge" onclick="eventInfoModalOpen()">EVENT</div>' : '') +
        // '<div class="hotel-event-badge" onclick="eventInfoModalOpen()">EVENT</div>'  +
        "</div></div>" + "<div class=\"spotBtnWrap\">" + "<div title=\"" + i18nSvc.get("hotelInfo") + "\" class=\"btn spotbtncss\" onclick=\"hotelInfoModal(" + spot.no + ")\"><i class=\"material-icons\" style=\"color:#e0e0e0;\">info</i></div>" + "<div title=\"" + i18nSvc.get("selectHotel") + "\" class=\"btn spotbtncss\" onclick=\"setHotel(" + spot.no + ")\"><i class=\"material-icons\">add</i></div></div></li>";
    $("#spotsList").append(newSearchedSpot);
    // 호텔 라벨넘버 마킹 '시작'(LSH)
    for (var j = 0; j < selectedHotels.length; j++)
        if (null == selectedHotels[j])
            ;
        else if (selectedHotels[j].no == spot.no) {
            var DayLText = void 0;
            DayLText = 7 < travelDay ? "D" : "Day";
            var dayDisplayBadge = "<div id=\"hotelSetDayLabel" + [j + 1] + "\" class=\"hotelCardDayMark\"><hs style=\"padding:1px;\">" + DayLText + "" + [j + 1] + "</hs></div>";
            $("#dayDisplayWrap" + spot.no).append(dayDisplayBadge)
        }
    // 호텔 라벨넘버 마킹 '끝'
    $("#appendDiv" + spot.no).hover(function() {
        map.panTo({
            lat: spot.lat,
            lng: spot.lng
        }),
            setMarkerOnMap(spot, "hotel")
    }, function() {
        deleteMarkerOnMap(spot)
    })
}
function deleteAllSpotsList() {
    $("#spotsList").html("")
}
function deleteAllSpotsListAfterMakeRoute() {
    $("#spotsListAfterMakeRoute").html("")
}
//일자별 호텔 설정
function setHotel(no) {
    if (1 != travelDay) {
        for (var hotelChekedDay, i = 0; i < $("input[name=\"hotelDay\"]").length; i++)
            $("input[name=\"hotelDay\"]")[i].checked && (hotelChekedDay = i);
        for (var _i3 = 0; _i3 < searchedSpotsList.length; _i3++)
            if (searchedSpotsList[_i3].no == no) {
                spot = searchedSpotsList[_i3];
                break
            }
        var hotel = spot;
        setHotelMarkerOnMap(hotel, hotelChekedDay);
        var showingName = hotel.showingName;
        -1 != showingName.indexOf("(") && (600 >= $(window).width() ? showingName = showingName.split("(")[0] : showingName = showingName.split("(")[0] + "<br><div class=\"spot-eng-small-text\">" + showingName.split("(")[1].replace(/\)/g, "") + "<div>");
        var addCart = "<li class=\"display-container fade-in-right  addcartspotdiv1\" id=\"hotelCartDay" + hotelChekedDay + "\">" + "<div style=\"display:flex;padding:8px;width:100%\"><div>" + "<img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + hotel.no + "\" alt=\"Image\" loading=\"lazy\"></div>" + "<div class=\"addcartdpottextdiv\"><h7 class=\"placelistnd\" title=\"" + hotel.showingName + "\">" + showingName + "</h7></div><div onclick=\"removeSelectedHotel(" + hotelChekedDay + ")\" class=\"btn addcartspotdivbtn\">" + "<i title=\"" + i18nSvc.get("removeFromSelectedList") + "\" class=\"material-icons\">clear</i></div></div></li>";
        $("#selecteHotelsTab").get(0).click(),
            closeDailyTimesSettingArea(),
            $("#day" + hotelChekedDay + "SelectedhotelInfo").html(""),
            $("#day" + hotelChekedDay + "SelectedhotelInfo").append(addCart),
            $("#day" + hotelChekedDay + "hotelInfo").css("display", "none");
        // 호텔 라벨넘버 마킹 '시작'(LSH)
        var DayLText = 7 < travelDay ? "D" : "Day";
        var dayDisplayBadge = "<div id=\"hotelSetDayLabel" + [hotelChekedDay + 1] + "\" class=\"hotelCardDayMark\"><hs style=\"padding:1px;\">" + DayLText + "" + [hotelChekedDay + 1] + "</hs></div>";
        hotelChekedDay != $("#hotelSetDayLabel" + [hotelChekedDay]).length - 1 && $("#hotelSetDayLabel" + [hotelChekedDay + 1]).remove(),
            $("#dayDisplayWrap" + spot.no).append(dayDisplayBadge),
            showToastMsg([hotelChekedDay + 1] + i18nSvc.get("whenSelectedHotel")),
            hotelChekedDay == $("input[name=\"hotelDay\"]").length - 1 ? ($("input[name=\"hotelDay\"]")[0].checked = !0,
                $("input[name=\"hotelDay\"]")[0].focus()) : ($("input[name=\"hotelDay\"]")[hotelChekedDay + 1].checked = !0,
                $("input[name=\"hotelDay\"]")[hotelChekedDay + 1].focus()),
            selectedHotels[hotelChekedDay] = hotel,
            refreshSeletedHotelsCnt(),
            addUserTrackingData("setHotel|" + no)
    }
}
//토큰 가지고 들어올때 호텔 설정하기
function setHotelsWhenHaveToken() {
    return _setHotelsWhenHaveToken.apply(this, arguments)
}
//검색된 장소 선택시 장바구니에 추가
function _setHotelsWhenHaveToken() {
    return _setHotelsWhenHaveToken = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
            var originalHotelsDetails, i, hotelChekedDay, hotel, showingName, addCart;
            return regeneratorRuntime.wrap(function(_context3) {
                for (; ; )
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.next = 2,
                                function() {
                                    return new Promise(/*#__PURE__*/
                                        function() {
                                            var _ref2 = _asyncToGenerator(/*#__PURE__*/
                                                regeneratorRuntime.mark(function _callee2(resolve, reject) {
                                                    return regeneratorRuntime.wrap(function(_context2) {
                                                        for (; ; )
                                                            switch (_context2.prev = _context2.next) {
                                                                case 0:
                                                                    0 == dataFromServer.originalHotelsNo.length,
                                                                        $.ajax({
                                                                            url: "/getHotelDetailWithOriginalHotelsNo",
                                                                            type: "GET",
                                                                            data: {
                                                                                originalHotelsNo: JSON.stringify(dataFromServer.originalHotelsNo),
                                                                                engCityName: dataFromServer.engCityName
                                                                            },
                                                                            success: function(res) {
                                                                                originalHotelsDetails = res.originalHotelsDetails,
                                                                                    resolve(res)
                                                                            },
                                                                            fail: function(res) {
                                                                                reject(res)
                                                                            }
                                                                        });
                                                                case 2:
                                                                case "end":
                                                                    return _context2.stop();
                                                            }
                                                    }, _callee2)
                                                }));
                                            return function() {
                                                return _ref2.apply(this, arguments)
                                            }
                                        }())
                                }();
                        case 2:
                            i = 0;
                        case 3:
                            if (!(i < originalHotelsDetails.length)) {
                                _context3.next = 19;
                                break
                            }
                            if (originalHotelsDetails[i]) {
                                _context3.next = 6;
                                break
                            }
                            return _context3.abrupt("continue", 16);
                        case 6:
                            hotelChekedDay = i,
                                hotel = originalHotelsDetails[i],
                                selectedHotels[i] = hotel,
                                setHotelMarkerOnMap(hotel, hotelChekedDay),
                                showingName = hotel.showingName,
                            -1 != showingName.indexOf("(") && (600 >= $(window).width() ? showingName = showingName.split("(")[0] : showingName = showingName.split("(")[0] + "<br><div class=\"spot-eng-small-text\">" + showingName.split("(")[1].replace(/\)/g, "") + "<div>"),
                                addCart = "<li class=\"display-container fade-in-right addcartspotdiv1\" id=\"hotelCartDay" + hotelChekedDay + "\">" + "<div style=\"display:flex;padding:8px;width:100%\"><div>" + "<img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + hotel.no + "\" alt=\"Image\" loading=\"lazy\"></div>" + "<div class=\"addcartdpottextdiv\"><h7 class=\"placelistnd\" title=\"" + hotel.showingName + "\">" + showingName + "</h7></div><div onclick=\"removeSelectedHotel(" + hotelChekedDay + ")\" class=\"btn addcartspotdivbtn\">" + "<i title=\"" + i18nSvc.get("removeFromSelectedList") + "\" class=\"material-icons\">clear</i></div></div></li>",
                                $("#day" + hotelChekedDay + "SelectedhotelInfo").html(""),
                                $("#day" + hotelChekedDay + "SelectedhotelInfo").append(addCart),
                                $("#day" + hotelChekedDay + "hotelInfo").css("display", "none");
                        case 16:
                            i++,
                                _context3.next = 3;
                            break;
                        case 19:
                            refreshSeletedHotelsCnt();
                        case 20:
                        case "end":
                            return _context3.stop();
                    }
            }, _callee3)
        })),
        _setHotelsWhenHaveToken.apply(this, arguments)
}
function addSpotToSelectedSpots(no, isFromSelectAllRecommendCourse) {
    function recalculateSumOfSpotStayingMins() {
        0 == $("#stayingHoursNo" + spot.no).val() && 0 == $("#stayingMinutesNo" + spot.no).val() && $("#stayingMinutesNo" + spot.no).val(1),
            sumOfSpotStayingMins = 0;
        for (var _no, _i6 = 0; _i6 < selectedSpots.length; _i6++)
            _no = selectedSpots[_i6].no,
                sumOfSpotStayingMins += 60 * +$("#stayingHoursNo" + _no).val() + +$("#stayingMinutesNo" + _no).val();
        var sumOfSpotStayingH = Math.floor(sumOfSpotStayingMins / 60)
            , sumOfSpotStayingM = Math.floor(sumOfSpotStayingMins % 60);
        $("#sumOfSpotStayingH").html(sumOfSpotStayingH),
            $("#sumOfSpotStayingM").html(sumOfSpotStayingM)
    }
    if ($("#selecteSpotsTab").get(0).click(),
        closeDailyTimesSettingArea(),
    infowindow && infowindow.close(),
        !$("#travelDay").val())
        return void showToastMsg(i18nSvc.get("setYourTravelDate"));
    if (7 < (selectedSpots.length + 1) / $("#travelDay").val())
        return void (isFromSelectAllRecommendCourse || showToastMsg(i18nSvc.get("cantChooseMoreThan8PlacesPerDayForAverage")));
    ////// 장소 선택했을 때 왼쪽 선택목록으로 날아가는 효과
    //    var cart = $('#seletedSpotsCnt');
    //    var imgtodrag = $('#cartImgNo' + no).eq(0);
    //    if (imgtodrag) {
    //        var imgclone = imgtodrag.clone()
    //            .offset({
    //                top: imgtodrag.offset().top,
    //                left: imgtodrag.offset().left
    //            })
    //            .css({
    //                'opacity': '0.9',
    //                'position': 'absolute',
    //                'height': '55px',
    //                'width': '60px',
    //                'z-index': '100'
    //            })
    //            .appendTo($('body'))
    //            .animate({
    //                'top': cart.offset().top + 12,
    //                'left': cart.offset().left + 3,
    //                'width': 20,
    //                'height': 15
    //            }, 600, 'easeInOutExpo');
    //
    //        imgclone.animate({
    //            'width': 0,
    //            'height': 0
    //        }, function () {
    //            $(this).detach()
    //        });
    //    }
    for (var spot, i = 0; i < searchedSpotsList.length; i++)
        if (searchedSpotsList[i].no == no) {
            spot = searchedSpotsList[i];
            continue
        }
    if (!spot)
        for (var _i4 = 0; _i4 < searchedSpotsListFromRecommendedCourse.length; _i4++)
            if (searchedSpotsListFromRecommendedCourse[_i4].no == no) {
                spot = searchedSpotsListFromRecommendedCourse[_i4];
                continue
            }
    for (var _i5 = 0; _i5 < selectedSpots.length; _i5++)
        if (selectedSpots[_i5].no == spot.no && !isFromSelectAllRecommendCourse)
            return void showToastMsg(spot.showingName + i18nSvc.get("isAlreadySelected"));
    if (sumOfSpotStayingMins + spot.recommendedStaySec / 60 > totalTravelMins)
        return void (isFromSelectAllRecommendCourse || (showToastMsg(i18nSvc.get("sumOfStayingTimeOfPlacesCannotBeGreaterThanTotalTravelTime")),
            $("#totalTravelTimeArea").addClass("blink-2"),
            $("#totalSpendingTimeArea").addClass("blink-2"),
            setTimeout(function() {
                $("#totalTravelTimeArea").removeClass("blink-2"),
                    $("#totalSpendingTimeArea").removeClass("blink-2")
            }, 3e3)));
    isClickedToPreventMaker = !0,
        setTimeout(function() {
            isClickedToPreventMaker = !1
        }, 200),
        sumOfSpotStayingMins += spot.recommendedStaySec / 60;
    var sumOfSpotStayingH = Math.floor(sumOfSpotStayingMins / 60)
        , sumOfSpotStayingM = Math.floor(sumOfSpotStayingMins % 60);
    $("#sumOfSpotStayingH").html(sumOfSpotStayingH),
        $("#sumOfSpotStayingM").html(sumOfSpotStayingM),
        selectedSpots.push(spot),
        $("#chipNo" + no).addClass("chipSelectedCss"),
        $("#miNo" + no).html("check"),
        $("#appendDiv" + no).remove(),
        refreshSeletedSpotsCnt(),
        setMarkerOnMap(spot),
        map.panTo({
            lat: spot.lat,
            lng: spot.lng
        });
    var titleForPlaceType, backgroundColor, bookmark = "";
    0 == spot.isSpot ? (bookmark = "restaurant",
        backgroundColor = "#ff4081",
        titleForPlaceType = i18nSvc.get("restaurant")) : 1 == spot.isSpot && (bookmark = "account_balance",
        titleForPlaceType = i18nSvc.get("spot"));
    var recommendedStayHours = Math.floor(spot.recommendedStaySec / 3600)
        , recommendedStayMinutes = spot.recommendedStaySec % 3600 / 60
        , addCart = "<li class=\"display-container fade-in-right addcartspotdiv1\" id=\"cartNo" + spot.no + "\">" + "<div style=\"display:flex;padding:8px;width:100%\"><div>" + "<img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" loading=\"lazy\"></div>" + "<div class=\"placecardbookmark\" style=\"background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\" class=\"material-icons placecardbookmark_mi\">" + bookmark + "</i></div>" + "<div class=\"addcartdpottextdiv\"><h7 class=\"placelistnd\" title=\"" + spot.showingName + "\">" + spot.showingName + "</h7><div class=\"addcartspotdiv2\">" + "<i title=\"" + i18nSvc.get("stayingTime") + "\" class=\"material-icons\">timer</i>&nbsp&nbsp&nbsp&nbsp<input id=\"" + "stayingHoursNo" + spot.no + "\" type=\"number\" min=\"0\" max=\"24\" value=\"" + recommendedStayHours + "\" size=\"1\">" + i18nSvc.get("hours") + "&nbsp&nbsp&nbsp&nbsp<input id=\"" + "stayingMinutesNo" + spot.no + "\" type=\"number\" value=\"" + recommendedStayMinutes + "\" size=\"1\" maxlength=\"2\" min=\"0\" max=\"59\">" + i18nSvc.get("min") + "</div></div></div>" + "<div onclick=\"removeSpotFromSelectedSpots(" + spot.no + ")\" class=\"btn addcartspotdivbtn\">" + "<i title=\"" + i18nSvc.get("removeFromSelectedList") + "\" class=\"material-icons\">clear</i></div></li>";
    $("#cart2NoList").css("display", "none"),
        $("#cart2").append(addCart),
        $("#stayingHoursNo" + spot.no).change(function() {
            23 < $("#stayingHoursNo" + spot.no).val() && $("#stayingHoursNo" + spot.no).val(23),
            0 > $("#stayingHoursNo" + spot.no).val() && $("#stayingHoursNo" + spot.no).val(0),
                recalculateSumOfSpotStayingMins(),
                addUserTrackingData("stayingHours change|" + spot.no + "|" + $("#stayingHoursNo" + spot.no).val())
        }),
        $("#stayingMinutesNo" + spot.no).change(function() {
            59 < $("#stayingMinutesNo" + spot.no).val() && $("#stayingMinutesNo" + spot.no).val(59),
            0 > $("#stayingMinutesNo" + spot.no).val() && $("#stayingMinutesNo" + spot.no).val(0),
                recalculateSumOfSpotStayingMins(),
                addUserTrackingData("stayingMinutes change|" + spot.no + "|" + $("#stayingMinutesNo" + spot.no).val())
        }),
        w3_open(),
    isFromSelectAllRecommendCourse || (600 < $(window).width() && ($("#searchSpotOrHotelKeyword").val(""),
        $("#searchSpotOrHotelKeyword").focus()),
        addUserTrackingData("addSpotToSelectedSpots|" + no))
}
//토큰가지고 들어올때 장바구니에 추가
function addSpotToSelectedSpotsWhenHaveToken() {
    return _addSpotToSelectedSpotsWhenHaveToken.apply(this, arguments)
}
//장바구니에서 장소 제거
function _addSpotToSelectedSpotsWhenHaveToken() {
    return _addSpotToSelectedSpotsWhenHaveToken = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(spotNo) {
            var spot, sumOfSpotStayingH, sumOfSpotStayingM, bookmark, titleForPlaceType, backgroundColor, recommendedStayHours, recommendedStayMinutes, addCart, recalculateSumOfSpotStayingMins;
            return regeneratorRuntime.wrap(function(_context5) {
                for (; ; )
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            return recalculateSumOfSpotStayingMins = function() {
                                0 == $("#stayingHoursNo" + spot.no).val() && 0 == $("#stayingMinutesNo" + spot.no).val() && $("#stayingMinutesNo" + spot.no).val(1),
                                    sumOfSpotStayingMins = 0;
                                for (var no, i = 0; i < selectedSpots.length; i++)
                                    no = selectedSpots[i].no,
                                        sumOfSpotStayingMins += 60 * +$("#stayingHoursNo" + no).val() + +$("#stayingMinutesNo" + no).val();
                                var sumOfSpotStayingH = Math.floor(sumOfSpotStayingMins / 60)
                                    , sumOfSpotStayingM = Math.floor(sumOfSpotStayingMins % 60);
                                $("#sumOfSpotStayingH").html(sumOfSpotStayingH),
                                    $("#sumOfSpotStayingM").html(sumOfSpotStayingM)
                            }
                                ,
                                _context5.next = 3,
                                function() {
                                    return new Promise(/*#__PURE__*/
                                        function() {
                                            var _ref3 = _asyncToGenerator(/*#__PURE__*/
                                                regeneratorRuntime.mark(function _callee4(resolve, reject) {
                                                    return regeneratorRuntime.wrap(function(_context4) {
                                                        for (; ; )
                                                            switch (_context4.prev = _context4.next) {
                                                                case 0:
                                                                    $.ajax({
                                                                        url: "/getSpotsDetailWithOriginalSpotsNo",
                                                                        type: "GET",
                                                                        data: {
                                                                            originalSpotNo: spotNo,
                                                                            engCityName: dataFromServer.engCityName
                                                                        },
                                                                        success: function(res) {
                                                                            spot = res.originalSpotDetails,
                                                                                resolve(res)
                                                                        },
                                                                        fail: function(res) {
                                                                            reject(res)
                                                                        }
                                                                    });
                                                                case 1:
                                                                case "end":
                                                                    return _context4.stop();
                                                            }
                                                    }, _callee4)
                                                }));
                                            return function() {
                                                return _ref3.apply(this, arguments)
                                            }
                                        }())
                                }();
                        case 3:
                            infowindow && infowindow.close(),
                                sumOfSpotStayingMins += spot.recommendedStaySec / 60,
                                sumOfSpotStayingH = Math.floor(sumOfSpotStayingMins / 60),
                                sumOfSpotStayingM = Math.floor(sumOfSpotStayingMins % 60),
                                $("#sumOfSpotStayingH").html(sumOfSpotStayingH),
                                $("#sumOfSpotStayingM").html(sumOfSpotStayingM),
                                selectedSpots.push(spot),
                                refreshSeletedSpotsCnt(),
                                setMarkerOnMap(spot),
                                bookmark = "",
                                0 == spot.isSpot ? (bookmark = "restaurant",
                                    backgroundColor = "#ff4081",
                                    titleForPlaceType = i18nSvc.get("restaurant")) : 1 == spot.isSpot && (bookmark = "account_balance",
                                    titleForPlaceType = i18nSvc.get("spot")),
                                recommendedStayHours = Math.floor(spot.recommendedStaySec / 3600),
                                recommendedStayMinutes = spot.recommendedStaySec % 3600 / 60,
                                addCart = "<li class=\"display-container fade-in-right addcartspotdiv1\" id=\"cartNo" + spot.no + "\">" + "<div style=\"display:flex;padding:8px;width:100%\"><div>" + "<img src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + spot.no + "\" alt=\"Image\" loading=\"lazy\"></div>" + "<div class=\"placecardbookmark\" style=\"background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\" class=\"material-icons placecardbookmark_mi\">" + bookmark + "</i></div>" + "<div class=\"addcartdpottextdiv\"><h7 class=\"placelistnd\" title=\"" + spot.showingName + "\">" + spot.showingName + "</h7><div class=\"addcartspotdiv2\">" + "<i title=\"" + i18nSvc.get("stayingTime") + "\" class=\"material-icons\">timer</i>&nbsp&nbsp&nbsp&nbsp<input id=\"" + "stayingHoursNo" + spot.no + "\" type=\"number\" min=\"0\" max=\"24\" value=\"" + recommendedStayHours + "\" size=\"1\">" + i18nSvc.get("hours") + "&nbsp&nbsp&nbsp&nbsp<input id=\"" + "stayingMinutesNo" + spot.no + "\" type=\"number\" value=\"" + recommendedStayMinutes + "\" size=\"1\" maxlength=\"2\" min=\"1\" max=\"59\">" + i18nSvc.get("min") + "</div></div></div>" + "<div onclick=\"removeSpotFromSelectedSpots(" + spot.no + ")\" class=\"btn addcartspotdivbtn\">" + "<i title=\"" + i18nSvc.get("removeFromSelectedList") + "\" class=\"material-icons\">clear</i></div></li>",
                                $("#cart2").append(addCart),
                                $("#stayingHoursNo" + spot.no).change(function() {
                                    recalculateSumOfSpotStayingMins()
                                }),
                                $("#stayingMinutesNo" + spot.no).change(function() {
                                    recalculateSumOfSpotStayingMins()
                                }),
                                w3_open(),
                            600 < $(window).width() && ($("#searchSpotOrHotelKeyword").val(""),
                                $("#searchSpotOrHotelKeyword").focus());
                        case 22:
                        case "end":
                            return _context5.stop();
                    }
            }, _callee5)
        })),
        _addSpotToSelectedSpotsWhenHaveToken.apply(this, arguments)
}
function removeSpotFromSelectedSpots(no) {
    for (var i = 0; i < selectedSpots.length; i++)
        if (selectedSpots[i].no == no) {
            selectedSpots.splice(i, 1),
                sumOfSpotStayingMins -= 60 * +$("#stayingHoursNo" + no).val() + +$("#stayingMinutesNo" + no).val();
            var sumOfSpotStayingH = Math.floor(sumOfSpotStayingMins / 60)
                , sumOfSpotStayingM = Math.floor(sumOfSpotStayingMins % 60);
            $("#sumOfSpotStayingH").html(sumOfSpotStayingH),
                $("#sumOfSpotStayingM").html(sumOfSpotStayingM);
            continue
        }
    for (var _i7 = 0; _i7 < markers.length; _i7++)
        markers[_i7].spotNo == no && (markers[_i7].setMap(null),
            markers.splice(_i7, 1),
            _i7--);
    //html 요소 제거 로직 추가
    $("#cartNo" + no).remove(),
        refreshSeletedSpotsCnt(),
        addUserTrackingData("removeSpotFromSelectedSpots|" + no)
}
//장바구니에서 호텔 제거
function removeSelectedHotel(hotelChekedDay) {
    // 셀렉트호텔 데이표시 라벨제거(LSH)
    hotelMarkers[hotelChekedDay] && hotelMarkers[hotelChekedDay].setMap && hotelMarkers[hotelChekedDay].setMap(null),
        $("#hotelCartDay" + hotelChekedDay).remove(),
        $("#hotelSetDayLabel" + [hotelChekedDay + 1]).remove(),
        selectedHotels[hotelChekedDay] = null,
        $("#day" + hotelChekedDay + "hotelInfo").css("display", "block"),
        $("input[name=\"hotelDay\"]")[hotelChekedDay].checked = !0,
        $("input[name=\"hotelDay\"]")[hotelChekedDay].focus(),
        refreshSeletedHotelsCnt(),
        addUserTrackingData("removeSelectedHotel|" + hotelChekedDay)
}
//장바구니에서 장소 모두 제거 & 전체삭제
function removeAllSpotFromSelectedSpots() {
    for (var i = 0; i < selectedSpots.length; i++)
        $("#cartNo" + selectedSpots[i].no).remove();
    selectedSpots = [];
    for (var _i8 = 0; _i8 < markers.length; _i8++)
        markers[_i8].setMap(null);
    //    $('.selectCardCss').css("display", "");
    markers = [],
        refreshSeletedSpotsCnt(),
        sumOfSpotStayingMins = 0,
        $("#sumOfSpotStayingH").html(0),
        $("#sumOfSpotStayingM").html(0),
        addUserTrackingData("removeAllSpotFromSelectedSpots")
}
//장바구니에서 호텔 모두 제거 & 전체삭제
function removeAllHotelsSelectedSpots() {
    for (var i = 0; i < selectedHotels.length - 1; i++)
        removeSelectedHotel(i);
    selectedHotels = []
}
function setMakeRouteModal() {
    if (0 < travelDay) {
        for (var i = 0; i < travelDay - 1; i++)
            if (null == selectedHotels[i])
                return $("#modalResultArea").html("\n                <div id=\"alertModal\" class=\"alert-modal\">\n                    <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                        <p id=\"modalexitText\">\n                            <span>\uBAA8\uB4E0 \uC77C\uC790\uBCC4\uB85C \uD638\uD154\uC744 \uC120\uD0DD\uD558\uC9C0 \uC54A\uC73C\uC168\uC2B5\uB2C8\uB2E4.\n                            \uACC4\uC18D \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</span>\n                        </p>\n                        <div class=\"alert-button-container\">\n                            <div class=\"modal-close alert-button-ok\" onclick=\"makeRoute()\">\uD655\uC778</div>\n                            <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>"),
                    void showAlertModal();
        $("#modalResultArea").html("\n                <div id=\"alertModal\" class=\"alert-modal\">\n                    <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                        <p id=\"modalexitText\">\n                            <span>\uC77C\uC815\uC744 \uC0DD\uC131\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</span>\n                        </p>\n                        <div class=\"alert-button-container\">\n                            <div class=\"modal-close alert-button-ok\" onclick=\"makeRoute()\">\uD655\uC778</div>\n                            <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>"),
            showAlertModal()
    }
}
function closeMyro22() {
    $("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n            <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                <p id=\"modalexitText\">\n                    <span>\uD604\uC7AC \uCC3D\uC744 \uB2EB\uC73C\uC2DC\uBA74 \uC77C\uC815\uC774\n                    \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC3D\uC744 \uB2EB\uC73C\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</span>\n                </p>\n                <div class=\"alert-button-container\">\n                    <div class=\"modal-close alert-button-ok\" onclick=\"hideRoutePage()\">\uD655\uC778</div>\n                    <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                </div>\n            </div>\n            </div>\n        </div>"),
        showAlertModal()
}
//일정생성
function makeRoute() {
    hideAlertModal();
    //여행일이랑 호텔 수 비교
    // console.log(selectedHotels);
    var gestureHandlingType = "cooperative";
    600 < $(window).width() && (gestureHandlingType = ""),
        map2 = new google.maps.Map(document.getElementById("googleMapForRoute"),{
            zoom: 11,
            center: {
                lat: startLat,
                lng: startLng
            },
            gestureHandling: gestureHandlingType
        });
    for (var _spot3, reqParam = {}, reqData = {}, i = 0; i < selectedSpots.length; i++)
        _spot3 = selectedSpots[i],
            _spot3.realStaySec = 3600 * $("#stayingHoursNo" + _spot3.no).val() + 60 * $("#stayingMinutesNo" + _spot3.no).val();
    for (var daySchedule = [], dailyStartTimes = $("input[name=\"dailyStartTimes\"]"), dailyEndTimes = $("input[name=\"dailyEndTimes\"]"), weekDay = startTravelDate.getDay(), _i9 = 0; _i9 < travelDay; _i9++) {
        var startTime = dailyStartTimes[_i9].value.replace(":", "")
            , endTime = dailyEndTimes[_i9].value.replace(":", "")
            , schedule = {
            weekDay: weekDay,
            startTime: startTime,
            endTime: endTime,
            whatDay: _i9,
            complete: !1,
            oneSpotDay: !1
        };
        daySchedule.push(schedule),
            weekDay++,
        7 == weekDay && (weekDay = 0)
    }
    reqParam.daySchedule = daySchedule,
        reqParam.transportationMode = transportationMode,
        reqParam.cityName = cityName,
        reqParam.spots = selectedSpots;
    for (var _spot4, _i10 = 0; _i10 < reqParam.spots.length; _i10++)
        _spot4 = reqParam.spots[_i10],
        "object" == _typeof(_spot4.openTime) && (_spot4.openTime = JSON.stringify(_spot4.openTime));
    // for (let i = 0; i < travelDay; i++) {
    //     if (!selectedHotels[i]) {
    //         showToastMsg(i18nSvc.get('youShouldSelectHotel'));
    //         $("[name=searchSpotOrHotelRadio]")[0].checked = true;
    //         $("#searchSpotOrHotelKeyword").focus();
    //         $(".search-sidebar").addClass("heartbeat");
    //         setTimeout(function () {
    //             $(".search-sidebar").removeClass("heartbeat");
    //         }, 2500);
    //         return;
    //     }
    // }
    reqParam.hotels = selectedHotels;
    //jh
    for (var hotel, _i11 = 0; _i11 < reqParam.hotels.length; _i11++)
        hotel = reqParam.hotels[_i11],
        hotel && "object" == _typeof(hotel.openTime) && (hotel.openTime = JSON.stringify(hotel.openTime));
    //jh
    return reqParam.travelDay = $("#travelDay").val(),
        reqParam.spots.length < reqParam.travelDay ? (showToastMsg(i18nSvc.get("travelDayShouldBeGreaterThanSelectedPlaces")),
            $("[name=searchSpotOrHotelRadio]")[1].checked = !0,
            $("#searchSpotOrHotelKeyword").focus(),
            $(".search-sidebar").addClass("heartbeat"),
            void setTimeout(function() {
                $(".search-sidebar").removeClass("heartbeat")
            }, 2500)) : totalTravelMins < sumOfSpotStayingMins ? (showToastMsg(i18nSvc.get("sumOfStayingTimeOfPlacesCannotBeGreaterThanTotalTravelTime")),
            $("#totalTravelTimeArea").addClass("blink-2"),
            $("#totalSpendingTimeArea").addClass("blink-2"),
            void setTimeout(function() {
                $("#totalTravelTimeArea").removeClass("blink-2"),
                    $("#totalSpendingTimeArea").removeClass("blink-2")
            }, 3e3)) : void (// console.log(reqParam);
            //서버로부터 일정을 받아와서 setMap 호출
            reqData.data = JSON.stringify(reqParam),
                w3_SSclose(),
                $("#searchSpotKeywordAfterMakeRoute").val(""),
                $("#spotsListAfterMakeRoute").html(""),
                closePlanSideBar(),
                modifyModeDeActivate(),
                openPlanPageWidely = !1,
                getRouteAndSetMap(reqData),
                addUserTrackingData("makeRoute"))
}
//수정저장
function remakeRoute() {
    // if (socket && !fromOther) {
    //     socket.emit('remakeRoute', {
    //         savedRouteToken: savedRouteToken
    //     });
    // }
    backupDataFromServer = JSON.parse(JSON.stringify(dataFromServer)),
        setMap(dataFromServer),
        showToastMsg(i18nSvc.get("planModifed")),
        setMsidebar2AsItIs(),
    directionsDisplay && directionsDisplay.setMap(null),
        modifyModeDeActivate(),
        addUserTrackingData("remakeRoute")
}
//수정취소
function restoreRoute() {
    // if (socket && !fromOther) {
    //     socket.emit('restoreRoute', {
    //         savedRouteToken: savedRouteToken
    //     });
    // }
    dataFromServer = JSON.parse(JSON.stringify(backupDataFromServer)),
        setMap(dataFromServer),
        showToastMsg(i18nSvc.get("planModificationCanceld")),
        setMsidebar2AsItIs(),
        modifyModeDeActivate(),
        addUserTrackingData("restoreRoute")
}
//일정생성 후 새 지도창에 일정 출력
function setMap(data) {
    var tabIdx = 1;
    $("#remakeAndRestoreButtonArea").css("display", ""),
        $("#allDayDetailScheduleExpDiv").css("display", ""),
        $("#msidebar2changeButton").css("display", ""),
        $("#whatDayForDetail").html(""),
        $("#dayListButtonArea").html(""),
        $("#dailyRoute").html(""),
        $("#dailyRoute").css("display", ""),
        $("#allDayDetailScheduleDiv").html(""),
        deleteAllMarkerOnRouteMap(),
        spotsByDay = data.spotsByDay,
        stayingInfos = data.stayingInfos;
    for (var _loop = function(i) {
        var stayingInfo = stayingInfos[i]
            , dayStartTimeMin = void 0
            , dayStartTimeHHMM = void 0
            , dayShowingStartTime = void 0
            , weekDay = void 0
            , month = void 0
            , day = void 0
            , appendText = void 0
            , today = new Date(startTravelDate);
        //일정 생성 후 포함되지 않은 장소.
        if (today.setDate(startTravelDate.getDate() + i - 1),
        0 == i || (0 == spotsByDay[i].length ? (dayShowingStartTime = "10:00",
            weekDay = today.getDay() % 7,
            month = today.getMonth() + 1,
            day = today.getDate()) : (dayStartTimeMin = stayingInfo[0].start - stayingInfo[0].fromPrevious,
            dayStartTimeHHMM = getHHMMFromAbsoluteMinute(dayStartTimeMin),
            dayShowingStartTime = dayStartTimeHHMM.substr(0, 2) + ":" + dayStartTimeHHMM.substr(2, 4),
            weekDay = today.getDay() % 7,
            month = today.getMonth() + 1,
            day = today.getDate())),
        0 == i)
            appendText = "<div class=\"omissionPlaceDiv z-depth-3\" id=\"omittedPlaces\"><h7><b>" + i18nSvc.get("notIncludedPlaces") + "</b><i id=\"omissionPlaceMi\" class=\"material-icons\">control_camera</i><br><div id=\"omissionPlaceText\"><hs>" + i18nSvc.get("placesOutOfPlanIsHere") + "<br>" + i18nSvc.get("youCanDragYourPlacesHere") + "<br>" + i18nSvc.get("dragPlacesAndMoveToWhereYouWant") + "</hs></div></h7>" + "<div class=\"dailyRouteDetailSummery\" id=\"dailyRouteDetailSummery0\">" + "<div class=\"dailyRouteDetailSummeryFirstDiv\" style=\"max-height:80vh;overflow-y:auto;overflow-x:hidden;\" id=\"dailySpotsToEdit" + i + "\">";
        else {
            appendText = "<div class=\"addsdsmall\"><div class=\"input-field\" style=\"margin:5px;\"><select id=\"day" + i + "SelectBox\" style=\"height:auto;display:inline-block;width:auto;\">";
            // '<div class="s-border addsdsmall" style=""><div><h7><b>' + (i) + '일차 ' + month + '월 ' + day + '일 ' + weekDayKor[weekDay] + '요일</b></h7>' +
            // '<div class="dailyRouteDetailSummery" id="dailyRouteDetailSummery' + i + '">' +
            //일자 통째로 변경 부분
            for (var todayForSelectBox, j = 1; j < spotsByDay.length; j++) {
                todayForSelectBox = new Date(startTravelDate),
                    todayForSelectBox.setDate(startTravelDate.getDate() + j - 1);
                var weekDayForSelectBox = todayForSelectBox.getDay() % 7
                    , monthForSelectBox = todayForSelectBox.getMonth() + 1
                    , dayForSelectBox = todayForSelectBox.getDate();
                appendText += i == j ? "<option value=\"".concat(j, "\" selected><h7><b>").concat(j).concat(i18nSvc.get("day"), " ").concat(i18nSvc.get("monthList")[monthForSelectBox], " ").concat(dayForSelectBox).concat(i18nSvc.get("whatDay"), " ").concat(i18nSvc.get("weekDays")[weekDayForSelectBox], "</b></h7></option>") : "<option value=\"".concat(j, "\"><h7><b>").concat(j).concat(i18nSvc.get("day"), " ").concat(i18nSvc.get("monthList")[monthForSelectBox], " ").concat(dayForSelectBox).concat(i18nSvc.get("whatDay"), " ").concat(i18nSvc.get("weekDays")[weekDayForSelectBox], "</b></h7></option>")
            }
            appendText += "</select></div>" + "<div class=\"dailyRouteGuideText\"><hs>" + i18nSvc.get("canChangeDay") + "</hs></div>" + "<div class=\"dailyRouteDetailSummery\" id=\"dailyRouteDetailSummery" + i + "\">" + "<i class=\"material-icons\" style=\"color:" + colors[i - 1] + ";font-size: 18px;vertical-align:-3px;\">place</i><span id=\"howMuchDays" + i + "\">" + spotsByDay[i].length + "</span>  " + i18nSvc.get("spot") + (2 < spotsByDay[i].length && "en" == lang ? "s" : "") + "&nbsp;" + "<div class=\"\" style=\"margin-bottom:10px!important;\">" + // '<div class="center spotStaySFtextH"><hs>' + i18nSvc.get('start') + '</hs></div>' +
                "<div class=\"placecardHstyle\" style=\"justify-content:center;align-items:center;\">" + "<div class=\"placecardtextstyle hotelTextCss\" style=\"text-align: left;\"><h7 class=\"modalDDdiv\"></h7><h7>" + i18nSvc.get("start") + "&nbsp;</h7><input id=\"dayShowingStartTime" + i + "\" class=\"center dayShowingStartTimeInput\" type=\"time\" value=\"" + dayShowingStartTime + "\" tabindex=\"" + tabIdx + "\"></div></div></div><hr class=\"hr2\">" + "<div class=\"dailyRouteDetailSummeryFirstDiv\" id=\"dailySpotsToEdit" + i + "\">",
                tabIdx++
        }
        for (var _spot5, _j2 = 0; _j2 < spotsByDay[i].length; _j2++)
            //모바일에서는 포함되지 않은 장소들 정보 안보내게 해놨음... 그래서 그냥 임시로......하................
            if (_spot5 = spotsByDay[i][_j2],
                !(0 == i && (stayingInfo[_j2] = {
                    start: "0000",
                    finish: "0000",
                    fromPrevious: "0000"
                },
                0 == _j2))) {
                for (var spotStayingInfo = stayingInfo[_j2], spotStayingMinutes = Math.floor(_spot5.realStaySec / 60)//let spotStayingMinutes = spotStayingInfo.finish - spotStayingInfo.start;
                    ; 0 > spotStayingMinutes; )
                    spotStayingMinutes += 1440;
                var spotStayingH = Math.floor(spotStayingMinutes / 60)
                    , spotStayingM = Math.floor(spotStayingMinutes % 60)
                    , spotStayingStart = getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(2, 4)
                    , spotStayingFinish = getHHMMFromAbsoluteMinute(spotStayingInfo.finish).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(spotStayingInfo.finish).substr(2, 4)
                    , openTime = _spot5.openTime
                    , openTimeAppendText = "";
                if (0 == openTime.length || "24/7" == openTime[0])
                    for (var k = 0; 7 > k; k++)
                        openTimeAppendText += "<li>" + weekDayKor[k] + " : 00:00 ~ 24:00</li>";
                else {
                    // console.log(spot)
                    for (var openTimeByDay = [], _k = 0; 7 > _k; _k++)
                        openTimeByDay[_k] = [];
                    for (var time, _k2 = 0; _k2 < openTime.length; _k2++)
                        time = openTime[_k2],
                            openTimeByDay[time.o[0]].push(time);
                    for (var _k3 = 0; 7 > _k3; _k3++) {
                        if (openTimeAppendText += "<li>" + weekDayKor[_k3] + " : ",
                        0 < openTimeByDay[_k3].length)
                            for (var l = 0; l < openTimeByDay[_k3].length; l++) {
                                var openTimeH = openTimeByDay[_k3][l].o[1].substr(0, 2)
                                    , openTimeM = openTimeByDay[_k3][l].o[1].substr(2, 4)
                                    , closeTimeH = openTimeByDay[_k3][l].c[1].substr(0, 2)
                                    , closeTimeM = openTimeByDay[_k3][l].c[1].substr(2, 4);
                                0 < l && (openTimeAppendText += "<span style='visibility:hidden '>\uD5AB : </span>"),
                                    openTimeAppendText += openTimeH + ":" + openTimeM + " ~ " + closeTimeH + ":" + closeTimeM + "<br>"
                            }
                        else
                            openTimeAppendText += i18nSvc.get("closed")
                    }
                }
                setMarkerOnRouteMapWithNumber(_spot5, i, _j2);
                var bookmark = ""
                    , titleForPlaceType = void 0
                    , backgroundColor = void 0;
                0 == _spot5.isSpot ? (bookmark = "restaurant",
                    backgroundColor = "#ff4081",
                    titleForPlaceType = i18nSvc.get("restaurant")) : 1 == _spot5.isSpot ? (bookmark = "account_balance",
                    titleForPlaceType = i18nSvc.get("spot")) : 2 == _spot5.isSpot && (bookmark = "hotel",
                    titleForPlaceType = i18nSvc.get("hotel"));
                //각 장소 박스 그리기
                var durationHtml = "";
                0 != i && (durationHtml = "<div class=\"durationDiv\" style=\"display:flex;justify-content:center;align-items:center;height:24px;\">\n              <i title=\"".concat(i18nSvc.get("duration"), "\" class=\"material-icons\">more_vert</i>\n                <input style=\"font-size:12px;border-bottom:none;width:50px;height:auto;margin:0;text-align:end;\" type=\"number\" id=\"duration_idx_").concat(i, "_").concat(_j2, "\" value=\"").concat(dataFromServer.stayingInfos[i][_j2].fromPrevious, "\" tabindex=\"").concat(tabIdx, "\" step=\"1\"></input>").concat(i18nSvc.get("min"), "\n                </div>")),
                    appendText += "<div>" + durationHtml + "<div id=\"sortableHandleicon\" class=\"myro-sortable-handle-root\">" + "<div id=\"noToEdit_idx_".concat(i, "_").concat(_j2, "\"") + "class=\"myro-sortable-card-container\">" + "<div class=\"myro-sortable-card-image-div\">" + "<div class=\"placecardbookmark_AMR\" style=\"background-color:" + backgroundColor + "\"><i title=\"" + titleForPlaceType + "\"class=\"material-icons placecardbookmark_mi_AMR\">" + bookmark + "</i></div>" + "<img class=\"myro-sortable-card-image\" src=\"" + headAddress + "/getSpotImage/" + cityName + "?no=" + _spot5.no + "\" alt=\"Image\" loading=\"lazy\"/></div>" + "<div class=\"myro-sortable-card-contents-div\"><div class=\"myro-sortable-card-contents-div-top\">" + "<div class=\"myro-sortable-card-contents-div-L\">" + "<div class=\"myro-sortable-trigger-container\"></div>" + "<div class=\"myro-sortable-card-title\">" + _spot5.showingName.split("(")[0] + "</div>" + "<div class=\"myro-sortable-card-stay-time\" >" + "<span id=\"showSpotStayngTimeInCart_idx_".concat(i, "_").concat(_j2, "\">") + spotStayingH + "\uC2DC\uAC04" + spotStayingM + "\uBD84</span></div></div>" + "<div class=\"myro-sortable-card-contents-div-R\" onclick=\"setStayTimeToggleOverlay(".concat(i, ",").concat(_j2, ")\">") + "<div class=\"myro-sortable-card-time\"><span id=\"spotStayingStart_idx_".concat(i, "_").concat(_j2, "\">") + spotStayingStart + "</span></div><div class=\"myro-sortable-card-time\">-</div><div class=\"myro-sortable-card-time\" ><span id=\"spotStayingFinish_idx_".concat(i, "_").concat(_j2, "\">") + spotStayingFinish + "</span></div></div>" + "<div id=\"setTimeOverlay_idx_".concat(i, "_").concat(_j2, "\" class=\"setTimeOverlayClass\">") + "<div style=\"font-size: 11px;\">\uBA38\uBB34\uB294 \uC2DC\uAC04 \uC124\uC815</div>" + "<div class=\"modalspotstayinput\">" + "<input id=\"spotStayingH_idx_".concat(i, "_").concat(_j2, "\" onchange=\"changeSpotStayingHInSetTimeOverlay(").concat(i, ",").concat(_j2, ")\"") + " type=\"number\" min=\"0\" max=\"24\" value=\"" + spotStayingH + "\" step=\"1\" tabindex=\"" + tabIdx + "\">" + i18nSvc.get("hours") + "&nbsp&nbsp" + "<input id=\"spotStayingM_idx_".concat(i, "_").concat(_j2, "\" onchange=\"changeSpotStayingMInSetTimeOverlay(").concat(i, ",").concat(_j2, ")\"") + " type=\"number\" value=\"" + spotStayingM + "\" size=\"1\" maxlength=\"2\" min=\"0\" max=\"59\" tabindex=\"" + (tabIdx + 1) + "\">" + i18nSvc.get("min") + "</div>" + "<button class=\"setTimeOverlayBtn\" onclick=\"setStayTimeToggleOverlay(".concat(i, ",").concat(_j2, ")\">\uC644\uB8CC</button></div></div>") + "<div class=\"myro-sortable-card-contents-div-bottom\">" + "<div class=\"w3-dropdown-hover\"><div class=\"sortable-card-button\"" + "id=\"timeTableIcon_idx_".concat(i, "_").concat(_j2, "\">\uC2DC\uAC04\uD45C</div>") + "<div class=\"scale-in-tl w3-dropdown-content\">" + "<ul style=\"width:100%\" class=\"container padding-816\" id=\"openTimes_idx_".concat(i, "_").concat(_j2, "\"><b>") + i18nSvc.get("openHours") + "</b>" + openTimeAppendText + "</ul></div></div>" + "<div class=\"sortable-card-button\" id=\"searchInMyrealtrip_idx_".concat(i, "_").concat(_j2, "\"") + " onclick='searchInMyrealtrip(\"".concat(_spot5.showingName, "\")'>\uAD6C\uB9E4</div>") + "<div class=\"sortable-card-button\" id=\"SpotMemoOpen_idx_".concat(i, "_").concat(_j2, "\"") + " onclick=\"showSpotMemoDiv(".concat(i, ",").concat(_j2, ")\">\uBA54\uBAA8</div>") + "<div class=\"sortable-card-button\" id=\"deleteForEditScheduleButton_idx_".concat(i, "_").concat(_j2, "\">\uC0AD\uC81C</div>") + "</div>" + //메모장 시작 (LSH) 아래 display:none 해제시 메모기능 가능
                        // `<div id="SpotMemoOpen_idx_${i}_${j}"`+`class="openSpotMemobtnDiv" onclick="showSpotMemoDiv(${i},${j})"><div  class="btn openSpotMemobtn">memo</div></div>` +
                        // '<i id="sortableHandleicon" title="' + i18nSvc.get('clickAndDrag') + '" class="w3-display-right material-icons darkgray-text modalspotRTicon SHicon">import_export</i>' +
                        // '<i title="' + i18nSvc.get('removeFromSelectedList') + `" class="w3-display-right material-icons darkgray-text modalspotRTicon" style="cursor:pointer!important;" id="deleteForEditScheduleButton_idx_${i}_${j}">delete_forever</i>` +
                        "<div id=\"SpotMemoDiv_idx_".concat(i, "_").concat(_j2, "\" class=\"SpotMemoDiv\"><textarea id=\"spotMemoText_idx_").concat(i, "_").concat(_j2, "\"") + " class=\"materialize-textarea mtcss\" placeholder=\"" + i18nSvc.get("canPutShortMemo") + "\">" + _spot5.memo + "</textarea><div id=\"closeSpotMemobtnDiv".concat(i, "_").concat(_j2, "\" class=\"closeSpotMemobtnDiv\" onclick=\"closeSpotMemoDiv(").concat(i, ",").concat(_j2, ")\"><div class=\"closeSpotMemobtn\">close</div></div></div></div></div></div></div>"),
                    tabIdx += 2
            }
        if ($("#allDayDetailScheduleDiv").append(appendText),
            $(".omissionPlaceDiv .spotStaySFinput").val(""),
            $("#day" + i + "SelectBox").change(/*#__PURE__*/
                _asyncToGenerator(/*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                        var changingDayIdx, targetDayidx, temp, _j3, _j4;
                        return regeneratorRuntime.wrap(function(_context) {
                            for (; ; )
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (i != +$("#day" + i + "SelectBox").val()) {
                                            //장소별 요일까지 변경
                                            for (changingDayIdx = i,
                                                     targetDayidx = +$("#day" + i + "SelectBox").val(),
                                                     temp = dataFromServer.spotsByDay[changingDayIdx],
                                                     dataFromServer.spotsByDay[changingDayIdx] = dataFromServer.spotsByDay[targetDayidx],
                                                     dataFromServer.spotsByDay[targetDayidx] = temp,
                                                     temp = dataFromServer.stayingInfos[changingDayIdx],
                                                     dataFromServer.stayingInfos[changingDayIdx] = dataFromServer.stayingInfos[targetDayidx],
                                                     dataFromServer.stayingInfos[targetDayidx] = temp,
                                                     _j3 = 0; _j3 < dataFromServer.spotsByDay[targetDayidx].length; _j3++)
                                                dataFromServer.spotsByDay[targetDayidx][_j3].whatDay = targetDayidx;
                                            for (_j4 = 0; _j4 < dataFromServer.spotsByDay[changingDayIdx].length; _j4++)
                                                dataFromServer.spotsByDay[changingDayIdx][_j4].whatDay = changingDayIdx;
                                            setMap(dataFromServer),
                                                setMsidebar2AsItIs(),
                                                modifyModeActivate()
                                        }
                                    case 1:
                                    case "end":
                                        return _context.stop();
                                }
                        }, _callee)
                    }))),
        0 == i && 1 < spotsByDay[0].length && ($("#timeTableIcon" + spotsByDay[0][spotsByDay[0].length - 1].no).hover(function() {
            setTimeout(function() {
                $(".w3-dropdown-content").css("position", "fixed")
            }, 10)
        }, function() {
            $(".w3-dropdown-content").css("position", "absolute")
        }),
            $("#openTimes" + spotsByDay[0][spotsByDay[0].length - 1].no).hover(function() {
                setTimeout(function() {
                    $(".w3-dropdown-content").css("position", "fixed")
                }, 10)
            }, function() {
                $(".w3-dropdown-content").css("position", "absolute")
            })),
            $("#omittedPlaces").draggable({
                containment: "window"
            }),
            $("#omittedPlaces").draggable({
                cancel: "#dailyRouteDetailSummery0"
            }),
            $("#toastToRegisterSpots").css("display", "none"),
        0 != i)
            //rewnewalDailyTimes하고 나서 다시 setMap 호출하기 때문에 요일 & 시간 안맞는거 원복됨. 다시해주기.
            for (var _loop2 = function(_j5) {
                // visitInfo = {visitDay: (요일), visitTime: (방문시간, HHMM), staySec: (체류시간)}
                var spot = spotsByDay[i][_j5]
                    , spotStayingInfo = stayingInfo[_j5]
                    , spotStayingStart = getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(0, 2) + getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(2, 4)
                    , visitDay = (startTravelDate.getDay() + i - 1) % 7
                    , staySec = 3600 * +$("#spotStayingH_idx_".concat(i, "_").concat(_j5)).val() + 60 * +$("#spotStayingM_idx_".concat(i, "_").concat(_j5)).val();
                $("#toastToRegisterSpots").css("display", "none"),
                    checkTimeIfAvailable(spot, {
                        visitDay: visitDay,
                        visitTime: spotStayingStart,
                        staySec: staySec
                    }) ? ($("#openTimes_idx_".concat(i, "_").concat(_j5, " li")).each(function(index) {
                        index == visitDay ? $(this).css({
                            color: "#FFFF00"
                        }) : $(this).css({
                            color: "#ffffff"
                        })
                    }),
                        $("#timeTableIcon_idx_".concat(i, "_").concat(_j5)).css("color", "#37474f"),
                        $("#timeTableIcon_idx_".concat(i, "_").concat(_j5)).removeClass("heartbeat")) : ($("#timeTableIcon_idx_".concat(i, "_").concat(_j5)).css("color", "#FF0000"),
                        $("#timeTableIcon_idx_".concat(i, "_").concat(_j5)).addClass("heartbeat"),
                        $("#openTimes_idx_".concat(i, "_").concat(_j5, " li")).each(function(index) {
                            index == visitDay ? $(this).css({
                                color: "#FF0000"
                            }) : $(this).css({
                                color: "#ffffff"
                            })
                        }),
                        showToastMsg(i18nSvc.get("scheduleProblem")))
            }, _j5 = 0; _j5 < spotsByDay[i].length; _j5++)
                _loop2(_j5);
        //호텔 출발시간 변경 -> 날짜 시작시간 변경으로 수정(2021.07.24 토요일 밤에 준형준영 단둘이)
        $("#dayShowingStartTime" + i).change(function() {
            changDayStartTime(i, $("#dayShowingStartTime" + i).val(), !1)
        });
        for (var _loop3 = function(_j6) {
            var spot = spotsByDay[i][_j6];
            //카드 클릭시 마커 바운스
            $("#noToEdit_idx_".concat(i, "_").concat(_j6)).click(function() {
                for (var _loop5 = function(_k4) {
                    markersOnRouteMap[_k4].spotNo == spot.no && (markersOnRouteMap[_k4].setAnimation(google.maps.Animation.BOUNCE),
                        setTimeout(function() {
                            markersOnRouteMap[_k4].setAnimation()
                        }, 1500))
                }, _k4 = 0; _k4 < markersOnRouteMap.length; _k4++)
                    _loop5(_k4)
            }),
                $("#spotStayingH_idx_".concat(i, "_").concat(_j6)).change(function() {
                    changeSpotStayingH(spot, i, _j6, $("#spotStayingH_idx_".concat(i, "_").concat(_j6)).val(), !1),
                        addUserTrackingData("changeSpotStayingH|" + "".concat(i, "_").concat(_j6) + "|" + $("#spotStayingH_idx_".concat(i, "_").concat(_j6)).val() + ":" + $("#spotStayingM_idx_".concat(i, "_").concat(_j6)).val())
                }),
                $("#spotStayingM_idx_".concat(i, "_").concat(_j6)).change(function() {
                    changeSpotStayingM(spot, i, _j6, $("spotStayingM_idx_".concat(i, "_").concat(_j6)).val(), !1),
                        addUserTrackingData("changeSpotStayingM|" + "".concat(i, "_").concat(_j6) + "|" + $("#spotStayingH_idx_".concat(i, "_").concat(_j6)).val() + ":" + $("#spotStayingM_idx_".concat(i, "_").concat(_j6)).val())
                }),
                $("#spotMemoText_idx_".concat(i, "_").concat(_j6)).on("change keyup paste", function() {
                    100 < $(this).val().length && $(this).val($(this).val().substr(0, 100));
                    var memo = $(this).val();
                    changeSpotMemo(spot, memo)
                }),
                $("#duration_idx_".concat(i, "_").concat(_j6)).change(function() {
                    0 > $("#duration_idx_".concat(i, "_").concat(_j6)).val() && $("#duration_idx_".concat(i, "_").concat(_j6)).val(0),
                        stayingInfos[i][_j6].fromPrevious = +$("#duration_idx_".concat(i, "_").concat(_j6)).val(),
                        addUserTrackingData("changeDuration|" + "".concat(i, "_").concat(_j6) + "|" + $("#duration_idx_".concat(i, "_").concat(_j6)).val()),
                        rewnewalDailyTimes(_j6, i),
                        modifyModeActivate()
                })
        }, _j6 = 0; _j6 < spotsByDay[i].length; _j6++)
            _loop3(_j6);
        //장소 삭제
        for (var _loop4 = function(_j7) {
            var spot = spotsByDay[i][_j7];
            $("#deleteForEditScheduleButton_idx_".concat(i, "_").concat(_j7)).click(function() {
                var deleteFlag = confirm(i18nSvc.get("sureToRemove"));
                deleteFlag && (// if (spotsByDay[i].length == 2 && i != 0) {
                    //     showToastMsg(i18nSvc.get('atLeastOnePlace'));
                    //     return;
                    // }
                    deleteSpotFromPlan(spot, i, _j7, !1),
                        addUserTrackingData("deleteSpotFromPlan|" + spot.no))
            })
        }, _j7 = 0; _j7 < spotsByDay[i].length; _j7++)
            _loop4(_j7);
        // const t0 = performance.now()
        Sortable.create($("#dailySpotsToEdit" + i)[0], {
            handle: ".myro-sortable-trigger-container",
            // animation: 150,
            group: {
                name: "dailySchedule",
                pull: !0,
                put: !0
            },
            // delay : 300 ,
            //어쨌든 옮길때 장소 하나뿐이면 취소
            onMove: function onMove(/**Event*/
                                    evt) {
                var from = evt.from.id.charAt(evt.from.id.length - 1)
                    , to = evt.to.id.charAt(evt.to.id.length - 1);
                //미포함 장소로 이동
                // if (to == 0) {
                //     return false;
                // }
                // if (spotsByDay[from].length == 2 && from != 0) {
                // showToastMsg("하루에 최소한 한개의 일정이 필요합니다.");
                // return false;
                // }
            },
            //다른 리스트로 옮길때
            onAdd: function onAdd(/**Event*/
                                  evt) {
                //console.log("onAdd", evt);
                var from = evt.from.id.split("dailySpotsToEdit")[1]
                    , fromIdx = evt.oldIndex
                    , to = evt.to.id.split("dailySpotsToEdit")[1]
                    , toIdx = evt.newIndex;
                moveSpotToOtherDay(from, fromIdx, to, toIdx, !1),
                    addUserTrackingData("moveSpotToOtherDay|" + from + "|" + fromIdx + "|" + to + "|" + toIdx)
            },
            //리스트 안에서 옮길때
            onUpdate: function onUpdate(/**Event*/
                                        evt) {
                var fromIdx = evt.oldIndex
                    , toIdx = evt.newIndex
                    , dayIdx = evt.to.id.split("dailySpotsToEdit")[1];
                moveSpotInSameDay(dayIdx, toIdx, fromIdx, !1),
                    addUserTrackingData("moveSpotInSameDay|" + dayIdx + "|" + fromIdx + "|" + toIdx)
            }
        })
    }, i = 0; i < spotsByDay.length; i++)
        _loop(i);
    map2.panTo({
        lat: data.spotsByDay[0][0].lat,
        lng: data.spotsByDay[0][0].lng
    }),
        drawAllFlightPath(),
        $("#dayListButtonArea").html("");
    for (var dayListButtonAppendHtml, _i12 = 1; _i12 < spotsByDay.length; _i12++)
        dayListButtonAppendHtml = "<div onclick=\"openDayDetailPlan(" + _i12 + ")\">" + "<div id=\"dayButton" + _i12 + "\" class=\"daybutton\" style=\"color: #000000;\"><h7>" + i18nSvc.get("day") + _i12 + "</h7></div>" + "</div>",
            $("#dayListButtonArea").append(dayListButtonAppendHtml);
    $("#travelDayForRouteMap").html($("#travelDay").val()),
        $("#dailyRoute").html(""),
        $("#dailyRoute").css("display", "none"),
        $("#allDayDetailScheduleDiv").css("display", "")
}
//일자별 호텔 출발시간(하루 시작시간) 변경
function changDayStartTime(i) {
    // if (socket && !fromOther) {
    //     socket.emit('changeHotelDepartTime', {
    //         i: i,
    //         value: value,
    //         savedRouteToken: savedRouteToken
    //     });
    // } else {
    //     $("#dayShowingStartTime" + i).val(value);
    // }
    rewnewalDailyTimes(0, i),
        modifyModeActivate()
}
//장소별 머무는 시간(시간만) 변경
function changeSpotStayingH(spot, i, j) {
    23 < $("#spotStayingH_idx_".concat(i, "_").concat(j)).val() && $("#spotStayingH_idx_".concat(i, "_").concat(j)).val(23),
        spot.realStaySec = 3600 * +$("#spotStayingH_idx_".concat(i, "_").concat(j)).val() + 60 * +$("#spotStayingM_idx_".concat(i, "_").concat(j)).val(),
        rewnewalDailyTimes(j, i),
        modifyModeActivate()
}
//장소별 머무는 시간(분만) 변경
function changeSpotStayingM(spot, i, j) {
    59 < $("#spotStayingM_idx_".concat(i, "_").concat(j)).val() && $("#spotStayingM_idx_".concat(i, "_").concat(j)).val(59),
        spot.realStaySec = 3600 * +$("#spotStayingH_idx_".concat(i, "_").concat(j)).val() + 60 * +$("#spotStayingM_idx_".concat(i, "_").concat(j)).val(),
        rewnewalDailyTimes(j, i),
        modifyModeActivate()
}
//장소별 메모 변경
function changeSpotMemo(spot, memo) {
    //나중에 소켓부분
    spot.memo = memo,
        modifyModeActivate()
}
//일정에서 장소삭제
function deleteSpotFromPlan() {
    return _deleteSpotFromPlan.apply(this, arguments)
}
//일정에서 장소를 다른 날로 이동
function _deleteSpotFromPlan() {
    return _deleteSpotFromPlan = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee6(spot, i, j) {
            var doRestForRemoveAwait;
            return regeneratorRuntime.wrap(function(_context6) {
                for (; ; )
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (doRestForRemoveAwait = function() {
                                stayingInfos[i].splice(j, 1),
                                    spotsByDay[i].splice(j, 1),
                                    $("#howMuchDays" + i).html(+$("#howMuchDays" + i).html() - 1),
                                    rewnewalDailyTimes(j, i),
                                    setMap(dataFromServer),
                                    setMsidebar2AsItIs()
                            }
                                ,
                                !(spotsByDay[i][j + 1] && 0 != i)) {
                                _context6.next = 9;
                                break
                            }
                            if (0 != j) {
                                _context6.next = 6;
                                break
                            }
                            stayingInfos[i][j + 1].fromPrevious = 0,
                                _context6.next = 9;
                            break;
                        case 6:
                            return _context6.next = 8,
                                getDurationBetweenSpotsWithNo(spotsByDay[i][j - 1].no, spotsByDay[i][j + 1].no);
                        case 8:
                            stayingInfos[i][j + 1].fromPrevious = _context6.sent;
                        case 9:
                            doRestForRemoveAwait(),
                                modifyModeActivate();
                        case 11:
                        case "end":
                            return _context6.stop();
                    }
            }, _callee6)
        })),
        _deleteSpotFromPlan.apply(this, arguments)
}
function moveSpotToOtherDay() {
    return _moveSpotToOtherDay.apply(this, arguments)
}
//일정에서 장소를 같은 날짜 안에서 순서변경
function _moveSpotToOtherDay() {
    return _moveSpotToOtherDay = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee7(from, fromIdx, to, toIdx) {
            var doRestForRemoveAwait;
            return regeneratorRuntime.wrap(function(_context7) {
                for (; ; )
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            if (doRestForRemoveAwait = function() {
                                0 != from && rewnewalDailyTimes(fromIdx, from),
                                    rewnewalDailyTimes(toIdx, to),
                                    $("#howMuchDays" + from).html(+$("#howMuchDays" + from).html() - 1),
                                    $("#howMuchDays" + to).html(+$("#howMuchDays" + to).html() + 1),
                                    setMap(dataFromServer),
                                    setMsidebar2AsItIs()
                            }
                                ,
                            0 == from && fromIdx++,
                            0 == to && toIdx++,
                                spotsByDay[from][fromIdx].whatDay = +to,
                                stayingInfos[to].splice(toIdx, 0, stayingInfos[from].splice(fromIdx, 1)[0]),
                                spotsByDay[to].splice(toIdx, 0, spotsByDay[from].splice(fromIdx, 1)[0]),
                                !(spotsByDay[from][fromIdx] && 0 != from && 0 < spotsByDay[from].length)) {
                                _context7.next = 14;
                                break
                            }
                            if (0 != fromIdx) {
                                _context7.next = 11;
                                break
                            }
                            stayingInfos[from][fromIdx].fromPrevious = 0,
                                _context7.next = 14;
                            break;
                        case 11:
                            return _context7.next = 13,
                                getDurationBetweenSpotsWithNo(spotsByDay[from][fromIdx - 1].no, spotsByDay[from][fromIdx].no);
                        case 13:
                            stayingInfos[from][fromIdx].fromPrevious = _context7.sent;
                        case 14:
                            if (0 == to) {
                                _context7.next = 26;
                                break
                            }
                            if (0 != toIdx) {
                                _context7.next = 19;
                                break
                            }
                            stayingInfos[to][toIdx].fromPrevious = 0,
                                _context7.next = 22;
                            break;
                        case 19:
                            return _context7.next = 21,
                                getDurationBetweenSpotsWithNo(spotsByDay[to][toIdx - 1].no, spotsByDay[to][toIdx].no);
                        case 21:
                            stayingInfos[to][toIdx].fromPrevious = _context7.sent;
                        case 22:
                            if (!spotsByDay[to][toIdx + 1]) {
                                _context7.next = 26;
                                break
                            }
                            return _context7.next = 25,
                                getDurationBetweenSpotsWithNo(spotsByDay[to][toIdx].no, spotsByDay[to][toIdx + 1].no);
                        case 25:
                            stayingInfos[to][toIdx + 1].fromPrevious = _context7.sent;
                        case 26:
                            doRestForRemoveAwait(),
                                modifyModeActivate();
                        case 28:
                        case "end":
                            return _context7.stop();
                    }
            }, _callee7)
        })),
        _moveSpotToOtherDay.apply(this, arguments)
}
function moveSpotInSameDay() {
    return _moveSpotInSameDay.apply(this, arguments)
}
//바뀌기 시작한 부분,어느날이 바꼈는지 입력받아 바뀌기 시작한 부분부터 시간 다시 계산
function _moveSpotInSameDay() {
    return _moveSpotInSameDay = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee8(dayIdx, toIdx, fromIdx) {
            var i, doRestForRemoveAwait;
            return regeneratorRuntime.wrap(function(_context8) {
                for (; ; )
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            if (doRestForRemoveAwait = function() {
                                var changeStart = fromIdx;
                                fromIdx > toIdx && (changeStart = toIdx),
                                    rewnewalDailyTimes(changeStart, dayIdx),
                                    setMap(dataFromServer),
                                    setMsidebar2AsItIs()
                            }
                                ,
                            0 == dayIdx && (toIdx++,
                                fromIdx++),
                                stayingInfos[dayIdx].splice(toIdx, 0, stayingInfos[dayIdx].splice(fromIdx, 1)[0]),
                                spotsByDay[dayIdx].splice(toIdx, 0, spotsByDay[dayIdx].splice(fromIdx, 1)[0]),
                            0 == dayIdx) {
                                _context8.next = 14;
                                break
                            }
                            (0 == fromIdx || 0 == toIdx) && (stayingInfos[dayIdx][0].fromPrevious = 0),
                                i = 1;
                        case 7:
                            if (!(i < spotsByDay[dayIdx].length)) {
                                _context8.next = 14;
                                break
                            }
                            return _context8.next = 10,
                                getDurationBetweenSpotsWithNo(spotsByDay[dayIdx][i - 1].no, spotsByDay[dayIdx][i].no);
                        case 10:
                            stayingInfos[dayIdx][i].fromPrevious = _context8.sent;
                        case 11:
                            i++,
                                _context8.next = 7;
                            break;
                        case 14:
                            doRestForRemoveAwait(),
                                modifyModeActivate();
                        case 16:
                        case "end":
                            return _context8.stop();
                    }
            }, _callee8)
        })),
        _moveSpotInSameDay.apply(this, arguments)
}
function rewnewalDailyTimes(startIdx, whatdayIdx) {
    whatdayIdx = +whatdayIdx;
    for (var _ret, _loop6 = function(i) {
        if (0 == whatdayIdx)
            return "break";
        var newStartAbsoluteMin = void 0
            , newFinishAbsoluteMin = void 0
            , stayingMin = Math.floor(spotsByDay[whatdayIdx][i].realStaySec / 60);
        for (newStartAbsoluteMin = 0 == i ? +(60 * $("#dayShowingStartTime" + whatdayIdx).val().substr(0, 2)) + +$("#dayShowingStartTime" + whatdayIdx).val().substr(3, 5) + stayingInfos[whatdayIdx][i].fromPrevious : stayingInfos[whatdayIdx][i - 1].finish + stayingInfos[whatdayIdx][i].fromPrevious,
                 newFinishAbsoluteMin = newStartAbsoluteMin + stayingMin; 1440 <= newStartAbsoluteMin; )
            newStartAbsoluteMin -= 1440;
        for (; 0 > newStartAbsoluteMin; )
            newStartAbsoluteMin += 1440;
        for (; 1440 <= newFinishAbsoluteMin; )
            newFinishAbsoluteMin -= 1440;
        for (; 0 > newFinishAbsoluteMin; )
            newFinishAbsoluteMin += 1440;
        stayingInfos[whatdayIdx][i].start = newStartAbsoluteMin,
            stayingInfos[whatdayIdx][i].finish = newFinishAbsoluteMin;
        var spotStayingStart = getHHMMFromAbsoluteMinute(newStartAbsoluteMin).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(newStartAbsoluteMin).substr(2, 2)
            , spotStayingFinish = getHHMMFromAbsoluteMinute(newFinishAbsoluteMin).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(newFinishAbsoluteMin).substr(2, 2)
            , spot = spotsByDay[whatdayIdx][i]
            , visitDay = (startTravelDate.getDay() + whatdayIdx - 1) % 7
            , visitTime = getHHMMFromAbsoluteMinute(newStartAbsoluteMin)
            , staySec = 3600 * +$("#spotStayingH_idx_".concat(whatdayIdx, "_").concat(i)).val() + 60 * +$("#spotStayingM_idx_".concat(whatdayIdx, "_").concat(i)).val();
        $("#toastToRegisterSpots").css("display", "none"),
            checkTimeIfAvailable(spot, {
                visitDay: visitDay,
                visitTime: visitTime,
                staySec: staySec
            }) ? ($("#openTimes_idx_".concat(whatdayIdx, "_").concat(i, " li")).each(function(index) {
                index == visitDay ? $(this).css({
                    color: "#FFFF00"
                }) : $(this).css({
                    color: "#ffffff"
                })
            }),
                $("#timeTableIcon_idx_".concat(whatdayIdx, "_").concat(i)).css("color", "#37474f"),
                $("#timeTableIcon_idx_".concat(whatdayIdx, "_").concat(i)).removeClass("heartbeat")) : ($("#timeTableIcon_idx_".concat(whatdayIdx, "_").concat(i)).css("color", "#FF0000"),
                $("#timeTableIcon_idx_".concat(whatdayIdx, "_").concat(i)).addClass("heartbeat"),
                $("#openTimes_idx_".concat(whatdayIdx, "_").concat(i, " li")).each(function(index) {
                    index == visitDay ? $(this).css({
                        color: "#FF0000"
                    }) : $(this).css({
                        color: "#ffffff"
                    })
                }),
                showToastMsg(i18nSvc.get("scheduleProblem"))),
            $("#spotStayingStart_idx_".concat(whatdayIdx, "_").concat(i)).html(spotStayingStart),
            $("#spotStayingFinish_idx_".concat(whatdayIdx, "_").concat(i)).html(spotStayingFinish),
            setTimeout(function() {
                $("#spotStayingStart_idx_".concat(whatdayIdx, "_").concat(i)).addClass("blink-1"),
                    $("#spotStayingFinish_idx_".concat(whatdayIdx, "_").concat(i)).addClass("blink-1"),
                    setTimeout(function() {
                        $("#spotStayingStart_idx_".concat(whatdayIdx, "_").concat(i)).removeClass("blink-1"),
                            $("#spotStayingFinish_idx_".concat(whatdayIdx, "_").concat(i)).removeClass("blink-1")
                    }, 200 * i + 1e3)
            }, 200 * i)
    }, i = startIdx; i < stayingInfos[whatdayIdx].length && (_ret = _loop6(i),
    "break" !== _ret); i++)
        ;
}
//두 장소간의 거리를 서버에서 받아온다
function getDurationBetweenSpotsWithNo(startPointNo, destPointNo) {
    return new Promise(function(resolve) {
            showLoading(),
                $.ajax({
                    type: "GET",
                    url: headAddress + "/getDurationBetweenSpotsWithNo",
                    data: {
                        transportationMode: transportationMode,
                        cityName: cityName,
                        startPointNo: startPointNo,
                        destPointNo: destPointNo
                    },
                    success: function success(data) {
                        hideLoading(),
                            resolve(Math.floor(data.duration / 60))
                    }
                })
        }
    )
}
//서버로부터 일정을 받아와서 setMap 호출
function getRouteAndSetMap(reqData) {
    showLoading(i18nSvc.get("waitCreatingTravelPlan")),
        $.ajax({
            type: "POST",
            url: headAddress + "/makeRoute",
            data: reqData,
            success: function success(data) {
                //console.log(data);
                dataFromServer = data,
                    backupDataFromServer = JSON.parse(JSON.stringify(dataFromServer)),
                    setMap(dataFromServer)
            },
            fail: function fail() {
                showToastMsg(i18nSvc.get("failToMakePlan"))
            },
            complete: function complete() {
                hideLoading()
            }
        }),
        document.getElementById("routepage").style.display = "block",
        $("html, body").css({
            overflow: "hidden",
            height: "100%"
        })
}
// 지도에 장소마커 설정
function setMarkerOnMap(spot, icon) {
    var markerName = "/marker-icon";
    0 == spot.isSpot && (markerName += "-res"),
        marker = new google.maps.Marker({
            position: {
                lat: +spot.lat,
                lng: +spot.lng
            },
            label: {
                text: spot.showingName.split("(")[0].replace(" ", "").substr(0, 2),
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "500"
            },
            map: map
        });
    // 호텔 이미지 및 라벨 작업 '시작'(LSH)
    var iconH = {
        url: headAddress + "/myro_image/hotel-imgN.png",
        scaledSize: new google.maps.Size(30,30)
    };
    // 호텔 이미지 및 라벨 작업 '끝'
    icon && "hotel" == icon ? marker.setIcon(iconH) : marker.setIcon({
        url: headAddress + markerName,
        scaledSize: new google.maps.Size(30,30)
    }),
        marker.spotNo = spot.no,
        marker.setMap(map),
        markers.push(marker),
        marker.addListener("click", function() {
            // openLocationInfo("" + spot.showingName + "<br>주소 : " + spot.address, marker, 'Spot', spot.no);
            // openLocationInfo('<h3 class="spot-info-title">' + spot.showingName.split("(")[0] + '</h3><div class="spot-info-eng-text">' + (spot.showingName.split("(")[1] ? spot.showingName.split("(")[1].replace(/\)/g,'') : '') + '</div><p class="">' + spot.address + "</p>",
            // '<div class="place-search-btn-wrapper">' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'google\', \'' + spot.showingName.replace("\'", "\\'") + '\', \'' + spot.lat + '\', \'' + spot.lng + '\')"><img src="myro_image/googlemaps_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'naver\', \'' + spot.showingName.split("(")[0] + '\')"><img src="myro_image/naver_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'instagram\', \'' + spot.showingName.split("(")[0].replace(/(\s*)/g, "") + '\')"><img src="myro_image/instagram_circle_btn.png" alt="logo" /></div></div>' +
            // '</div>', marker, 'Spot', spot.no);
            spotInfoModal(spot.no, !0)
        })
}
// 지도에 호텔마커 설정
function setHotelMarkerOnMap(hotel, hotelChekedDay) {
    hotelMarkers[hotelChekedDay] && hotelMarkers[hotelChekedDay].setMap && hotelMarkers[hotelChekedDay].setMap(null),
        marker = new google.maps.Marker({
            position: {
                lat: +hotel.lat,
                lng: +hotel.lng
            },
            label: {
                //			text: hotel.showingName.split("(")[0].replace(" ", "").substr(0, 2),
                text: $.trim(hotel.showingName.split("(")[0]),
                // 호텔 이름 표시 ( 기준으로 영문 잘라내고 공백제거(LSH)
                color: "#000000",
                fontSize: "12px",
                fontWeight: "700"
            },
            map: map
        });
    // 호텔 이미지 및 라벨 작업 '시작'(LSH)
    var iconH = {
        url: "/myro_image/hotel-img.png",
        scaledSize: new google.maps.Size(30,30),
        labelOrigin: new google.maps.Point(15,-1)
    };
    // 호텔 이미지 및 라벨 작업 '끝'
    // 이미지주소변경(LSH)
    marker.setIcon(iconH),
        marker.spotNo = hotel.no,
        marker.setMap(map),
        hotelMarkers[hotelChekedDay] = marker,
        marker.addListener("click", function() {
            // openLocationInfo("" + hotel.showingName + "<br>주소 : " + hotel.address, marker, 'Hotel', hotel.no);
            // openLocationInfo('<h3 class="spot-info-title">' + hotel.showingName.split("(")[0] + '</h3><div class="spot-info-eng-text">' + (hotel.showingName.split("(")[1] ? hotel.showingName.split("(")[1].replace(/\)/g,'') : '') + '</div><p class="">' + hotel.address + "</p>",
            // '<div class="place-search-btn-wrapper">' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'google\', \'' + hotel.showingName.replace("\'", "\\'") + '\', \'' + spot.lat + '\', \'' + spot.lng + '\')"><img src="myro_image/googlemaps_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'naver\', \'' + hotel.showingName.split("(")[0] + '\')"><img src="myro_image/naver_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'instagram\', \'' + hotel.showingName.split("(")[0].replace(/(\s*)/g, "") + '\')"><img src="myro_image/instagram_circle_btn.png" alt="logo" /></div></div>' +
            // '</div>', marker, 'Hotel', hotel.no);
            hotelInfoModal(hotel.no, !0)
        })
}
// 지도에 마커 지우기
function deleteMarkerOnMap(spot) {
    for (var i = 0; i < markers.length; i++)
        markers[i].spotNo == spot.no && (markers[i].setMap(null),
            markers.splice(i, 1),
            i--)
}
// 지도에 마커 전부 지우기
function deleteAllMarkerOnMap() {
    for (var i = 0; i < markers.length; i++)
        markers[i].setMap(null);
    markers = []
}
// infobox 생성
function setInfoboxOnMap(content, marker) {
    infowindow = new google.maps.InfoWindow({
        content: content
    }),
        infowindow.open(map, marker)
}
// 일정생성 후 지도에 장소마커 설정
function setMarkerOnRouteMapWithNumber(spot, dayOrder, orderIndex) {
    var markerImageName = dayOrder
        , text = orderIndex + 1 + "";
    0 == dayOrder ? text = "?" : 0 == spot.isSpot ? (markerImageName += "-res",
        text = " ") : (2 == spot.isSpot || spot.no == airportNo) && (text = " "),
        marker = new google.maps.Marker({
            position: {
                lat: +spot.lat,
                lng: +spot.lng
            },
            label: {
                text: text,
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "500"
            },
            //아이콘 바꾸기
            map: map2
        }),
        marker.setIcon({
            url: headAddress + "/markerByDay?whatDay=" + markerImageName,
            scaledSize: new google.maps.Size(28,28)
        });
    var iconH, iconA;
    // 이미지주소변경(LSH)
    spot.no == airportNo ? (iconA = {
        url: "/myro_image/airport-img.png",
        scaledSize: new google.maps.Size(30,30),
        labelOrigin: new google.maps.Point(15,-2)
    },
        marker.setIcon(iconA)) : 2 == spot.isSpot && (iconH = {
        url: "/myro_image/hotel-img.png",
        scaledSize: new google.maps.Size(30,30),
        labelOrigin: new google.maps.Point(15,-2)
    },
        marker.setIcon(iconH)),
        marker.spotNo = spot.no,
        marker.setMap(map2),
        marker.addListener("click", function() {
            // openLocationInfo("" + spot.showingName + "<br>주소 : " + spot.address, marker , 'Spot', spot.no);
            // openLocationInfo('<h3 class="spot-info-title">' + spot.showingName.split("(")[0] + '</h3><div class="spot-info-eng-text">' + (spot.showingName.split("(")[1] ? spot.showingName.split("(")[1].replace(/\)/g,'') : '') + '</div><p class="">' + spot.address + "</p>",
            // '<div class="place-search-btn-wrapper">' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'google\', \'' + spot.showingName.replace("\'", "\\'") + '\', \'' + spot.lat + '\', \'' + spot.lng + '\')"><img src="myro_image/googlemaps_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'naver\', \'' + spot.showingName.split("(")[0] + '\')"><img src="myro_image/naver_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'instagram\', \'' + spot.showingName.split("(")[0].replace(/(\s*)/g, "") + '\')"><img src="myro_image/instagram_circle_btn.png" alt="logo" /></div></div>' +
            // '</div>', marker, 'Spot', spot.no);
            spotInfoModal(spot.no, !0)
        }),
        markersOnRouteMap.push(marker)
}
// 일정생성 직후 지도에 호텔마커 설정 / 일자별 누를때 호텔 & 장소마커 설정
function setMarkerOnRouteMap(spot, icon) {
    var markerName = spot.whatDay;
    0 == spot.isSpot && (markerName += "-res"),
        marker = new google.maps.Marker({
            position: {
                lat: +spot.lat,
                lng: +spot.lng
            },
            label: {
                //            text: spot.showingName,
                //            text: spot.showingName.split("(")[0].replace(" ", "").substr(0, 2),
                text: $.trim(spot.showingName.split("(")[0]),
                // 호텔 이름 표시 ( 기준으로 영문 잘라내고 공백제거(LSH)
                color: "#000000",
                fontSize: "12px",
                fontWeight: "700"
            },
            map: map2
        });
    // 호텔 이미지 및 라벨 작업 '시작'(LSH)
    var iconH = {
        url: "/myro_image/hotel-img.png",
        scaledSize: new google.maps.Size(30,30),
        labelOrigin: new google.maps.Point(15,-2)
    };
    // 호텔 이미지 및 라벨 작업 '끝'
    icon && "hotel" == icon ? marker.setIcon(iconH) : marker.setIcon({
        url: headAddress + "/markerByDay?whatDay=" + markerName,
        scaledSize: new google.maps.Size(28,28)
    }),
        marker.spotNo = spot.no,
        marker.setMap(map2),
        marker.addListener("click", function() {
            // openLocationInfo('<h3 class="spot-info-title">' + spot.showingName.split("(")[0] + '</h3><div class="spot-info-eng-text">' + (spot.showingName.split("(")[1] ? spot.showingName.split("(")[1].replace(/\)/g,'') : '') + '</div><p class="">' + spot.address + "</p>",
            // '<div class="place-search-btn-wrapper">' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'google\', \'' + spot.showingName.replace("\'", "\\'") + '\', \'' + spot.lat + '\', \'' + spot.lng + '\')"><img src="myro_image/googlemaps_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'naver\', \'' + spot.showingName.split("(")[0] + '\')"><img src="myro_image/naver_circle_btn.png" alt="logo" /></div></div>' +
            // '<div class="place-search-btn"><div class="place-search-btn-image-container" onclick="searchInWeb(\'instagram\', \'' + spot.showingName.split("(")[0].replace(/(\s*)/g, "") + '\')"><img src="myro_image/instagram_circle_btn.png" alt="logo" /></div></div>' +
            // '</div>', marker, 'Spot', spot.no);
            spotInfoModal(spot.no, !0)
        }),
        markersOnRouteMap.push(marker)
}
// 일정생성 후 지도에 마커 지우기
function deleteMarkerOnRouteMap(spot) {
    for (var i = 0; i < markersOnRouteMap.length; i++)
        markersOnRouteMap[i].spotNo == spot.no && (markersOnRouteMap[i].setMap(null),
            markersOnRouteMap.splice(i, 1),
            i--)
}
// 일정생성 후 지도에 모든 마커 지우기
function deleteAllMarkerOnRouteMap() {
    for (var i = 0; i < markersOnRouteMap.length; i++)
        markersOnRouteMap[i].setMap(null);
    markersOnRouteMap = []
}
// //일자 체크
// $("#travelDay").change(function () {
//     if (isNaN(parseInt($("#travelDay").val()))) {
//         showToastMsg("여행일자는 숫자로 입력해주세요.");
//         $("#travelDay").val(5);
//     }
//
//     if (Number($("#travelDay").val()) % 1 != 0) {
//         showToastMsg("여행일자는 정수로 입력해주세요.");
//         $("#travelDay").val(5);
//
//     }
//
//     if ($("#travelDay").val() > 10) {
//         showToastMsg("여행일자는 10일을 초과할 수 없습니다.");
//         $("#travelDay").val(10);
//     }
//     if ((selectedSpots.length + 1) / $('#travelDay').val() > 9) {
//         showToastMsg("하루당 평균 8장소 이상 선택 불가");
//         $("#travelDay").val(Math.floor(selectedSpots.length / 10 + 1));
//         return;
//     }
//
//     setTravelDay();
//     $("#showingTravelDay").html($("#travelDay").val());
//     $("#traveltextdiv").addClass("blink-2");
//
// });
//N일차 일자별 상세보기
function openDayDetailPlan(whatDay) {
    tempMarkerForInfobox && tempMarkerForInfobox.setMap(null),
        closePlanSideBar(),
        openPlanPageWidely = !1,
        $("#remakeAndRestoreButtonArea").css("display", "none"),
        $("#allDayDetailScheduleDiv").css("display", "none"),
        $("#allDayDetailScheduleExpDiv").css("display", "none"),
        $("#msidebar2changeButton").css("display", "none"),
        $("#whatDayForDetail").html(i18nSvc.get("day") + " " + whatDay),
        $("#travelDayText").css("display", "none"),
        $("#ssbmbtndiv-Lbtn").css("display", "none"),
        $("#search-offcanvas-flip").css("display", "none"),
    directionsDisplay && directionsDisplay.setMap(null),
        removeAllFlightPath(),
        deleteAllMarkerOnRouteMap();
    for (var i = 0; i < dataFromServer.spotsByDay[whatDay].length; i++)
        setMarkerOnRouteMap(dataFromServer.spotsByDay[whatDay][i]);
    ablePulse(whatDay),
        $("#dailyRoute").html(""),
        $("#dailyRoute").css("display", "block");
    for (var spotCnt = dataFromServer.spotsByDay[whatDay].length, _i13 = 0; _i13 < spotCnt - 1; _i13++) {
        var startPoint = _i13
            , endPoint = _i13 + 1
            , dailyStepSchedule = // '<div class="dayroutecontainer card z-depth-2"><div class="dayrouteStepCss">STEP' + [i + 1] + '</div><div>' +
            // '<img src="/myro_image/placepoint16.png" style="vertical-align: 4px;" alt="image">' +
            // dataFromServer.spotsByDay[whatDay][startPoint].showingName + '<br>' +
            // '<img src="/myro_image/ad1.png" style="vertical-align: 1px;" alt="image">' + '<br>' +
            // '<img src="/myro_image/placepoint16.png" style="vertical-align: 4px;" alt="image">' +
            // dataFromServer.spotsByDay[whatDay][endPoint].showingName +
            // '</div>' +
            // '<div  id="day' + whatDay + 'dailyStep' + i + '"class="btn dailyStepDetailBtn w3-hover-blue"><hs>' + i18nSvc.get('route') + '</hs>' +
            // '<i class="material-icons" style="">arrow_drop_down</i></div>' +
            // '<div class="dailyRouteDetailByStepWDiv" style="display:none;" id="dailyRouteDetailByStep' + whatDay + "order" + i + '"></div></div>';
            "<div style=\"display:flex;flex-direction:column;\">" + "<div id=\"\" class=\"dayroute-card-container\">" + "<div class=\"dayroute-card-title-circle-container\">" + "<div class=\"dayroute-card-title-circle\">" + "<div class=\"dayroute-card-title\">STEP" + [_i13 + 1] + "</div>" + "</div>" + "</div>" + "<div class=\"dayroute-card-contents-container\">" + "<div class=\"dayroute-card-contents-div-L\">" + "<div class=\"dayroute-card-text\">" + dataFromServer.spotsByDay[whatDay][startPoint].showingName.split("(")[0] + "</div>" + "<div class=\"dayroute-card-text\"><i class=\"material-icons\" style=\"font-size:12px\">arrow_drop_down</i></div>" + "<div class=\"dayroute-card-text\">" + dataFromServer.spotsByDay[whatDay][endPoint].showingName.split("(")[0] + "</div>" + "</div>" + "<div class=\"dayroute-card-contents-div-R\" onclick=\"\">" + "<div id=\"day" + whatDay + "dailyStep" + _i13 + "\" class=\"dayroute-card-text-white\">\uC0C1\uC138\uACBD\uB85C</div>" + "</div>" + "</div>" + "</div>" + "<div class=\"dailyRouteDetailByStepWDiv\" style=\"display:none;\" id=\"dailyRouteDetailByStep" + whatDay + "order" + _i13 + "\"></div>" + "</div>";
        //        let totalAbsoluteMins = dataFromServer.stayingInfos[whatDay][spotCnt - 1].finish - dataFromServer.stayingInfos[whatDay][0].start + dataFromServer.stayingInfos[whatDay][0].fromPrevious;
        //        let totalTimeH = Math.floor(totalAbsoluteMins/60);
        //        let totalTimeM = Math.floor(totalAbsoluteMins%60);
        //        $("#WhatDaytotalTimeH").html(totalTimeH);
        //        $("#WhatDaytotalTimeM").html(totalTimeM);
        //        $("#spotInfo_Web").append(dailyStepSchedule);
        $("#dailyRoute").append(dailyStepSchedule),
            $(".datepickModalViewboxwrap").css("display", "block"),
            $(".datepickModalViewbox").css("display", "block"),
            $("#ViewboxWhatDayCnt").html(whatDay),
            $("#ViewboxSeletedSpotsCnt").html(spotCnt - 1),
            setOpenDetailRouteButton(whatDay, _i13, startPoint, endPoint)
    }
    drawAllFlightPathForCertainDay(whatDay),
        addUserTrackingData("openDayDetailPlan|" + whatDay)
}
//각 일자별 상세경로 버튼 생성
function setOpenDetailRouteButton(whatDay, i, startPoint, endPoint) {
    $("#day" + whatDay + "dailyStep" + i).click(function() {
        openDetailRoute("dailyRouteDetailByStep" + whatDay + "order" + i, whatDay, startPoint, endPoint)
    })
}
//구글 direction기반 상세경로 보기
function openDetailRoute(divId, whatDay, startPoint, endPoint, tryCnt) {
    if ("korea" == nation && "DRIVING" == transportationMode) {
        var sX, sY, eX, eY;
        $.ajax({
            url: headAddress + "/changeCoordsForKakaoMapDirection",
            data: {
                lat: dataFromServer.spotsByDay[whatDay][startPoint].lat,
                lng: dataFromServer.spotsByDay[whatDay][startPoint].lng
            },
            success: function success(res) {
                sX = res.x,
                    sY = res.y,
                    $.ajax({
                        url: headAddress + "/changeCoordsForKakaoMapDirection",
                        data: {
                            lat: dataFromServer.spotsByDay[whatDay][endPoint].lat,
                            lng: dataFromServer.spotsByDay[whatDay][endPoint].lng
                        },
                        success: function success(res) {
                            eX = res.x,
                                eY = res.y,
                                window.open("https://map.kakao.com/?sX=".concat(sX, "&sY=").concat(sY, "&sName=").concat(dataFromServer.spotsByDay[whatDay][startPoint].showingName, "&eX=").concat(eX, "&eY=").concat(eY, "&eName=").concat(dataFromServer.spotsByDay[whatDay][endPoint].showingName), "_blank")
                        }
                    })
            }
        })
    } else if ("none" == $("#" + divId).css("display")) {
        directionsDisplay && directionsDisplay.setMap(null),
            directionsService = new google.maps.DirectionsService,
            directionsDisplay = new google.maps.DirectionsRenderer({
                map: map2
            });
        var origin, destination;
        1 == tryCnt ? (origin = dataFromServer.spotsByDay[whatDay][startPoint].googleSearchedName,
            destination = dataFromServer.spotsByDay[whatDay][endPoint].lat + "," + dataFromServer.spotsByDay[whatDay][endPoint].lng) : 2 == tryCnt ? (origin = dataFromServer.spotsByDay[whatDay][startPoint].lat + "," + dataFromServer.spotsByDay[whatDay][startPoint].lng,
            destination = dataFromServer.spotsByDay[whatDay][endPoint].googleSearchedName) : 3 == tryCnt ? (origin = dataFromServer.spotsByDay[whatDay][startPoint].googleSearchedName,
            destination = dataFromServer.spotsByDay[whatDay][endPoint].googleSearchedName) : (tryCnt = 0,
            origin = dataFromServer.spotsByDay[whatDay][startPoint].lat + "," + dataFromServer.spotsByDay[whatDay][startPoint].lng,
            destination = dataFromServer.spotsByDay[whatDay][endPoint].lat + "," + dataFromServer.spotsByDay[whatDay][endPoint].lng),
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: transportationMode
            }, function(response, status) {
                if ("OK" === status) {
                    $("#" + divId).css("display", ""),
                        directionsDisplay.setPanel(null),
                        directionsDisplay.setDirections(response);
                    for (var myRoute = response.routes[0].legs[0], routeDetailAppendText = "", i = 0; i < myRoute.steps.length; i++) {
                        var lat = (myRoute.steps[i].start_location.lat() + myRoute.steps[i].end_location.lat()) / 2
                            , lng = (myRoute.steps[i].start_location.lng() + myRoute.steps[i].end_location.lng()) / 2;
                        routeDetailAppendText += "<div class = \"routeDetailScale\" onclick=\"map2.panTo({lat: " + lat + ",lng: " + lng + "});\">" + "<hs style=\"color:#FFA500;font-weight: 900;font-size:12px;\">" + [i + 1] + ".&nbsp;</hs> " + myRoute.steps[i].instructions + "<br></div>"
                    }
                    routeDetailAppendText += "<div class=\"routeDetailtimeDiv\">" + myRoute.duration.text + "</div>",
                        $("#" + divId).html(routeDetailAppendText)
                } else
                    3 == tryCnt ? showToastMsg(i18nSvc.get("cantFindRouteOnGoogleMap")) : (tryCnt++,
                        openDetailRoute(divId, whatDay, startPoint, endPoint, tryCnt))
            })
    } else
        $("#" + divId).css("display", "none")
}
//모든일정 전체일정 보기
function seeAllDaySchedule() {
    closePlanSideBar(),
        openPlanPageWidely = !1,
        $("#dailyRoute").css("display", "none"),
        $(".datepickModalViewboxwrap").css("display", "none"),
        $(".datepickModalViewbox").css("display", "none"),
        $("#remakeAndRestoreButtonArea").css("display", ""),
        $("#allDayDetailScheduleDiv").css("display", ""),
        $("#allDayDetailScheduleExpDiv").css("display", ""),
        $("#msidebar2changeButton").css("display", ""),
        $("#whatDayForDetail").html(""),
    600 >= $(window).width() && ($("#seeallDaybtnweb").css("border-color", "#98dde3"),
        $("#seeallDaybtnweb").css("color", "#000")),
        $("#travelDayText").css("display", "block"),
        $("#ssbmbtndiv-Lbtn").css("display", "block"),
        SsOpened = !1,
    directionsDisplay && directionsDisplay.setMap(null),
        removeAllFlightPath(),
        deleteAllMarkerOnRouteMap(),
        ablePulse(0);
    for (var i = 0; i < dataFromServer.spotsByDay.length; i++)
        for (var _spot6, j = 0; j < dataFromServer.spotsByDay[i].length; j++)
            _spot6 = dataFromServer.spotsByDay[i][j],
                setMarkerOnRouteMapWithNumber(_spot6, i, j);
    map2.panTo({
        lat: dataFromServer.spotsByDay[0][0].lat,
        lng: dataFromServer.spotsByDay[0][0].lng
    }),
        map2.setZoom(12),
        drawAllFlightPath();
    for (var _i14 = 0; _i14 < $("#travelDay").val(); _i14++)
        $("#dayButton" + _i14).css("background-color", "#ffffff"),
            $("#dayButton" + _i14).css("color", "#000000");
    $("#dailyRoute").html(""),
        $("#dailyRoute").css("display", "none")
}
function setModalGetScheduleFileByExcel() {
    isModifyingMode ? ($("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n                <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                    <p id=\"modalexitText\">\n                        <span>\uC218\uC815\uC0AC\uD56D\uC774 \uBC18\uC601\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC218\uC815\uD558\uAE30 \uC804 \uC77C\uC815\uC73C\uB85C \uC5D1\uC140\uD45C\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??</span>\n                    </p>\n                    <div class=\"alert-button-container\">\n                        <div class=\"modal-close alert-button-ok\" onclick=\"getScheduleFileByExcel()\">\uD655\uC778</div>\n                        <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                    </div>\n                </div>\n                </div>\n            </div>"),
        showAlertModal()) : getScheduleFileByExcel()
}
//엑셀로 일정 다운로드 받기
function getScheduleFileByExcel() {
    window.onbeforeunload = null;
    for (var reqParam = {}, stayingInfos = backupDataFromServer.stayingInfos, spotsByDay = backupDataFromServer.spotsByDay, scheduleByDay = [], i = 1; i < spotsByDay.length; i++) {
        scheduleByDay[i] = {},
            scheduleByDay[i].scheduleBySpots = [];
        var stayingInfo = stayingInfos[i]
            , today = new Date(startTravelDate);
        today.setDate(startTravelDate.getDate() + i - 1);
        var dayShowingStartTime = void 0
            , weekDay = void 0
            , month = void 0
            , day = void 0;
        if (0 == spotsByDay[i].length)
            dayShowingStartTime = "00:00",
                weekDay = today.getDay() % 7,
                month = today.getMonth() + 1,
                day = today.getDate();
        else {
            var dayStartTimeMin = stayingInfo[0].start - stayingInfo[0].fromPrevious
                , dayStartTimeHHMM = getHHMMFromAbsoluteMinute(dayStartTimeMin);
            dayShowingStartTime = dayStartTimeHHMM.substr(0, 2) + ":" + dayStartTimeHHMM.substr(2, 4),
                weekDay = today.getDay() % 7,
                month = today.getMonth() + 1,
                day = today.getDate()
        }
        //scheduleByDay[i].dayInfo = `${i}일차 ${month}월 ${day}일 ${weekDayKor[weekDay]}`;
        scheduleByDay[i].dayInfo = "".concat(i).concat(i18nSvc.get("day"), "\u3000").concat(i18nSvc.get("monthList")[month], " ").concat(day).concat(i18nSvc.get("whatDay"), " ").concat(i18nSvc.get("weekDays")[weekDay]);
        // scheduleByDay[i].scheduleBySpots[0] = dayShowingStartTime;
        for (var j = 0; j < spotsByDay[i].length; j++) {
            for (var _spot7 = spotsByDay[i][j], spotStayingInfo = stayingInfo[j], spotStayingMinutes = Math.floor(_spot7.realStaySec / 60); 0 > spotStayingMinutes; )
                spotStayingMinutes += 1440;
            var spotStayingH = Math.floor(spotStayingMinutes / 60)
                , spotStayingM = Math.floor(spotStayingMinutes % 60)
                , spotStayingStart = getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(spotStayingInfo.start).substr(2, 4)
                , spotStayingFinish = getHHMMFromAbsoluteMinute(spotStayingInfo.finish).substr(0, 2) + ":" + getHHMMFromAbsoluteMinute(spotStayingInfo.finish).substr(2, 4)
                , spotSchedule = {};
            spotSchedule.spotStayingStart = spotStayingStart,
                spotSchedule.spotStayingH = spotStayingH,
                spotSchedule.spotStayingM = spotStayingM,
                spotSchedule.spotStayingFinish = spotStayingFinish,
                scheduleByDay[i].scheduleBySpots.push(spotSchedule)
        }
    }
    reqParam.cityName = korCityName,
        reqParam.spotsByDay = spotsByDay,
        reqParam.scheduleByDay = scheduleByDay,
        reqParam.travelDay = travelDay;
    var reqData = {};
    reqData.data = JSON.stringify(reqParam),
        $.ajax({
            type: "POST",
            url: headAddress + "/makeScheduleAndSendFileName",
            data: reqData,
            success: function success(fileName) {
                addUserTrackingData("getScheduleFileByExcel ".concat(fileName)),
                    location.href = "".concat(headAddress, "/getScheduleFileByExcel?fileName=").concat(fileName, "&cityName=").concat(korCityName),
                    document.getElementById("modalInflowWrap").style.display = "block"
            }
        })
}
//일정 생성 후 로그인 하면 변수 변경
function setParentUserEmail(_userEmail) {
    userEmail = _userEmail
}
function setmodalSaveRouteAndSendEmail() {
    isModifyingMode ? ($("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n                <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                    <p id=\"modalexitText\">\n                        <span>\uC218\uC815\uC0AC\uD56D\uC774 \uBC18\uC601\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC218\uC815\uD558\uAE30 \uC804 \uC77C\uC815\uC73C\uB85C \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??</span>\n                    </p>\n                    <div class=\"alert-button-container\">\n                        <div class=\"modal-close alert-button-ok\" onclick=\"saveRouteAndSendEmail()\">\uD655\uC778</div>\n                        <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                    </div>\n                </div>\n                </div>\n            </div>"),
        showAlertModal()) : saveRouteAndSendEmail()
}
//일정 이메일로 전송
function saveRouteAndSendEmail() {
    // if(!askUserIfSaveAtModificationMode()) {
    //     return;
    // }
    for (var emailList = [], _i15 = 0; _i15 < $("input[name*='emailAddress']").length; _i15++)
        emailList.push($("input[name*='emailAddress']")[_i15].value);
    for (var i = 0; i < emailList.length; i++) {
        if ("" == emailList[i]) {
            emailList.splice(i, 1),
                i--;
            continue
        }
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailList[i]))
            return void showToastMsg(i18nSvc.get("wrongEmailFormat"))
    }
    if (0 == emailList.length)
        return void showToastMsg(i18nSvc.get("atLeastOneEmail"));
    for (var selectedHotelsNo = [], selectedSpotsNo = [], _i16 = 0; _i16 < selectedHotels.length; _i16++) {
        if (!selectedHotels[_i16]) {
            selectedHotelsNo.push(null);
            continue
        }
        selectedHotelsNo.push(selectedHotels[_i16].no)
    }
    for (var _i17 = 0; _i17 < selectedSpots.length; _i17++)
        selectedSpotsNo.push(selectedSpots[_i17].no);
    showLoading(),
        $("#saveRouteAndSendEmailButton").attr("disabled", !0);
    var savingData = {
        travelDay: $("#travelDay").val(),
        spotsByDay: backupDataFromServer.spotsByDay,
        stayingInfos: backupDataFromServer.stayingInfos,
        originalSchedule: backupDataFromServer.originalSchedule,
        originalHotelsNo: selectedHotelsNo,
        originalSpotsNo: selectedSpotsNo,
        travelName: $("#travelName").val(),
        emailList: emailList,
        cityName: korCityName,
        engCityName: cityName,
        transportationMode: transportationMode,
        possibleTransportationMode: possibleTransportationMode
    }
        , dateString = startTravelDate.toLocaleDateString("ko-KR")
        , sds = "";
    sds = -1 == sds.indexOf("/") ? -1 == sds.indexOf("-") ? dateString.split(". ") : dateString.split("-") : dateString.split("/"),
        sds[2] = sds[2].split(".")[0],
    10 > +sds[1] && (sds[1] = "0" + sds[1]),
    10 > +sds[2] && (sds[2] = "0" + sds[2]),
        savingData.startTravelDate = "".concat(sds[0], "-").concat(sds[1], "-").concat(sds[2]);
    var reqData = {};
    reqData.data = JSON.stringify(savingData),
        $.ajax({
            type: "POST",
            url: headAddress + "/saveRouteAndSendEmail",
            data: reqData,
            success: function success() {
                showToastMsg("\uC774\uBA54\uC77C \uBC1C\uC1A1\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),
                    $("#saveRouteAndSendEmailButton").attr("disabled", !1),
                    hideLoading(),
                    document.getElementById("modalInflowWrap").style.display = "block",
                    window.onbeforeunload = null
            },
            fail: function fail() {
                $("#saveRouteAndSendEmailButton").attr("disabled", !1),
                    hideLoading()
            }
        })
}
function setAskUserIfSaveAtModificationModeIfHaveToken() {
    isModifyingMode ? ($("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n                    <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                        <p id=\"modalexitText\">\n                            <span>\uC218\uC815\uC0AC\uD56D\uC774 \uBC18\uC601\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC218\uC815\uD558\uAE30 \uC804 \uC77C\uC815\uC73C\uB85C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??</span>\n                        </p>\n                        <div class=\"alert-button-container\">\n                            <div class=\"modal-close alert-button-ok\" onclick=\"updateDataIfHaveToken()\">\uD655\uC778</div>\n                            <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>"),
        showAlertModal()) : updateDataIfHaveToken()
}
//토큰이 있을 때 일정을 수정후 저장
function updateDataIfHaveToken() {
    return _updateDataIfHaveToken.apply(this, arguments)
}
function _updateDataIfHaveToken() {
    return _updateDataIfHaveToken = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee9() {
            var selectedHotelsNo, selectedSpotsNo, i, _i22, savingData, dateString, sds, reqData, updateDataIfHaveToken;
            return regeneratorRuntime.wrap(function(_context9) {
                for (; ; )
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            selectedHotelsNo = [],
                                selectedSpotsNo = [],
                                i = 0;
                        case 3:
                            if (!(i < selectedHotels.length)) {
                                _context9.next = 11;
                                break
                            }
                            if (selectedHotels[i]) {
                                _context9.next = 7;
                                break
                            }
                            return selectedHotelsNo.push(null),
                                _context9.abrupt("continue", 8);
                        case 7:
                            selectedHotelsNo.push(selectedHotels[i].no);
                        case 8:
                            i++,
                                _context9.next = 3;
                            break;
                        case 11:
                            for (_i22 = 0; _i22 < selectedSpots.length; _i22++)
                                selectedSpotsNo.push(selectedSpots[_i22].no);
                            return showLoading(),
                                savingData = backupDataFromServer,
                                savingData.travelDay = $("#travelDay").val(),
                                savingData.originalHotelsNo = selectedHotelsNo,
                                savingData.originalSpotsNo = selectedSpotsNo,
                                savingData.savedRouteToken = savedRouteToken,
                                backupDataFromSavedToken ? (savingData.cityName = backupDataFromSavedToken.cityName,
                                    savingData.engCityName = backupDataFromSavedToken.engCityName,
                                    savingData.emailList = backupDataFromSavedToken.emailList,
                                    savingData.travelName = backupDataFromSavedToken.travelName,
                                    savingData.transportationMode = backupDataFromSavedToken.transportationMode,
                                    savingData.possibleTransportationMode = backupDataFromSavedToken.possibleTransportationMode) : (savingData.savedRouteToken = savedRouteTokenAfterSavingByUser,
                                    savingData.travelName = "",
                                    savingData.cityName = korCityName,
                                    savingData.engCityName = cityName,
                                    savingData.transportationMode = transportationMode,
                                    savingData.possibleTransportationMode = possibleTransportationMode),
                                dateString = startTravelDate.toLocaleDateString("ko-KR"),
                                sds = dateString.split(". "),
                                sds[2] = sds[2].split(".")[0],
                            10 > +sds[1] && (sds[1] = "0" + sds[1]),
                            10 > +sds[2] && (sds[2] = "0" + sds[2]),
                                savingData.startTravelDate = "".concat(sds[0], "-").concat(sds[1], "-").concat(sds[2]),
                                reqData = {},
                                reqData.data = JSON.stringify(savingData),
                                _context9.next = 29,
                                myroRequestForAuth("/updateRouteByLoginUser", "PUT", {
                                    data: reqData.data
                                });
                        case 29:
                            updateDataIfHaveToken = _context9.sent,
                                $("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n                    <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                        <p id=\"modalexitText\">\n                            <span>\uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB9C8\uC774\uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</span>\n                        </p>\n                        <div class=\"alert-button-container\">\n                            <div class=\"modal-close alert-button-ok\" onclick=\"gotoMyPageInUpdateDataIfHaveToken()\">\uD655\uC778</div>\n                            <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModalInUpdateDataIfHaveToken()\">\uCDE8\uC18C</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>"),
                                showAlertModal();
                        case 32:
                        case "end":
                            return _context9.stop();
                    }
            }, _callee9)
        })),
        _updateDataIfHaveToken.apply(this, arguments)
}
function gotoMyPageInUpdateDataIfHaveToken() {
    hideLoading(),
        location.href = "/mypage",
        window.onbeforeunload = null
}
function hideAlertModalInUpdateDataIfHaveToken() {
    hideLoading(),
        hideAlertModal()
}
//일정전송
$("#saveButton").click(function() {
    document.getElementById("save").style.display = "",
        $("#travelName").focus(),
        showToastMsg(i18nSvc.get("whenClickSendPlan"), 10),
        addUserTrackingData("saveButton click")
}),
    $("#sendEmailBtnInBox").click(function() {
        document.getElementById("save").style.display = "",
            $("#travelName").focus(),
            showToastMsg(i18nSvc.get("whenClickSendPlan"), 10),
            addUserTrackingData("saveButton click")
    }),
    $("#modifyFixButton").click(function() {
        updateDataIfHaveToken(),
            addUserTrackingData("modifyFixButton click")
    }),
    $("#closeSaveButton").click(function() {
        return void (document.getElementById("routepage").style.display = "none")
    }),
    $("#addEmailInputButton").click(function() {
        return 10 == $("#emailList input").length ? void showToastMsg(i18nSvc.get("maximumTenEmail")) : void (//    $('#emailList').append(
            //            '<div style="display: flex"><input class="input-field" name="emailAddress" type="text" placeholder="이메일 주소" maxlength="200" style="width:30%"><input class="input-field" name="emailSelectAddress" type="text" id="emailSA'+ i +'" style="width:30%"><select name="selectEmailList" class="browser-default" id="selectEmailBox'+ i +'" style="width:40%;background-color:#d3d3d3;"><option>직접입력</option><option>@naver.com</option><option>@gmail.com</option><option>@hanmail.net</option><option>@nate.com</option></select></div>'
            //    );
            $("#emailList").append("<input class=\"\" name=\"emailAddress\" type=\"text\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\" maxlength=\"200\">"),
                $("input[name*='emailAddress']").removeAttr("keyup"),
                $("input[name*='emailAddress']").keyup(function(event) {
                    13 == event.keyCode && $("#saveRouteAndSendEmailButton").click()
                }),
                $("input[name*='emailAddress']")[$("#emailList input").length - 1].focus())
    }),
    $("#searchSpotsOrHotelsButtonInMobileWeb").keyup(function(event) {
        13 == event.keyCode && searchSpotsOrHotels()
    }),
    $("#removeEmailInputButton").click(function() {
        1 != $("#emailList input").length && $("#emailList input")[$("#emailList input").length - 1].remove()
    }),
    $("#copyRouteTokenBtnT").click(function() {
        window.Clipboard = function(window, document, navigator) {
            function isOS() {
                return navigator.userAgent.match(/ipad|iphone/i)
            }
            function createTextArea(text) {
                textArea = document.createElement("textArea"),
                    textArea.value = text,
                    document.body.appendChild(textArea)
            }
            function selectText() {
                var range, selection;
                isOS() ? (range = document.createRange(),
                    range.selectNodeContents(textArea),
                    selection = window.getSelection(),
                    selection.removeAllRanges(),
                    selection.addRange(range),
                    textArea.setSelectionRange(0, 999999)) : textArea.select()
            }
            function copyToClipboard() {
                document.execCommand("copy"),
                    document.body.removeChild(textArea)
            }
            var textArea, copy;
            return copy = function(text) {
                createTextArea(text),
                    selectText(),
                    copyToClipboard()
            }
                ,
                {
                    copy: copy
                }
        }(window, document, navigator),
            Clipboard.copy(savedRouteToken),
            alert("\uD0A4\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")
    });
//이메일 셀렉트 테스트//이메일 셀렉트 테스트//이메일 셀렉트 테스트//이메일 셀렉트 테스트//이메일 셀렉트 테스트//이메일 셀렉트 테스트//이메일 셀렉트 테스트
//$(document).ready(function(){
//    $("#selectEmailBox").change(function(){
//        var value = $("#selectEmailBox option:selected").text();
//        if(value!="직접입력"){
//            $("#emailSA").val(value);
//            $("#emailSA").attr("disabled",true);
//        }else{
//            $("#emailSA").val("@");
//            $("#emailSA").attr("disabled",false);
//        }
//    });
//
//});
function openLocationInfo(innerContext, searchBtnGroup, marker, hotelOrSpot, no) {
    no && $("#locationInfoImage").attr("src", headAddress + "/get" + hotelOrSpot + "Image/" + cityName + "?no=" + no),
        $("#locationInfoContext").html(innerContext),
        $("#searchBtnGroupView").html(searchBtnGroup),
        $("#locationInfoContext").css("font-size", "13px"),
        $("#locationInfo").css("display", "flex")
}
function reqSpotRegClose() {
    $("#reqSpotReg").css("display", "none"),
        $("#reqSpotRegDesc").val(""),
        $("#reqSpotRegName").val("")
}
function registerSpotToast() {
    $("#reqSpotRegButton").removeClass("blink-3"),
        setTimeout(function() {
            showToastMsg(i18nSvc.get("registerPlaceIfNotExists")),
                $("#reqSpotRegButton").addClass("blink-3")
        }, 100)
}
function showToastMsg(txt, sec) {
    $("#toastToRegisterSpots").css("display", "none"),
        setTimeout(function() {
            sec || (sec = 3),
                $("#toastMsg").html(txt),
                $("#toastToRegisterSpots").css("display", "flex"),
                clearTimeout(hideToast),
                hideToast = setTimeout(function() {
                    $("#toastToRegisterSpots").css("display", "none")
                }, 1e3 * sec)
        }, 100)
}
function reqSearchSpotRegClose() {
    $("#reqSearchSpotReg").css("display", "none")
}
//좌표간 선그리기
function drawAllFlightPath() {
    removeAllFlightPath(),
        flightPath = [];
    for (var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
    }, spotsByDay = dataFromServer.spotsByDay, i = 1; i < spotsByDay.length; i++) {
        flightPath[i] = [];
        for (var j = 0; j < spotsByDay[i].length - 1; j++)
            if (!(2 > spotsByDay[i].length)) {
                var targetOrder = j + 1;
                flightPath[i][j] = new google.maps.Polyline({
                    path: [{
                        lat: +spotsByDay[i][j].lat,
                        lng: +spotsByDay[i][j].lng
                    }, {
                        lat: +spotsByDay[i][targetOrder].lat,
                        lng: +spotsByDay[i][targetOrder].lng
                    }],
                    geodesic: !0,
                    strokeColor: colors[i - 1],
                    strokeOpacity: 1,
                    strokeWeight: 2,
                    icons: [{
                        icon: lineSymbol,
                        offset: "100%"
                    }]
                }),
                    flightPath[i][j].setMap(map2)
            }
    }
}
//좌표간 선위에 달리기 모션
// function drawAllFlightPathWithRunning() {
//     removeAllFlightPath();
//     let image = "./running.png";
//     flightPath = [];
//     let lineSymbol = {
//         path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
//     };
//     let spotsByDay = dataFromServer.spotsByDay;
//     for (let i = 1; i < spotsByDay.length; i++) {
//         flightPath[i] = [];
//         for (let j = 0; j < spotsByDay[i].length; j++) {
//             if (spotsByDay[i].length < 2) {
//                 continue;
//             }
//             let targetOrder = j + 1;
//             if (targetOrder == spotsByDay[i].length) targetOrder = 0;
//             flightPath[i][j] = new google.maps.Polyline({
//                 path: [{
//                         lat: Number(spotsByDay[i][j].lat),
//                         lng: Number(spotsByDay[i][j].lng)
//                 },
//                     {
//                         lat: Number(spotsByDay[i][targetOrder].lat),
//                         lng: Number(spotsByDay[i][targetOrder].lng)
//                     }],
//                 geodesic: true,
//                 strokeColor: colors[i - 1],
//                 strokeOpacity: 1.0,
//                 strokeWeight: 2,
//                 icons: [{
//                     icon: lineSymbol,
//                     offset: '100%'
//                 }],
//             });
//             flightPath[i][j].setMap(map2);
//         }
//     }
// }
//특정날짜 좌표간 선그리기
function drawAllFlightPathForCertainDay(certainDay) {
    removeAllFlightPath(),
        flightPath = [];
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
    }
        , spotsByDay = dataFromServer.spotsByDay;
    flightPath[certainDay] = [];
    for (var j = 0; j < spotsByDay[certainDay].length - 1; j++)
        if (!(2 > spotsByDay[certainDay].length)) {
            var targetOrder = j + 1;
            flightPath[certainDay][j] = new google.maps.Polyline({
                path: [{
                    lat: +spotsByDay[certainDay][j].lat,
                    lng: +spotsByDay[certainDay][j].lng
                }, {
                    lat: +spotsByDay[certainDay][targetOrder].lat,
                    lng: +spotsByDay[certainDay][targetOrder].lng
                }],
                geodesic: !0,
                strokeColor: colors[certainDay - 1],
                strokeOpacity: 1,
                strokeWeight: 2,
                icons: [{
                    icon: lineSymbol,
                    offset: "100%"
                }]
            }),
                flightPath[certainDay][j].setMap(map2)
        }
}
function removeAllFlightPath() {
    for (var i = 0; i < flightPath.length; i++)
        if (flightPath[i])
            for (var j = 0; j < flightPath[i].length; j++)
                flightPath[i][j] && (flightPath[i][j].setMap(null),
                    flightPath[i][j] = null)
}
function refreshSeletedSpotsCnt() {
    0 == selectedSpots.length && $("#cart2NoList").css("display", "block"),
        $("#seletedSpotsCnt").html(selectedSpots.length),
        $("#seletedSpotsCnt").css("color", "#FFA500"),
        $("#seletedSpotsCnt2").html(selectedSpots.length),
        $("#seletedSpotsCnt2").css("display", "flex")
}
function refreshSeletedHotelsCnt() {
    for (var hotelSelectedCnt = 0, i = 0; i < selectedHotels.length; i++)
        selectedHotels[i] && hotelSelectedCnt++;
    $("#seletedHotelsCnt").html(hotelSelectedCnt)
}
//HHMM형식을 00시00분부터 몇분이 경과했는지의 값을 분으로 리턴한다
function getAbsoluteMinuteFromHHMM(HHMM) {
    return 60 * +HHMM.substr(0, 2) + +HHMM.substr(2, 4)
}
//00시00분부터 몇분이 경과했는지를 HHMM 형식으로 리턴한다
function getHHMMFromAbsoluteMinute(mins) {
    0 > mins && (mins += 1440);
    var h = Math.floor(mins / 60)
        , m = Math.floor(mins % 60);
    return 10 > h && (h = "0" + h),
    10 > m && (m = "0" + m),
    "" + h + m
}
// 장소정보, 방문요일, 방문시간, 체류시간을 입력받아 가능한 스케줄이면 true, 아니면 false를 리턴
// visitInfo = {visitDay: (요일), visitTime: (방문시간, HHMM), staySec: (체류시간)}
function checkTimeIfAvailable(spot, visitInfo) {
    // console.log(spot);
    var openTime = spot.openTime;
    if (0 == openTime.length || "24/7" == openTime[0])
        return !0;
    var visitDay = visitInfo.visitDay;
    if (!checkDayIfAvailableWithSingleSpot(spot, visitDay))
        return !1;
    var visitTime = visitInfo.visitTime
        , staySec = visitInfo.staySec
        , stayHour = Math.floor(staySec / 3600)
        , stayMin = Math.floor(staySec % 3600 / 60)
        , leaveTimeH = +visitTime.substr(0, 2) + stayHour
        , leaveTimeM = +visitTime.substr(2, 4) + stayMin;
    60 <= leaveTimeM && (leaveTimeH++,
        leaveTimeM %= 60),
    10 > leaveTimeH && (leaveTimeH = "0" + leaveTimeH),
    10 > leaveTimeM && (leaveTimeM = "0" + leaveTimeM);
    for (var leaveTime = "" + leaveTimeH + leaveTimeM, i = 0; i < openTime.length; i++) {
        var time = openTime[i]
            , oDay = time.o[0]
            , oTime = time.o[1]
            , cDay = time.c[0]
            , cTime = time.c[1]
            , tempVisitDay = visitDay;
        if (tempVisitDay < oDay && (tempVisitDay += 7),
        (oDay > cDay || oDay == cDay && +oTime > +cTime) && (cDay += 7),
        oDay == tempVisitDay && +oTime <= visitTime && tempVisitDay == cDay && leaveTime <= cTime)
            return !0;
        if (oDay < tempVisitDay && tempVisitDay == cDay && leaveTime <= cTime)
            return !0;
        if (oDay == tempVisitDay && +oTime <= visitTime && tempVisitDay < cDay && leaveTime - 2400 <= cTime)
            return !0;
        if (oDay < tempVisitDay && tempVisitDay < cDay)
            return !0;
        //console.log(oDay, tempVisitDay, cDay, oTime, leaveTime, cTime)
    }
    return !1
}
//장소 한군데와 요일을 입력받아 그 요일에 갈 수 있는지 체크
function checkDayIfAvailableWithSingleSpot(spot, visitDay) {
    var openTime = spot.openTime;
    if (0 == openTime.length || "24/7" == openTime[0])
        return !0;
    for (var j = 0; j < openTime.length; j++) {
        var time = openTime[j]
            , oDay = time.o[0]
            , oTime = time.o[1]
            , cDay = time.c[0]
            , cTime = time.c[1]
            , tempVisitDay = visitDay;
        if (tempVisitDay == oDay)
            return !0;
        if (tempVisitDay < oDay && (tempVisitDay += 7),
        (oDay > cDay || oDay == cDay && +oTime > +cTime) && (cDay += 7),
        oDay < tempVisitDay && tempVisitDay < cDay)
            return !0;
        if (oDay < tempVisitDay && tempVisitDay == cDay && "0000" != cTime)
            return !0
    }
    return !1
}
//장소등록 장소 호텔 식당 변경시 장소이름에 포커스
$("input[type=radio][name=spotOrHotelForRegisterSpot]").change(function() {
    600 <= $(window).width() && $("#reqSpotRegName").focus()
}),
    $("input[type=radio][name=transportationMode]").change(function() {
        if ($("input[name='transportationMode']")[0].checked) {
            //DRIVING모드로 변경
            if (0 == possibleTransportationMode.transit)
                return showToastMsg(i18nSvc.get("googleDoesntProvideGooglemapTransitMode")),
                    void ($("input[name='transportationMode']")[1].checked = !0);
            transportationMode = "TRANSIT",
                showToastMsg("\uC77C\uC815 \uC0DD\uC131\uC2DC \uB300\uC911\uAD50\uD1B5 \uAE30\uBC18\uC73C\uB85C \uC77C\uC815\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4", "3"),
                $("#transitbtn").addClass("myro-transit-button-on"),
                $("#drivebtn").removeClass("myro-transit-button-on")
        } else if ($("input[name='transportationMode']")[1].checked) {
            //DRIVING모드로 변경
            if (0 == possibleTransportationMode.driving)
                return showToastMsg(i18nSvc.get("googleDoesntProvideGooglemapDrivingMode")),
                    void ($("input[name='transportationMode']")[0].checked = !0);
            transportationMode = "DRIVING",
                showToastMsg("\uC77C\uC815 \uC0DD\uC131\uC2DC \uD0DD\uC2DC, \uB80C\uD2B8\uCE74 \uB4F1 \uC790\uAC00\uC6A9 \uAE30\uBC18\uC73C\uB85C \uC77C\uC815\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4", "3"),
                $("#drivebtn").addClass("myro-transit-button-on"),
                $("#transitbtn").removeClass("myro-transit-button-on")
        }
        addUserTrackingData("change transportationMode|" + transportationMode)
    });
function ablePulse(whatDay) {
    for (var i = 0; i < dataFromServer.spotsByDay.length; i++)
        $("#dayButton" + i).css("background-color", "#ffffff"),
            $("#dayButton" + i).css("color", "#000000"),
            600 <= $(window).width() ? $("#dayButton" + i).removeClass("pulse") : $("#dayButton" + i).css("border-bottom-color", "#000000");
    0 == whatDay || (600 <= $(window).width() ? ($("#dayButton" + whatDay).css("background-color", "#98dde3"),
        $("#dayButton" + whatDay).addClass("pulse"),
        $("#dayButton" + whatDay).css("color", "#ffffff")) : $("#dayButton" + whatDay).css("border-bottom-color", "#98dde3"),
        w3_SSclose(),
        $("#ssbmbtndiv-Lbtn").css("display", "none"),
    600 >= $(window).width() && ($("#seeallDaybtnweb").css("background-color", "#fff"),
        $("#seeallDaybtnweb").css("color", "#000"),
        $("#seeallDaybtnweb").css("border-color", "#000000")))
}
//토큰 가지고 들어올 때 여행 마지막날 세팅
function setEndTravelDateAfterSettingStartDateAndSetEDailyTimeSettingArea(_startTravelDate) {
    endTravelDate = new Date(_startTravelDate),
        endTravelDate.setDate(_startTravelDate.getDate() + travelDay - 1);
    var startYear = _startTravelDate.getFullYear()
        , startMonth = ("0" + (_startTravelDate.getMonth() + 1)).slice(-2)
        , startDay = ("0" + _startTravelDate.getDate()).slice(-2)
        , endYear = endTravelDate.getFullYear()
        , endMonth = ("0" + (endTravelDate.getMonth() + 1)).slice(-2)
        , endDay = ("0" + endTravelDate.getDate()).slice(-2)
        , startDateForHtmlValue = startYear + "." + startMonth + "." + startDay
        , endDateForHtmlValue = endYear + "." + endMonth + "." + endDay;
    // $('input[name="daterange"]').daterangepicker({  });
    $("input[name=\"daterange\"]").daterangepicker({
        opens: "left",
        locale: {
            format: "YYYY.MM.DD"
        },
        startDate: startDateForHtmlValue,
        endDate: endDateForHtmlValue
    }, function(start, end) {
        if (travelDay = Math.ceil((end - start) / (24 * (1e3 * 3600))),
            startTravelDate = new Date(start._d),
            endTravelDate = new Date(start._d),
            endTravelDate.setDate(startTravelDate.getDate() + travelDay - 1),
        10 < travelDay) {
            showToastMsg(i18nSvc.get("noMoreThanTenTravelDays")),
                endTravelDate.setDate(startTravelDate.getDate() + 9);
            var _startYear = startTravelDate.getFullYear()
                , _startMonth = ("0" + (startTravelDate.getMonth() + 1)).slice(-2)
                , _startDay = ("0" + startTravelDate.getDate()).slice(-2)
                , _endYear = endTravelDate.getFullYear()
                , _endMonth = ("0" + (endTravelDate.getMonth() + 1)).slice(-2)
                , _endDay = ("0" + endTravelDate.getDate()).slice(-2);
            setTimeout(function() {
                $("#calander").val(_startYear + "." + _startMonth + "." + _startDay + " - " + (_endYear + "." + _endMonth + "." + _endDay))
            }, 10),
                travelDay = 10
        }
        changeSelectedHotelAreaWhenChangeDate(),
            $("#travelDay").val(travelDay),
            setDailyTimeSettingArea(startTravelDate, endTravelDate),
            totalTravelMins = 60 * (12 * travelDay);
        var totalTravelH = Math.floor(totalTravelMins / 60)
            , totalTravelM = Math.floor(totalTravelMins % 60);
        $("#totalTravelH").html(totalTravelH),
            $("#totalTravelM").html(totalTravelM),
            openDailyTimesSettingArea(),
            $("#showingTravelDay").html(travelDay + "&nbsp" + "DAY"),
            $("#showingTravelDay2").html(travelDay),
            $("#showingTravelDay3").html(travelDay),
            addUserTrackingData("setDate|" + startTravelDate.toDateString() + "|" + endTravelDate.toDateString())
    }),
        $("#calander").val(startDateForHtmlValue + " - " + endDateForHtmlValue)
}
//여행 날짜 변경부분
// $(function () {
//     //    $(".hiddendiv").css("visibility","visible");
//     $('input[name="daterange"]').daterangepicker({
//         opens: 'left',
//         locale: {
//           format: 'YYYY.MM.DD'
//         },
//     }, function (start, end, label) {
//         //$("#openAndCloseDailyTimeSetting").click();
//         travelDay = Math.ceil((end - start) / (1000 * 3600 * 24));
//         startTravelDate = new Date(start._d);
//         endTravelDate = new Date(start._d);
//         endTravelDate.setDate(startTravelDate.getDate() + travelDay - 1);
//         if (travelDay > 10) {
//             showToastMsg(i18nSvc.get('noMoreThanTenTravelDays'));
//             endTravelDate.setDate(startTravelDate.getDate() + 9);
//             let startYear = startTravelDate.getFullYear();
//             let startMonth = ("0" + (startTravelDate.getMonth() + 1)).slice(-2);
//             let startDay = ("0" + startTravelDate.getDate()).slice(-2);
//             let endYear = endTravelDate.getFullYear();
//             let endMonth = ("0" + (endTravelDate.getMonth() + 1)).slice(-2);
//             let endDay = ("0" + endTravelDate.getDate()).slice(-2);
//             let startDateForHtmlValue = startYear + "." + startMonth + "." + startDay;
//             let endDateForHtmlValue = endYear + "." + endMonth + "." + endDay;
//             let fullDateForHtmlValue = startDateForHtmlValue + " - " + endDateForHtmlValue;
//             setTimeout(function () {
//                 $("#calander").val(fullDateForHtmlValue);
//             }, 10)
//             travelDay = 10;
//         }
//         changeSelectedHotelAreaWhenChangeDate();
//         $("#travelDay").val(travelDay);
//         setDailyTimeSettingArea(startTravelDate, endTravelDate);
//         totalTravelMins = travelDay * 12 * 60;
//         let totalTravelH = Math.floor(totalTravelMins / 60);
//         let totalTravelM = Math.floor(totalTravelMins % 60);
//         $("#totalTravelH").html(totalTravelH);
//         $("#totalTravelM").html(totalTravelM);
//         openDailyTimesSettingArea();
//         //        $('#openDailyTimesSettingAreabtn').click();
//         //        $('.collapsible').collapsible('open');
//         $("#showingTravelDay").html(travelDay + '&nbsp' + 'DAY');
//         $("#showingTravelDay2").html(travelDay);
//         $("#showingTravelDay3").html(travelDay);
//         //유저트래킹
//         addUserTrackingData('setDate|' + startTravelDate.toDateString() + '|' + endTravelDate.toDateString());
//     });
// });
function setDailyTimeSettingArea(startDate) {
    $("#dailyTimesSettingArea").html("");
    for (var date = startDate, i = 0; i < travelDay; i++) {
        var month = +date.getMonth() + 1
            , day = +date.getDate();
        //        $('.timepicker').timepicki();
        $("#dailyTimesSettingArea").append("<div class=\"daily-time-setting-container\">" + "<div class=\"daily-time-setting-date-text uk-heading-bullet\">" + month + "/" + day + "</div>" + "<div class=\"daily-time-setting-input-container\"><input class=\"center dailyTimesSettingArea-input\" name=\"dailyStartTimes\" type=\"time\" value=\"10:00\">-" + "<input class=\"center dailyTimesSettingArea-input\" name=\"dailyEndTimes\" type=\"time\" value=\"22:00\"></div></div>"),
            date.setDate(date.getDate() + 1)
    }
    date.setDate(date.getDate() - travelDay),
        $("input[name=\"dailyStartTimes\"]").change(function() {
            validateStartEndTimesAndReCaculateTotalTravelMins()
        }),
        $("input[name=\"dailyEndTimes\"]").change(function() {
            validateStartEndTimesAndReCaculateTotalTravelMins()
        })
}
function validateStartEndTimesAndReCaculateTotalTravelMins() {
    var TimesForTracking = "";
    totalTravelMins = 0;
    for (var i = 0; i < $("input[name=\"dailyStartTimes\"]").length; i++) {
        var startTimeText = $("input[name=\"dailyStartTimes\"]")[i].value.replace(":", "")
            , endTimeText = $("input[name=\"dailyEndTimes\"]")[i].value.replace(":", "")
            , startTimeAbsoluteMins = getAbsoluteMinuteFromHHMM(startTimeText)
            , endTimeAbsoluteMins = getAbsoluteMinuteFromHHMM(endTimeText);
        if (startTimeAbsoluteMins > endTimeAbsoluteMins) {
            var endTimeToCorrectTime = getHHMMFromAbsoluteMinute(startTimeAbsoluteMins + 1);
            $("input[name=\"dailyEndTimes\"]")[i].value = endTimeToCorrectTime.substr(0, 2) + ":" + endTimeToCorrectTime.substr(2, 4)
        }
        totalTravelMins += endTimeAbsoluteMins - startTimeAbsoluteMins;
        var totalTravelH = Math.floor(totalTravelMins / 60)
            , totalTravelM = Math.floor(totalTravelMins % 60);
        $("#totalTravelH").html(totalTravelH),
            $("#totalTravelM").html(totalTravelM),
            TimesForTracking += "|" + startTimeText + "~" + endTimeText
    }
    //유저트래킹
    addUserTrackingData("changeTime" + TimesForTracking)
}
function msidebar2change() {
    openPlanPageWidely ? closePlanSideBar() : openPlanSideBar(),
        openPlanPageWidely = !openPlanPageWidely,
        addUserTrackingData("msidebar2change|" + openPlanPageWidely)
}
function setMsidebar2AsItIs() {
    openPlanPageWidely ? openPlanSideBar(!0) : closePlanSideBar()
}
function openPlanSideBar(reopen) {
    var size1 = "auto"
        , size2 = "32%";
    //    let size3 = "40%";
    if (1 != travelDay) {
        2 == travelDay && (size1 = "auto",
            size2 = "20%"),
            $("#split-bar").remove(),
            $("#msidebar2Ani").prepend("<div title=\"" + i18nSvc.get("clickHereAndResizeAsYouWant") + "\" id=\"split-bar\" style=\"border-right:8px double black;height:100%; float: right; width: 8px; cursor: col-resize;\"></div>");
        $("#split-bar").mousedown(function(e) {
            e.preventDefault(),
                $(document).mousemove(function(e) {
                    e.preventDefault();
                    var x = e.pageX - $("#msidebar2Ani").offset().left;
                    x > 300 && x < 3600 && e.pageX < $(window).width() - 100 && ($("#msidebar2Ani").css("width", x),
                        $("#modalmap-cover").css("margin-left", x),
                        $("#msidebar2Ani").css("min-width", "29%"),
                        1600 >= $(window).width() ? $(".myro-msidebar2").css("max-width", "70%") : $("#msidebar2Ani").css("max-width", "90%"),
                        savedXForOpenPage = x)
                })
        }),
            $(document).mouseup(function() {
                $(document).unbind("mousemove")
            }),
            $("#allDayDetailScheduleDiv").css("display", "flex"),
            1600 >= $(window).width() ? $(".myro-msidebar2").css("margin-left", "50px") : $(".myro-msidebar2").css("margin-left", "82px"),
            $(".myro-msidebar2").css("width", size1),
            1600 >= $(window).width() ? ($(".myro-msidebar2").css("max-width", "70%"),
                $(".omissionPlaceDiv").css("left", "auto"),
                $(".omissionPlaceDiv").css("right", "10%"),
                $(".myro2-multibtndiv-modal").css("top", "100px")) : ($(".myro-msidebar2").css("max-width", "90%"),
                $(".omissionPlaceDiv").css("left", "auto"),
                $(".omissionPlaceDiv").css("right", "10%"),
                $(".myro2-multibtndiv-modal").css("top", "105px")),
            $(".myro-msidebar2").css("position", "absolute"),
            $("#msidebar2changeicon").html("fullscreen_exit"),
            $(".modalmap-cover").css("margin-left", size2),
            $(".myro2-multibtndiv-modal").css("right", "10px"),
            $(".myro2-multibtndiv-modal").css("left", "auto"),
        reopen && ($("#msidebar2Ani").css("width", savedXForOpenPage),
            $("#modalmap-cover").css("margin-left", savedXForOpenPage),
            $("#msidebar2Ani").css("max-width", "65%"))
    }
    //
}
function closePlanSideBar() {
    //
    //
    // if ($(window).width() <= 1600) {
    //     $(".myro-msidebar2").css("width", "235px");
    // } else {
    //     $(".myro-msidebar2").css("width", "265px");
    // }
    //    $("#msidebar2btnbox").css("width", "100%");
    //    $("#msidebar2btnbox").removeClass("s-border-right");
    //    $("#travelDayText").css("padding-left", "0");
    $("#split-bar").remove(),
        $("#allDayDetailScheduleDiv").css("display", "block"),
        $("#msidebar2Ani").css("min-width", "inherit"),
        $("#msidebar2Ani").css("max-width", "inherit"),
        $(".myro-msidebar2").css("margin-left", "0"),
        $(".myro-msidebar2").css("position", "relative"),
        $(".myro-msidebar2").css("width", "auto"),
        $("#msidebar2changeicon").html("fullscreen"),
        $(".modalmap-cover").css("margin-left", "0"),
        $(".myro2-multibtndiv-modal").css("right", "auto"),
        $(".myro2-multibtndiv-modal").css("left", "360px"),
        $(".myro2-multibtndiv-modal").css("top", "40px"),
        $(".omissionPlaceDiv").css("left", "500px"),
        $(".omissionPlaceDiv").css("right", "auto")
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.target == modal2 && (modal2.style.display = "none")
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
    var i, x = document.getElementsByClassName("mySlidesG2"), dots = document.getElementsByClassName("demo2");
    for (n > x.length && (slideIndex = 1),
         1 > n && (slideIndex = x.length),
             i = 0; i < x.length; i++)
        x[i].style.display = "none";
    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("w3-white", "");
    x[slideIndex - 1].style && (x[slideIndex - 1].style.display = "block"),
    dots[slideIndex - 1] && (dots[slideIndex - 1].className += "w3-white")
}
function setAskUserIfSaveAtModificationMode() {
    isModifyingMode ? ($("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n                <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                    <p id=\"modalexitText\">\n                        <span>\uC218\uC815\uC0AC\uD56D\uC774 \uBC18\uC601\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC218\uC815\uD558\uAE30 \uC804 \uC77C\uC815\uC73C\uB85C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??</span>\n                    </p>\n                    <div class=\"alert-button-container\">\n                        <div class=\"modal-close alert-button-ok\" onclick=\"saveRouteForLoginUser(userEmail)\">\uD655\uC778</div>\n                        <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                    </div>\n                </div>\n                </div>\n            </div>"),
        showAlertModal()) : saveRouteForLoginUser(userEmail)
}
// function askUserIfSaveAtModificationMode(){
//     if(isModifyingMode) {
//         return confirm('수정사항이 반영되지 않았습니다. 수정하기 전 일정으로 저장하시겠습니까??');
//     }
//     else return true;
// }
function alertModal() {
    document.getElementById("save").style.display = "",
        $("#travelName").focus(),
        showToastMsg(i18nSvc.get("whenClickSendPlan"), 10),
        addUserTrackingData("saveButton click")
}
function modifyModeActivate() {
    isModifyingMode = !0,
        $("#remakeRouteButton").removeClass("disabled"),
        $("#remakeRouteButton").addClass("pulse"),
        $("#restoreRouteButton").removeClass("disabled"),
        $("#getScheduleFileByExcelBtnT").addClass("disabled"),
        $("#copyRouteTokenBtnT").addClass("disabled"),
        $("#travelDayText").css("display", "block"),
        $("#saveButton").removeClass("pulse"),
        $("#saveButton").addClass("disabled"),
        $("#modifyFixButton").removeClass("pulse"),
        $("#modifyFixButton").addClass("disabled")
}
// routeSaveButtonByMember
function modifyModeDeActivate() {
    //테스트 JJY
    // $("#duplicateBtn").removeClass("disabled");
    // $("#duplicateBtn").removeClass("pulse");
    //테스트 JJY
    isModifyingMode = !1,
        $("#remakeRouteButton").addClass("disabled"),
        $("#remakeRouteButton").removeClass("pulse"),
        $("#restoreRouteButton").addClass("disabled"),
        $("#getScheduleFileByExcelBtnT").removeClass("disabled"),
        $("#copyRouteTokenBtnT").removeClass("disabled"),
        $("#travelDayText").css("display", "block"),
        $("#modifyFixButton").removeClass("disabled"),
        $("#modifyFixButton").addClass("pulse")
}
function showLoading(text) {
    $("#loadingText").html("");
    var loadingText = "LOADING...";
    text && (loadingText = text);
    for (var i = 0; i < loadingText.length; i++)
        $("#loadingText").append("<label>&nbsp" + loadingText[i] + "</label>");
    for (var inputs = $(".progress-container").find($("label")), _i18 = 0; _i18 < inputs.length; _i18++) {
        var index = _i18 + 1
            , time = 20 * (inputs.length - _i18);
        $(".progress-container label:nth-child(" + index + ")").css("-webkit-animation", "anim 3s " + time + "ms infinite ease-in-out"),
            $(".progress-container label:nth-child(" + index + ")").css("-animation", "anim 3s " + time + "ms infinite ease-in-out")
    }
    $("#loading").show()
}
function hideLoading() {
    $("#loading").hide()
}
//피드백 전송
function postFeedback() {
    var reqParam = {}
        , reqData = {};
    if (reqParam.name = $("#feedbackName").val(),
        reqParam.email = $("#feedbackEmail").val(),
        reqParam.feedback = $("#feedback").val(),
        !(22 < reqParam.name.length || 1010 < reqParam.feedback.length || 100 < reqParam.email.length)) {
        return "" == reqParam.email || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(reqParam.email) ? "" == reqParam.feedback ? void showToastMsg(i18nSvc.get("insertYourFeedback")) : void (reqData.data = JSON.stringify(reqParam),
            showLoading(),
            $.ajax({
                type: "POST",
                url: headAddress + "/postFeedback",
                data: reqData,
                success: function success(res) {
                    $("#feedbackName").val(""),
                        $("#feedbackEmail").val(""),
                        $("#feedback").val(""),
                        document.getElementById("modalFeed").style.display = "none",
                        showToastMsg(res)
                },
                fail: function fail() {
                    showToastMsg(i18nSvc.get("failToPostFeedback"))
                },
                complete: function complete() {
                    hideLoading()
                }
            })) : void showToastMsg(i18nSvc.get("wrongEmailFormat"))
    }
}
//trackingData에 유저액션 누적
function addUserTrackingData(action) {
    trackingData += durationSec + "|" + action + " || "
}
//윈도우 종료시 유저 트래킹 발송
$(window).on("beforeunload", function() {
    var reqParam = {}
        , reqData = {};
    reqParam.trackingData = trackingData,
        reqData.data = JSON.stringify(reqParam),
        $.ajax({
            type: "POST",
            url: headAddress + "/postUserAct",
            data: reqData,
            success: function success() {},
            fail: function fail() {},
            complete: function complete() {}
        })
});
function showRegisterMenu() {
    document.getElementById("reqSpotReg").style.display = "flex",
        $("#reqSpotRegName").focus(),
        addUserTrackingData("showRegisterMenu")
}
function hideRegisterMenu() {
    document.getElementById("reqSpotReg").style.display = "none",
        addUserTrackingData("hideRegisterMenu")
}
function showAllmenuHelp() {
    document.getElementById("userGuideModalPage2").style.display = "flex",
        addUserTrackingData("showAllmenuHelp")
}
function hideAllmenuHelp() {
    document.getElementById("userGuideModalPage2").style.display = "none",
        addUserTrackingData("hideAllmenuHelp")
}
function showModifyHelp() {
    document.getElementById("userGuideModalPage2").style.display = "flex",
        currentDiv(6),
        addUserTrackingData("showModifyHelp")
}
function hideModifyHelp() {
    document.getElementById("userGuideModalPage2").style.display = "none",
        addUserTrackingData("hideModifyHelp")
}
function showFeedbackMenu() {
    document.getElementById("modalFeed").style.display = "flex",
        addUserTrackingData("showFeedbackMenu")
}
function hideFeedbackMenu() {
    document.getElementById("modalFeed").style.display = "none",
        addUserTrackingData("hideFeedbackMenu")
}
function hideFeedBackActionbtn() {
    document.getElementById("FeedBackActionbtnWrapDiv").style.display = "none",
        addUserTrackingData("hideFeedBackActionbtn")
}
function hideEmailSendMenu() {
    document.getElementById("save").style.display = "none",
        addUserTrackingData("hideEmailSendMenu")
}
function hideRoutePage() {
    document.getElementById("alertModal").style.display = "none",
        document.getElementById("routepage").style.display = "none",
        $("html, body").css({
            overflow: "auto",
            height: "100%"
        }),
        seeAllDaySchedule(),
    600 >= $(window).width() && (mobileEditScheduleBool = !0,
        mobileEditSchedule()),
        addUserTrackingData("hideRoutePage")
}
//가이드 페이지 팝업
//function openGuidepageAfterMakeroute() {
//    if ($.cookie("ifDontseeAgainGuidepageAfterMakeroute") != "Y") {
//        document.getElementById('guidepageAfterMakeroute').style.display = 'block';
//        $("#toastToRegisterSpots").css("display", "none");
//    }
//}
//
//function hideGuidepageAfterMakeroute() {
//    document.getElementById('guidepageAfterMakeroute').style.display = 'none';
//    if ($("[name=ifDontseeAgainGuidepageAfterMakeroute]")[0].checked == true) {
//        $.cookie("ifDontseeAgainGuidepageAfterMakeroute", "Y", 7);
//    }
//
//    addUserTrackingData('hideguidepageAfterMakeroute');
//}
//
//function openGuidepage() {
//    if ($.cookie("ifDontseeAgainGuidepageAfterMakeroutemain") != "Y") {
//        document.getElementById('guidepageAfterMakeroutemain').style.display = 'block';
//    }
//}
//
//function hideGuidepage() {
//    document.getElementById('guidepageAfterMakeroutemain').style.display = 'none';
//    if ($("[name=ifDontseeAgainGuidepageAfterMakeroutemain]")[0].checked == true) {
//        $.cookie("ifDontseeAgainGuidepageAfterMakeroutemain", "Y", 7);
//    }
//    addUserTrackingData('hideguidepageAfterMakeroutemain');
//}
function openYoutubeGuidePage() {
    window.open("https://www.youtube.com/watch?v=KD5rhdHhtyg", "_blank"),
        addUserTrackingData("openYoutubeGuidePage")
}
function finishMobileDatePick() {
    //    $(".myro-sidebar").css("top", "unset");
    //    $(".myro-sidebar").css("background-color", "#ffffff");
    $(".selectCardCss").css("display", "block"),
        $(".myro-sidebar-wrap").css("display", "block"),
        $(".myro-sidebar").css("height", "100%"),
        $(".myro-sidebar").css("z-index", "9999")
}
function finishMobileDatePickRedirect() {
    //    $(".myro-sidebar").css("position", "absolute");
    //    $(".myro-sidebar").css("top", "0");
    //    $(".myro-sidebar").css("background-color", "transparent");
    $(".selectCardCss").css("display", "none"),
        $(".myro-sidebar-wrap").css("display", "none"),
        $(".myro-sidebar").css("height", "auto"),
        $(".myro-sidebar").css("z-index", "998"),
        $(".collapsible").collapsible("close")
}
function searchSpotKeywordFocus() {
    600 >= $(window).width() && finishMobileDatePickRedirect(),
        $("[name=searchSpotOrHotelRadio]")[1].checked = !0,
        $("#searchSpotOrHotelKeyword").focus(),
        $(".search-sidebar").addClass("heartbeat"),
        setTimeout(function() {
            $(".search-sidebar").removeClass("heartbeat")
        }, 1500),
        $("#searchOrRecommend").html(i18nSvc.get("searchPlacePlease")),
        $("#searchResultCnt").html(""),
        $("#searchSpotOrHotelKeyword").val(""),
        $("#pageSectionDiv").css("display", "none"),
        $("#spotsNoListText").css("display", "block"),
        $("#pageList").html(""),
        deleteAllSpotsList()
}
function searchHotelKeywordFocus(hotelDayRadioBtnIdx) {
    if (600 >= $(window).width() && finishMobileDatePickRedirect(),
        $("[name=searchSpotOrHotelRadio]")[0].checked = !0,
        $("#searchSpotOrHotelKeyword").focus(),
        $(".search-sidebar").addClass("heartbeat"),
        setTimeout(function() {
            $(".search-sidebar").removeClass("heartbeat")
        }, 1500),
        $("#searchOrRecommend").html(i18nSvc.get("searchHotelPlease")),
        $("#searchResultCnt").html(""),
        $("#searchSpotOrHotelKeyword").val(""),
        $("#pageSectionDiv").css("display", "none"),
        $("#spotsNoListText").css("display", "block"),
        $("#pageList").html(""),
        !hotelDayRadioBtnIdx) {
        hotelDayRadioBtnIdx = 0;
        for (var i = 0; i < travelDay; i++)
            if (!selectedHotels[i]) {
                hotelDayRadioBtnIdx = i;
                break
            }
    }
    $("input[name=\"hotelDay\"]")[hotelDayRadioBtnIdx].checked = !0
}
//메모장 open & close 시작 (LSH)
function showSpotMemoDiv(i, j) {
    $("#SpotMemoDiv_idx_".concat(i, "_").concat(j)).css("display", "block"),
        $("#SpotMemoOpen_idx_".concat(i, "_").concat(j)).css("display", "none")
}
function closeSpotMemoDiv(i, j) {
    $("#SpotMemoDiv_idx_".concat(i, "_").concat(j)).css("display", "none"),
        $("#SpotMemoOpen_idx_".concat(i, "_").concat(j)).css("display", "flex")
}
//메모장 open & close 끝 (LSH)
function HelpToast(text) {
    showToastMsg(text)
}
function openDailyTimesSettingArea() {
    $(".collapsible").collapsible("open"),
    600 >= $(window).width() && $(".myro-sidebar").css("height", "100vh")
}
function closeDailyTimesSettingArea() {
    $(".collapsible").collapsible("close"),
    600 >= $(window).width() && ($(".myro-sidebar").css("height", "auto"),
        $(".myro-sidebar").css("z-index", "999"))
}
var mobileEditSchedule = function() {
    !1 == mobileEditScheduleBool ? (mobileEditScheduleBool = !0,
        $("#msidebar2btnbox").css("display", "block"),
        $("#mobileDetailRouteDiv").css("display", "block"),
        375 >= $(window).width() ? $(".modalmap-cover").css("height", "55vh") : $(".modalmap-cover").css("height", "45vh"),
        $("#mobileEditControlBtn").css("display", "block"),
        $("#mobileEditControlBtnBottom").css("display", "none")) : (mobileEditScheduleBool = !1,
        $("#msidebar2btnbox").css("display", "none"),
        $("#mobileDetailRouteDiv").css("display", "none"),
        $(".modalmap-cover").css("height", "100vh"),
        $("#mobileEditControlBtn").css("display", "none"),
        $("#mobileEditControlBtnBottom").css("display", "block"))
};
/////////////////////////////////////////////추천장소 엘리 작업중
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modalHS = document.getElementById("HotSpotModalPage");
    event.target == modalHS && (modalHS.style.display = "none")
}
;
var slideIndexHS = 1;
function plusDivsHS(n) {
    showDivshs(slideIndexHS += n)
}
function currentDivHS(n) {
    showDivshs(slideIndexHS = n)
}
function showDivshs(n) {
    function makeRecommendedcoursePage(n, spots, courseName, imgName) {
        var appendingTxt = "";
        $("#recommendedcourses" + (n - 1)).html(""),
            $("[id^='chipNo']").remove(),
            $("[id^='miNo']").remove();
        for (var star = 0, sumOfStayingTimeToSpots = 0, _i19 = 0; _i19 < searchedSpotsListFromRecommendedCourse.length; _i19++)
            star += searchedSpotsListFromRecommendedCourse[_i19].selectedCnt,
                sumOfStayingTimeToSpots += searchedSpotsListFromRecommendedCourse[_i19].recommendedStaySec;
        sumOfStayingTimeToSpots = Math.floor(sumOfStayingTimeToSpots / 3600),
            appendingTxt += "<div class=\"row\">" + "<div class=\"col s12\" style=\"padding:0.9rem;padding-top: 0;\">" + "<div class=\"recommend-card-container\">" + "<div class=\"card-image\">" + "<img src=\"/myro_image/recommendedCourseBackground/" + imgName + "\" alt=\"image\" loading=\"lazy\">" + "<div>" + "<span class=\"card-title recommend-card-title\">" + "<b class=\"rccourseName\">" + courseName + "</b><br>" + "<span class=\"rccourseMI\"><i class=\"material-icons\" style=\"vertical-align:-2px;font-size:14px;color:#FF0000\">place</i><h7 class=\"recommend-count-text\">" + searchedSpotsListFromRecommendedCourse.length + "</h7>" + "<i class=\"material-icons\" style=\"vertical-align:-2px;margin-left:2%;font-size:14px;color:cyan\">access_time</i><h7 class=\"recommend-count-text\">" + sumOfStayingTimeToSpots + "h</h7>" + "<i class=\"material-icons\" style=\"vertical-align:-2px;margin-left:2%;font-size:14px;color:#ffc107\">star</i><h7 class=\"recommend-count-text\">" + star + "</h7></span>" + "</span></div>" + "<button title=\"" + i18nSvc.get("selectAll") + "\" class=\"pulse RecommendAllbtnbottom\" onClick=\"setRecommendedCourseOnCart()\">\uBAA8\uB450 \uC120\uD0DD</button>" + "</div>" + "<div class=\"RecommendCourseNotice\" style=\"text-align: center;width:100%;\"><hs style=\"color:#fff\">" + i18nSvc.get("guideForRecommendedCourse") + "</hs></div>" + "<div class=\"card-content RCCCS\" style=\"padding:16px\">";
        for (var spotOrRestaurant, _i20 = 0; _i20 < searchedSpotsListFromRecommendedCourse.length; _i20++) {
            spotOrRestaurant = void 0,
                1 == searchedSpotsListFromRecommendedCourse[_i20].isSpot ? spotOrRestaurant = "account_balance" : 0 == searchedSpotsListFromRecommendedCourse[_i20].isSpot && (spotOrRestaurant = "restaurant");
            var showingNameForReccomendedcourse = searchedSpotsListFromRecommendedCourse[_i20].showingName;
            -1 != showingNameForReccomendedcourse.indexOf("(") && (showingNameForReccomendedcourse = showingNameForReccomendedcourse.split("(")[0]);
            for (var chipclass = "chip", j = 0; j < selectedSpots.length; j++)
                selectedSpots[j].no == searchedSpotsListFromRecommendedCourse[_i20].no && (//chipcss = 'color:#ffffff;background-color:#000000;opacity:0.8';
                    chipclass = "chip chipSelectedCss",
                        spotOrRestaurant = "check");
            appendingTxt += "<div id=\"chipNo" + searchedSpotsListFromRecommendedCourse[_i20].no + "\" class=\"" + chipclass + "\"" + "onclick=\"addOrRemoveSpotToSelectedSpotsFromRecommendedCourse(" + searchedSpotsListFromRecommendedCourse[_i20].no + ")\"><i id=\"miNo" + searchedSpotsListFromRecommendedCourse[_i20].no + "\" class=\"material-icons\" style=\"font-size:inherit;vertical-align: -1px;\">" + spotOrRestaurant + "</i><hs>" + showingNameForReccomendedcourse + "</hs></div>"
        }
        appendingTxt += "</div>" + "</div>" + "</div>" + "</div>",
            $("#recommendedcourses" + (n - 1)).append(appendingTxt)
    }
    var i, h = document.getElementsByClassName("mySlidesHS"), dotshs = document.getElementsByClassName("demo3");
    for (n > h.length && (slideIndexHS = 1),
         1 > n && (slideIndexHS = h.length),
             i = 0; i < h.length; i++)
        h[i].style.display = "none";
    for (i = 0; i < dotshs.length; i++)
        dotshs[i].className = 600 >= $(window).width() ? dotshs[i].className.replace("w3-white", "") : dotshs[i].className.replace(" w3-dark-grey", "");
    h[slideIndexHS - 1] && (h[slideIndexHS - 1].style.display = "block"),
    dotshs[slideIndexHS - 1] && (600 >= $(window).width() ? dotshs[slideIndexHS - 1].className += " w3-white" : dotshs[slideIndexHS - 1].className += " w3-dark-grey"),
        $("#recommendedCourseAreaCurrent").html("&nbsp(" + slideIndexHS + "/" + i + ")"),
        1 == slideIndexHS ? $.ajax({
            type: "GET",
            url: headAddress + "/searchMostSelectedSpots",
            data: {
                cityName: cityName
            },
            success: function success(mostSelectedSpots) {
                searchedSpotsListFromRecommendedCourse = mostSelectedSpots,
                    makeRecommendedcoursePage(slideIndexHS, searchedSpotsListFromRecommendedCourse, "", "hs001.jpeg")
            }
        }) : 0 < recommendedcoursesNo.length && $.ajax({
            type: "GET",
            url: headAddress + "/searchSpotsWithRecommendedcourseNo",
            data: {
                recommendedcourseNo: recommendedcoursesNo[slideIndexHS - 2].no,
                cityName: cityName
            },
            success: function success(courseInfo) {
                searchedSpotsListFromRecommendedCourse = courseInfo.searchedSpots,
                    makeRecommendedcoursePage(slideIndexHS, searchedSpotsListFromRecommendedCourse, courseInfo.courseName, courseInfo.imgName)
            }
        })
}
function addOrRemoveSpotToSelectedSpotsFromRecommendedCourse(no) {
    for (var isAlreadySelected = !1, spotOrRestaurant = "account_balance", i = 0; i < selectedSpots.length; i++)
        no == selectedSpots[i].no && (isAlreadySelected = !0,
        0 == selectedSpots[i].isSpot && (spotOrRestaurant = "restaurant"));
    isAlreadySelected ? (removeSpotFromSelectedSpots(no),
        $("#chipNo" + no).removeClass("chipSelectedCss"),
        $("#miNo" + no).html(spotOrRestaurant)) : addSpotToSelectedSpots(no)
}
function setRecommendedCourseOnCart() {
    for (var isAlreadySelected, i = 0; i < searchedSpotsListFromRecommendedCourse.length; i++) {
        isAlreadySelected = !1;
        for (var j = 0; j < selectedSpots.length; j++)
            searchedSpotsListFromRecommendedCourse[i].no == selectedSpots[j].no && (isAlreadySelected = !0);
        isAlreadySelected || addSpotToSelectedSpots(searchedSpotsListFromRecommendedCourse[i].no, !0)
    }
    document.getElementById("HotSpotModalPage").style.display = "none"
}
//////////////////////////////////////////
function showRecommendedcourses() {
    $.ajax({
        type: "GET",
        url: headAddress + "/getRecommendedcourseNos",
        data: {
            cityName: cityName
        },
        success: function success(nos) {
            $("#recommendedCourseArea").html(""),
                recommendedcoursesNo = nos;
            // console.log(nos);
            var appendText = "";
            appendText += "<div class=\"hotspotArrowDiv\"><div class=\"left hotspotArrowleft\" onClick=\"plusDivsHS(-1)\">&#10094;</div>" + "<div class=\"right hotspotArrowright\" onClick=\"plusDivsHS(1)\">&#10095;</div></div>";
            for (var i = 0; i < recommendedcoursesNo.length + 1; i++)
                appendText += "<div id=\"recommendedcourses" + i + "\" class=\"mySlidesHS\">" + "</div>";
            //추천일정 없을때 커밍순
            0 == recommendedcoursesNo.length && (appendText += "<div id=\"recommendedcourses1\" class=\"mySlidesHS\">" + "<div class=\"row\">" + "<div class=\"col s12\" style=\"padding:0.9rem;padding-top: 0;\">" + "<div class=\"card z-depth-2 m-borderBold\">" + "<div class=\"card-image\">" + "<img src=\"/myro_image/hs000.jpeg\" alt=\"image\" loading=\"lazy\">" + "<div>" + "<span class=\"card-title\" style=\"font-size:10px;text-align:center;width:100%;letter-spacing: 0.1rem;color:#fff;padding:0;\">" + i18nSvc.get("moreRecommendedCourseComingSoon") + "<b style=\"color:#fff;font-size: 30px\"></b>" + "</span></div>" + "</div>" + "<div class=\"card-content\"></div></div></div></div></div>"),
                appendText += "<div class=\"center container white-text w3-display-bottommiddle\" style=\"width:100%\">";
            for (var _i21 = 0; _i21 < recommendedcoursesNo.length + 1; _i21++)
                appendText += "<span class=\"s-badge demo3 w3-transparent w3-hover-gray\" style=\"border:1px solid #696969;margin:0 3px 0 3px\" onClick=\"currentDivHS(" + (_i21 + 1) + ")\"></span>";
            //추천일정 없을때 페이징
            0 == recommendedcoursesNo.length && (appendText += "<span class=\"s-badge demo3 w3-transparent w3-hover-gray\" style=\"border:1px solid #696969;margin:0 3px 0 3px\" onClick=\"currentDivHS(2)\"></span>"),
                appendText += "</div>",
                $("#recommendedCourseArea").append(appendText),
                showDivshs(slideIndexHS),
                document.getElementById("HotSpotModalPage").style.display = "block"
        }
    })
}
//블로그 코스 불러오기 함수
// function showBlogCourse() {
//     // console.log(123123);
//     $.ajax({
//         type: 'GET',
//         url: headAddress + '/getBlogCourseNos',
//         data: {
//             cityName: cityName
//         },
//         success: function (res) {
//             // console.log(res);
//             $("#blogCourseArea").html("");
//             recommendedcoursesNo = [];
//             let appendText = "";
//             appendText +=
//                     '<div class="hotspotArrowDiv"><div class="left hotspotArrowleft" onClick="plusDivsHS(-1)">&#10094;</div>' +
//                     '<div class="right hotspotArrowright" onClick="plusDivsHS(1)">&#10095;</div></div>';
//             for (let i = 0; i < recommendedcoursesNo.length + 1; i++) {
//                 appendText +=
//                     '<div id="recommendedcourses' + i + '" class="mySlidesHS">' +
//                     '</div>';
//             }
//             //추천일정 없을때 커밍순
//             if (recommendedcoursesNo.length == 0) {
//                 appendText +=
//                     '<div id="recommendedcourses1" class="mySlidesHS">' +
//                     '<div class="row">' +
//                     '<div class="col s12" style="padding:0.9rem;padding-top: 0;">' +
//                     '<div class="card z-depth-2 m-borderBold">' +
//                     '<div class="card-image">' +
//                     '<img src="/myro_image/hs000.jpeg" alt="image" loading="lazy">' +
//                     '<div>' +
//                     '<span class="card-title" style="font-size:10px;text-align:center;width:100%;letter-spacing: 0.1rem;color:#fff;padding:0;">' + i18nSvc.get('moreRecommendedCourseComingSoon') + '<b style="color:#fff;font-size: 30px"></b>' +
//                     '</span></div>' +
//                     '</div>' +
//                     '<div class="card-content"></div></div></div></div></div>';
//             }
//             appendText +=
//                     '<div class="center container white-text w3-display-bottommiddle" style="width:100%">';
//             for (let i = 0; i < recommendedcoursesNo.length + 1; i++) {
//                 appendText += '<span class="s-badge demo3 w3-transparent w3-hover-gray" style="border:1px solid #696969;margin:0 3px 0 3px" onClick="currentDivHS(' + (i + 1) + ')"></span>';
//             }
//             //추천일정 없을때 페이징
//             if (recommendedcoursesNo.length == 0) {
//                 appendText += '<span class="s-badge demo3 w3-transparent w3-hover-gray" style="border:1px solid #696969;margin:0 3px 0 3px" onClick="currentDivHS(2)"></span>';
//             }
//             appendText += '</div>';
//             $("#recommendedCourseArea").append(appendText);
//             showDivshs(slideIndexHS);
//             document.getElementById('HotSpotModalPage').style.display = 'block';
//         }
//     });
// }//블로그 코스 불러오기 함수
//날짜 바꿨을 때 호텔 선택 영역 변경
function changeSelectedHotelAreaWhenChangeDate() {
    removeAllHotelsSelectedSpots(),
        selectedHotels = [],
        refreshSeletedHotelsCnt(),
        $("[id*=hotelSetDayLabel]").remove(),
        $("#cart3").html("");
    for (var i = 0; i < travelDay - 1; i++) {
        var today = new Date(startTravelDate)
            , nextDay = new Date(startTravelDate);
        today.setDate(startTravelDate.getDate() + i),
            nextDay.setDate(startTravelDate.getDate() + i + 1);
        var startMonth = ("0" + (today.getMonth() + 1)).slice(-2)
            , startDay = ("0" + today.getDate()).slice(-2)
            , endMonth = ("0" + (nextDay.getMonth() + 1)).slice(-2)
            , endDay = ("0" + nextDay.getDate()).slice(-2)
            , checked = "";
        0 == i && (checked = "checked");
        var appendingText = "<div class=\"dayhoteldiv\">\n        <input id=\"day".concat(i, "hotelinput\" class=\"radio-inline__input\" type=\"radio\" name=\"hotelDay\" ").concat(checked, ">\n        <label id=\"day").concat(i, "hotellabelnumber\" class=\"radio-inline__label addRIL\" for=\"day").concat(i, "hotelinput\">\n        <div id=\"dayhotellabeltext\">DAY&nbsp<hs class=\"hotelDayCount\">").concat(i + 1, "</hs>&nbsp<hs>").concat(startMonth, ".").concat(startDay, "&nbsp-&nbsp").concat(endMonth, ".").concat(endDay, "</hs></div></label>\n        <div class=\"dayhoteldivfirstChild\" id=\"hotelHelpText").concat(i, "\">\n            <div>\n                <div class=\"dayhoteldivsecondChild\">\n                </div>\n                <span id=\"day").concat(i, "SelectedhotelInfo\"></span>\n                <span id=\"day").concat(i, "hotelInfo\"><li class=\"center hotelInfoText\">\n                <hs>").concat(i18nSvc.get("selectDateAndChooseHotel"), "</hs><br><i style =\"cursor: pointer\" class=\"material-icons\" onclick=\"searchHotelKeywordFocus(").concat(i, ")\">add</i></li></span>\n              </div>\n        </div>\n        </div>");
        $("#cart3").append(appendingText)
    }
}
// 액션 선언 & validation 등
$("#reqSpotRegName").on("input", function() {
    100 < $("#reqSpotRegName").val().length && $("#reqSpotRegName").val($("#reqSpotRegName").val().substr(0, 100))
}),
    $("#reqSpotRegDesc").on("input", function() {
        200 < $("#reqSpotRegDesc").val().length && $("#reqSpotRegDesc").val($("reqSpotRegDesc").val().substr(0, 200))
    }),
    $("#feedbackName").on("input", function() {
        20 < $("#feedbackName").val().length && $("#feedbackName").val($("#feedbackName").val().substr(0, 20))
    }),
    $("#feedbackEmail").on("input", function() {
        100 < $("#feedbackEmail").val().length && $("#feedbackEmail").val($("#feedbackEmail").val().substr(0, 100))
    }),
    $("#feedback").on("input", function() {
        1e3 < $("#feedback").val().length && $("#feedback").val($("#feedback").val().substr(0, 1e3))
    }),
    $("#feedbackName").keyup(function(event) {
        13 == event.keyCode && $("#feedbackEmail").focus()
    }),
    $("#feedbackEmail").keyup(function(event) {
        13 == event.keyCode && $("#feedback").focus()
    }),
    $("#FeedBackActionbtn").hover(function() {
        //호버될때
        setTimeout(function() {
            $("#FeedBackActionbtnText").html(i18nSvc.get("sendUsYourFeedback"))
        }, 2)
    }, function() {
        //호버빠질때
        $("#FeedBackActionbtnText").html(i18nSvc.get("doYouHaveSomeProblems"))
    }),
    $("[name=searchSpotOrHotelRadio]").click(function() {
        //장소나 호텔 버튼 클릭하면 페이지 안넘어가게 임시방편
        deleteAllSpotsList(),
            $("#pageList").html(""),
            $("#pageSectionDiv").css("display", "none"),
            $("#spotsNoListText").css("display", "block"),
            pageNumForNextPage = 0,
            lastPage = 1,
            !0 == $("[name=searchSpotOrHotelRadio]")[0].checked ? ($("#searchOrRecommend").html(i18nSvc.get("searchHotelPlease")),
                addUserTrackingData("changeHorSRadioButton|" + "hotel")) : !0 == $("[name=searchSpotOrHotelRadio]")[1].checked && ($("#searchOrRecommend").html(i18nSvc.get("searchPlacePlease")),
                addUserTrackingData("changeHorSRadioButton|" + "spot")),
            $("#searchResultCnt").html(""),
            $("#searchSpotOrHotelKeyword").val(""),
            $("#searchSpotOrHotelKeyword").focus()
    }),
    $("#searchSpotOrHotelKeyword").keyup(function(event) {
        13 == event.keyCode && $("#searchSpotsOrHotelsButton").click()
    }),
    $("#searchSpotKeywordAfterMakeRoute").keyup(function(event) {
        13 == event.keyCode && $("#searchSpotsAfterMakeRouteButton").click()
    }),
    $("#travelName").keyup(function(event) {
        13 == event.keyCode && $("#saveRouteAndSendEmailButton").click()
    }),
    $("input[name*='emailAddress']").keyup(function(event) {
        13 == event.keyCode && $("#saveRouteAndSendEmailButton").click()
    }),
    $("#reqSpotRegName").keyup(function(event) {
        13 == event.keyCode && $("#reqSpotRegBtn").click()
    }),
    $("#reqSpotRegDesc").keyup(function(event) {
        13 == event.keyCode && $("#reqSpotRegBtn").click()
    });
//엔터 누르면 버튼 눌리게
// 장소등록 시작 //
function getInformationFromGoogleAndShowRegistrationModal(cnt) {
    var reqSpotRegName = $("#reqSpotRegName").val();
    if ("" == reqSpotRegName)
        return void showToastMsg(i18nSvc.get("insertPlaceName"));
    var lat = startLat
        , lng = startLng;
    if (0 == cnt)
        ;
    else if (1 == cnt)
        lat += .4,
            lng += .6;
    else if (2 == cnt)
        lat += .4,
            lng -= .6;
    else if (3 == cnt)
        lat -= .4,
            lng += .6;
    else if (4 == cnt)
        lat -= .3,
            lng -= .5;
    else
        return showToastMsg(i18nSvc.get("noSearchResult")),
            void $("#reqSpotRegName").focus();
    $.ajax({
        url: headAddress + "/getPlaces?sk=" + reqSpotRegName + "&lat=" + lat + "&lng=" + lng + "&radius=" + 5e4,
        success: function success(data) {
            if (searchInfoForRegSpot = JSON.parse(data.body).results,
            0 == searchInfoForRegSpot.length)
                return void getInformationFromGoogleAndShowRegistrationModal(cnt + 1);
            $("#reqSearchSpotReg").css("display", "flex"),
                $("#searchInfoForRegSpotCnt").html(searchInfoForRegSpot.length),
                $("#searchInfoForRegSpotResult").html("");
            for (var i = 0; i < searchInfoForRegSpot.length; i++) {
                var _spot8 = searchInfoForRegSpot[i]
                    , appendTxt = "<li class=\"collection-item rSSRstyle1\">\n                    <div style=\"display: flex\">\n                        <!-- \uAC80\uC0C9\uC7A5\uC18C\uC815\uBCF4\uC774\uB984/\uC8FC\uC18C Div -->\n                        <div class=\"rSSRstyle2\">\n                            <h7>".concat(_spot8.name, "</h7><br>\n                            <hs>").concat(_spot8.vicinity, "</hs>\n                        </div>\n                        <!-- \uAC80\uC0C9\uC7A5\uC18C\uBC84\uD2BC Div -->\n                        <div class=\"reqSpotRegBtnWrap\" >\n                            <div title=\"").concat(i18nSvc.get("registerThisPlace"), "\" class=\"btn waves-effect reqSpotRegBtnAdd\" onclick=\"reqSpotReg(").concat(i, ")\"><i class=\"material-icons\">add</i></div>\n                            <div title=\"").concat(i18nSvc.get("watchInGoogleMap"), "\" class=\"btn waves-effect reqSpotRegBtnSearch\" onclick=\"searchInWeb('google', '").concat(_spot8.name, "', '").concat(_spot8.geometry.location.lat, "', '").concat(_spot8.geometry.location.lng, "')\"><i class=\"material-icons\">search</i></div>\n                        </div>\n                    </div>\n                </li>");
                $("#searchInfoForRegSpotResult").append(appendTxt)
            }
        }
    })
}
function reqSpotReg(idx) {
    var reqSpotRegName = $("#reqSpotRegName").val()
        , reqSpotRegDesc = $("#reqSpotRegDesc").val()
        , spotOrHotel = "spot";
    !0 == $("[name=spotOrHotelForRegisterSpot]")[1].checked ? spotOrHotel = "restaurant" : !0 == $("[name=spotOrHotelForRegisterSpot]")[2].checked && (spotOrHotel = "hotel");
    var searchedInfoInGoogle = searchInfoForRegSpot[idx]
        , spots = []
        , spot = {};
    spot.type = searchedInfoInGoogle.types,
        spot.googleSearchedName = searchedInfoInGoogle.name,
        spot.reqSpotRegName = reqSpotRegName,
        spot.reqSpotRegDesc = reqSpotRegDesc,
        spot.lat = searchedInfoInGoogle.geometry.location.lat,
        spot.lng = searchedInfoInGoogle.geometry.location.lng,
        spot.recommendedStaySec = 7200,
        spot.address = searchedInfoInGoogle.vicinity,
        spot.place_id = searchedInfoInGoogle.place_id,
        spot.showingName = searchedInfoInGoogle.name,
        spot.searchingEname = "",
        spot.searchingKname = "",
        spot.spotOrHotel = spotOrHotel,
        spot.cityName = cityName;
    var korCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        , engCheck = /[a-z]|[A-Z]/;
    korCheck.test(reqSpotRegName) || (spot.searchingEname = reqSpotRegName,
    !engCheck.test(spot.googleSearchedName) && (spot.showingName = spot.googleSearchedName + "(" + spot.searchingEname + ")")),
    engCheck.test(reqSpotRegName) || (spot.searchingKname = reqSpotRegName,
    !korCheck.test(spot.googleSearchedName) && (spot.showingName = spot.searchingKname + "(" + spot.googleSearchedName + ")")),
        spot.photo_reference = searchedInfoInGoogle.photos ? searchedInfoInGoogle.photos[0].photo_reference : "",
        spots.push(spot);
    var reqParam = {};
    reqParam.spots = JSON.stringify(spots),
        $.ajax({
            type: "POST",
            url: headAddress + "/insertSpotOrHotel",
            data: reqParam,
            success: function success(data) {
                "inserted" == data || "updated" == data ? (showToastMsg(i18nSvc.get("placeRegisterComplete")),
                    $("#reqSearchSpotReg").css("display", "none"),
                    $("#reqSpotReg").css("display", "none"),
                    $("#reqSpotRegName").val(""),
                    $("#reqSpotRegDesc").val("")) : showToastMsg(i18nSvc.get("placeRegisterError"))
            }
        }),
        addUserTrackingData("reqSpotReg|" + spotOrHotel + "|" + reqSpotRegName)
}
// 장소등록 끝 //
function openEventPage() {
    window.open("/myro_image/event.jpg")
}
function sendInflowChannel() {
    for (var checkBoxses = $("[name=channelSelectBox]"), checkorder = "", i = 0; i < checkBoxses.length; i++)
        checkBoxses[i].checked && (checkorder += i + ",");
    var reqParam = {};
    reqParam.checkorder = checkorder,
        reqParam.channelEtcReason = $("#channelEtcReason").val(),
        $.ajax({
            type: "POST",
            url: headAddress + "/postInflowchannel",
            data: reqParam,
            success: function success() {
                document.getElementById("modalInflowWrap").style.display = "none",
                    showToastMsg(i18nSvc.get("thanksForHelpUs"))
            }
        })
}
// 일정저장모달테스트
function showSaveRouteModal() {
    document.getElementById("saveModal").style.display = "flex"
}
function hideSaveRouteModal() {
    document.getElementById("saveModal").style.display = "none"
}
$("#duplicateRouteBtnInBox").click(function() {
    // console.log(location.search.split("savedRouteToken="));
    // console.log(1111111111111);
    var savedRouteToken = location.search.split("savedRouteToken=")[1];
    $.ajax({
        type: "POST",
        url: "/duplicateSavedRouteToken",
        data: {
            savedRouteToken: savedRouteToken,
            userEmail: userEmail // userEmail: 'test@test.com'
        },
        success: function success(res) {
            200 == res.statusCode ? (alert(res.msg),
                location.href = "/mypage") : 401 == res.statusCode && alert(res.msg)
        }
    }),
        addUserTrackingData("duplicateRouteBtnInBox|" + savedRouteToken)
});
function goToMyPage() {
    location.href = "/mypage"
}
function openLoginPageForSaveRoute() {
    window.open("/login"),
        hideAlertModal()
}
function setBtnAfterSaveRouteForLoinUser() {
    $("#saveRouteByExelBtnInBox").css("display", "none"),
        $("#sendEmailBtnInBox").css("display", "none"),
        $("#modifySavedRouteBtnInBox").css("display", "flex"),
        $("#duplicateRouteBtnInBox").css("display", "none"),
        $("#saveRouteBtnInBox").css("display", "none"),
        $("#loginBtnInBox").css("display", "none"),
        hideAlertModal()
}
function saveRouteForLoginUser() {
    return _saveRouteForLoginUser.apply(this, arguments)
}
//end saveRouteForLoginUser
//  saveRouteByExelBtnInBox
//  sendEmailBtnInBox
//  modifySaveRouteBtnInBox
//  duplicateRouteBtnInBox
//  saveRouteBtnInBox
function _saveRouteForLoginUser() {
    return _saveRouteForLoginUser = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee10(_userEmail) {
            var selectedHotelsNo, selectedSpotsNo, i, _i23, savingData, dateString, sds, reqData, saveRouteForLoginUserRes;
            return regeneratorRuntime.wrap(function(_context10) {
                for (; ; )
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            selectedHotelsNo = [],
                                selectedSpotsNo = [],
                                i = 0;
                        case 3:
                            if (!(i < selectedHotels.length)) {
                                _context10.next = 11;
                                break
                            }
                            if (selectedHotels[i]) {
                                _context10.next = 7;
                                break
                            }
                            return selectedHotelsNo.push(null),
                                _context10.abrupt("continue", 8);
                        case 7:
                            selectedHotelsNo.push(selectedHotels[i].no);
                        case 8:
                            i++,
                                _context10.next = 3;
                            break;
                        case 11:
                            for (_i23 = 0; _i23 < selectedSpots.length; _i23++)
                                selectedSpotsNo.push(selectedSpots[_i23].no);
                            // console.log(1111111);
                            return showLoading(),
                                savingData = {},
                                savingData.travelDay = $("#travelDay").val(),
                                savingData.originalHotelsNo = selectedHotelsNo,
                                savingData.originalSpotsNo = selectedSpotsNo,
                                savingData.spotsByDay = backupDataFromServer.spotsByDay,
                                savingData.stayingInfos = backupDataFromServer.stayingInfos,
                                savingData.originalSchedule = backupDataFromServer.originalSchedule,
                                savingData.travelName = "",
                                savingData.cityName = korCityName,
                                savingData.engCityName = cityName,
                                savingData.transportationMode = transportationMode,
                                savingData.possibleTransportationMode = possibleTransportationMode,
                                dateString = startTravelDate.toLocaleDateString("ko-KR"),
                                sds = "",
                                sds = -1 == sds.indexOf("/") ? -1 == sds.indexOf("-") ? dateString.split(". ") : dateString.split("-") : dateString.split("/"),
                                sds[2] = sds[2].split(".")[0],
                            10 > +sds[1] && (sds[1] = "0" + sds[1]),
                            10 > +sds[2] && (sds[2] = "0" + sds[2]),
                                savingData.startTravelDate = "".concat(sds[0], "-").concat(sds[1], "-").concat(sds[2]),
                                reqData = {},
                                reqData.data = JSON.stringify(savingData),
                                _context10.next = 36,
                                myroRequestForAuth(headAddress + "/saveRouteForLoginUser", "POST", reqData);
                        case 36:
                            saveRouteForLoginUserRes = _context10.sent,
                                savedRouteTokenAfterSavingByUser = saveRouteForLoginUserRes.savedRouteToken,
                                hideLoading(),
                                200 == saveRouteForLoginUserRes.statusCode ? (window.onbeforeunload = null,
                                    $("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n            <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                <p id=\"modalexitText\">\n                    <span>".concat(saveRouteForLoginUserRes.msg, "</span>\n                </p>\n                <div class=\"alert-button-container\">\n                    <div class=\"modal-close alert-button-ok\" onclick=\"goToMyPage()\">\uD655\uC778</div>\n                    <div class=\"modal-close alert-button-close\" onclick=\"setBtnAfterSaveRouteForLoinUser()\">\uCDE8\uC18C</div>\n                </div>\n            </div>\n            </div>\n        </div>")),
                                    showAlertModal()) : ($("#modalResultArea").html("<div id=\"alertModal\" class=\"alert-modal\">\n            <div class=\"alert-modal-content\" style=\"padding-bottom: 10px\">\n                <p id=\"modalexitText\">\n                    <span>".concat(saveRouteForLoginUserRes.msg, "</span>\n                </p>\n                <div class=\"alert-button-container\">\n                    <div class=\"modal-close alert-button-ok\" onclick=\"openLoginPageForSaveRoute()\">\uD655\uC778</div>\n                    <div class=\"modal-close alert-button-close\" onclick=\"hideAlertModal()\">\uCDE8\uC18C</div>\n                </div>\n            </div>\n            </div>\n        </div>")),
                                    showAlertModal()),
                                addUserTrackingData("saveRouteForLoginUser|" + _userEmail);
                        case 41:
                        case "end":
                            return _context10.stop();
                    }
            }, _callee10)
        })),
        _saveRouteForLoginUser.apply(this, arguments)
}
var savedRouteTokenInQ = location.href.split("savedRouteToken=")[1];
savedRouteTokenInQ ? userEmail ? $.ajax({
    type: "GET",
    url: headAddress + "/verifyAuthority",
    data: {
        savedRouteToken: savedRouteTokenInQ,
        userEmail: userEmail
    },
    success: function success(res) {
        200 == res.statusCode && ("\uC5EC\uD589 \uC8FC\uC778" == res.msg || "\uC5EC\uD589 \uCE5C\uAD6C" == res.msg) ? ($("#saveRouteByExelBtnInBox").css("display", "none"),
            $("#sendEmailBtnInBox").css("display", "none"),
            $("#modifySavedRouteBtnInBox").css("display", "flex"),
            $("#duplicateRouteBtnInBox").css("display", "none"),
            $("#saveRouteBtnInBox").css("display", "none"),
            $("#loginBtnInBox").css("display", "none")) : 200 == res.statusCode && "\uC5EC\uD589 \uBC29\uBB38\uC790" == res.msg && ($("#saveRouteByExelBtnInBox").css("display", "none"),
            $("#sendEmailBtnInBox").css("display", "none"),
            $("#modifySavedRouteBtnInBox").css("display", "none"),
            $("#duplicateRouteBtnInBox").css("display", "flex"),
            $("#saveRouteBtnInBox").css("display", "none"),
            $("#loginBtnInBox").css("display", "none"))
    }
}) : (alert("\uB85C\uADF8\uC778\uC744 \uD558\uC154\uC57C \uC77C\uC815 \uC218\uC815\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),
    isNotLoginWithToken = !0) : userEmail ? ($("#saveRouteByExelBtnInBox").css("display", "none"),
    $("#sendEmailBtnInBox").css("display", "none"),
    $("#modifySavedRouteBtnInBox").css("display", "none"),
    $("#duplicateRouteBtnInBox").css("display", "none"),
    $("#saveRouteBtnInBox").css("display", "flex"),
    $("#loginBtnInBox").css("display", "none"),
    $("#loginBtnInBox").css("display", "none")) : ($("#saveRouteByExelBtnInBox").css("display", "flex"),
    $("#sendEmailBtnInBox").css("display", "flex"),
    $("#modifySavedRouteBtnInBox").css("display", "none"),
    $("#duplicateRouteBtnInBox").css("display", "none"),
    $("#saveRouteBtnInBox").css("display", "flex"),
    $("#loginBtnInBox").css("display", "none"),
    $("#loginBtnInBox").css("display", "none"));
function openLoginPopUp() {
    window.open("/login")
}
function setStayTimeToggleOverlay(_i, _j) {
    var overlay = document.getElementById("setTimeOverlay_idx_".concat(_i, "_").concat(_j));
    // let overlay = document.getElementById('setTimeOverlay');
    overlay.classList.toggle("active")
}
//setTimeOverlay에서 시간 바꿀때 sortable-card-stay-time시간 같이 바꾸기.
function changeSpotStayingHInSetTimeOverlay(_i, _j) {
    // console.log(_i);
    var spotStayingH = $("#spotStayingH_idx_".concat(_i, "_").concat(_j)).val()
        , spotStayingM = $("#spotStayingM_idx_".concat(_i, "_").concat(_j)).val();
    spotsByDay[_i][_j].realStaySec = 60 * (60 * +spotStayingH) + 60 * +spotStayingM,
        $("#showSpotStayngTimeInCart_idx_".concat(_i, "_").concat(_j)).html("".concat(spotStayingH, "\uC2DC\uAC04").concat(spotStayingM, "\uBD84")),
        rewnewalDailyTimes(_i, _j)
}
function changeSpotStayingMInSetTimeOverlay(_i, _j) {
    var spotStayingH = $("#spotStayingH_idx_".concat(_i, "_").concat(_j)).val()
        , spotStayingM = $("#spotStayingM_idx_".concat(_i, "_").concat(_j)).val();
    spotsByDay[_i][_j].realStaySec = 60 * (60 * +spotStayingH) + 60 * +spotStayingM,
        $("#showSpotStayngTimeInCart_idx_".concat(_i, "_").concat(_j)).html("".concat(spotStayingH, "\uC2DC\uAC04").concat(spotStayingM, "\uBD84")),
        rewnewalDailyTimes(_i, _j)
}
//마이리얼 트립 검색
function searchInMyrealtrip(showingName) {
    var searchKeyword = (1 < korCityName.split(" ").length ? korCityName.split(" ")[1] : korCityName) + " " + showingName.split("(")[0];
    // let searchKeywordCityName = korCityName;
    // console.log(dataFromServer.spotsByDay[_i][_j].showingName);
    // console.log(searchKeywordCityName);
    window.open("https://www.myrealtrip.com/search?q=".concat(searchKeyword)),
        addUserTrackingData("searchInMyrealtrip|" + searchKeyword)
}
function showSearchCanvasFlip() {
    UIkit.offcanvas("#search-offcanvas-flip").show()
}
function hideSearchCanvasFlip() {
    UIkit.offcanvas("#search-offcanvas-flip").hide()
}
function eventInfoModalOpen() {
    $("#eventInfoModal").css("display", "flex")
}
function showAlertModal() {
    document.getElementById("alertModal").style.display = "flex"
}
function hideAlertModal() {
    document.getElementById("alertModal").style.display = "none"
}
//장소 마커 누르거나 장소정보보기 누르면 나오는 모달 세팅
function spotInfoModal(_spotNo, _isFromMaker) {
    _isFromMaker ? $("#addSpotToCartModal").css("display", "none") : ($("#addSpotToCartModal").css("display", "flex"),
        $("#addSpotToCartModal").attr("onclick", "addSpotToSelectedSpots(".concat(_spotNo, ");closeLocationInfoModal()")));
    //모달창 보이기
    $("#locationInfo").css("display", "flex"),
        $.ajax({
            type: "get",
            url: "/getSpotInfoForModal",
            data: {
                spotNo: _spotNo,
                cityName: cityName
            },
            success: function success(res) {
                //showingName 에 괄호안에 영어 있는경우(있으면 너무 김) split으로 뒤에 지워버림.
                var showingEngNameForModal, showingNameForModal = res.showingName;
                -1 !== showingNameForModal.indexOf("(") && (showingNameForModal = showingNameForModal.split(")")[0],
                    showingEngNameForModal = showingNameForModal.split("(")[1],
                    showingNameForModal = showingNameForModal.split("(")[0]);
                // console.log(res.openTime);
                var openTimeForSpotInfoModal = JSON.parse(res.openTime)
                    , appendImageHtml = "<img class=\"location-info-image\" \n            src=\"".concat(headAddress, "/getSpotImage/").concat(cityName, "?no=").concat(_spotNo, "\" \n            alt=\"placephoto\" \n            id=\"locationInfoImage\" \n            loading=\"lazy\" />") + "<div class=\"place-search-btn-container\">" + "<div class=\"place-search-btn-wrapper\">" + "<div class=\"place-search-btn\">" + "<div class=\"place-search-btn-image-container\"" + " onclick=\"searchInWeb('google', '" + res.showingName.replace("'", "\\'") + "', '" + res.lat + "', '" + res.lng + "')\">" + "<img src=\"myro_image/googlemaps_circle_btn.png\" alt=\"logo\" /></div></div>" + "<div class=\"place-search-btn\"><div class=\"place-search-btn-image-container\" onclick=\"searchInWeb('naver', '" + res.showingName.split("(")[0] + "')\"><img src=\"myro_image/naver_circle_btn.png\" alt=\"logo\" /></div></div>" + "<div class=\"place-search-btn\"><div class=\"place-search-btn-image-container\" onclick=\"searchInWeb('instagram', '" + res.showingName.split("(")[0].replace(/(\s*)/g, "") + "')\"><img src=\"myro_image/instagram_circle_btn.png\" alt=\"logo\" /></div></div>" + "</div></div>";
                // console.log(openTimeForSpotInfoModal);
                $("#spotInfoImageModal").html(appendImageHtml),
                    $("#spotInfoTitleModal").html(showingNameForModal);
                var openTimeAppendTextForModal = "";
                if (0 == openTimeForSpotInfoModal.length || "24/7" == openTimeForSpotInfoModal[0])
                    for (var k = 0; 7 > k; k++)
                        openTimeAppendTextForModal += "<li>" + weekDayKor[k] + " : 00:00 ~ 24:00</li>";
                else {
                    for (var openTimeByDay = [], _k5 = 0; 7 > _k5; _k5++)
                        openTimeByDay[_k5] = [];
                    for (var time, _k6 = 0; _k6 < openTimeForSpotInfoModal.length; _k6++)
                        time = openTimeForSpotInfoModal[_k6],
                            openTimeByDay[time.o[0]].push(time);
                    for (var _k7 = 0; 7 > _k7; _k7++) {
                        if (openTimeAppendTextForModal += "<li>" + weekDayKor[_k7] + " : ",
                        0 < openTimeByDay[_k7].length)
                            for (var l = 0; l < openTimeByDay[_k7].length; l++) {
                                var openTimeH = openTimeByDay[_k7][l].o[1].substr(0, 2)
                                    , openTimeM = openTimeByDay[_k7][l].o[1].substr(2, 4)
                                    , closeTimeH = openTimeByDay[_k7][l].c[1].substr(0, 2)
                                    , closeTimeM = openTimeByDay[_k7][l].c[1].substr(2, 4);
                                0 < l && (openTimeAppendTextForModal += "<span style='visibility:hidden '>\uD5AB : </span>"),
                                    openTimeAppendTextForModal += openTimeH + ":" + openTimeM + " ~ " + closeTimeH + ":" + closeTimeM + "<br>"
                            }
                        else
                            openTimeAppendTextForModal += i18nSvc.get("closed")
                    }
                }
                // console.log(openTimeAppendTextForModal);
                $("#spotInfoOpenTimesModal").html(openTimeAppendTextForModal),
                    $("#spotAddressModal").html(res.address),
                    $("#spotInfoEngTextModal").html(showingEngNameForModal)
            }
        })
}
function hotelInfoModal(_spotNo, _isFromMaker) {
    _isFromMaker ? $("#addSpotToCartModal").css("display", "none") : ($("#addSpotToCartModal").css("display", "flex"),
        $("#addSpotToCartModal").attr("onclick", "setHotel(".concat(_spotNo, ");closeLocationInfoModal()")));
    //모달창 보이기
    $("#locationInfo").css("display", "flex"),
        $.ajax({
            type: "get",
            url: "/getSpotInfoForModal",
            data: {
                spotNo: _spotNo,
                cityName: cityName
            },
            success: function success(res) {
                //showingName 에 괄호안에 영어 있는경우(있으면 너무 김) split으로 뒤에 지워버림.
                var showingEngNameForModal, showingNameForModal = res.showingName;
                -1 !== showingNameForModal.indexOf("(") && (showingNameForModal = showingNameForModal.split(")")[0],
                    showingEngNameForModal = showingNameForModal.split("(")[1],
                    showingNameForModal = showingNameForModal.split("(")[0]);
                // console.log;
                // console.log(res);
                // console.log(res.openTime);
                var openTimeForSpotInfoModal = JSON.parse(res.openTime)
                    , appendImageHtml = "<img class=\"location-info-image\" \n            src=\"".concat(headAddress, "/getSpotImage/").concat(cityName, "?no=").concat(_spotNo, "\" \n            alt=\"placephoto\" \n            id=\"locationInfoImage\" \n            loading=\"lazy\" />") + "<div class=\"place-search-btn-container\">" + "<div class=\"place-search-btn-wrapper\">" + "<div class=\"place-search-btn\">" + "<div class=\"place-search-btn-image-container\"" + " onclick=\"searchInWeb('google', '" + res.showingName.replace("'", "\\'") + "', '" + res.lat + "', '" + res.lng + "')\">" + "<img src=\"myro_image/googlemaps_circle_btn.png\" alt=\"logo\" /></div></div>" + "<div class=\"place-search-btn\"><div class=\"place-search-btn-image-container\" onclick=\"searchInWeb('naver', '" + res.showingName.split("(")[0] + "')\"><img src=\"myro_image/naver_circle_btn.png\" alt=\"logo\" /></div></div>" + "<div class=\"place-search-btn\"><div class=\"place-search-btn-image-container\" onclick=\"searchInWeb('instagram', '" + res.showingName.split("(")[0].replace(/(\s*)/g, "") + "')\"><img src=\"myro_image/instagram_circle_btn.png\" alt=\"logo\" /></div></div>" + "</div></div>";
                // console.log(openTimeForSpotInfoModal);
                $("#spotInfoImageModal").html(appendImageHtml),
                    $("#spotInfoTitleModal").html(showingNameForModal);
                var openTimeAppendTextForModal = "";
                if (0 == openTimeForSpotInfoModal.length || "24/7" == openTimeForSpotInfoModal[0])
                    for (var k = 0; 7 > k; k++)
                        openTimeAppendTextForModal += "<li>" + weekDayKor[k] + " : 00:00 ~ 24:00</li>";
                else {
                    for (var openTimeByDay = [], _k8 = 0; 7 > _k8; _k8++)
                        openTimeByDay[_k8] = [];
                    for (var time, _k9 = 0; _k9 < openTimeForSpotInfoModal.length; _k9++)
                        time = openTimeForSpotInfoModal[_k9],
                            openTimeByDay[time.o[0]].push(time);
                    for (var _k10 = 0; 7 > _k10; _k10++) {
                        if (openTimeAppendTextForModal += "<li>" + weekDayKor[_k10] + " : ",
                        0 < openTimeByDay[_k10].length)
                            for (var l = 0; l < openTimeByDay[_k10].length; l++) {
                                var openTimeH = openTimeByDay[_k10][l].o[1].substr(0, 2)
                                    , openTimeM = openTimeByDay[_k10][l].o[1].substr(2, 4)
                                    , closeTimeH = openTimeByDay[_k10][l].c[1].substr(0, 2)
                                    , closeTimeM = openTimeByDay[_k10][l].c[1].substr(2, 4);
                                0 < l && (openTimeAppendTextForModal += "<span style='visibility:hidden '>\uD5AB : </span>"),
                                    openTimeAppendTextForModal += openTimeH + ":" + openTimeM + " ~ " + closeTimeH + ":" + closeTimeM + "<br>"
                            }
                        else
                            openTimeAppendTextForModal += i18nSvc.get("closed")
                    }
                }
                // console.log(openTimeAppendTextForModal);
                $("#spotInfoOpenTimesModal").html(openTimeAppendTextForModal),
                    $("#spotAddressModal").html(res.address),
                    $("#spotInfoEngTextModal").html(showingEngNameForModal)
            }
        })
}
//장소 정보 모달 끄기 누르면 안보이게하기
function closeLocationInfoModal() {
    document.getElementById("locationInfo").style.display = "none",
        $("#spotInfoTitleModal").html("-"),
        $("#spotInfoEngTextModal").html("-"),
        $("#spotInfoIntroTextModal").html("-"),
        $("#spotTimeTableInfoModal").html("-"),
        $("#spotHomePageModal").html("-"),
        $("#spotAddressModal").html("-"),
        $("#spotPhoneNumModal").html("-"),
        $("#spotAdmissionModal").html("-"),
        $("#spotRouteModal").html("-"),
        $("#spotTipModal").html("-")
}
// 리뷰보기 열기/닫기
function showReviewDiv() {
    document.getElementById("info-review-div").style.display = "block"
}
function hideReviewDiv() {
    document.getElementById("info-review-div").style.display = "none"
}
// 리뷰쓰기 열기/닫기
function showReviewWriteModal() {
    document.getElementById("reviewWriteModal").style.display = "flex"
}
function hideReviewWriteModal() {
    document.getElementById("reviewWriteModal").style.display = "none"
}
