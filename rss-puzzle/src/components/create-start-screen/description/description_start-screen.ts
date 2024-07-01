class DescriptionStartScreen {
    private description: HTMLDivElement;

    constructor() {
        this.description = document.createElement('div');
        this.description.classList.add('start-screen_description');
        this.createDescriptionElements();
    }

    createDescriptionElements(): void {
        const gameName = document.createElement('h1');
        gameName.classList.add('start-screen_game-name');
        gameName.textContent = 'English Puzzle';
        this.description.append(gameName);
        const name = document.createElement('p');
        name.classList.add('start-screen_game-description');
        name.textContent =
            'Step into the world of English Puzzle, a captivating game designed to sharpen your English language skills, players piece together scrambled words to form meaningful sentences. With varying difficulty levels, helpful hints, and stunning artwork';
        this.description.append(name);
    }

    getRootElement(): HTMLDivElement {
        return this.description;
    }
}

export default DescriptionStartScreen;
