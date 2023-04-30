export type Undefinable<T extends Object> = {
    [Key in keyof T]: T[Key] | undefined;
}