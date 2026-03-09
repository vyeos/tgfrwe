type CacheEntry<T> = {
  value: T;
  expiresAt: number;
};

const cache = new Map<string, CacheEntry<unknown>>();

const TTL_MS = 1000 * 60 * 5; // 5 minutes

export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
): Promise<T> {
  const now = Date.now();
  const entry = cache.get(key) as CacheEntry<T> | undefined;

  if (entry && entry.expiresAt > now) {
    return entry.value;
  }

  const value = await fetcher();
  cache.set(key, { value, expiresAt: now + TTL_MS });
  return value;
}

export function clearCache(key?: string) {
  if (key) {
    cache.delete(key);
    return;
  }
  cache.clear();
}
