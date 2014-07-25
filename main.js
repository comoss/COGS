var COGS = angular.module('COGS', []);
  COGS.controller('MainCtrl', ['$scope', function($scope) {

  	  $scope.costOfGoods = '';
      $scope.freightIn = '';
      $scope.salesCost = '';
      $scope.repFee = '';
      $scope.returns = '';
      $scope.dRepFee = '';
      $scope.margin = ''; 
      $scope.CoOp = '';
      $scope.showExpense = '';
      $scope.freightOut = '';
      $scope.CCFee = '';
      $scope.royalties = '';

   

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

    var arrCoOp = []
    $scope.coop = function(costOfGoods, freightIn, salesCost, CoOp) { 
      if(costOfGoods || freightIn || salesCost || CoOp) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CoOp/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
        return total;   
        $scope.arrCoOp.push(total); 
        }
    };


    var arrSExpense= []
    $scope.ShowExpense = function(costOfGoods, freightIn, salesCost, showExpense) { 
      if(costOfGoods || freightIn || salesCost || showExpense) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + showExpense/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
        return total;   
        $scope.arrSExpense.push(total); 
        }
    };

   var arrCreditCard= []
    $scope.creditCard = function(costOfGoods, freightIn, salesCost, CCFee) { 
      if(costOfGoods || freightIn || salesCost || CCFee) {
        var total = (((costOfGoods + freightIn) * (1 + salesCost/100)) * (1 + CCFee/100)) - ((costOfGoods + freightIn) * (1 + salesCost/100))
        return total;   
        $scope.arrCreditCard.push(total); 
        }
    };

var arrMar = []
  	$scope.Margin = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, royalties, CCFee, freightOut, showExpense, CoOp, margin) { 
  		if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns || royalties || CCFee || freightOut || showExpense || CoOp || margin) {
  			var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
        var REST = (freightOut + royalties)
        var REP = (T * (1 + repFee/100)) - T;
  			var DREP = (T * (1 + dRepFee/100)) - T;
			  var RET = (T * (1 + returns/100)) - T;
        var COOP = (T * (1 + CoOp/100)) - T;
        var CCF = (T * (1 + CCFee/100)) - T;
        var EXP = (T * (1 + showExpense/100)) - T;
			  var MAR =  (1 + margin/100);
			  var total = (((REP + DREP + RET + T + COOP + CCF + EXP + REST) * MAR) - (REP + DREP + RET + T + COOP + CCF + EXP + REST));
  			return total;  	
  			$scope.Margin.push(total);
		}
  	};


   var arrGrandTotal = []
  	$scope.GrandTotal = function(costOfGoods, freightIn, salesCost, repFee, dRepFee, returns, royalties, CCFee, freightOut, showExpense, CoOp, margin) { 
      if(costOfGoods || freightIn || salesCost || repFee || dRepFee || returns || royalties || CCFee || freightOut || showExpense || CoOp || margin) {
        var T = ((costOfGoods + freightIn) * (1 + salesCost/100));
        var REST = (freightOut + royalties)
        var REP = (T * (1 + repFee/100)) - T;
        var DREP = (T * (1 + dRepFee/100)) - T;
        var RET = (T * (1 + returns/100)) - T;
        var COOP = (T * (1 + CoOp/100)) - T;
        var CCF = (T * (1 + CCFee/100)) - T;
        var EXP = (T * (1 + showExpense/100)) - T;
        var MAR =  (1 + margin/100);
        var total = (((REP + DREP + RET + T + COOP + CCF + EXP + REST) * MAR) + (REP + DREP + RET + T + COOP + CCF + EXP + REST));
  			return total;  	
  			$scope.arrGrandTotal.push(total);	

  			}
  	};



  	 }]);