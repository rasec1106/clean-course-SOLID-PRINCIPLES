(()=> {

    type Gender = 'M' | 'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        // constructor(name: string, gender: Gender, birthDate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthDate = birthDate;
        // }

        // same way as above
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date
        ){}
    }

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ) {
            super(email, role, name, gender, birthdate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });

})();