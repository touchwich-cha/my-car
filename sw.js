self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // ปล่อยผ่านให้ Vercel โหลดตามปกติ
});
