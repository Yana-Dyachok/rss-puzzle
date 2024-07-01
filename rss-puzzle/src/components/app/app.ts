import LoginFormPage from '../../pages/login-form/login-form_page';
import StartScreenPage from '../../pages/start-screen/start-screen_page';
import SaveToLocalStorage from '../../utils/local-storage/local_storage';

class App {
    private loginForm: LoginFormPage;
    private startScreen: StartScreenPage;
    private localStorage: SaveToLocalStorage;

    constructor() {
        this.localStorage = new SaveToLocalStorage();
        this.loginForm = new LoginFormPage(this.localStorage);
        this.startScreen = new StartScreenPage(this.localStorage);
    }

    start(): void {
        const firstName: string | null =
            this.localStorage.getValue('firstName');
        const surname: string | null = this.localStorage.getValue('surname');

        if (
            firstName === null ||
            surname === null ||
            typeof firstName === 'undefined' ||
            typeof surname === 'undefined'
        ) {
            this.loginForm.drawLoginForm();
        } else {
            this.startScreen.drawStartScreenPage();
        }
    }
}

export default App;
