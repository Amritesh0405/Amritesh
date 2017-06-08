$(document).ready(function () {
    $("#submit_button").click(function () {
        $("tbody").append("<tr>" +
                "<td>" + $("#name").val() + "</td>" +
                "<td>" + $("#email").val() + "</td>" +
                "<td>" + $("#gender").val() + "</td>" +
                "<td><button class='btn btn-info btn-sm' data-toggle='modal' data-target='#myModal'>Edit</button></td>" +
                "<td><button>Delete</button></td>" +
                "</tr>");
        $("#updatedname").val($("#name").val());
        $("#updatedemail").text($("#email").val());
        $("#updatedgender").text($("#gender").val());
    });
});
