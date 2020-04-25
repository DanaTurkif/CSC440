

function storeValues() {

    if ('localStorage' in window && window['localStorage'] !== null) {
		const name = document.querySelector('#name').value;
		const where = document.querySelector('input[name="where"]:checked').value;
		const hobbie = getSelectedCheckboxValues();

		function getSelectedCheckboxValues() {
		    const checkboxes = document.querySelectorAll(`input[name="hobbies"]:checked`);
		    let values = [];
		    checkboxes.forEach((checkbox) => {
		        values.push(checkbox.value);
		    });
		    return values;
		}

		localStorage.setItem('name', name);
		localStorage.setItem('where', where);
		localStorage.setItem('hobbie', hobbie);

	} else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}


const submitBtn = document.querySelector('#sBtn');
submitBtn.addEventListener('click', storeValues);
