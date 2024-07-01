import { IGameData } from '../interfaces/interfaces';

class GetData {
    constructor(private level: number) {
        this.level = level;
    }

    async getData(): Promise<IGameData | undefined> {
        try {
            const response = await fetch(
                `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${this.level}.json` ||
                    `../src/puzzle-data/wordCollectionLevel${this.level}.json`
            );
            const responseData: IGameData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error data:', error);
            return undefined;
        }
    }
}

export default GetData;
