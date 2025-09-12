const display = document.querySelector('.display p');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        const currentDisplayValue = display.textContent;

        switch (buttonValue) {
            case 'C':
                display.textContent = '0';
                break;
            case '.':
                if (!currentDisplayValue.includes('.')) {
                    display.textContent += '.';
                }
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (currentDisplayValue === '0') {
                    display.textContent = buttonValue;
                } else {
                    display.textContent += buttonValue;
                }
                break;
            default:
                console.log(buttonValue);
                break;
        }
    });
});