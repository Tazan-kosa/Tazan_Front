"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || "[object Arguments]" === Object.prototype.toString.call(iter))
        return Array.from(iter)
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
        return arr2
    }
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
//페이징 처리중~~~~`
var dataFromServer, savedRouteTokenKeys, savedRouteTokenKey = [], currentPage = 1, savedRouteCnt = 0, dataPerPage = 5, pageGroup = 5, pageNum = 0, allPageCNT = 0;
$("#profilePhote").append(userNickNameSubString),
    $(document).ready(function() {
        Kakao.init("c389574d86b7a5956adbcf357aaf901f"),
            $.ajax({
                url: "/getSavedRoutesCntByUserEmail",
                type: "GET",
                success: function success(res) {
                    savedRouteCnt = res.cnt,
                        $("#myPlan").html("".concat(savedRouteCnt)),
                        pageNum = Math.ceil(savedRouteCnt / dataPerPage),
                        allPageCNT = Math.ceil(savedRouteCnt / dataPerPage),
                    0 == pageNum && (pageNum = 1);
                    // console.log('getSavedRoutesCntByUserEmail, 전체 페이지 수: ' + pageNum);
                    for (var i = 1; i < pageGroup + 1 && ($("#pageList").append("<a onclick=\"getTravelListPage(".concat(i, ")\" id=\"pageButton").concat(i, "\" class=\"s-button\"> ").concat(i, " </a>")),
                    i != pageNum); i++)
                        ;
                },
                fail: function fail() {}
            }),
            $.ajax({
                url: "/checkRefreshTokenInMyPage",
                type: "PUT",
                data: {
                    refreshToken: window.localStorage.myroRefreshToken
                },
                success: function success(res) {
                    "\uD1A0\uD070 \uD655\uC778 \uC644\uB8CC" == res.msg || "\uB9AC\uD504\uB808\uC2DC \uD1A0\uD070 \uD655\uC778" == res.msg ? ("\uB9AC\uD504\uB808\uC2DC \uD1A0\uD070 \uD655\uC778" == res.msg && window.localStorage.setItem("myroRefreshToken", res.jwtRefreshToken),
                        userEmail = res.userEmail,
                        userNickName = res.userNickName,
                        userSignupOrigin = res.userSignupOrigin,
                        appendTravelListInMyPage(currentPage, dataPerPage)) : location.href = "/"
                },
                fail: function fail() {}
            })
    });
function getTravelListPage(_currentPage) {
    currentPage = _currentPage,
        $("#resultArea").html(""),
        appendTravelListInMyPage(_currentPage, dataPerPage)
}
function getTravelListNextPage(_np) {
    //다음 페이지
    if ("n" == _np) {
        if (Math.ceil(allPageCNT / pageGroup) <= Math.ceil(currentPage / pageGroup))
            alert("".concat(pageNum, "\uD398\uC774\uC9C0\uAC00 \uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4."));
        else {
            currentPage = currentPage + 5 - (currentPage % pageGroup - 1),
                $("#resultArea").html(""),
                appendTravelListInMyPage(currentPage, dataPerPage),
                $("#pageList").html("");
            for (var i = currentPage; i < currentPage + pageGroup && ($("#pageList").append("<a onclick=\"getTravelListPage(".concat(i, ")\" id=\"pageButton").concat(i, "\" class=\"s-button\"> ").concat(i, " </a>")),
            i != pageNum); i++)
                ;
        }
        //이전 페이지
    } else if ("p" == _np)
        // if (Math.ceil(allPageCNT / pageGroup) >= Math.ceil(currentPage / pageGroup)) {
        if (6 > currentPage)
            alert("\uCCAB \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4.");
        else {
            currentPage = currentPage - 5 - (currentPage % pageGroup - 1),
                $("#resultArea").html(""),
                appendTravelListInMyPage(currentPage, dataPerPage),
                $("#pageList").html("");
            for (var _i2 = currentPage; _i2 < currentPage + pageGroup; _i2++)
                $("#pageList").append("<a onclick=\"getTravelListPage(".concat(_i2, ")\" id=\"pageButton").concat(_i2, "\" class=\"s-button\"> ").concat(_i2, " </a>"));
            // if (i == pageNum) {
            //     break;
            // }
        }
}
//마이페이지에 여행 리스트 출력
function appendTravelListInMyPage(_currentPage, _dataPerPage) {
    // let currentPageDataLast = _currentPage * _dataPerPage;
    // console.log('currentPageDataFirst : ' + currentPageDataFirst);
    // console.log('currentPageDataLast : ' + currentPageDataLast);
    $.ajax({
        type: "GET",
        url: "/getSavedRoutesByUserEmail",
        data: {
            currentPageDataFirst: _currentPage * _dataPerPage - _dataPerPage,
            dataPerPage: _dataPerPage
        },
        success: function success(res) {
            dataFromServer = res;
            // console.log(dataFromServer);
            for (var _loop = function(i) {
                var userYearWeekDay = void 0
                    , userTravelStartDay = void 0
                    , userTravelFinishDay = void 0
                    , userSleepDay = void 0
                    , userTravelDay = void 0
                    , travelName = void 0
                    , dDay = void 0
                    , today = void 0
                    , today1 = void 0
                    , userStartDayForDDay = void 0
                    , appendHtml = ""
                    , savedRoutesData = JSON.parse(dataFromServer[i].stringfyJsonData)
                    , updatedDate = dataFromServer[i].updated_date
                    , userPlace = 0
                    , urEmail = dataFromServer[i].owner_email;
                travelName = savedRoutesData.travelName ? savedRoutesData.travelName : "",
                    userTravelDay = savedRoutesData.travelDay,
                    userSleepDay = 1 == userTravelDay ? "\uBB34" : userTravelDay - 1,
                    updatedDate = new Date(updatedDate),
                    updatedDate = "".concat(updatedDate.getFullYear(), ".").concat(updatedDate.getMonth() + 1, ".").concat(updatedDate.getDate()),
                    userYearWeekDay = new Date(savedRoutesData.startTravelDate),
                    userTravelStartDay = "".concat(userYearWeekDay.getFullYear(), ".").concat(userYearWeekDay.getMonth() + 1, ".").concat(userYearWeekDay.getDate()),
                    userTravelFinishDay = "".concat(userYearWeekDay.getFullYear(), ".").concat(userYearWeekDay.getMonth() + 1, ".").concat(userYearWeekDay.getDate() - 1 + +savedRoutesData.travelDay);
                for (var userOwnerEmail = dataFromServer[i].owner_email, j = 1; j < savedRoutesData.spotsByDay.length; j++)
                    userPlace += savedRoutesData.spotsByDay[j].length;
                userStartDayForDDay = new Date(userTravelStartDay),
                    today = new Date,
                    today1 = new Date("".concat(today.getFullYear(), ".").concat(today.getMonth() + 1, ".").concat(today.getDate())),
                    dDay = (userStartDayForDDay.getTime() - today1.getTime()) / 1e3 / 60 / 60 / 24,
                    dDay = 0 < dDay ? "D-" + dDay : "D+" + -1 * dDay,
                    appendHtml = 600 >= $(window).width() ? "<div class=\"mobile-travel-container\">\n                    <div class=\"mobile-travel-flex-top\">\n                        <div style=\"width: 100px; height: 100px\">\n                            <div class=\"mobile-d-day-circle\">".concat(dDay, "</div>\n                            <div class=\"mobile-share-circle\" id=\"sharedLogo_idx_").concat(i, "\">\uACF5\uC720</div>\n                            <img class=\"width:100%\" src=\"https://myro.co.kr/myro_image/city/").concat(savedRoutesData.engCityName, ".jpg\" alt=\"\" />\n                        </div>\n                        <div class=\"mobile-travel-info-container\">\n                            <div class=\"travel-title\">").concat(savedRoutesData.engCityName.toUpperCase(), "</div>\n                            <div class=\"mobile-small-text\">").concat(savedRoutesData.cityName, "</div>\n                            <div class=\"mobile-travel-info-day-text\">").concat(userTravelStartDay, "-").concat(userTravelFinishDay, "</div>\n                            <div class=\"uk-text-meta\" id=\"inputTravelName_idx_").concat(i, "\">").concat(travelName, "</div>\n                        </div>\n                    </div>\n                    <div class=\"mobile-travel-flex-bottom\">\n                        <div class=\"mobile-travel-button\" id=\"modifySavedRoute_idx_").concat(i, "\">\uC77C\uC815\uC218\uC815</div>\n                        <div style=\"display:flex;\">\n                        <div class=\"mobile-travel-button\">\uC77C\uC815\uD45C</div>\n                        <div uk-dropdown=\"mode: click\" style=\"margin-top:0!important;\">\n                                        <ul\n                                            class=\"\n                                                uk-nav\n                                                uk-dropdown-nav\n                                            \"\n                                        >\n                                            <li>\n                                                <a href=\"myroMobile1?savedRouteToken=").concat(res[i].savedRouteToken, "\"\n                                                    >\uBAA8\uBC14\uC77C\n                                                    \uC77C\uC815\uD45C</a\n                                                >\n                                            </li>\n                                            <li>\n                                                <a href=\"#\"\n                                                onclick=\"getScheduleFileByExcelInMyPage(").concat(i, ")\">\uC5D1\uC140\n                                                    \uC77C\uC815\uD45C</a\n                                                >\n                                            </li>\n                                        </ul>\n                                    </div>\n                        </div>\n                        <div class=\"mobile-travel-button\" uk-toggle=\"target:#modal-center_idx_").concat(i, "\" onclick=\"modalCenterBtn(").concat(i, ")\">\uC77C\uC815\uACF5\uC720</div>\n                        <div class=\"mobile-travel-button\" id=\"deleteSavedBtn_").concat(i, "\" onclick=\"deleteSavedRoute(").concat(i, ")\">\uC0AD\uC81C</div>\n                    </div>\n                    <div id=\"modal-center_idx_").concat(i, "\" class=\"uk-flex-top\" uk-modal>\n            <div\n                class=\"\n                    uk-modal-dialog\n                    uk-modal-body\n                    uk-margin-auto-vertical\n                \"\n            >\n                <button\n                    class=\"uk-modal-close-default\"\n                    type=\"button\"\n                    uk-close\n                ></button>\n\n                <div\n                    style=\"\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        flex-direction: column;\n                    \"\n                >\n                    <h3\n                        style=\"\n                            font-family: 'Montserrat' !important;\n                            font-weight: 700;\n                        \"\n                    >\n                        PARIS\n                    </h3>\n                    <div\n                        style=\"\n                            text-align: center;\n                            word-break: keep-all;\n                            color: #616161;\n                            font-size: 0.9rem;\n                        \"\n                    >\n                        \uB098\uC758 \uC5EC\uD589 \uC77C\uC815 \uACF5\uC720\n                    </div>\n                    <div\n                        class=\"\n                            uk-text-center\n                            uk-grid\n                            uk-width-1-1\n                            uk-padding-small\n                            share-mobile-view-container\n                        \"\n                        uk-grid\n                    >\n                        <div class=\"uk-width-1-2 share-mobile-view-btn\">\n                            <div>\n                                <button\n                                    id=\"kakaoLinkBtn_idx_").concat(i, "\"\n                                    class=\"\n                                        uk-button\n                                        uk-button-large\n                                        uk-card-default\n                                        mypage-share-button\n                                        \n                                    \"\n                                >\n                                    \uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"uk-width-1-2 share-mobile-view-btn\">\n                            <div>\n                                <button\n                                    class=\"\n                                        uk-button\n                                        uk-button-large\n                                        uk-card-default\n                                        mypage-share-button\n                                    \"\n                                    uk-toggle=\"target: #modal-send-email_idx_").concat(i, "\"\n                                >\n                                    \uC774\uBA54\uC77C \uC804\uC1A1 \uACF5\uC720\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <table class=\"uk-table\">\n                        <caption>\n                            \uACF5\uC720\uB41C \uCE5C\uAD6C\n                        </caption>\n                        <thead>\n                            <tr>\n                                <th>\uB2C9\uB124\uC784</th>\n                                <th>ID or EMAIL</th>\n                                \n                                <th>\uAD00\uB9AC</th>\n                            </tr>\n                        </thead>\n\n                        <tbody id=\"sharedEmailList_idx_").concat(i, "\">\n                            \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n\n        <div id=\"modal-send-email_idx_").concat(i, "\" class=\"uk-flex-top\" uk-modal>\n            <div\n                class=\"\n                    uk-modal-dialog\n                    uk-modal-body\n                    uk-margin-auto-vertical\n                \"\n            >\n                <button\n                    class=\"uk-modal-close-default\"\n                    type=\"button\"\n                    uk-close\n                ></button>\n\n                <div\n                    style=\"\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        flex-direction: column;\n                    \"\n                >\n                    <h3\n                        style=\"\n                            font-family: 'Montserrat' !important;\n                            font-weight: 700;\n                        \"\n                    >\n                        \uC774\uBA54\uC77C \uACF5\uC720\n                    </h3>\n                    <div\n                        class=\"uk-text-meta\"\n                        style=\"\n                            text-align: center;\n                            word-break: keep-all;\n                            font-size: 0.9rem;\n                        \"\n                    >\n                        \uC0DD\uC131\uB41C \uC77C\uC815\uC744 \uC774\uBA54\uC77C\uC744 \uD1B5\uD574 \uACF5\uC720\uD569\uB2C8\uB2E4.\n                    </div>\n\n                    <div class=\"uk-margin\" style=\"width: 100%\">\n                        <div class=\"uk-margin\">\n                            <div\n                                class=\"uk-margin-small\"\n                                style=\"\n                                    display: flex;\n                                    align-items: center;\n                                \"\n                            >\n                                <label\n                                    class=\"uk-form-label\"\n                                    for=\"form-stacked-text\"\n                                    >\uC774\uBA54\uC77C</label\n                                >\n                                <div\n                                    class=\"\n                                        uk-icon-button\n                                        myro-icon-button\n                                    \"\n                                    id=\"appendEmailInput\"\n                                    onclick=\"appendEmailInput(").concat(i, ")\"\n                                >\n                                    +\n                                </div>\n                                <div\n                                    class=\"\n                                        uk-icon-button\n                                        myro-icon-button\n                                    \"\n                                    id=\"htmlEmailInput\"\n                                    onclick=\"htmlEmailInput()\"\n                                >\n                                    -\n                                </div>\n                                <div\n                                    class=\"uk-text-meta\"\n                                    style=\"\n                                        word-break: keep-all;\n                                        font-size: 0.8rem;\n                                        margin-left: 8px;\n                                    \"\n                                >\n                                    (\uCD5C\uB300 10\uBA85\uAE4C\uC9C0 \uC804\uC1A1 \uAC00\uB2A5)\n                                </div>\n                            </div>\n                                <div class=\"uk-form-controls\" id=\"sendEmailList_idx_").concat(i, "\">\n                                    <input\n                                        class=\"uk-input\"\n                                        type=\"email\"\n                                        placeholder=\"E-mail \uC8FC\uC18C \uC785\uB825\"\n                                        name=\"emailAddress_idx_").concat(i, "\"\n                                    />\n                                </div>\n                        </div>\n                    </div>\n\n                    <div>\n                        <div>\n                            <button\n                                class=\"\n                                    uk-button\n                                    uk-button-large\n                                    uk-card-default\n                                    email-send-btn\n                                \"\n                                onclick=\"saveRouteAndSendEmailInMyPage(").concat(i, ")\"\n                            >\n                                \uBC1C \uC1A1\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n                </div>") : "<div style=\"margin:16px 0;\">\n        <div\n            class=\"\n                uk-card uk-card-default uk-grid-collapse uk-grid\n            \"\n            style=\"padding:16px\"\n            uk-grid\n        >\n            <div class=\"uk-width-1-3@m\">\n                <div\n                    class=\"uk-grid\"\n                    uk-grid\n                    style=\"margin: 0; height: 60%\"\n                >\n                    <div\n                        class=\"uk-width-1-2 info-container\"\n                    >\n                        <img\n                            class=\"width:100%\"\n                            src=\"https://myro.co.kr/myro_image/city/".concat(savedRoutesData.engCityName, ".jpg\"\n                            alt=\"\"\n                        />\n                        <div class=\"d-day-circle\">").concat(dDay, "</div>\n                        <div class=\"share-circle\" id=\"sharedLogo_idx_").concat(i, "\">\uACF5\uC720</div>\n                    </div>\n                    <div class=\"uk-width-1-2 info-container\">\n                        <div class=\"travel-title\">").concat(savedRoutesData.engCityName.toUpperCase(), "</div>\n                        <div class=\"uk-text-meta\">\n                            ").concat(savedRoutesData.cityName, "\n                        </div>\n                        <div class=\"uk-text-meta\" style=\"font-size: 12px;margin-top: 8px;\">\n                            ").concat(urEmail, "\n                        </div>\n                        <div\n                            class=\"info-container\"\n                            style=\"margin-top: 40px\"\n                        >\n                            <div\n                                style=\"\n                                    display: flex;\n                                    justify-content: center;\n                                    align-items: center;\n                                    width: 50px;\n                                    height: 50px;\n                                    border-radius: 50%;\n                                    background-color: #717171;\n                                    color: #fff;\n                                    font-weight: 700;\n                                \"\n                            >\n                                L\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"uk-width-2-3@m\">\n                <div\n                    class=\"uk-grid\"\n                    uk-grid\n                    style=\"margin: 0; height: 60%\"\n                >\n                    <div\n                        class=\"uk-width-expand@m\"\n                        style=\"padding: 16px\"\n                    >\n                        <div\n                            class=\"uk-grid\"\n                            uk-grid\n                            style=\"margin: 0; height: 50%\"\n                        >\n                            <div\n                                class=\"\n                                    uk-width-1-2\n                                    info-container-top\n                                \"\n                            >\n                                <div class=\"small-title\">\n                                    \uC5EC\uD589\uC774\uB984\n                                    <div class=\"uk-inline\">\n                                        <a\n                                            class=\"\n                                                uk-form-icon\n                                                uk-form-icon-flip\n                                            \"\n                                            uk-icon=\"icon: file-edit\"\n                                            onclick=\"inputTravelName(").concat(i, ")\"\n                                            id=\"inputTravelNameBtn_idx_").concat(i, "\"\n                                        ></a>\n\n                                        <input\n                                            class=\"\n                                                uk-input\n                                                uk-form-blank\n                                                uk-form-width-medium\n                                                small-text\n                                            \"\n                                            type=\"text\"\n                                            placeholder=\"\uC5EC\uD589\uC774\uB984\"\n                                            id=\"inputTravelName_idx_").concat(i, "\"\n                                            value=\"").concat(travelName, "\"\n                                        />\n                                    </div>\n\n                                    <!-- <span class=\"small-text\">\n                                        9\uC138 \uC870\uC900\uD615\uC758 \uD30C\uB9AC \uC5EC\uD589\n                                    </span> -->\n                                </div>\n                            </div>\n                            <div\n                                class=\"\n                                    uk-width-1-2\n                                    info-container-top\n                                \"\n                            >\n                                <div class=\"small-title\">\n                                    \uCD5C\uC885\uC218\uC815\n\n                                    <span\n                                        class=\"small-text\"\n                                        style=\"\n                                            line-height: 40px;\n                                        \"\n                                    >\n                                        ").concat(updatedDate, "\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div\n                            class=\"uk-grid\"\n                            uk-grid\n                            style=\"margin: 0; height: 50%\"\n                        >\n                            <div\n                                class=\"\n                                    uk-width-1-2\n                                    info-container-bottom\n                                \"\n                            >\n                                <div class=\"small-title\">\n                                    \uC5EC\uD589\uC77C\uC790\n\n                                    <span class=\"small-text\">\n                                        ").concat(userTravelStartDay, "-").concat(userTravelFinishDay, "\n                                    </span>\n                                </div>\n                            </div>\n                            <div\n                                class=\"\n                                    uk-width-1-2\n                                    info-container-bottom\n                                \"\n                            >\n                                <div class=\"small-title\">\n                                    \uC120\uD0DD\uC7A5\uC18C\n\n                                    <span class=\"small-text\">\n                                        ").concat(userPlace, "\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div\n                    class=\"uk-grid\"\n                    uk-grid\n                    style=\"margin: 0; height: 40%\"\n                >\n                    <div\n                        class=\"uk-width-expand@m info-container\"\n                    >\n                        <div\n                            class=\"\n                                uk-text-center\n                                uk-grid\n                                uk-width-1-1\n                                uk-padding-small\n                            \"\n                            uk-grid\n                        >\n                            <div class=\"uk-width-1-4\">\n                                <div>\n                                    <button\n                                        class=\"\n                                            uk-button\n                                            uk-button-large\n                                            uk-card-default\n                                        \"\n                                        id=\"modifySavedRoute_idx_").concat(i, "\"\n                                    >\n                                        \uC77C\uC815 \uC218\uC815\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"uk-width-1-4\">\n                                <div class=\"uk-inline\">\n                                    <button\n                                        class=\"\n                                            uk-button\n                                            uk-button-large\n                                            uk-card-default\n                                        \"\n                                        type=\"button\"\n                                    >\n                                        \uC77C\uC815\uD45C\n                                    </button>\n                                    <div\n                                        uk-dropdown=\"mode: click\"\n                                    >\n                                        <ul\n                                            class=\"\n                                                uk-nav\n                                                uk-dropdown-nav\n                                            \"\n                                        >\n                                            <li>\n                                                <a href=\"myroMobile1?savedRouteToken=").concat(res[i].savedRouteToken, "\"\n                                                    >\uBAA8\uBC14\uC77C\n                                                    \uC77C\uC815\uD45C</a\n                                                >\n                                            </li>\n                                            <li>\n                                                <a href=\"#\"\n                                                onclick=\"getScheduleFileByExcelInMyPage(").concat(i, ")\">\uC5D1\uC140\n                                                    \uC77C\uC815\uD45C</a\n                                                >\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"uk-width-1-4\">\n                                <div>\n                                    <button\n                                        class=\"\n                                            uk-button\n                                            uk-button-large\n                                            uk-card-default\n                                        \"\n                                        uk-toggle=\"target:#modal-center_idx_").concat(i, "\"\n                                        onclick=\"modalCenterBtn(").concat(i, ")\"\n                                    >\n                                        \uC77C\uC815 \uACF5\uC720\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"uk-width-1-4\">\n                                <div>\n                                    <button\n                                        class=\"\n                                            uk-button\n                                            uk-button-large\n                                            uk-card-default\n                                        \"\n                                        id=\"deleteSavedBtn_").concat(i, "\" onclick=\"deleteSavedRoute(").concat(i, ")\"\n                                    >\n                                        \uC0AD\uC81C\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"modal-center_idx_").concat(i, "\" class=\"uk-flex-top\" uk-modal>\n            <div\n                class=\"\n                    uk-modal-dialog\n                    uk-modal-body\n                    uk-margin-auto-vertical\n                \"\n            >\n                <button\n                    class=\"uk-modal-close-default\"\n                    type=\"button\"\n                    uk-close\n                ></button>\n\n                <div\n                    style=\"\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        flex-direction: column;\n                    \"\n                >\n                    <h3\n                        style=\"\n                            font-family: 'Montserrat' !important;\n                            font-weight: 700;\n                        \"\n                    >\n                        PARIS\n                    </h3>\n                    <div\n                        style=\"\n                            text-align: center;\n                            word-break: keep-all;\n                            color: #616161;\n                            font-size: 0.9rem;\n                        \"\n                    >\n                        \uB098\uC758 \uC5EC\uD589 \uC77C\uC815 \uACF5\uC720\n                    </div>\n                    <div\n                        class=\"\n                            uk-text-center\n                            uk-grid\n                            uk-width-1-1\n                            uk-padding-small\n                        \"\n                        uk-grid\n                    >\n                        <div class=\"uk-width-1-2\">\n                            <div>\n                                <button\n                                    id=\"kakaoLinkBtn_idx_").concat(i, "\"\n                                    class=\"\n                                        uk-button\n                                        uk-button-large\n                                        uk-card-default\n                                        mypage-share-button\n                                    \"\n                                >\n                                    \uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"uk-width-1-2\">\n                            <div>\n                                <button\n                                    class=\"\n                                        uk-button\n                                        uk-button-large\n                                        uk-card-default\n                                        mypage-share-button\n                                    \"\n                                    uk-toggle=\"target: #modal-send-email_idx_").concat(i, "\"\n                                >\n                                    \uC774\uBA54\uC77C \uC804\uC1A1 \uACF5\uC720\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <table class=\"uk-table\">\n                        <caption>\n                            \uACF5\uC720\uB41C \uCE5C\uAD6C\n                        </caption>\n                        <thead>\n                            <tr>\n                                <th>\uB2C9\uB124\uC784</th>\n                                <th>ID or EMAIL</th>\n                                \n                                <th>\uAD00\uB9AC</th>\n                            </tr>\n                        </thead>\n\n                        <tbody id=\"sharedEmailList_idx_").concat(i, "\">\n                            \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n\n        <div id=\"modal-send-email_idx_").concat(i, "\" class=\"uk-flex-top\" uk-modal>\n            <div\n                class=\"\n                    uk-modal-dialog\n                    uk-modal-body\n                    uk-margin-auto-vertical\n                \"\n            >\n                <button\n                    class=\"uk-modal-close-default\"\n                    type=\"button\"\n                    uk-close\n                ></button>\n\n                <div\n                    style=\"\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        flex-direction: column;\n                    \"\n                >\n                    <h3\n                        style=\"\n                            font-family: 'Montserrat' !important;\n                            font-weight: 700;\n                        \"\n                    >\n                        \uC774\uBA54\uC77C \uACF5\uC720\n                    </h3>\n                    <div\n                        class=\"uk-text-meta\"\n                        style=\"\n                            text-align: center;\n                            word-break: keep-all;\n                            font-size: 0.9rem;\n                        \"\n                    >\n                        \uC0DD\uC131\uB41C \uC77C\uC815\uC744 \uC774\uBA54\uC77C\uC744 \uD1B5\uD574 \uACF5\uC720\uD569\uB2C8\uB2E4.\n                    </div>\n\n                    <div class=\"uk-margin\" style=\"width: 100%\">\n                        <div class=\"uk-margin\">\n                            <div\n                                class=\"uk-margin-small\"\n                                style=\"\n                                    display: flex;\n                                    align-items: center;\n                                \"\n                            >\n                                <label\n                                    class=\"uk-form-label\"\n                                    for=\"form-stacked-text\"\n                                    >\uC774\uBA54\uC77C</label\n                                >\n                                <div\n                                    class=\"\n                                        uk-icon-button\n                                        myro-icon-button\n                                    \"\n                                    id=\"appendEmailInput\"\n                                    onclick=\"appendEmailInput(").concat(i, ")\"\n                                >\n                                    +\n                                </div>\n                                <div\n                                    class=\"\n                                        uk-icon-button\n                                        myro-icon-button\n                                    \"\n                                    id=\"htmlEmailInput\"\n                                    onclick=\"htmlEmailInput()\"\n                                >\n                                    -\n                                </div>\n                                <div\n                                    class=\"uk-text-meta\"\n                                    style=\"\n                                        word-break: keep-all;\n                                        font-size: 0.8rem;\n                                        margin-left: 8px;\n                                    \"\n                                >\n                                    (\uCD5C\uB300 10\uBA85\uAE4C\uC9C0 \uC804\uC1A1 \uAC00\uB2A5)\n                                </div>\n                            </div>\n                                <div class=\"uk-form-controls\" id=\"sendEmailList_idx_").concat(i, "\">\n                                    <input\n                                        class=\"uk-input\"\n                                        type=\"email\"\n                                        placeholder=\"E-mail \uC8FC\uC18C \uC785\uB825\"\n                                        name=\"emailAddress_idx_").concat(i, "\"\n                                    />\n                                </div>\n                        </div>\n                    </div>\n\n                    <div>\n                        <div>\n                            <button\n                                class=\"\n                                    uk-button\n                                    uk-button-large\n                                    uk-card-default\n                                    email-send-btn\n                                \"\n                                onclick=\"saveRouteAndSendEmailInMyPage(").concat(i, ")\"\n                            >\n                                \uBC1C \uC1A1\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"),
                    $("#resultArea").append(appendHtml);
                for (var _j2 = 0; _j2 < dataFromServer[i].sharedMembers.length; _j2++)
                    // console.log(dataFromServer[i].sharedMembers);
                    dataFromServer[i].sharedMembers[_j2] != userEmail && $("#sharedEmailList_idx_".concat(i)).append("\n                            <tr id=\"sharedEmail_idx_".concat(i, "_").concat(_j2, "\">\n                                <td>\uB9C8\uC774\uB85C</td>\n                                <td>").concat(dataFromServer[i].sharedMembers[_j2], "</td>\n                                \n                                <td>\n                                ").concat(dataFromServer[i].isOwner ? "<button\n                                    class=\"\n                                        uk-button\n                                        uk-button-text\n                                    \"\n                                    id=\"deleteSharedEmail_idx_".concat(i, "_").concat(_j2, "\"\n                                    onclick=\"deleteSharedEmail(").concat(i, ",").concat(_j2, ",'").concat(dataFromServer[i].sharedMembers[_j2], "')\"\n                                >\n                                    \uC0AD\uC81C\n                                </button>") : "  ", "\n                                    \n                                </td>\n                            </tr>\n                        "));
                userEmail == userOwnerEmail && $("#sharedLogo_idx_".concat(i)).css("display", "none"),
                    $("#modifySavedRoute_idx_".concat(i)).click(function() {
                        location.href = "".concat(headAddress, "/myro2?city=").concat(savedRoutesData.engCityName, "&savedRouteToken=").concat(res[i].savedRouteToken)
                    })
            }, i = 0; i < dataFromServer.length; i++)
                _loop(i);
            //end for i
        },
        //end success fun
        complete: function complete() {}//end complete
    })
}
function deleteSavedRoute() {
    return _deleteSavedRoute.apply(this, arguments)
}
function _deleteSavedRoute() {
    return _deleteSavedRoute = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee(_i) {
            var deleteConfirm, travelNameForDelete, deleteSavedRouteRes;
            return regeneratorRuntime.wrap(function(_context) {
                for (; ; )
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (travelNameForDelete = JSON.parse(dataFromServer[_i].stringfyJsonData).travelName,
                                deleteConfirm = travelNameForDelete ? confirm("".concat(travelNameForDelete, "\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) : confirm("".concat(JSON.parse(dataFromServer[_i].stringfyJsonData).cityName, "\uC5EC\uD589\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")),
                                !deleteConfirm) {
                                _context.next = 8;
                                break
                            }
                            return _context.next = 5,
                                myroRequestForAuth("".concat(headAddress, "/deleteUserSavedRoute"), "PUT", {
                                    savedRouteToken: dataFromServer[_i].savedRouteToken,
                                    userOwnerEmail: dataFromServer[_i].owner_email
                                });
                        case 5:
                            deleteSavedRouteRes = _context.sent,
                                alert(deleteSavedRouteRes.msg),
                                location.href = "/mypage";
                        case 8:
                        case "end":
                            return _context.stop();
                    }
            }, _callee)
        })),
        _deleteSavedRoute.apply(this, arguments)
}
function getScheduleFileByExcelInMyPage(i) {
    for (var reqParam = {}, savedRoutesData = JSON.parse(dataFromServer[i].stringfyJsonData), stayingInfos = savedRoutesData.stayingInfos, spotsByDay = savedRoutesData.spotsByDay, scheduleByDay = [], _i3 = 1; _i3 < spotsByDay.length; _i3++) {
        scheduleByDay[_i3] = {},
            scheduleByDay[_i3].scheduleBySpots = [];
        var stayingInfo = stayingInfos[_i3]
            , today = new Date(savedRoutesData.startTravelDate);
        today.setDate(new Date(savedRoutesData.startTravelDate).getDate() + _i3 - 1);
        var dayShowingStartTime = void 0
            , weekDay = void 0
            , month = void 0
            , day = void 0;
        if (0 == spotsByDay[_i3].length)
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
        scheduleByDay[_i3].dayInfo = "".concat(_i3, "\uC77C\uCC28\u3000").concat(month, "\uC6D4 ").concat(day, "\uC77C ").concat(["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"][weekDay]);
        //윗줄 scheduleByDay[i].dayInfo = `${i}일차 <-이 공백은 ㄱ한자임 스페이스바 공백 아님.
        for (var j = 0; j < spotsByDay[_i3].length; j++) {
            for (var spot = spotsByDay[_i3][j], spotStayingInfo = stayingInfo[j], spotStayingMinutes = Math.floor(spot.realStaySec / 60); 0 > spotStayingMinutes; )
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
                scheduleByDay[_i3].scheduleBySpots.push(spotSchedule)
        }
    }
    reqParam.cityName = savedRoutesData.cityName,
        reqParam.spotsByDay = spotsByDay,
        reqParam.scheduleByDay = scheduleByDay,
        reqParam.travelDay = savedRoutesData.travelDay;
    var reqData = {};
    reqData.data = JSON.stringify(reqParam),
        $.ajax({
            type: "POST",
            url: headAddress + "/makeScheduleAndSendFileName",
            data: reqData,
            success: function success(fileName) {
                // addUserTrackingData(`getScheduleFileByExcel ${fileName}`);
                location.href = "".concat(headAddress, "/getScheduleFileByExcel?fileName=").concat(fileName, "&cityName=").concat(savedRoutesData.cityName)
            }
        })
}
//end getScheduleFileByExcelInMyPage
//00시00분부터 몇분이 경과했는지를 HHMM 형식으로 리턴한다
function getHHMMFromAbsoluteMinute(mins) {
    0 > mins && (mins += 1440);
    var h = Math.floor(mins / 60)
        , m = Math.floor(mins % 60);
    return 10 > h && (h = "0" + h),
    10 > m && (m = "0" + m),
    "" + h + m
}
function goToMyPage() {
    location.href = "/myprofile"
}
function inputTravelName(_i) {
    var jsonParseData = JSON.parse(dataFromServer[_i].stringfyJsonData);
    jsonParseData.travelName = $("#inputTravelName_idx_".concat(_i)).val();
    // console.log(11111,jsonParseData);
    var stringfyJsonData = JSON.stringify(jsonParseData)
        , savedRoutesToken = dataFromServer[_i].savedRouteToken;
    $.ajax({
        type: "PUT",
        url: "".concat(headAddress, "/updateTravelName"),
        data: {
            stringfyJsonData: stringfyJsonData,
            savedRoutesToken: savedRoutesToken
        },
        success: function success(res) {
            // console.log(JSON.parse(dataFromServer[_i].stringfyJsonData));
            dataFromServer[_i].stringfyJsonData = JSON.stringify(jsonParseData),
                alert(res.msg)
        }
    })
}
function appendEmailInput(_i) {
    return 10 == $("#sendEmailList_idx_".concat(_i, " input")).length ? void alert("\uCD5C\uB300 10\uAC1C\uC758 \uC774\uBA54\uC77C\uC5D0 \uC804\uC1A1 \uAC00\uB2A5\uD569\uB2C8\uB2E4.") : void $("#sendEmailList_idx_".concat(_i)).append("<input class=\"uk-input\" \n    type=\"email\" \n    placeholder=\"E-mail \uC8FC\uC18C \uC785\uB825\" \n    name=\"emailAddress_idx_".concat(_i, "\"/>"))
}
function saveRouteAndSendEmailInMyPage() {
    return _saveRouteAndSendEmailInMyPage.apply(this, arguments)
}
function _saveRouteAndSendEmailInMyPage() {
    return _saveRouteAndSendEmailInMyPage = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(_i) {
            var jsonParseData, jsonParseEmailData, sendEmailList, re, i, email, _i5, sendEmailRes, _i6;
            return regeneratorRuntime.wrap(function(_context2) {
                for (; ; )
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            jsonParseData = JSON.parse(dataFromServer[_i].stringfyJsonData),
                                jsonParseEmailData = [],
                                sendEmailList = [],
                                re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                i = 0;
                        case 5:
                            if (!(i < $("input[name*='emailAddress_idx_".concat(_i, "']")).length)) {
                                _context2.next = 15;
                                break
                            }
                            if (email = $("input[name*='emailAddress_idx_".concat(_i, "']"))[i].value,
                                !email) {
                                _context2.next = 12;
                                break
                            }
                            if (re.test(email)) {
                                _context2.next = 11;
                                break
                            }
                            return alert("".concat(email, "\uB294 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.")),
                                _context2.abrupt("return");
                        case 11:
                            sendEmailList.push(email);
                        case 12:
                            i++,
                                _context2.next = 5;
                            break;
                        case 15:
                            if (0 != sendEmailList.length) {
                                _context2.next = 18;
                                break
                            }
                            return alert("\uD55C \uAC1C \uC774\uC0C1\uC758 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694."),
                                _context2.abrupt("return");
                        case 18:
                            for (showLoading(),
                                     _i5 = 0; _i5 < sendEmailList.length; _i5++)
                                dataFromServer[_i].sharedMembers.push(sendEmailList[_i5]);
                            return dataFromServer[_i].sharedMembers = _toConsumableArray(new Set(dataFromServer[_i].sharedMembers)),
                                _context2.next = 23,
                                myroRequestForAuth("".concat(headAddress, "/sendEmailWithEncodedSavedRouteTokenKey"), "GET", {
                                    travelName: JSON.parse(dataFromServer[_i].stringfyJsonData).travelName,
                                    cityName: JSON.parse(dataFromServer[_i].stringfyJsonData).cityName,
                                    savedRouteToken: dataFromServer[_i].savedRouteToken,
                                    userShareEmail: JSON.stringify(dataFromServer[_i].sharedMembers)
                                });
                        case 23:
                            sendEmailRes = _context2.sent,
                                jsonParseEmailData = [],
                                hideLoading(),
                                alert(sendEmailRes.msg),
                                $("#sharedEmailList_idx_".concat(_i)).html(""),
                                _i6 = 0;
                        case 29:
                            if (!(_i6 < dataFromServer[_i].sharedMembers.length)) {
                                _context2.next = 38;
                                break
                            }
                            if (dataFromServer[_i].sharedMembers[_i6] != userEmail) {
                                _context2.next = 34;
                                break
                            }
                            return _context2.abrupt("continue", 35);
                        case 34:
                            $("#sharedEmailList_idx_".concat(_i)).append("\n                    <tr id=\"sharedEmail_idx_".concat(_i, "_").concat(_i6, "\">\n                        <td>\uB9C8\uC774\uB85C</td>\n                        <td>").concat(dataFromServer[_i].sharedMembers[_i6], "</td>\n                        \n                        <td>\n                        ").concat(dataFromServer[_i].isOwner ? "<button\n                            class=\"\n                                uk-button\n                                uk-button-text\n                            \"\n                            id=\"deleteSharedEmail_idx_".concat(_i, "_").concat(_i6, "\"\n                            onclick=\"deleteSharedEmail(").concat(_i, ",").concat(_i6, ",'").concat(dataFromServer[_i].sharedMembers[_i6], "')\"\n                        >\n                            \uC0AD\uC81C\n                        </button>") : "  ", "\n                            \n                        </td>\n                    </tr>\n                    "));
                        case 35:
                            _i6++,
                                _context2.next = 29;
                            break;
                        case 38:
                            $("#sendEmailList_idx_".concat(_i)).html("<input class=\"uk-input\" \n    type=\"email\" \n    placeholder=\"E-mail \uC8FC\uC18C \uC785\uB825\" \n    name=\"emailAddress_idx_".concat(_i, "\"/>"));
                        case 39:
                        case "end":
                            return _context2.stop();
                    }
            }, _callee2)
        })),
        _saveRouteAndSendEmailInMyPage.apply(this, arguments)
}
//일정 공유후 공유한 사람 삭제
function deleteSharedEmail(_i, _j, _email) {
    // console.log(dataFromServer[_i]);
    $.ajax({
        type: "PUT",
        url: headAddress + "/deleteSharedEmail",
        data: {
            deleteEmail: _email,
            // savedRouteToken : dataFromServer[_i].savedRouteToken,
            ownerEmail: dataFromServer[_i].owner_email,
            savedRouteTokenNo: dataFromServer[_i].no
        },
        success: function success() {
            // console.log(00000000,dataFromServer[_i].email.indexOf(_email));
            // if (res=="성공") {
            var jsonParseEmailList = JSON.parse(dataFromServer[_i].email);
            // console.log(1111111111,jsonParseEmailList);
            // console.log(jsonParseEmailList);
            jsonParseEmailList.splice(JSON.parse(dataFromServer[_i].email).indexOf(_email), 1),
                dataFromServer[_i].email = JSON.stringify(jsonParseEmailList),
                $("#sharedEmail_idx_".concat(_i, "_").concat(_j)).remove()
        },
        fail: function fail() {// hideLoading();
        }
    })
}
function showLoading(text) {
    $("#loadingText").html("");
    var loadingText = "LOADING...";
    text && (loadingText = text);
    for (var i = 0; i < loadingText.length; i++)
        $("#loadingText").append("<label>&nbsp" + loadingText[i] + "</label>");
    for (var inputs = $(".progress-container").find($("label")), _i4 = 0; _i4 < inputs.length; _i4++) {
        var index = _i4 + 1
            , time = 20 * (inputs.length - _i4);
        $(".progress-container label:nth-child(" + index + ")").css("-webkit-animation", "anim 3s " + time + "ms infinite ease-in-out"),
            $(".progress-container label:nth-child(" + index + ")").css("-animation", "anim 3s " + time + "ms infinite ease-in-out")
    }
    $("#loading").show()
}
function hideLoading() {
    $("#loading").hide()
}
//공유버튼 누르면 카카오 링크 생성
function modalCenterBtn() {
    return _modalCenterBtn.apply(this, arguments)
}
function _modalCenterBtn() {
    return _modalCenterBtn = _asyncToGenerator(/*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(i) {
            var savedRouteTokenKey;
            return regeneratorRuntime.wrap(function(_context3) {
                for (; ; )
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.next = 2,
                                function() {
                                    return new Promise(function(resolve, reject) {
                                            $.ajax({
                                                url: "/getEncodedSavedRouteTokenKey",
                                                type: "GET",
                                                data: {
                                                    savedRouteToken: dataFromServer[i].savedRouteToken
                                                },
                                                success: function(res) {
                                                    resolve(res.savedRouteTokenKey)
                                                },
                                                fail: function() {
                                                    reject()
                                                }
                                            })
                                        }
                                    )
                                }();
                        case 2:
                            savedRouteTokenKey = _context3.sent,
                                Kakao.Link.createCustomButton({
                                    container: "#kakaoLinkBtn_idx_".concat(i),
                                    templateId: 58837,
                                    templateArgs: {
                                        title: "".concat(JSON.parse(dataFromServer[i].stringfyJsonData).travelName),
                                        description: "\uD568\uAED8 \uC5EC\uD589 \uC77C\uC815 \uC9DC\uC694!",
                                        // 'webDomain': `confirmSharedSavedRoute?key=${savedRouteTokenKey}`,
                                        webDomain: "ms?t=".concat(savedRouteTokenKey),
                                        mobileWebDomain: "myroMobile1?savedRouteToken=".concat(dataFromServer[i].savedRouteToken),
                                        userProfile: "".concat(userNickName, "\uC758 \uC5EC\uD589"),
                                        firstImg: "https://myro.co.kr/myro_image/city/".concat(JSON.parse(dataFromServer[i].stringfyJsonData).engCityName, ".jpg")// 'secImg': 'https://cdn.epnc.co.kr/news/photo/202001/93682_85075_3859.jpg',
                                        // 'thiImg': `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99606C385D08D9830B`
                                    }
                                });
                        case 4:
                        case "end":
                            return _context3.stop();
                    }
            }, _callee3)
        })),
        _modalCenterBtn.apply(this, arguments)
}
