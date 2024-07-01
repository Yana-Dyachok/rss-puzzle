import Button from '../../button/button';
import SaveToLocalStorage from '../../../utils/local-storage/local_storage';
import LoginFormPage from '../../../pages/login-form/login-form_page';

import './popup_button.scss';

class YesButton extends Button {
    private saveToLocalStorage: SaveToLocalStorage;
    private loginForm?: LoginFormPage;
    constructor() {
        super('popup_btn', 'Yes');
        this.saveToLocalStorage = new SaveToLocalStorage();

        this.onClick(() => {
            this.saveToLocalStorage.clearAllValue();
            this.removeElement('.container');
            this.removeElement('.logout_btn');
            this.removeElement('.popup');
            this.initLoginForm();
        });
    }

    private initLoginForm(): void {
        if (!this.loginForm) {
            this.loginForm = new LoginFormPage(this.saveToLocalStorage);
            this.loginForm.drawLoginForm();
        }
    }

    private removeElement(elementClass: string): void {
        const element: HTMLDivElement | null =
            document.querySelector(elementClass);
        if (element) {
            element.remove();
        }
    }
}

export default YesButton;
