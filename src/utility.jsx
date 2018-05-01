const post_default_options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export function get(url, options = {}, timeout = 5000) {
  options.method = "GET";
  return try_timeout(fetch(url, options), timeout);
}

export function post(
  url,
  payload,
  options = post_default_options,
  timeout = 5000
) {
  options.body = JSON.stringify(payload);
  options.method = "POST";

  let prom = fetch(url, options);

  return try_timeout(prom, timeout);
}

export function try_timeout(prom, timeout) {
  return Promise.race([
    prom,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timed out")), timeout)
    )
  ]);
}
