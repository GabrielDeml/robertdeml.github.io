/* ============================================================
 * version — Single source of truth for the app version.
 *
 * Auto-bumped during CI deploy (`.github/workflows/deploy.yml`).
 * Bump MAJOR or MINOR manually for significant releases.
 * ============================================================ */

export const VERSION = "1.0.19";

function showToast(msg: string) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.id = "toast";
  el.textContent = msg;
  el.style.cssText = "position:fixed;bottom:48px;left:50%;transform:translateX(-50%);z-index:50;background:#333;color:#fff;padding:8px 16px;border-radius:6px;font-family:sans-serif;font-size:13px;pointer-events:none;transition:opacity .2s;";
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 200); }, 2000);
}

/** Fetches the compiled version.js and compares it to the
 *  currently loaded version.  Shows a toast while fetching,
 *  then either prompts to reload (if different) or reports
 *  that the app is up to date. */
export function checkVersion(): void {
  showToast("Checking for updates\u2026");
  fetch("version.js")
    .then((r) => r.text())
    .then((text) => {
      const m = text.match(/VERSION = "(\d+\.\d+\.\d+)"/);
      if (m && m[1] !== VERSION) {
        if (confirm(`New version available (v${m[1]}). Reload?`)) {
          window.location.reload();
        }
      } else {
        showToast(`Up to date (v${VERSION})`);
      }
    })
    .catch(() => {
      showToast("Could not check for updates");
    });
}
