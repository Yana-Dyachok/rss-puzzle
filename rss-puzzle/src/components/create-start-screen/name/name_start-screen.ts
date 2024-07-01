import SaveToLocalStorage from '../../../utils/local-storage/local_storage';

class StartScreenName {
    private greeting: HTMLDivElement;
    private localStorage: SaveToLocalStorage;

    constructor(localStorage: SaveToLocalStorage) {
        this.localStorage = localStorage;
        this.greeting = document.createElement('div');
        this.createGreetings();
    }

    createGreetings(): void {
        const startScreenName = document.createElement('h2');
        startScreenName.classList.add('start-screen_name');
        startScreenName.textContent = `Hello, ${this.localStorage.getValue('firstName')} ${this.localStorage.getValue('surname')}!`;
        const startScreenWelcome = document.createElement('p');
        startScreenWelcome.classList.add('start-screen_game-description');
        startScreenWelcome.textContent = 'Welcome to the game!!!';
        this.greeting.append(startScreenName, startScreenWelcome);
    }

    getRootElement(): HTMLDivElement {
        return this.greeting;
    }
}

export default StartScreenName;
