const types = ["CP", "Honors", "AP"];

    const letters = ["A", "B", "C","D","F"];
    const chars = ["+","","-"]
    export const points = [0.00, 1.00, 1.67, 2.00, 2.33, 2.67, 3.00, 3.33, 3.67, 4.00, 4.33].reverse()
    export const grades = letters.reduce((acc, letter) => {
        if (letter === "F" || letter === "D") {
            acc.push(letter);
            return acc;
        }
        for (let char of chars) {
            acc.push(letter+char);
        }
        return acc;

    },[]);

function createClass (name, type){
    return {name, type};
}

export const classArray = [
    //CORE COURSES:
    //GFS
    createClass("Gibbons Freshman Seminar (GFS)", types[0]),
    //English
    //ENG 9
    createClass("English 9", types[0]),
    createClass("English 9 Honors", types[1]),
    //ENG 10
    createClass("English 10: American Literature", types[1]),
    createClass("English 10 Honors: American Literature", types[1]),
    //ENG 11
    createClass("English 11: British Literature",  types[0]),
    createClass("English 11 Honors: British Literature", types[1]),
    createClass("AP English Language and Composition", types[2]),
    //ENG 12
    createClass("English 12: World Literature", types[0]),
    createClass("English 12 Honors: World Literature", types[1]),
    createClass("AP English Literature and Composition", types[2]),
    //End English

    //MATH
    createClass("Core Math I", types[0]),
    createClass("Math I", types[0]),
    createClass("Core Math II", types[0]),
    createClass("Math II", types[0]),
    createClass("Math II Honors", types[1]),
    createClass("Core Math III", types[0]),
    createClass("Math III", types[0]),
    createClass("Math III Honors", types[1]),
    createClass("Math IV", types[0]),
    createClass("Math IV Honors", types[1]),
    createClass("Precalculus", types[0]),
    createClass("Precalculus Honors", types[1]),
    createClass("AP Precalculus", types[2]),
    createClass("Discrete Math", types[0]),
    createClass("Introduction to College Math", types[0]),
    createClass("Calculus Honors", types[1]),
    createClass("AP Calculus AB", types[2]),
    createClass("AP Calculus BC", types[2]),
    createClass("Statistics and Probability Honors", types[1]),
    createClass("AP Statistics", types[2]),
    createClass("Advanced Topics in Math", types[2]),
    //End Math
    //PE/HEALTH
    createClass("Men's Fitness 9/10", types[0]),
    createClass("Women's Fitness 9/10", types[0]),
    //End PE/Health
    //SCIENCE
    createClass("Biology", types[0]),
    createClass("Biology Honors", types[1]),
    createClass("Earth and Environmental Science", types[0]),
    createClass("Earth and Environmental Science Honors", types[1]),
    createClass("Chemistry", types[0]),
    createClass("Chemistry Honors", types[1]),
    createClass("Physical Science", types[0]),
    createClass("Physics Honors", types[1]),
    createClass("Advanced Anatomy and Physiology", types[2]),
    createClass("AP Chemistry", types[2]),
    createClass("AP Chemistry Lab", types[2]),
    createClass("AP Environmental Science", types[2]),
    createClass("AP Physics 1: Algebra-Based", types[2]),
    createClass("AP Physics C: Mechanics", types[2]),
    createClass("AP Physics 2: Algebra-Based", types[2]),
    createClass("AP Biology", types[2]),
    //End Science
    //SOCIAL STUDIES
    //World History
    createClass("World History", types[0]),
    createClass("World History Honors", types[1]),
    createClass("AP World History", types[2]),
    //U.S. History
    createClass("U.S. History", types[0]),
    createClass("U.S. History Honors", types[1]),
    createClass("AP U.S. History", types[2]),
    //Government
    createClass("U.S. Government", types[0]),
    createClass("U.S. Government Honors", types[1]),
    createClass("AP U.S. Government and Politics", types[2]),
    //Economics
    createClass("Economics", types[0]),
    createClass("Economics Honors", types[1]),
    //End Social Studies
    //THEOLOGY
    createClass("Theology 9", types[0]),
    createClass("Theology 10", types[0]),
    createClass("Theology 11 Honors", types[1]),
    //Senior Theology (Semester Courses)
    createClass("Catholic Vocations Honors", types[1]),
    createClass("Foundations of the Catholic Worldview Honors", types[1]),
    createClass("Peace and Justice Honors", types[1]),
    createClass("World Religions Honors", types[1]),
    //End Theology
    //ELECTIVES
    //ARTIFICIAL INTELLIGENCE
    createClass("AI Ethics and Applications Honors", types[1]),

    //BUSINESS
    createClass("Business Leadership Honors", types[1]),
    createClass("Marketing Honors", types[1]),
    createClass("Business Entrepreneurship Honors", types[1]),

    //COMPUTER SCIENCE
    createClass("Introduction to Computer Science Honors", types[1]),
    createClass("AP Computer Science Principles", types[2]),
    createClass("AP Computer Science A", types[2]),
    createClass("Advanced Cybersecurity Honors", types[1]),

    //ENGINEERING
    createClass("Engineering Essentials", types[0]),
    createClass("Introduction to Engineering Design Honors", types[1]),
    createClass("Principles of Engineering Honors", types[1]),
    createClass("Engineering Design and Development Honors", types[1]),

    //ROBOTICS
    createClass("Robotics Honors", types[1]),

    //ENGLISH ELECTIVES
    createClass("Holocaust Literature", types[0]),
    createClass("Introduction to Film", types[0]),
    createClass("Journalism and Reporting Honors", types[1]),
    createClass("Public Speaking and Presentation", types[0]),
    createClass("Public Speaking and Presentation II", types[0]),

    //MEDIA COURSES
    createClass("Introduction to Media", types[0]),
    createClass("Digital Media I Honors", types[1]),
    createClass("Digital Media II Honors", types[1]),
    createClass("Digital Media III Honors", types[1]),
    createClass("Broadcast Production Honors", types[1]),
    createClass("Photojournalism Honors", types[1]),
    createClass("Yearbook Honors", types[1]),
    //BAND AND PERCUSSION
    createClass("Symphonic Band (Honors Option)", types[0]),
    createClass("Wind Ensemble Honors", types[1]),
    createClass("Percussion Ensemble (Honors Option)", types[0]),
    createClass("Percussion Ensemble Advanced Honors", types[1]),

    //GUITAR
    createClass("Guitar I", types[0]),
    createClass("Guitar II (Honors Option)", types[1]),
    createClass("Guitar III Honors", types[1]),
    createClass("Guitar IV-V Honors", types[1]),

    //STRING ORCHESTRA
    createClass("String Orchestra I", types[0]),
    createClass("String Orchestra II (Honors Option)", types[1]),
    createClass("String Orchestra III Honors", types[1]),
    createClass("String Orchestra IV Honors", types[1]),

    //VOCAL ENSEMBLE
    createClass("Soprano/Alto Vocal Ensemble", types[0]),
    createClass("Tenor/Bass Vocal Ensemble", types[0]),
    createClass("Sacred Heart Vocal Ensemble Honors", types[1]),

    //OTHER MUSIC COURSES
    createClass("World Music Honors", types[1]),
    createClass("AP Music Theory", types[2]),

    //DANCE COURSES
    createClass("Dance I", types[0]),
    createClass("Dance II (Honors Option)", types[1]),
    createClass("Dance III Honors", types[1]),
    createClass("Dance IV Honors", types[1]),
    createClass("Dance V Honors", types[1]),

    //DRAMA COURSES
    createClass("Drama I", types[0]),
    createClass("Drama II (Honors Option)", types[1]),
    createClass("Drama III Honors", types[1]),
    createClass("Drama IV Honors: Performance Studies", types[1]),

    //MUSICAL THEATER COURSES
    createClass("Musical Theater Conservatory I Honors", types[1]),
    createClass("Musical Theater Conservatory II Honors", types[1]),
    createClass("Musical Theater Conservatory III Honors", types[1]),
    createClass("Musical Theater Dance Honors", types[0]),

    //TECHNICAL THEATER COURSES
    createClass("Technical Theater I", types[0]),
    createClass("Technical Theater II (Honors Option)", types[1]),
    createClass("Technical Theater III-IV Honors", types[1]),

    // ART AND DESIGN COURSES
    createClass("Art I", types[0]),
    createClass("Art II (Honors Option)", types[1]),
    createClass("AP 2-D Art and Design", types[2]),
    createClass("AP 3-D Art and Design", types[2]),
    createClass("AP Drawing", types[2]),

    // OTHER VISUAL ART COURSES
    createClass("Introduction to Clay Honors", types[1]),
    createClass("Introduction to Computer Modeling Honors", types[1]),
    createClass("Introduction to Graphic Design Honors", types[1]),
    createClass("Photography Honors", types[1]),
    createClass("Sequential Art I Honors", types[1]),
    createClass("Sequential Art II Honors", types[1]),

    // ART HISTORY COURSES
    createClass("Advanced Art History", types[2]),

    // STRENGTH & CONDITIONING COURSES
    createClass("Men's Strength & Conditioning", types[0]),
    createClass("Women's Strength & Conditioning", types[0]),

    // HONORS STRENGTH & CONDITIONING COURSES
    createClass("Advanced Strength & Conditioning Honors", types[1]),
    createClass("Athletic Training Honors", types[1]),

    // SCIENCE COURSES
    createClass("Astronomy (Honors Option)", types[1]),
    createClass("Biotechnology (Honors Option)", types[1]),
    createClass("Forensics (Honors Option)", types[1]),
    createClass("Marine Ecology (Honors Option)", types[1]),

    // LABORATORY COURSES
    createClass("Laboratory Assistant", types[0]),

    // SOCIAL SCIENCE COURSES
    createClass("Sociology (Honors Option)", types[1]),
    createClass("Psychology (Honors Option)", types[1]),
    createClass("AP Psychology", types[2]),

    // SPECIAL COURSES
    createClass("AI Ethics and Applications Honors", types[1]),
    createClass("Christian Service Learning Honors", types[1]),

    // END ELECTIVES
    //WORLD LANGUAGES
    // FRENCH COURSES
    createClass("French I", types[0]),
    createClass("French II", types[0]),
    createClass("French III Honors", types[1]),
    createClass("French IV Honors", types[1]),
    createClass("AP French", types[2]),

    // LATIN COURSES
        createClass("Latin I", types[0]),
        createClass("Latin II", types[0]),
        createClass("Latin II Honors", types[1]),
        createClass("Latin III Honors", types[1]),
        createClass("Latin IV", types[0]),
        createClass("Advanced Latin", types[2]),

    // SPANISH COURSES
        createClass("Spanish I", types[0]),
        createClass("Essential Spanish II", types[0]),
        createClass("Spanish II", types[0]),
        createClass("Spanish II Honors", types[1]),
        createClass("Spanish III", types[0]),
        createClass("Spanish III Honors", types[1]),
        createClass("Spanish IV", types[0]),
        createClass("AP Spanish Language", types[2]),
        createClass("AP Spanish Literature", types[2]),

    // AMERICAN SIGN LANGUAGE COURSES
        createClass("American Sign Language I", types[0]),
        createClass("American Sign Language II", types[0]),
    //END WORLD LANGUAGES
    //flex
    createClass("Flex", "Flex")
    //end flex
];
