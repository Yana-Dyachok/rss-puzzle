import YesButton from './popup-buttons/yes_button';
import ReturnButton from './popup-buttons/return_button';

import './popup.scss';

class CreatePopup {
    private popup: HTMLDivElement;
    private yesBtn: YesButton;
    private returnBtn: ReturnButton;

    constructor() {
        this.popup = document.createElement('div');
        this.popup.classList.add('popup');
        this.yesBtn = new YesButton();
        this.returnBtn = new ReturnButton();
        this.createPopupElements();
        document.body.append(this.popup);
    }

    private createPopupElements(): void {
        const popupText = document.createElement('h3');
        popupText.textContent = 'Are you sure you want to log out?';
        const popupButtons = document.createElement('div');
        popupButtons.classList.add('popup_buttons');
        popupButtons.append(this.returnBtn.getRootElement(), this.yesBtn.getRootElement());
        const popupContent = document.createElement('div');
        popupContent.classList.add('popup_content');
        popupContent.append(popupText, popupButtons);
        const popupBody = document.createElement('div');
        popupBody.classList.add('popup_body');
        popupBody.append(popupContent);
        this.popup.append(popupBody);
    }

    getRootElement(): HTMLDivElement {
        return this.popup;
    }
}

export default CreatePopup;
