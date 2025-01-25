(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continuar 
    enum EmployeeStatus {
        DECEASED = 'EMPLOYEE_DECEASED',
        SEPARATED = 'EMPLOYEE_SEPARATED',
        RETIRED = 'EMPLOYEE_RETIRED',
        DEFAULT = 'DEFAULT',
    }
    
    const EMPLOYEE_PAY_AMOUNT = {
        [EmployeeStatus.DECEASED]: 1500,
        [EmployeeStatus.SEPARATED]: 2500,
        [EmployeeStatus.RETIRED]: 3000,
        [EmployeeStatus.DEFAULT]: 4000,
    }
    
    const getPayAmount = (status: EmployeeStatus): number => {
        return EMPLOYEE_PAY_AMOUNT[status] || EMPLOYEE_PAY_AMOUNT[EmployeeStatus.DEFAULT];
    };
    


})();