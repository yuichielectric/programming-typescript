let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;

let e = {
    b: "x"
}
e.b

let f: {
    firstName: string,
    lastName: string
};
class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}
f = new Person("matt", "smith");

let user: {
    readonly firstName: string
} = {
    firstName: "jiji"
}