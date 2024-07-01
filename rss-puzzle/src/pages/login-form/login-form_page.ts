import CreateInputField from '../../components/input-field/input_field';
import LoginButton from '../../components/login-button/login_button';
import FormValidation from '../../components/form-validation/form_validation';
import SaveToLocalStorage from '../../utils/local-storage/local_storage';
import StartScreenPage from '../start-screen/start-screen_page';

import './login-form_page.scss';

class LoginFormPage {
    private inputField: CreateInputField;
    private loginButton: LoginButton;
    private formValidation: FormValidation;
    private container: HTMLDivElement;
    private localStorage: SaveToLocalStorage;

    constructor(localStorage: SaveToLocalStorage) {
        this.localStorage = localStorage;
        this.inputField = new CreateInputField();
        this.loginButton = new LoginButton();
        this.formValidation = new FormValidation(this.loginButton);
        this.container = document.createElement('div');
        this.container.classList.add('container');
        document.body.append(this.container);
    }

    drawLoginForm = (): void => {
        const { inputField, loginButton, formValidation, container } = this;
        container.append(
            inputField.getRootElement(),
            loginButton.getRootElement()
        );
        formValidation.setupValidation();
        loginButton.onClick(() => {
            const { firstName, surname } = formValidation;
            this.localStorage.setValue('firstName', firstName);
            this.localStorage.setValue('surname', surname);
            const startScreen = new StartScreenPage(this.localStorage);
            startScreen.drawStartScreenPage();
        });
    };
}

export default LoginFormPage;
