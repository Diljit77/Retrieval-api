# TOTLE Backend Developer Internship – Round 2 Submission

##  Task Overview

Build a Node.js/Express API endpoint to retrieve topics from a JSON file with search and sort functionality, simulating TOTLE's `/api/catalogue/` endpoint.

---

##  Features

- Endpoint: `GET /api/topics?search=<query>`
- Case-insensitive search on topic names
- Error handling for missing queries and file issues
- Optional sort functionality:
  - `sort=name` → sort by topic name (ascending)
  - `sort=category` → sort by category (ascending)

---


---

##  How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/Diljit77/Retrieval-api.git
cd retrieval-api
```
### 2. Install Dependencies
```bash
npm install 
```
### 3. Start the Server
```bash
node app.js
```
##  API Usage
GET /api/topics?search=node
→ Returns all topics that include "node" in the name (case-insensitive)

GET /api/topics?search=a&sort=name
→ Returns filtered topics sorted by name (A–Z)

GET /api/topics?search=a&sort=category
→ Returns filtered topics sorted by category (A–Z)

GET /api/topics
→ 400 Bad Request (search query is required)

## Demo Video
Watch this 2-minute video where I explain:
- What the project does
- Folder and file structure
- How search and sort work
- How to test using Postman

👉 https://drive.google.com/drive/folders/1U6nBiLms6HzFu-btKIgE3D0BhaBrOSJc?usp=sharing



## 🔗 GitHub Repository

```text
All project files and source code are available at:

👉 https://github.com/Diljit77/Retrieval-api.git

```
