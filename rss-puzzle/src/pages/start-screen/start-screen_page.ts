import LogoutButton from '../../components/logout-button/logout_button';
import CreateStartScreen from '../../components/create-start-screen/create_start_screen';
import SaveToLocalStorage from '../../utils/local-storage/local_storage';

class StartScreenPage {
    private logout: LogoutButton;
    private createStart: CreateStartScreen;

    constructor(localStorage: SaveToLocalStorage) {
        this.logout = new LogoutButton();
        this.createStart = new CreateStartScreen(localStorage);
    }

    drawStartScreenPage = (): void => {
        document.body.append(this.logout.getRootElement());
        const container: HTMLDivElement | null =
            document.querySelector('.container');
        if (container !== null) {
            container.innerHTML = '';
            container.classList.add('start-screen_container');
            container.append(this.createStart.getRootElement());
        }
    };
}

export default StartScreenPage;
