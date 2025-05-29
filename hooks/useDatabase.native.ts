import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_PREFIX = 'FUNDAL_';

async function getOrFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const cacheKey = `${CACHE_PREFIX}${key}`;
  try {
    const cached = await AsyncStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const data = await fetcher();
    await AsyncStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Data fetch/store error:', error);
    return fetcher(); // fallback to fetch if something fails
  }
}

export function useDatabase() {
  return {
    getCourses: async () => {
      return await getOrFetch('courses', async () => {
        const response = await fetch('https://dzoro--wzba2nos3a.expo.app/api/courses');
        const data = await response.json();
        return data.contents;
      });
    },

    getCourse: async (courseId: string | string[]) => {
      return await getOrFetch(`course_${courseId}`, async () => {
        const response = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/courses?id=${courseId}`);
        const data = await response.json();
        return data;
      });
    },

    getLessons: async (courseId: string | string[]) => {
      return await getOrFetch(`lessons_${courseId}`, async () => {
        const response = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/lessons?id=${courseId}`);
        const data = await response.json();
        return data.contents;
      });
    },

    getLesson: async (lessonId: string | string[], courseId: string | string[]) => {
      return await getOrFetch(`lesson_${courseId}_${lessonId}`, async () => {
        const response = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/lessons?id=${courseId}&lessonId=${lessonId}`);
        const data = await response.json();
        return data.contents;
      });
    },

    getFlashcards: async (lessonId: string | string[], courseId: string | string[]) => {
      return await getOrFetch(`flashcards_${courseId}_${lessonId}`, async () => {
        const response = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/flashcards?id=${lessonId}&lessonId=${courseId}`);
        const data = await response.json();
        return data.contents;
      });
    },

    getInitialData: async (courseIds: string) => {
      return await getOrFetch(`initialData_${courseIds}`, async () => {
        const flashcardsResponse = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/initialFlashcards?courses=${courseIds}`);
        const lessonsResponse = await fetch(`https://dzoro--wzba2nos3a.expo.app/api/initialLessons?courses=${courseIds}`);

        const flashcardsData = await flashcardsResponse.json();
        const lessonsData = await lessonsResponse.json();

        console.log('Initial data fetched:', flashcardsData, lessonsData);
        return { flashcards: flashcardsData, lessons: lessonsData };
      });
    

    }
  };
}

export async function resetAllCache() {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const cacheKeys = allKeys.filter((key) => key.startsWith(CACHE_PREFIX));

    for (const cacheKey of cacheKeys) {
      await AsyncStorage.removeItem(cacheKey);
    }

    console.log('All cache entries with prefix removed.');
  } catch (error) {
    console.error('Error resetting all cache:', error);
  }
}
