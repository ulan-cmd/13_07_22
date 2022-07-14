/*
const form = document.querySelector('#form1');
const nameField = document.querySelector('#userName');
*/

/*nameField.addEventListener('change', (event) => {
    console.log(event.target.value);
})*/

/*nameField.addEventListener('input', (event) => {
    console.log(event.target.value);
})*/

/*nameField.addEventListener('focus', (event) => {
    console.log(event.target.style.border = "3px solid blue");
})*/

/*nameField.addEventListener('blur', () => {
    console.log('blur');
})*/


/*nameField.addEventListener('select', () => {
    console.log('select');
})*/


const checkElements = (elements) => {
    let count = 0;

    for(let i = 0; i < elements.length; i++){
        if(elements[i].value === ''){
            elements[i].classList.add('red-border');
            count++;
        }
    }

    return count === 0;
}

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('form [name]');

    if( checkElements(elements) ){

        window.location.href = 'form2.html';
    }
})