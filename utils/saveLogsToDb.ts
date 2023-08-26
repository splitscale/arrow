export const serviceUrl = 'http://192.168.68.118:6060/collections/logs'; // Update with the actual PeachPlum service URL
export const logFileName = `debug-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`;

export const url = serviceUrl + '/' + logFileName;

interface Log {
  timestamp: string;
  message: any;
}

export async function saveLogsToDb(msg: any) {
  console.info('Saving in:', serviceUrl);
  const logsArr: Log[] = [];

  try {
    const res1 = await fetch(url, {
      method: 'GET',
    });

    if (res1.ok) {
      const logsRes = (await res1.json()) as { logs: Log[] };
      logsArr.push(...logsRes.logs);
    }

    const newLog: Log = {
      timestamp: new Date().toISOString(),
      message: msg,
    };

    logsArr.push(newLog);

    const body = JSON.stringify({
      logs: logsArr,
    });

    console.log(body);

    const res2 = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    if (!res2.ok) {
      throw new Error(`Request failed with status: ${res2.status}`);
    }

    console.info(
      'Logs saved to PeachPlum service with id:',
      logFileName,
      '.json'
    );
  } catch (error) {
    console.error('Error saving logs to PeachPlum service:', error);
  }
}
