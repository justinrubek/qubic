export function get(url, options, timeout) {
  options = options || {};
  timeout = timeout || 5000;

  return try_timeout(fetch(url, options), timeout);
}

export function try_timeout(prom, timeout) {
  return Promise.race([
    prom,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timed out")), timeout)
    )
  ]);
}
