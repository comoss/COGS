var COGS = angular.module('COGS', []);
  COGS.controller('MainCtrl', ['$scope', function($scope) {

  	  $scope.costOfGoods = 0;
      $scope.freightIn = 0;
      $scope.salesCost = 0;
      $scope.repFee = 0;
      $scope.returns = 0;
      $scope.dRepFee = 0;
      $scope.margin = 0; 
      $scope.CoOp = 0;
      $scope.showExpense = 0;
      $scope.freightOut = 0;
      $scope.CCFee = 0;
      $scope.royalties = 0;

   

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
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
  			return total;  	
  			$scope.arrRep.push(total);	
  			}
  	};

  	var arrRet = []
  	$scope.Returns = function(costOfGoods, freightIn, salesCost, returns) { 
  		if(costOfGoods || freightIn || salesCost || returns) {
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
  			return total;  	
  			$scope.arrRet.push(total);	
  			}
  	};

	var arrDRep = []
  	$scope.dRepFeeTotal = function(costOfGoods, freightIn, salesCost, dRepFee) { 
  		if(costOfGoods || freightIn || salesCost || dRepFee) {
  			var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
  			return total;  	
  			$scope.arrDRep.push(total);	
  			}
  	};

    var arrCoOp = []
    $scope.coop = function(costOfGoods, freightIn, salesCost, CoOp) { 
      if(costOfGoods || freightIn || salesCost || CoOp) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CoOp/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        return total;   
        $scope.arrCoOp.push(total); 
        }
    };


    var arrSExpense= []
    $scope.ShowExpense = function(costOfGoods, freightIn, salesCost, showExpense) { 
      if(costOfGoods || freightIn || salesCost || showExpense) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + showExpense/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        return total;   
        $scope.arrSExpense.push(total); 
        }
    };

   var arrCreditCard= []
    $scope.creditCard = function(costOfGoods, freightIn, salesCost, CCFee) { 
      if(costOfGoods || freightIn || salesCost || CCFee) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CCFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        return total;   
        $scope.arrCreditCard.push(total); 
        }
    };

var arrMar = []
  	$scope.Margin = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, royalties, CCFee, freightOut, showExpense, CoOp, margin) { 
  		if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns || royalties || CCFee || freightOut || showExpense || CoOp || margin) {
  			var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
        var REST = (freightOut + royalties)
        var REP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
  			var DREP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
			  var RET = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var COOP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CoOp/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var CCF = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CCFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var EXP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + showExpense/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
			  var MARG =  (1 + margin/100);
			  var total = (((REP + DREP + RET + T + COOP + CCF + EXP + REST) * MARG) - (REP + DREP + RET + T + COOP + CCF + EXP + REST));
  			return total;  	
  			$scope.Margin.push(total);
		}
  	};


   var arrGrandTotal = []
  	$scope.GrandTotal = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, royalties, CCFee, freightOut, showExpense, CoOp, margin) { 
      if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns || royalties || CCFee || freightOut || showExpense || CoOp || margin) {
        var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
        var REST = (freightOut + royalties);
        var REP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + repFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var DREP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + dRepFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var RET = (((costOfGoods + freightIn) * (1 + salesCost/100))* (1 + returns/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var COOP = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CoOp/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var CCF = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CCFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var EXP = ((((costOfGoods + freightIn) * (1 + salesCost/100)) + showExpense/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100));
        var MAR =  (((T + REST + REP + DREP + RET + COOP + CCF + EXP) * (1 + margin/100)) - (REP + DREP + RET + T + COOP + CCF + EXP + REST));
        var total = (T + REST + REP + DREP + RET + COOP + CCF + EXP + MAR);
  			return total;  	
  			$scope.arrGrandTotal.push(total);	


  			}
  	};




  	 }]);