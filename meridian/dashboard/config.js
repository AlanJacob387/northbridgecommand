const CONFIG = {
  live_room: "318",
  poll_interval_ms: 2000,
  ngrok_url: "",
};

// Auto-fetch ngrok URL from GitHub — no manual update needed
(async function () {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/YOURUSER/YOURREPO/main/meridian/ngrok.json?t=" + Date.now()
    );
    const d = await r.json();
    if (d.url) CONFIG.ngrok_url = d.url;
  } catch (_) {
    // no tunnel active — dashboard runs in demo mode
  }
})();
