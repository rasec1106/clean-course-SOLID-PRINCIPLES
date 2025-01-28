(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana','cereza','ciruela'];
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    enum Color {
        RED = 'red',
        YELLOW = 'yellow',
        PURPLE = 'purple'
    }
    const fruitsByColor: Record <Color, string[]>= {
        [Color.RED]: ['manzana','fresa'],
        [Color.YELLOW]: ['piña','banana'],
        [Color.PURPLE]: ['moras','uvas']
    }
    
    function isValidFruitColor( color: string ): color is Color {
        return Object.values(Color).includes(color as Color);
    }

    function getFruitsByColor( color: string ): string[] {
        if( !isValidFruitColor(color) ) throw Error('the color must be: red, yellow, purple');
        return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = false;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();