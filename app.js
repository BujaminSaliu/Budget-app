var budgetController = (function() {})()

var UIController = (function() {
	return {
		getInput: function() {
			return {
				//to return the values of 3 inputs
				type: document.querySelector('.add__type').value, //Will be either inc or exp
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value
			}
		}
	}
})()

var controller = (function(budgetCtrl, UICtrl) {
	var ctrlAddItem = function() {
		//1 get the field input data
		var input = UICtrl.getInput()
		console.log(input)

		//2 add the item to the
		//3 add the item to the ui
		//4 calculate the budget
		//5 dispaly the budget on the ui
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

	//When Enter key is pressed
	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem()
		}
	})
})(budgetController, UIController)
