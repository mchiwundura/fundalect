import * as SQLite from "expo-sqlite";

export interface Course {
  id: number;
  title: string;
  description: string;
  color: string;
  completion: number;
  icon: string;
}

export interface Lessons {
course_id: number;
title: string;
completion: number;
content: string;  
icon: string;
}

export interface Flashcards {
id: number;
lesson_id: number;
front: string;
image?: string;
back: string;
completion: number;
}

export interface Questions {
  id: number; 
  lessonId: number; 
  type: string;
  question: string; 
  image?: string; 
  options?: string[]; 
  answer: string; 
}

 export async function runDatabase() {
    try {
      const db = await SQLite.openDatabaseAsync('local.db');

      // Create the Tables
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS courses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          color TEXT,
          completion INTEGER,
          icon TEXT
        );

        CREATE TABLE IF NOT EXISTS lessons (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          course_id INTEGER NOT NULL,
          title TEXT,
          completion INTEGER,
          content TEXT,
          icon TEXT,
          FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS concepts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        definition TEXT,
        lesson_id INTEGER NOT NULL,
        parent TEXT,
        understanding INTEGER,
        easeFactor INTEGER,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id INTEGER NOT NULL,
        front TEXT,
        back TEXT,
        concept TEXT,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id INTEGER NOT NULL,
        type TEXT,
        question TEXT,
        image TEXT,
        options TEXT,
        answer TEXT,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
        );
 
      `);
      console.log("tables Created")

         await db.execAsync(`
         INSERT INTO courses (title, description, color, completion, icon)  
          VALUES  
              ("Physical Science Grade 11", "Dive into the fascinating world of physics and chemistry. This course covers mechanics, waves, chemical reactions, and more to prepare you for Grade 12 and beyond.", "#FFB785", 30, "🧪"),  
              ("Natural Science Grade 12", "Explore key concepts in life and physical sciences, from ecosystems and genetics to chemical changes and energy principles.", "#9584FF", 20, "🌿"),  
              ("Pharmacology 3", "Advance your understanding of drug interactions, therapeutic applications, and the principles of pharmacokinetics and pharmacodynamics.", "#4CAF50", 50, "💊"),  
              ("Grade 10 Mathematics", "Build a strong foundation in algebra, geometry, and trigonometry to excel in high school mathematics.", "#3498DB", 25, "➗"),  
              ("Grade 10 Science", "Discover the fundamental principles of physics, chemistry, and biology to develop critical thinking and problem-solving skills.", "#E67E22", 30, "🔬"),  
              ("Grade 12 Physical Science", "Master the principles of physics and chemistry with in-depth lessons on electromagnetism, organic chemistry, and more.", "#D35400", 40, "⚛️"),  
              ("Grade 12 Mathematics", "Tackle advanced calculus, statistics, and algebraic functions to prepare for university-level math.", "#9B59B6", 35, "📐");  
            `);
        console.log("Courses Added")

        await db.execAsync(`
        INSERT INTO lessons (course_id, title, completion, content, icon)  
VALUES  
    (1, "Electrostatics", 35, "## Coulomb's Law\nCoulomb's Law states that the magnitude of the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.\n\n### Equation:\n$$ F = k \\frac{q_1 q_2}{r^2} $$", "⚡"),  

    (1, "Vectors in Two Dimensions", 40, "## Vectors and Scalars\nVectors have both magnitude and direction, while scalars have only magnitude. Examples:\n- **Vector:** Velocity, force\n- **Scalar:** Temperature, mass", "↗️"),  

    (1, "Newton's Laws", 50, "## Newton’s Laws of Motion\n1. **First Law (Inertia):** An object remains at rest or in uniform motion unless acted upon by an external force.\n2. **Second Law (F = ma):** The force acting on an object is equal to its mass times its acceleration.\n3. **Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction.", "🍎"),  

    (2, "DNA", 30, "## DNA vs. RNA\n- **DNA** stores genetic information and is double-stranded.\n- **RNA** is single-stranded and helps in protein synthesis.", "🧬"),  

    (2, "Meiosis", 25, "## Meiosis\nMeiosis is the process by which gametes (sperm and egg cells) are produced, reducing the chromosome number by half.", "🧫"),  

    (2, "Reproduction", 20, "## Reproduction\nOrganisms reproduce either sexually or asexually to pass on genetic material to the next generation.", "👶"),  

    (3, "Sympathetic Nervous System", 35, "## Fight or Flight Response\nThe sympathetic nervous system prepares the body for action by increasing heart rate, dilating pupils, and redirecting blood flow to muscles.", "😬"),  

    (4, "Factorizing", 40, "## Factorization\nBreaking down expressions into products of simpler factors.\nExample:\n$$ x^2 - 5x + 6 = (x - 2)(x - 3) $$", "🔢" ),  

    (4, "Equations", 30, "## Solving Equations\nLearn how to solve linear and quadratic equations using algebraic methods.", "🟰");  

          `)
          console.log("lessons inserted")
  
  await db.execAsync(`
INSERT INTO concepts (lesson_id, title, definition, notes, parent, understanding, easeFactor)
VALUES  
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Seminal Vesicle", "A gland that produces a nutrient-rich fluid that provides energy for the sperm cells.", NULL, "Male reproductive system", 0, 1),
    
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Cowper’s Gland", "Produces mucus that helps with the movement of sperm cells.", NULL, "Male reproductive system", 0, 1),
    
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Scrotum", "Skin sac that protects the testes and holds them outside the body at a temperature 2°C below 37°C for sperm production.", NULL, "Male reproductive system", 0, 1),
    
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Testes", "Produces sperm cells and the hormone testosterone.", NULL, "Male reproductive system", 0, 1),
    
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Prostate Gland", "Produces an alkaline fluid that neutralizes vaginal acidity, protecting sperm cells.", NULL, "Male reproductive system", 0, 1),
    
    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Sperm Duct", "Transports sperm from the epididymis to the urethra.", NULL, "Male reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Urethra", "Transports semen and urine out of the body.", NULL, "Male reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Epididymis", "Sperm cells mature and are stored here.", NULL, "Male reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Testosterone", "A hormone produced by the testes.", "Functions of testosterone:\n1) Development of male secondary sexual characteristics.\n2) Stimulates maturation of sperm cells.", "Male reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Acrosome", "Contains enzymes to digest the wall of the egg cell for fertilization.", NULL, "Sperm cell", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Nucleus", "Contains 23 chromosomes, which carry genetic information from the father.", NULL, "Sperm cell", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Mitochondria", "Provide energy for swimming, enabling the sperm cell to reach the egg.", NULL, "Sperm cell", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Tail", "Used for swimming, allowing the sperm cell to move towards the egg.", NULL, "Sperm cell", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Fallopian Tube", "Connects the ovaries to the uterus, transports egg cells from the ovary; it is the site of fertilization.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Ovary", "Produces egg cells, secretes progesterone and oestrogen.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Uterus", "Carries the embryo and foetus during pregnancy.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Endometrium", "Inner lining of the uterus; place where the embryo implants and the placenta forms.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Cervix", "Lower, narrow part of the uterus. It stretches to allow the baby through during childbirth.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Vagina", "Receives the penis and semen during sexual intercourse; it is the passage through which the baby is born.", NULL, "Female reproductive system", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Puberty in Males", "Puberty in males is stimulated by testosterone and leads to physical and reproductive changes.", "Growth of male sex organs, start of sperm production, growth of pubic hair, facial hair, and body hair.", "Puberty", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Puberty in Females", "Puberty in females is stimulated by oestrogen and leads to physical and reproductive changes.", "Growth of female sex organs, start of the menstrual cycle and production of ova, growth of pubic hair, development of muscles, deepening of voice, growth and development of breasts, and widening of hips.", "Puberty", 0, 1),

    ((SELECT id FROM lessons WHERE title = "Reproduction" LIMIT 1), "Puberty", "Puberty is the period in humans in which they experience physical changes in their bodies in order to be capable of sexual reproduction.", NULL, NULL, 0, 1);

    `)

  console.log("concepts added")

  await db.execAsync(`
INSERT INTO flashcards (lesson_id, front, back, concept) VALUES  
    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Seminal Vesicle", "image": null, "text": "What is the function of the seminal vesicle?" }', 
      '{"title": "Seminal Vesicle", "image": null, "text": "A gland that produces a nutrient-rich fluid that provides energy for sperm cells." }',
      "Seminal Vesicle" 
    ), 

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Cowper’s Gland", "image": null, "text": "What does Cowper’s gland secrete?" }', 
      '{"title": "Cowper’s Gland", "image": null, "text": "Produces mucus that helps with the movement of sperm cells." }',
      "Cowper’s Gland"
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Testes", "image": null, "text": "What are the two main functions of the testes?" }', 
      '{"title": "Testes", "image": null, "text": "The testes produce sperm cells and the hormone testosterone." }',
      "Testes"
    ), 

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Fallopian Tube", "image": null, "text": "What is the function of the fallopian tube?" }', 
      '{"title": "Fallopian Tube", "image": null, "text": "Connects the ovaries to the uterus and is the site of fertilization." }',
      "Fallopian Tube" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Urethra", "image": null, "text": "What is the function of the urethra in males?" }', 
      '{"title": "Urethra", "image": null, "text": "Transports semen and urine out of the body." }',
      "Urethra"
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      '{"title": "Puberty", "image": null, "text": "What is puberty?" }', 
      '{"title": "Puberty", "image": null, "text": "The period in humans where they develop physical changes to be capable of sexual reproduction." }',
      "Puberty"
    );
    `)

    console.log("we got flashcards")

    await db.execAsync(`
      INSERT INTO questions (lesson_id, type, question, image, options, answer) VALUES  
    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "Which gland produces a nutrient-rich fluid for sperm cells?", 
      NULL, 
      '["Seminal Vesicle", "Cowper’s Gland", "Prostate Gland", "Scrotum"]', 
      "Seminal Vesicle" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "What is the function of the Cowper’s Gland?", 
      NULL, 
      '["Produces sperm cells", "Produces mucus for sperm movement", "Stores sperm cells", "Secretes testosterone"]', 
      "Produces mucus for sperm movement" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "Which organ carries the embryo during pregnancy?", 
      NULL, 
      '["Ovary", "Uterus", "Fallopian Tube", "Cervix"]', 
      "Uterus" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "Where does fertilization occur?", 
      NULL, 
      '["Ovary", "Uterus", "Fallopian Tube", "Vagina"]', 
      "Fallopian Tube" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "Which hormone stimulates puberty in males?", 
      NULL, 
      '["Oestrogen", "Progesterone", "Testosterone", "Insulin"]', 
      "Testosterone" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "true_false", 
      "The scrotum keeps the testes at a higher temperature than the body.", 
      NULL, 
      '["True", "False"]', 
      "False" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "true_false", 
      "The acrosome contains enzymes to digest the egg cell wall.", 
      NULL, 
      '["True", "False"]', 
      "True" 
    ),

    ( (SELECT id FROM lessons WHERE title = "Reproduction"), 
      "multiple_choice", 
      "Which structure in the sperm cell provides energy for movement?", 
      NULL, 
      '["Nucleus", "Tail", "Mitochondria", "Acrosome"]', 
      "Mitochondria" 
    );

      `)

      console.log("take a quiz")
    } catch (error) {
      console.error('Database error:', error);
    }
  }

export async function deleteDatabase() {

  try {
    const db = await SQLite.openDatabaseAsync('local.db');
    
    await db.execAsync(`
    DROP TABLE IF EXISTS courses;
    DROP TABLE IF EXISTS lessons;
    DROP TABLE IF EXISTS flashcards;
    DROP TABLE IF EXISTS questions;
      `)

    console.log("rabaya")
    
  } catch (error) {
   console.error('Database Error' ,error) 
  }
}