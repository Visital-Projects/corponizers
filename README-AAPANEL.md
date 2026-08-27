# AAPanel Deployment Guide

## System Requirements
- Node.js 22 LTS recommended
- aaPanel Node.js Project
- Nginx reverse proxy

## Application Directory Example
`/www/wwwroot/corponizers/corponizers-production`

## Installation
Navigate to your extracted production directory and install dependencies:
```bash
cd /www/wwwroot/corponizers/corponizers-production
npm ci --omit=dev --legacy-peer-deps
```

## Environment Configuration
```bash
cp .env.example .env.local
```
*Note: Production values must be entered into `.env.local` securely through aaPanel/environment configuration.*

## Application Port
**3045**

## Start Command
```bash
npm start
```
*Equivalent command:* `npm start -- --port 3045`
*Manual command:* `PORT=3045 npm start`

## Nohup
For manual background execution:
```bash
nohup env PORT=3045 npm start > corponizers.log 2>&1 &
```
*Note: It is highly recommended to allow aaPanel to manage the Node process lifecycle rather than manually using nohup.*

## aaPanel Node.js Project
- **Application port:** 3045
- **Start command:** `npm start`

## Reverse Proxy
Configure Nginx or your reverse proxy to forward traffic to:
`127.0.0.1:3045`

## Verification
Test that the local process is answering:
```bash
curl -I http://127.0.0.1:3045
```

Verify these routes:
- `/`
- `/about`
- `/solutions`
- `/industries`
- `/insights`
- `/careers`
- `/contact`
- `/admin`

To stop/restart the Node application, simply restart the Node project within aaPanel (or kill the `nohup` PID manually if not using aaPanel's manager).
