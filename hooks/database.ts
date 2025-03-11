import * as SQLite from 'expo-sqlite';

// async function initializeDatabase() {

//     const db = await SQLite.openDatabaseAsync('local.db');
    
//     const createTable = await db.execAsync(`
//       PRAGMA journal_mode=WAL;
//       CREATE TABLE IF NOT EXISTS Courses (
//       id INTEGER PRIMARY KEY AUTOINCREMENT, 
//       Title TEXT, 
//     --   Lessons we should have a separate table for lessons and implement a foreign key here,
//       color_primary TEXT,
//       color_secondary TEXT,
//       );
//     `);
    
//     console.log(createTable);
//     console.log("Courses table created");
    
//     const adding = await db.runAsync('INSERT INTO Courses (Title, color_primary, color_secondary) VALUES (?, ?, ?)', ['Pharmaceurics 3', '#FF0000', '#00FF00']);
//     console.log(adding.lastInsertRowId, adding.changes);


//     const courses = await db.getAllAsync('SELECT * FROM Courses');
//     for (let i = 0; i < courses.length; i++) {
//         console.log(courses[i]);
//     }

//     console.log(flashcards);
//     console.log("Flashcards table created");
// }

export async function getCourses() {

    // Initialize Database
    const db = await SQLite.openDatabaseAsync('local.db');

    // Create Courses Table
    const createCoursesTable = await db.execAsync(`
        PRAGMA journal_mode=WAL;
        CREATE TABLE IF NOT EXISTS Courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        Title TEXT, 
      --   Lessons we should have a separate table for lessons and implement a foreign key here,
        color_primary TEXT,
        color_secondary TEXT,
        );
      `);
    
    // Add sample data
    const adding = await db.runAsync('INSERT INTO Courses (Title, color_primary, color_secondary) VALUES (?, ?, ?)', ['Pharmaceurics 3', '#FF0000', '#00FF00']);

    // Get all courses
    const courses = await db.getAllAsync('SELECT * FROM Courses');

    console.log(courses);
    console.log("Courses table created");


} 

