export default {
    async fetch(request) {
        const ORIGIN_URL = "https://adachi.2237yh.net";
        const MAINTENANCE_URL = "https://maint.2237yh.net";

        try {
            const res = await fetch(ORIGIN_URL, {
                cf: { connectTimeout: 3 },
            });
            // if (!res.ok) throw new Error("Origin error");
            return res;
        } catch (err) {
            return Response.redirect(MAINTENANCE_URL, 302);
        }
    }
}