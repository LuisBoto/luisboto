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
    static EXP_DESCRIPTION = new Language([
        `Soy Luis, desarrollador de software con base en Madrid. 
        Me gradué de Ingeniería de Software en la universidad de Oviedo en 2021, 
        y me he especializado en el desarrollo de aplicaciones distribuidas en la nube. 
        Considero que mis lenguajes de programación más fuertes son Java y JavaScript, 
        aunque también me puedo desenvolver en Python y C. Te invito a ver a continuación 
        algunos de los proyectos que he realizado (unos en mi tiempo libre, y otros con fines académicos), 
        así como a visitar mi perfil de GitHub, donde los publico y en donde suelo mantener una actividad frecuente. 
        ¡Gracias por visitarme!`,
        `I'm Luis, a software developer based in Madrid. 
        I graduated in Software Engineering at Oviedo's University in 2021, 
        and I've specialized in development of cloud based distributed applications. 
        I consider myself to be most proficent in Java and JavaScript, 
        although I can find my way around in Python and C, too. You're welcome to check out 
        some of the projects I've developed (some in my free time, others with academic purposes), 
        and to visit my GitHub profile, where they are published and where I usually keep pretty frequent activity. 
        Thank you for visiting my website!`
    ]);
    static MY_PROJECTS = new Language([
        "Mis proyectos",
        "My projects"
    ]);
    static SLIDE_KEYBOARD_PROJECT = new Language([
        `Una aplicación de teclado para teléfonos Android que funciona mediante un sistema de deslizamiento. 
        Inspirado en la funcionalidad de otro teclado similar que utilicé durante mucho tiempo en mi dispositivo personal.`,
        `An Android keyboard application that works by using a swipe input system.
        Inspired by a similar legacy keyboard app that I used for a long time on my personal device.`
    ]);
    static POLAR_CLOCK_PROJECT = new Language([
        `Un reloj polar elaborado en JavaScript. Este tipo de reloj utiliza coordenadas polares para representar el tiempo
        mediante círculos concéntricos de diferentes colores. Uno de mis proyectos favoritos (¡y quizá el más bonito de mirar!).`,
        `A polar clock made in plain JavaScript. This kind of clock uses polar coordinates to represent time
        on colorful concentric circles. One of my favorite projects (and maybe the prettiest one to look at!).`
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
    
    setInnerHMTL("titleDescriptor", Language.TITLE_DESCRIPTOR);
    setInnerHMTL("mastersName", Language.MASTERS_NAME);
    setInnerHMTL("mastersLocation", Language.MASTERS_LOCATION);
    setInnerHMTL("practicesPosition", Language.PRACTICES_POSITION);
    setInnerHMTL("practicesLocation", Language.PRACTICES_LOCATION);
    setInnerHMTL("degreeName", Language.DEGREE_NAME);
    setInnerHMTL("degreeLocation", Language.DEGREE_LOCATION);
    setInnerHMTL("expDescription", Language.EXP_DESCRIPTION);
    setInnerHMTL("myProjects", Language.MY_PROJECTS);
    setInnerHMTL("slideKeyboardProject", Language.SLIDE_KEYBOARD_PROJECT);
    setInnerHMTL("polarClockProject", Language.POLAR_CLOCK_PROJECT);
}

function setInnerHMTL(id, language) {
    document.getElementById(id).innerHTML = language.getText();
}

alternateLanguage();