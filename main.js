var COGS = angular.module('COGS', []);
  COGS.controller('MainCtrl', ['$scope', function($scope) {

  	  $scope.costOfGoods = '';
      $scope.freightIn = '';
      $scope.salesCost = '';
      $scope.repFee = '';
      $scope.returns = '';
      $scope.dRepFee = '';
   

      var arrTotal = []
  	$scope.total = function(costOfGoods, freightIn, salesCost) { 
  		if(costOfGoods || freightIn || salesCost) {
  			var total = ((costOfGoods + freightIn) * (1 + salesCost/100));
  			return total;  	
  			$scope.arrTotal.push(total);	
  			}
  	};


  	var arrRep = []
  	$scope.repFeeTotal = function(costOfGoods, freightIn, salesCost, repFee) { 
  		if(costOfGoods || freightIn || salesCost || repFee) {
  			var total2 = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			return total2;  	
  			$scope.arrRep.push(total2);	
  			}
  	};

	var arrDRep = []
  	$scope.dRepFeeTotal = function(costOfGoods, freightIn, salesCost, dRepFee) { 
  		if(costOfGoods || freightIn || salesCost || dRepFee) {
  			var total3 = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			return total3;  	
  			$scope.arrDRep.push(total3);	
  			}
  	};



   // var arrGrandTotal = []
  	// $scope.GrandTotal = function(costOfGoods, freightIn, salesCost, repFee, dealerRepFee, returns) { 
  	// 	if(costOfGoods || freightIn || salesCost || repFee || dealerRepFee || returns) {
  	// 		var REP = ((costOfGoods * (1 + salesCost/100)) + freightIn) * (1 + repFee/100);
  	// 		var DREP = ((costOfGoods * (1 + salesCost/100)) + freightIn) * (1 + dealerRepFee/100);
			// var RET = ((costOfGoods * (1 + salesCost/100)) + freightIn) + returns
			// var total = REP + DREP + RET
  	// 		return total;  	
  	// 		$scope.arrGrandTotal.push(total);	

  	// 		}
  	// };



  	 }]);