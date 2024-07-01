import ResultValidation from './result_validation';
import LoginButton from '../login-button/login_button';

class FormValidation extends ResultValidation {
    private isValidFirstName: boolean = false;
    private isValidSurname: boolean = false;
    firstName:string = '';
    surname:string = '';

    constructor(private loginButton: LoginButton) {
        super();
    }

    setupValidation(): void {
        const firstNameInput: HTMLInputElement | null = document.querySelector('input#firstname');
        const surnameInput: HTMLInputElement | null = document.querySelector('input#surname');
        const errorFirstName: HTMLDivElement | null = document.querySelector('.first-name_error');
        const errorSurname: HTMLDivElement | null = document.querySelector('.surname_error');
        if (firstNameInput) {
            firstNameInput.addEventListener('input', () => {
                const value = firstNameInput!.value;
                this.isValidFirstName = /^[A-Z][a-zA-Z-]{2,}$/.test(value);
                this.isValidFirstName ? this.validityIsTrue(firstNameInput, errorFirstName!) : this.validityIsFalse(firstNameInput, errorFirstName!, value, 3);
                this.loginButton.setDisabled(!this.updateValidity(this.isValidFirstName, this.isValidSurname));
                this.firstName = value; 
            });
        }

        if (surnameInput) {
            surnameInput.addEventListener('input', () => {
                const value = surnameInput!.value;
                this.isValidSurname = /^[A-Z][a-zA-Z-]{3,}$/.test(value);
                this.isValidSurname ? this.validityIsTrue(surnameInput, errorSurname!): this.validityIsFalse(surnameInput, errorSurname!, value, 4);
                this.loginButton.setDisabled(!this.updateValidity(this.isValidFirstName, this.isValidSurname));
                this.surname = value;
            });
        }
    }
}

export default FormValidation;