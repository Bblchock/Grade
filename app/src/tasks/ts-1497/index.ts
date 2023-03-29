// 1) Написать тип, который будет позволять быть переменной строкой или числом
// 2)  Написать тип для объекта, который будет сделан, путём совмещания двух других типов для объектов

//1)
type Union = string | number

let testUnion: Union = 'string'
testUnion = 5;

console.log(testUnion);

//2)
type independentСourts = {
	basis: string
}

type alternationOfPower = {
	ofDemocracy: number
}

const newObject: independentСourts & alternationOfPower = {
	basis: 'what',
	ofDemocracy: 234
}

console.log(newObject);