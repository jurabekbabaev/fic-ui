export const localeCodes = ['uz', 'ru', 'en'] as const;
export const DEFAULT_LOCALE = localeCodes[1] as 'ru';

export const locales = [
    {
        code: localeCodes[0],
        iso: 'uz',
        label: "Uz",
        file: 'uz.json',
    },
    {
        code: localeCodes[1],
        iso: 'ru',
        label: 'Ru',
        file: 'ru.json',
    },
    {
        code: localeCodes[2],
        iso: 'en',
        label: "En",
        file: 'en.json',
    },
];
