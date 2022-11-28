export enum Lang {
    JA = 0,
    EN = 1,
    ZH = 2,
    KO = 3,
}

export class Field
{
    constructor(readonly lang: Lang, readonly field: string, readonly value: string){}
}
