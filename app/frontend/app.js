async function loadStatus() {
  const apiRoot = document.getElementById("api-root");
  const healthStatus = document.getElementById("health-status");

  try {
    const [rootResponse, healthResponse] = await Promise.all([
      fetch("/"),
      fetch("/healthz")
    ]);

    const rootText = await rootResponse.text();
    const health = await healthResponse.json();

    apiRoot.textContent = rootText;
    healthStatus.textContent = `${health.status} (${health.version})`;
  } catch (error) {
    apiRoot.textContent = "Unable to reach API";
    healthStatus.textContent = error.message;
  }
}

loadStatus();

