﻿var viewData = function (data) {
    var str = "";
    $.each(data, function (index, value) {

        str += "<tr>";
        str += "<td>" + value.FullName + "</td>";
        str += "<td>" + value.UserName + "</td>";
        str += "<td>" + value.UserCode + "</td>";
        str += "<td style='width:110px'>" + value.PositionName + "</td>";
        str += "<td>" + value.Team + "</td>";
        str += "<td style='width:150px'>" + value.UserTypeName + "</td>";
        str += "<td style='color:" + (value.Status ? "Green" : "Red") + ";'>" + (value.Status ? "Active" : "Inactive") + "</td>";
        str += "<td><button class='btn'>Edit</button></td>";
        str += "</tr>";
    });
    return str;
}

var loadData = function () {
    $.ajax({
        url: '/FilterServer/GetUser',
        type: "GET",
        data: {},
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {

            $(".list-user").html(viewData(result.data));
        }
    });
}

var filterTable = function (fullName, userName, userCode, positionID, team, userTypeID, status) {

    $.ajax({
        url: '/FilterServer/GetUser',
        type: "GET",
        data: {
            fullName: fullName,
            userName: userName,
            userCode: userCode,
            positionID: positionID,
            team: team,
            userTypeID: userTypeID,
            status: status
        },
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {

            $(".list-user").html(viewData(result.data));
        }
    });
}


var user = {
    init: function () {
        user.registerEvents();
    },

    registerEvents: function () {

        loadData();

        $(document).on("change", ".selected-change", function () {

            var fullName = $("input[name='FullName']").val();
            var userName = $("input[name='UserName']").val();
            var userCode = $("input[name='UserCode']").val();
            var positionID = $("select[name='Position']").val();
            var team = $("input[name='Team']").val();
            var userTypeID = $("select[name='UserType']").val();
            var status = $("select[name='Status']").val();

            filterTable(fullName, userName, userCode, positionID, team, userTypeID, status);
            
        }); 
    }
}

user.init();