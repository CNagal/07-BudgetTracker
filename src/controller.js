// Set up controller
angular.module("budgetApp").controller('mainCtrl', function($scope) {
	$scope.incomeArray = [];
	$scope.incomeObject = {};
	
	$scope.expenseArray = [];
	$scope.expenseObject = {};

	$scope.totalIncome= 0;
	$scope.totalExpense= 0;
	$scope.totalLeft= 0;

	$scope.getIncome = function() {
		$scope.incomeArray.push(angular.copy($scope.incomeObject));
		$scope.totalIncome += $scope.incomeObject.amount;
		$scope.incomeObject = {};
		$scope.totalLeft = $scope.totalIncome - $scope.totalExpense; 
	};

	$scope.getExpense = function () {
		$scope.expenseArray.push(angular.copy($scope.expenseObject));
		$scope.totalExpense += $scope.expenseObject.amount;
		$scope.expenseObject = {};
		$scope.totalLeft = $scope.totalIncome - $scope.totalExpense;
	};

});