import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://urkxjkoluoqekmnhgxnw.supabase.co';

// import * as SQLite from "expo-sqlite";
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVya3hqa29sdW9xZWttbmhneG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjI5MzAsImV4cCI6MjA1ODI5ODkzMH0.GtqtWKhxY6yUy02eHzlTZQcXtxZIweLEeLLSzVpApBQ';


export async function syncOnline() {
    try {
      const db = await SQLite.openDatabaseAsync('local.db');  
      const supabase = createClient(supabaseUrl, supabaseKey);
  
 // Create Tables  
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
          lesson_id INTEGER NOT NULL,
          title TEXT,
          definition TEXT,
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
          );`
        )
    
  // Get Courses 
    let { data: courses, error: courseError } = await supabase.from('courses').select('*');
    if (courseError) throw new Error(`Courses fetch failed: ${courseError.message}`);

   const courseValues = courses?.map(course => 
              `("${course.title}", "${course.description}", "${course.color}", "${course.completion}", "${course.icon}")`
          ).join(",\n");
   
   await db.execAsync(`INSERT INTO courses (title, description, color, completion, icon)  VALUES  ${courseValues};`);
   console.log("Courses Added");
  
  // Get Concepts    
    let { data: concepts, error: conceptError } = await supabase.from('concepts').select('*');
    if (conceptError) throw new Error(`Concepts fetch failed: ${conceptError.message}`);

   const conceptValues = concepts?.map(concept => 
              `(${concept.lesson_id}, "${concept.title}", "${concept.definition}", "${concept.parent}", ${concept.understanding}, ${concept.easefactor})`
          ).join(",\n");
   
   await db.execAsync(`INSERT INTO concepts (lesson_id, title, definition, parent, understanding, easeFactor)  VALUES  ${conceptValues};`);
   console.log("Concepts Added");

  //  Get Lessons
  let { data: lessons, error: lessonError} = await supabase.from('lessons').select('*')
  if (lessonError) throw new Error(`Lesson fetch failed: ${lessonError.message}`)
  
  const lessonValues = lessons?.map(lesson => 
     `(${lesson.course_id}, "${lesson.title}", "${lesson.completion}", "${lesson.content}", "${lesson.icon}")`
          ).join(",\n");
  
  await db.execAsync(`INSERT INTO lessons (course_id, title, completion, content, icon)  VALUES ${lessonValues};`)
  console.log("lessons added")

  // Get Flashcards
  let {data: flashcards, error: flashcardsError} = await supabase.from('flashcards').select('*')
  if (flashcardsError) throw new Error(`Flascards fetch failed: ${flashcardsError.message}` )
  
  const flashcardsValues = flashcards?.map(flashcard => 
     `(${flashcard.lesson_id}, '${flashcard.front}', '${flashcard.back}', "${flashcard.concept}")`
          ).join(",\n");
  
  await db.execAsync(`INSERT INTO flashcards (lesson_id, front, back, concept) VALUES ${flashcardsValues};`)
  console.log("Flashcards Added")
  
 // Get Quizes   
  let {data: questions, error: questionsError} = await supabase.from('questions').select('*')
  if (questionsError) throw new Error(`Flascards fetch failed: ${questionsError.message}` )
  
  const questionsValues = questions?.map(question => 
     `(${question.lesson_id}, '${question.type}', '${question.question}', "${question.image}", "${question.options}", "${question.answer}")`
          ).join(",\n");
  
  await db.execAsync(`INSERT INTO questions (lesson_id, type, question, image, options, answer) VALUES ${questionsValues};`)
  console.log("Questions Added")
  


    } catch (error) {
      console.error("Supabase Error", error)
    }
  }