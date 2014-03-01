angular.module('teamTopScorersControllerModule', ['soccerDashServices'])

.controller('TeamTopScorersController',
  ['$scope', 'statsfcService',
    function($scope, statsfcService) {

  $scope.$watch('currentTeam', function(newVal, oldVal, scope) {
    if(newVal) {
      $scope.showGoal = false;

      statsfcService.fetchData(getTeamTopScorersUrl(newVal.teampath))
      .then(function(data) {
        $scope.goalData = data.slice(0,8);
        $scope.showGoal = true;
      });
    }
  });

}]);
