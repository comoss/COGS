var COGS = angular.module('COGS', []);
  COGS.controller('MainCtrl', ['$scope', function($scope) {

  	  $scope.costOfGoods = '';
      $scope.freightIn = '';
      $scope.salesCost = '';
      $scope.repFee = '';
      $scope.returns = '';
      $scope.dRepFee = '';
      $scope.margin = ''; 
   

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
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			return total;  	
  			$scope.arrRep.push(total);	
  			}
  	};

  	var arrRet = []
  	$scope.Returns = function(costOfGoods, freightIn, salesCost, returns) { 
  		if(costOfGoods || freightIn || salesCost || returns) {
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			return total;  	
  			$scope.arrRet.push(total);	
  			}
  	};

	var arrDRep = []
  	$scope.dRepFeeTotal = function(costOfGoods, freightIn, salesCost, dRepFee) { 
  		if(costOfGoods || freightIn || salesCost || dRepFee) {
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			return total;  	
  			$scope.arrDRep.push(total);	
  			}
  	};

var arrMar = []
  	$scope.Margin = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, margin) { 
  		if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns) {
  			var REP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			var DREP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
			var RET = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
			var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
			var MAR =  (1 + margin/100);
			var total = (((REP + DREP + RET + T) * MAR) - (REP + DREP + RET + T));
  			return total;  	
  			$scope.Margin.push(total);
		}
  	};


   var arrGrandTotal = []
  	$scope.GrandTotal = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, margin) { 
  		if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns) {
  			var REP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
  			var DREP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
			var RET = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
			var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
			var MAR =  (1 + margin/100)
			var total = (REP + DREP + RET + T) + MAR
  			return total;  	
  			$scope.arrGrandTotal.push(total);	

  			}
  	};



  	 }]);