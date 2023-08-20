import esflag from "../res/esflag.png";
import ukflag from "../res/ukflag.png";

class Language {

    static MSG_STRINGS = {
        TITLE_DESCRIPTOR : new Language("titleDescriptor", [
            "Ingeniero de Software", 
            "Software Engineer"
        ]), 
        AUTENTIA_LOCATION : new Language("autentiaLocation", [
            "Autentia Real Business Solutions",
            "Autentia Real Business Solutions"
        ]),
        AUTENTIA_POSITION : new Language("autentiaPosition", [
            "Desarrollador Júnior",
            "Junior Developer"
        ]),
        MASTERS_NAME : new Language("mastersName", [
            "Cloud Apps: Desarrollo y despliegue de aplicaciones en la nube", 
            "Cloud Apps: Development and deployment of cloud based applications"
        ]),
        MASTERS_LOCATION : new Language("mastersLocation", [
            "Universidad Rey Juan Carlos, Máster",
            "Rey Juan Carlos University, Master's Degree"
        ]),
        PRACTICES_POSITION : new Language("practicesPosition", [
            "Desarrollador Júnior, Prácticas de empresa", 
            "Junior Developer, Internship"
        ]),
        PRACTICES_LOCATION : new Language("practicesLocation", [
            "Capgemini Asturias", 
            "Capgemini Asturias"
        ]),
        DEGREE_NAME : new Language("degreeName", [
            "Ingeniería Informática del Software", 
            "Software Engineering"
        ]),
        DEGREE_LOCATION : new Language("degreeLocation", [
            "Universidad de Oviedo, Grado",
            "University of Oviedo, Bachelor's Degree"
        ]),
        EXP_DESCRIPTION : new Language("expDescription", [
            `Soy Luis, desarrollador de software con base en Madrid. 
            Me gradué de Ingeniería de Software en la universidad de Oviedo en 2021, 
            y me he especializado en el desarrollo de aplicaciones distribuidas en la nube, usando 
            principalmente herramientas como Spring Framework, Micronaut o NodeJS. 
            Considero por ello que mis lenguajes de programación más fuertes son Java y JavaScript, 
            aunque también me puedo desenvolver en Kotlin, y puntualmente en C o Python. Te invito a ver a continuación 
            algunos de los proyectos que he realizado (unos en mi tiempo libre, y otros con fines académicos), 
            así como a visitar mi perfil de GitHub, donde los publico y en donde suelo mantener una actividad frecuente. 
            ¡Gracias por visitarme!`,
            `I'm Luis, a software developer based in Madrid. 
            I graduated in Software Engineering at Oviedo's University in 2021, 
            and I've specialized in development of cloud based distributed applications, 
            mainly using tools such as Spring Framework, Micronaut and NodeJS. 
            As so, I consider myself to be most proficent in Java and JavaScript, 
            although I can find my way around in Kotlin, and sometimes on C and Python, too. You're welcome to check out 
            some of the projects I've developed (some in my free time, others with academic purposes), 
            and to visit my GitHub profile, where they are published and where I usually keep pretty frequent activity. 
            Thank you for visiting my website!`
        ]),
        MY_PROJECTS : new Language("myProjects", [
            "Mis proyectos",
            "My projects"
        ]),
        SLIDE_KEYBOARD_PROJECT : new Language("slideKeyboardProject", [
            `Una aplicación de teclado para teléfonos Android que funciona mediante un sistema de deslizamiento. 
            Inspirado en la funcionalidad de otro teclado similar que utilicé durante mucho tiempo en mi dispositivo personal.`,
            `An Android keyboard application that works by using a swipe input system.
            Inspired by a similar legacy keyboard app that I used for a long time on my personal device.`
        ]),
        POLAR_CLOCK_PROJECT : new Language("polarClockProject", [
            `Un reloj polar elaborado en JavaScript. Este tipo de reloj utiliza coordenadas polares para representar el tiempo
            mediante círculos concéntricos de diferentes colores. Uno de mis proyectos favoritos (¡y quizá el más bonito de mirar!).`,
            `A polar clock made in JavaScript. This kind of clock uses polar coordinates to represent time
            on colorful concentric circles. One of my favorite projects (and maybe the prettiest one to look at!).`
        ]),
        EVOLUTIONARY_STUDY_TOOL_PROJECT : new Language("evolutionaryStudyToolProject", [
            `Mi proyecto de fin de grado, una herramienta escrita en Java para ayudar en el estudio de datos generados mediante la ejecución de
            algoritmos evolutivos. Fue diseñada para uso en grupos de investigación, e incluye un algoritmo genético del TSP para la generación de
            datos de muestra.`,
            `My bachelor's dissertation project, a Java tool designed to help in the study of evolutionary algorithm execution data. It was created to assist
            research groups, and the project includes a genetic algorithm which solves the Travelling Salesman Problem, to generate sample data.`
        ]),
        NEURAL_AUTOMATA_PROJECT : new Language("neuralAutomataProject", [
            `Implementación en JavaScript puro de autómatas neuronales celulares muy sencillos. Mediante convoluciones simples aceleradas por GPU puede verse 
            como se generan comportamientos complejos y visualmente interesantes, pudiendo parametrizarse tanto el kernel como la función de activación
            desde la interfaz web.`,
            `Pure JavaScript implementation of very rudimentary neural celullar automata. By means of simple GPU-accelerated convolutions complex and visually 
            appealing behaviours can be achieved, being both the kernel values and the activation function configurable on the web interface.`
        ]),
        AND_MANY_MORE : new Language("manyMore", [
            `Y muchos más...`,
            `And many more...`
        ]),
        DOWNLOAD_MY_RESUME : new Language("resumeDownload", [
            `Descargar mi curriculum`,
            `Download my resume`
        ])
    };

    constructor(elementID, text) {
        this.elementID = elementID;
        this.text = text;
    }

    getText() {
        return this.text[Language.currentLanguage.value];
    }

    getElementID() {
        return this.elementID;
    }

    updateDisplayedText() {
        document.getElementById(this.getElementID()).innerHTML = this.getText();
    }

}

let spanish = { value: 0, icon: esflag };
let english = { value: 1, icon: ukflag };
Language.currentLanguage = spanish;

function alternateLanguage() {
    document.getElementById("languageButton").onclick = alternateLanguage;
    document.getElementById("languageButton").src = Language.currentLanguage.icon;
    Language.currentLanguage = (Language.currentLanguage === spanish ? english : spanish);
    for (let msg in Language.MSG_STRINGS)
        Language.MSG_STRINGS[msg].updateDisplayedText();
}

function setResumeLink() {
    let resumeLink = "https://www.dropbox.com/scl/fi/slgjcyoneg6s65akgvxye/Luis-Boto-Fernandez-CV1.pdf?rlkey=uykn37rtkpg1xo6ixxycdeyip&dl=1";
    document.getElementById("resumePictureLink").href = resumeLink;
}

export {
    alternateLanguage,
    setResumeLink
}