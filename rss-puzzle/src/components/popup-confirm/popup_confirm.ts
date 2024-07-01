import CreatePopup from './createPopup';

class PopupConfirm {
    private createPopup?: CreatePopup;

    openPopupConfirm (): void {
        if (!this.createPopup) {
            this.createPopup = new CreatePopup();
        }
    }
}

export default PopupConfirm;
