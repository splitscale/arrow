import { url } from './saveLogsToDb';

export async function deleteLogFromDb() {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    console.log(response.body);
  } catch (error) {
    console.error('Error fetching logs data from PeachPlum service:', error);
    return;
  }
}
