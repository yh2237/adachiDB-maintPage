const ORIGIN_URL = "https://adachi.2237yh.net";
const REDIRECT_URL = "https://adachi.2237yh.net";
const INTERVAL = 2000;

async function check() {
    try {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 2000);
        await fetch(ORIGIN_URL, { method: "HEAD", mode: "no-cors", signal: controller.signal });
        window.location.href = REDIRECT_URL;
    } catch (e) {
        setTimeout(check, INTERVAL);
    }
}

check();
