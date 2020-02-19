type gender = 'male' | 'female'
const sex:gender = "male"

interface b {
  name:string;
  age: number;
  location: string;
}

type a = keyof b

interface Person {
  name: string
}
