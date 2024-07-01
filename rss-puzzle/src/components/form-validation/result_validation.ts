class ResultValidation {

    validityIsTrue(inputElement: HTMLInputElement, errorElement: HTMLDivElement): void {
        inputElement.classList.remove('error');
        inputElement.classList.add('valid');
        errorElement.innerHTML = '';
    }

    validityIsFalse(inputElement: HTMLInputElement, errorElement: HTMLDivElement, value: string, validLength: number): void {
        inputElement.classList.add('error');
        inputElement.classList.remove('valid');
        const errorArray: boolean[] = [
            /^[A-Z]/.test(value),
            /^[A-Za-z-]*$/.test(value),
            value.length >= validLength,
        ];

        const errorMessages: string[] = [
            '⚠ The first letter must be capitalized',
            '⚠ Only English letters and hyphens are allowed',
            `⚠ The input field requires a minimum of ${validLength} characters.`,
        ];

        for (let i = errorElement.children.length; i < 3; i++) {
            errorElement.append(document.createElement('p'));
        }

        for (let i = 0; i < 3; i++) {
            errorElement.children[i].textContent = !errorArray[i] ? errorMessages[i] : '';
        }
    }

    updateValidity(isValidFirst: boolean, isValidSecond: boolean): boolean {
        return isValidFirst && isValidSecond;
    }

}

export default ResultValidation;
