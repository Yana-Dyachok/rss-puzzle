import { IWord } from '../../../interfaces/interfaces';
import WordsForSourceBlock from './words_for_source_block';
import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CheckButton from '../buttons-play-field/check-button/check_button';
import './source_block.scss';
class SourceBlock  {
    private wordForSource: WordsForSourceBlock;
    wordCards: string[];
    constructor(public words: IWord[], public round: number, public continueBtn: ContinueButton, public checkBtn: CheckButton, public transleteWords: HTMLDivElement) {
        this.words = words;
        this.round = round;
        this.wordCards=[];
        this.continueBtn = continueBtn;
        this.checkBtn = checkBtn;
        this.transleteWords = transleteWords;
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards, this.checkBtn);
    }

    getRandomWord(): string[] {
        const randomWord = Math.floor(Math.random() * this.words.length);
        const word = this.words[randomWord];
        this.wordCards=word.textExample.split(' ');
        this.transleteWords.textContent = word.textExampleTranslate;
        return  this.wordCards;
    }

    createCorrectCards(): void {
        const resultRound: NodeListOf<HTMLDivElement> = document.querySelectorAll('.play-field_result-round');
        const resultCards = resultRound[this.round-1];
        const sourceCards: HTMLDivElement | null = document.querySelector('.play-field_source');
        if(resultCards&& sourceCards) {
            resultCards.innerHTML='';
            sourceCards.innerHTML='';
            for (let i = 0; i < this.wordCards.length; i++) {
                const card = document.createElement('div');
                card.textContent = this.wordCards[i];
                card.classList.add('play-field_result-card');
                card.classList.add('correct');
                i === this.wordCards.length - 1
                    ? card.setAttribute('data-result', 'last')
                    : card.setAttribute('data-result', i.toString());
                    setTimeout(()=>{resultCards.append(card)});
            }
        }
    }

    getRootElement(): HTMLDivElement {
        this.getRandomWord();
        this.wordForSource = new WordsForSourceBlock(this.round, this.continueBtn, this.wordCards, this.checkBtn);
        return this.wordForSource.createCards()
    }
}

export default SourceBlock;