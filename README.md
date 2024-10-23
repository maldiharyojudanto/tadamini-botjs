# tadamini-botjs

tada mini bot multiple account https://t.me/TADA_Ride_Bot

<img width="510" alt="Code_1BDWmCyIsG" src="https://github.com/user-attachments/assets/74fff813-58d3-4ec3-ae84-ca56199e92eb">

## Features
- Auto create token
- Auto complete task/mission (execpt telegram task)

## Requirement
- Node.js

## How to run
1. Clone/download this repository
2. Extract and go to folder
3. Setting .env file
4. Open cmd file folder
5. > npm install
6. > node index
7. Fill query.txt

## Note : query_id/user expires quickly**

## How to get query_id?
1. Open telegram web/desktop
2. Go to Settings - Advanced - Experimental settings - Enable webview inspecting
3. Open bot https://t.me/TADA_Ride_Bot
4. Press F12 or right click then select inspect element
5. Reload Page (dot three button)
6. Go to Network tab - Fetch/XHR - Select login - Click Payload  - copy initData value start with ```query_id=``` or ```user=```
7. Separate query_id= or user= with the newline (for multiple account)
