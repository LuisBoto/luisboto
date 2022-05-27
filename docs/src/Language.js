class Language {

    static TITLE_DESCRIPTOR = new Language([
        "Ingeniero de Software", 
        "Software Engineer"
    ]);
    static MASTERS_NAME = new Language([
        "Cloud Apps: Desarrollo y despliegue de aplicaciones en la nube", 
        "Cloud Apps: Development and deployment of cloud based applications"
    ]);
    static MASTERS_LOCATION = new Language([
        "Universidad Rey Juan Carlos, Máster",
        "King Juan Carlos University, Master's Degree"
    ]);
    static PRACTICES_POSITION = new Language([
        "Desarrollador Júnior", 
        "Junior Developer"
    ]);
    static PRACTICES_LOCATION = new Language([
        "Capgemini Asturias, Prácticas de empresa", 
        "Capgemini Asturias, Internship"
    ]);
    static DEGREE_NAME = new Language([
        "Ingeniería Informática del Software", 
        "Software Engineering"
    ]);
    static DEGREE_LOCATION = new Language([
        "Universidad de Oviedo, Grado",
        "University of Oviedo, Bachelor's Degree"
    ]);

    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text[Language.currentLanguage.value];
    }

}

let spanish = { value: 0, icon: "./res/esflag.png" };
let english = { value: 1, icon: "./res/ukflag.png" };
Language.currentLanguage = english;

function alternateLanguage() {
    document.getElementById("languageButton").src = Language.currentLanguage.icon;
    Language.currentLanguage = 
        (Language.currentLanguage === spanish ? english : spanish);
    
    document.getElementById("titleDescriptor").innerHTML = 
        Language.TITLE_DESCRIPTOR.getText();
    document.getElementById("mastersName").innerHTML = 
        Language.MASTERS_NAME.getText();
    document.getElementById("mastersLocation").innerHTML = 
        Language.MASTERS_LOCATION.getText();
    document.getElementById("practicesPosition").innerHTML = 
        Language.PRACTICES_POSITION.getText();
    document.getElementById("practicesLocation").innerHTML = 
        Language.PRACTICES_LOCATION.getText();
    document.getElementById("degreeName").innerHTML = 
        Language.DEGREE_NAME.getText();
    document.getElementById("degreeLocation").innerHTML = 
        Language.DEGREE_LOCATION.getText();
}

alternateLanguage();