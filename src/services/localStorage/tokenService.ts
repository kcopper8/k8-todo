export const loadToken = async (): Promise<string | undefined> => {
  return globalThis.localStorage.token;
};

export const saveToken = async (token: string) => {
  globalThis.localStorage.token = token;
};

export const loadHost = async (): Promise<string | undefined> => {
  return globalThis.localStorage.host;
};

export const saveHost = async (host: string) => {
  globalThis.localStorage.host = host;
};
