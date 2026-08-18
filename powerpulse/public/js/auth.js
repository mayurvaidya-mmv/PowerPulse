// public/js/auth.js — Client-side login/register handling

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const errorEl = document.getElementById("errorMessage");
    const successEl = document.getElementById("successMessage");

    function showError(msg) {
        if (!errorEl) return;
        errorEl.textContent = msg;
        errorEl.style.display = "block";
        if (successEl) successEl.style.display = "none";
    }

    function showSuccess(msg) {
        if (!successEl) return;
        successEl.textContent = msg;
        successEl.style.display = "block";
        if (errorEl) errorEl.style.display = "none";
    }

    function setLoading(btn, loading) {
        if (!btn) return;
        const text = btn.querySelector(".btn-text");
        const loader = btn.querySelector(".btn-loader");
        if (text) text.style.display = loading ? "none" : "inline";
        if (loader) loader.style.display = loading ? "inline" : "none";
        btn.disabled = loading;
    }

    // ─── Login ───
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = document.getElementById("loginBtn");
            setLoading(btn, true);

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const res = await fetch(window.API_BASE_URL + "/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const data = await res.json();

                if (!res.ok) {
                    showError(data.error || "Login failed");
                    setLoading(btn, false);
                    return;
                }

                // Redirect to dashboard on success
                window.location.href = "/dashboard";
            } catch (err) {
                showError("Network error. Please try again.");
                setLoading(btn, false);
            }
        });
    }

    // ─── Register ───
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = document.getElementById("registerBtn");
            setLoading(btn, true);

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const role = document.getElementById("role").value;

            if (password !== confirmPassword) {
                showError("Passwords do not match");
                setLoading(btn, false);
                return;
            }

            if (password.length < 6) {
                showError("Password must be at least 6 characters");
                setLoading(btn, false);
                return;
            }

            try {
                const res = await fetch(window.API_BASE_URL + "/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password, role }),
                });

                const data = await res.json();

                if (!res.ok) {
                    showError(data.error || "Registration failed");
                    setLoading(btn, false);
                    return;
                }

                showSuccess("Account created! Redirecting to login...");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 1500);
            } catch (err) {
                showError("Network error. Please try again.");
                setLoading(btn, false);
            }
        });
    }
});
