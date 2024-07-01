class SaveToLocalStorage {

    setValue(storageKey: string, value: string): void {
        localStorage.setItem(storageKey, value);
    }

    getValue(storageKey: string): string | null {
        return localStorage.getItem(storageKey);
    }

    removeValue(storageKey: string): void {
        localStorage.removeItem(storageKey);
    }

    clearAllValue(): void {
        localStorage.clear();
    }
    
}

export default SaveToLocalStorage;
