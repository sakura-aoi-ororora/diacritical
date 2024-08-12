// place files you want to import through the `$lib` alias in this folder.
export const diacriticalArray = ["Symbol", "Normal", "Half", "Supplement", "Extended"] as const
export type DiacriticalType = typeof diacriticalArray[number]

export type Diacriticals = {
    [K in DiacriticalType]?: (Diacritical | DiacriticalRange)[]
}

export interface Diacritical {
    isRange: false,
    char: string,
    display?: string
}

export interface DiacriticalRange {
    isRange: true,
    begin: number,
    end: number
}

export const diacritical: Diacriticals = {
    Symbol: [
        {
            isRange: true,
            begin: 0x20d0,
            end: 0x20f0
        }
    ],
    Normal: [
        {
            isRange: true,
            begin: 0x0300,
            end: 0x036f
        }
    ],
    Supplement: [
        {
            isRange: true,
            begin: 0x1dc0,
            end: 0x1dff
        }
    ],
    Half: [
        {
            isRange: true,
            begin: 0xfe20,
            end: 0xfe2f
        }
    ],
    Extended: [
        {
            isRange: true,
            begin: 0x1ab0,
            end: 0x1ace
        }
    ]
}

export function* iter(begin: number, end: number) {
    let current = begin
    while (true) {
        yield current
        if (current !== end) {
            current += 1
        } else {
            break
        }
    }
}