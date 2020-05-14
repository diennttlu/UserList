var viewData = function (data) {
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

var filterTable = function (fullName, userName, userCode, positionName, team, userTypeName, status, rows) {

    for (var i = 0; i < rows.length; i++) {
        var fullNameCol = rows[i].cells[0].textContent.toLowerCase();
        var userNameCol = rows[i].cells[1].textContent.toLowerCase();
        var userCodeCol = rows[i].cells[2].textContent.toLowerCase();
        var positionNameCol = rows[i].cells[3].textContent.toLowerCase();
        var teamCol = rows[i].cells[4].textContent.toLowerCase();
        var userTypeNameCol = rows[i].cells[5].textContent.toLowerCase();
        var statusCol = rows[i].cells[6].textContent.toLowerCase();

        if (fullNameCol.indexOf(fullName) > - 1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (userNameCol.indexOf(userName) > - 1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (userCodeCol.indexOf(userCode) > - 1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (positionNameCol.indexOf(positionName) > - 1 || positionName == "...") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (teamCol.indexOf(team) > - 1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (userTypeNameCol.indexOf(userTypeName) > - 1 || userTypeName == "...") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }

        if (statusCol.indexOf(status) > - 1 || status == "...") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
            continue;
        }
    }
}


var user = {
    init: function () {
        user.registerEvents();
    },

    registerEvents: function () {

        loadData();

        $(document).on("change", ".selected-change", function () {

            var rows = document.querySelector("#user-list tbody").rows;
            var fullName = $("input[name='FullName']").val().toLowerCase();
            var userName = $("input[name='UserName']").val().toLowerCase();
            var userCode = $("input[name='UserCode']").val().toLowerCase();
            var positionName = $('.position option:selected').text().toLowerCase();
            var team = $("input[name='Team']").val().toLowerCase();
            var userTypeName = $('.user-type option:selected').text().toLowerCase();
            var status = $('.status option:selected').text().toLowerCase();

            filterTable(fullName, userName, userCode, positionID, team, userTypeID, status, rows);

        });
    }
}

user.init();