var load = function (fullName, userName, userCode, positionID, team, userTypeID, status) {

    $.ajax({
        url: '/User/FilterUser',
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
            console.log(result);
            var str = "";
            $.each(result.data, function (index, value) {

                str += "<tr>";
                str += "<td>" + value.FullName + "</td>";
                str += "<td>" + value.UserName + "</td>";
                str += "<td>" + value.UserCode + "</td>";
                str += "<td>" + value.PositionName + "</td>";
                str += "<td>" + value.Team + "</td>";
                str += "<td>" + value.UserTypeName + "</td>";
                str += "<td>" + (value.Status ? "Active" : "Inactive") + "</td>";
                str += "<td><a href='#' class='btn'>Edit</a></td>";
                str += "</tr>";
            });
            $(".list-user").html(str);
        }
    });
}


var user = {
    init: function () {
        user.registerEvents();
    },

    registerEvents: function () {
        $(document).on("change", ".selected-change", function () {
            var fullName = $("input[name=FullName]").val();
            var userName = $("input[name=UserName]").val();
            var userCode = $("input[name=UserCode]").val();
            var positionID = $("input[name=Position]").val();
            var team = $("input[name=Team]").val();
            var userTypeID = $("input[name=UserType]").val();
            var status = $("input[name=Status]").val();
            load(fullName, userName, userCode, positionID, team, userTypeID, status);
        });

        load(null, null, null, 0, null, 0, true);
    }
}

user.init();