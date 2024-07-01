import Button from '../button/button';
import PopupConfirm from '../popup-confirm/popup_confirm';

import './logout_button.scss';

class LogoutButton extends Button {
    constructor() {
        super('logout_btn', 'Logout');

        this.onClick(() => {
            const popupConfirm = new PopupConfirm();
            popupConfirm.openPopupConfirm();
        });
    }
}

export default LogoutButton;
