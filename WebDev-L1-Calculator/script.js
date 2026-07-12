class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
        this.memory = 0;
        this.mrcState = 0; // 0: none, 1: recall, 2: clear
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.updateDisplay();
    }

    appendNumber(number) {
        if (this.currentOperand === 'Error') this.clear();
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
        }
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        // Handle initial zero
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
        
        // Limit to 8 digits (excluding decimal point and minus sign)
        let digitCount = this.currentOperand.replace(/[\.\-]/g, '').length;
        if (digitCount > 8) {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === 'Error') this.clear();
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.shouldResetScreen = true;
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.currentOperand = 'Error';
                    this.operation = undefined;
                    this.previousOperand = '';
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        this.currentOperand = this.formatResult(computation);
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }
    
    formatResult(number) {
        // Handle floating point precision issues
        let result = parseFloat(number.toPrecision(12));
        let resultStr = result.toString();
        
        // If it fits in 8 digits, return it
        if (resultStr.replace(/[\.\-]/g, '').length <= 8) {
            return resultStr;
        }
        
        // If it's too large, convert to exponential if needed or slice
        if (Math.abs(result) >= 1e8 || Math.abs(result) < 1e-7 && result !== 0) {
            return result.toExponential(4).replace('e+', 'E'); // Just fit it in
        }
        
        // Round to fit 8 digits max
        let parts = resultStr.split('.');
        if (parts[0].length >= 8) {
            return parts[0].substring(0, 8); // integer part too long
        } else {
            let allowedDecimals = 8 - parts[0].replace('-', '').length;
            return parseFloat(result.toFixed(allowedDecimals)).toString();
        }
    }

    sqrt() {
        if (this.currentOperand === 'Error') this.clear();
        const current = parseFloat(this.currentOperand);
        if (current < 0) {
            this.currentOperand = 'Error';
        } else {
            this.currentOperand = this.formatResult(Math.sqrt(current));
        }
        this.shouldResetScreen = true;
        this.updateDisplay();
    }

    percent() {
        if (this.currentOperand === 'Error') this.clear();
        const current = parseFloat(this.currentOperand);
        this.currentOperand = this.formatResult(current / 100);
        this.shouldResetScreen = true;
        this.updateDisplay();
    }
    
    memoryAdd() {
        if (this.currentOperand === 'Error') return;
        this.memory += parseFloat(this.currentOperand) || 0;
        this.shouldResetScreen = true;
        this.mrcState = 0;
    }
    
    memorySubtract() {
        if (this.currentOperand === 'Error') return;
        this.memory -= parseFloat(this.currentOperand) || 0;
        this.shouldResetScreen = true;
        this.mrcState = 0;
    }
    
    memoryRecallClear() {
        if (this.mrcState === 0) {
            // Recall
            this.currentOperand = this.formatResult(this.memory);
            this.shouldResetScreen = true;
            this.mrcState = 1;
        } else {
            // Clear
            this.memory = 0;
            this.mrcState = 0;
        }
        this.updateDisplay();
    }

    updateDisplay() {
        // Append decimal point correctly
        let displayStr = this.currentOperand;
        if (!displayStr.includes('.') && displayStr !== 'Error') {
            displayStr += '.';
        }
        this.displayElement.innerText = displayStr;
    }
    
    off() {
        this.displayElement.innerText = '';
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.getElementById('display');
    const calculator = new Calculator(displayElement);

    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Add visual feedback
            button.classList.add('pressed');
            setTimeout(() => button.classList.remove('pressed'), 100);
            
            if (button.classList.contains('num')) {
                calculator.appendNumber(button.dataset.value);
                calculator.updateDisplay();
            } else if (button.classList.contains('op')) {
                const action = button.dataset.action;
                if (action === 'calculate') {
                    calculator.compute();
                    calculator.updateDisplay();
                } else {
                    // Map HTML signs to JS signs
                    let op = button.innerText;
                    if (action === 'divide') op = '÷';
                    if (action === 'multiply') op = '×';
                    if (action === 'subtract') op = '-';
                    if (action === 'add') op = '+';
                    calculator.chooseOperation(op);
                }
            } else if (button.classList.contains('fn')) {
                const action = button.dataset.action;
                switch (action) {
                    case 'clear':
                        calculator.clear();
                        break;
                    case 'sqrt':
                        calculator.sqrt();
                        break;
                    case 'percent':
                        calculator.percent();
                        break;
                    case 'mrc':
                        calculator.memoryRecallClear();
                        break;
                    case 'm-minus':
                        calculator.memorySubtract();
                        break;
                    case 'm-plus':
                        calculator.memoryAdd();
                        break;
                    case 'off':
                        calculator.off();
                        break;
                }
            }
        });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        let key = e.key;
        let buttonToPress = null;

        if (/[0-9\.]/.test(key)) {
            calculator.appendNumber(key);
            calculator.updateDisplay();
            buttonToPress = document.querySelector(`.btn.num[data-value="${key}"]`);
        } else if (key === '+' || key === '-') {
            calculator.chooseOperation(key);
            let action = key === '+' ? 'add' : 'subtract';
            buttonToPress = document.querySelector(`.btn.op[data-action="${action}"]`);
        } else if (key === '*' || key === 'x') {
            calculator.chooseOperation('×');
            buttonToPress = document.querySelector(`.btn.op[data-action="multiply"]`);
        } else if (key === '/') {
            e.preventDefault();
            calculator.chooseOperation('÷');
            buttonToPress = document.querySelector(`.btn.op[data-action="divide"]`);
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            calculator.compute();
            calculator.updateDisplay();
            buttonToPress = document.querySelector(`.btn.op[data-action="calculate"]`);
        } else if (key === 'Escape' || key === 'Backspace' || key === 'Delete') {
            calculator.clear();
            buttonToPress = document.querySelector(`.btn.fn[data-action="clear"]`);
        } else if (key === '%') {
            calculator.percent();
            buttonToPress = document.querySelector(`.btn.fn[data-action="percent"]`);
        }

        if (buttonToPress) {
            buttonToPress.classList.add('pressed');
            setTimeout(() => buttonToPress.classList.remove('pressed'), 100);
        }
    });

    // Theme switching logic
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const theme = btn.dataset.theme;
            if (theme === 'blue') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', theme);
            }
        });
    });
});
