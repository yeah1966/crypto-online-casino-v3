'use client';

export default function AccessDenied() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-yellow-900">
      <div className="bg-black/80 rounded-2xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center">
        <div className="mb-6 bg-black rounded-full p-2 shadow-lg">
          <Image
            src="/images/mascots/access-denied.png"
            alt="Mascot geo-blocked"
            style={{ width: 200, height: 'auto' }}
          />
        </div>
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 text-center">
          Access Denied 🚫
        </h1>
        <p className="text-white/80 text-lg mb-8 text-center">
          Sorry, due to local regulations this page is not accessible from your region.
        </p>
        <a
          href="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-md transition"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}
