const myName = 'Anabel';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and I have ${this.age}`;
  }
}

const anabel = new Persona(31, 'Anabel');
console.log(anabel.getSummary());
