export interface IStudent {
    id?: number;
    matrikelNr?: number;
    lastName?: string;
    firstName?: string;
    street?: string;
    zipCode?: number;
    city?: string;
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public matrikelNr?: number,
        public lastName?: string,
        public firstName?: string,
        public street?: string,
        public zipCode?: number,
        public city?: string
    ) {}
}
