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

// 比较远端仓库与本地仓库
