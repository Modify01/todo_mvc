(function(angular) {
    var app = angular.module('app', []);
    app.controller('table', ['$scope', function($scope) {

        // 全局控制配置
        $scope.toggle = false;
        // 原始数据
        $scope.data = [{
            id: 1,
            name: "happy",
            isCompleted: false
        }, {
            id: 2,
            name: "angular",
            isCompleted: true
        }, {
            id: 3,
            name: "vue",
            isCompleted: false
        }];


        //增加数据
        $scope.sub = function() {
            if ($scope.data[0]!=undefined) {
            var maxId = $scope.data[0].id;
                for (var i = 0; i < $scope.data.length; i++) {
                    if ($scope.data[i].id > maxId) {
                        maxId = $scope.data[i].id;
                    }
                }
            }else{
               maxId = 0;
            }

            $scope.data.push({
                id: ++maxId,
                name: $scope.newTask
            })

            $scope.newTask = "";
        }


        // 删除数据操作
        $scope.delet = function(index) {
            $scope.data.splice(index, 1);
        }

        // 更改数据,双向绑定保存修改的数据，通过判断id来添加类名
        $scope.revision = function(task) {
            // alert()
            $scope.editingId = task.id;
        }


        // 更改后删除样式
        $scope.revsub = function() {
            $scope.editingId = -1;
        }


        //监视任务对象
        $scope.$watch('data', function(newV, oldV) {
            $scope.showClean = false;
            var num = 0;
            for (var i = 0; i < $scope.data.length; i++) {
                if (!$scope.data[i].isCompleted) {
                    num++;
                }
            }

            $scope.left = num;

        }, true)


        //全选和全不选
        $scope.toggleAll = function() {
            if ($scope.toggle) {
                for (var i = 0; i < $scope.data.length; i++) {
                    $scope.data[i].isCompleted = true;
                }
            } else {
                for (var i = 0; i < $scope.data.length; i++) {
                    $scope.data[i].isCompleted = false;
                }
            }
        }

    }]);



})(angular)
