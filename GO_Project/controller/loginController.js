//login controller
app.controller('loginCtrl', function ($scope, $http) {


    $scope.login = function () {
        if ($scope.username == null || $scope.userpassword == null) {
            alert("Are you mad");
        }
        var temp = {
            userName: $scope.username,
            pass: $scope.userpassword
        };

        $http.post("http://localhost:3000/login/fetch", temp).then(function (response) {

            if (response.data == 'true') {
                alert("successfully logged in ..WELCOME!!!");
                window.location = "http://localhost:3000/#/home";
            }
            if (response.data == 'false') {
                alert("invalid user..please enter correct credentials!!");
            }
        });
    }
});
