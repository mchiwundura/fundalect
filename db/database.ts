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

        CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id INTEGER NOT NULL,
        front TEXT,
        image TEXT,
        back TEXT,
        completion INTEGER,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id INTEGER NOT NULL,
        type TEXT,
        question TEXT,
        image TEXT,
        options TEXT
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