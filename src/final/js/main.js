function showCode(parentElement) {
	var parentElementDiv = document.getElementById(parentElement);
	var selector = '#' + parentElement + ' .example';
	console.log(selector);
	var exampleElement = document.querySelector(selector);
	if (parentElementDiv.className === 'section open') {
		parentElementDiv.className = 'section';
		var codeElement = document.querySelector(selector + ' .example-code');
		exampleElement.removeChild(codeElement);
		
	} else {
		var text = exampleElement.innerHTML;
		var code = document.createTextNode(text);
		var codeElement = document.createElement('div');
		codeElement.appendChild(code);
		codeElement.className = 'example-code';
		exampleElement.appendChild(codeElement);
		document.querySelector('#' + parentElement + ' .code-show-button').value = 'Hide code';
			
		parentElementDiv.classList.add('open');	
	}
}
