import { url } from './saveLogsToDb';

export async function getAllLogsFromDb() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const logsData = await response.json();
    return logsData;
  } catch (error) {
    console.error('Error fetching logs data from PeachPlum service:', error);
    return null;
  }
}
