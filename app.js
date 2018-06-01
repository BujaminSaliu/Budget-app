var budgetController = (function() {})()

var UIController = (function() {
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	}

	return {
		getInput: function() {
			return {
				//to return the values of 3 inputs
				type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			}
		},
		getDOMstrings: function() {
			return DOMstrings //the DOMstrings object gets public and controller have access to it
		}
	}
})()

var controller = (function(budgetCtrl, UICtrl) {
	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings()
		document
			.querySelector(DOM.inputButton)
			.addEventListener('click', ctrlAddItem)

		//When Enter key is pressed
		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem()
			}
		})
	}

	var ctrlAddItem = function() {
		//1 get the field input data
		var input = UICtrl.getInput()
		console.log(input)

		//2 add the item to the
		//3 add the item to the ui
		//4 calculate the budget
		//5 dispaly the budget on the ui
	}

	//to start the initalization
	return {
		init: function() {
			setupEventListeners()
		}
	}
})(budgetController, UIController)

controller.init()
