# ⚙️ devTinder Backend

This is the REST API and WebSocket server powering devTinder. It handles authentication, profile management, and real-time socket connections.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose
* **Communication:** Socket.io
* **Security:** JWT (JSON Web Tokens) & BCrypt

## 📡 API Endpoints (Brief)
* **Auth:** `/login`, `/signup`, `/logout`
* **Profile:** `/profile/view`, `/profile/edit`, `/profile/password`
* **Requests:** `/request/send/:status/:userId`, `/request/review/:status/:requestId`
* **User:** `/user/connections`, `/user/requests`, `/user/feed`
* **Chat:** `/chat/:targetUserId`
