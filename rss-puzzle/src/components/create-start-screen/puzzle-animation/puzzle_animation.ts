import './puzzle_animation.scss'
class PuzzleAnimation {
    private puzzleBlock: HTMLDivElement;
    private words: string[];
    private animationInterval: number;

    constructor() {
        this.puzzleBlock = document.createElement('div');
        this.words = [
            'book', 'tree', 'lamp', 'fish', 'bird', 'note', 'fire', 'ball', 'hand', 'ship','corn', 'rock', 'moon', 'rose', 'bell', 'duck', 'frog', 'deer', 'gold', 'gate', 
            'frog', 'kite', 'lake', 'leaf', 'love', 'milk', 'nose', 'palm', 'pear', 'rice','ring', 'sand', 'star', 'tire', 'toad', 'wolf', 'yard', 'zeal', 'zone', 'bark', 
            'cake', 'deep', 'dock', 'film', 'girl', 'hand', 'home', 'jazz', 'king', 'lamb'];
        this.animationInterval = 20000, this.createPuzzleElements(), this.startAnimation();
    }

    private createPuzzleElements(): void {
        for (let i = 0; i < 6; i++) {
            const puzzle = document.createElement('div');
            puzzle.classList.add('start-screen_puzzle');
            puzzle.setAttribute('data-puzzle', `${i}`);
            this.puzzleBlock.append(puzzle);
        }
        this.updatePuzzleText();
    }

    private updatePuzzleText(): void {
        const puzzles = this.puzzleBlock.querySelectorAll('.start-screen_puzzle');
        puzzles.forEach((puzzle) => {
            const randomIndex = Math.floor(Math.random() * this.words.length);
            puzzle.textContent = this.words[randomIndex];
        });
    }

    private startAnimation(): void {
        setInterval(() => this.updatePuzzleText(), this.animationInterval);
    }

    getRootElement(): HTMLDivElement {
        return this.puzzleBlock;
    }
}

export default PuzzleAnimation;
