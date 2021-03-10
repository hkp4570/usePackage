declare namespace API {
    export interface ResponseType {
        errCode: number;
        errMsg: string;
    }
    export interface Data<T> extends ResponseType {
        Data: T;
    }
}
