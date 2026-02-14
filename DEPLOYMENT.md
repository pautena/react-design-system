# Storybook MCP Deployment Guide

This document describes the Docker-based deployment workflow for the Storybook MCP server.

## Architecture

- **GitHub Actions**: Builds Docker images on push to `main`
- **GHCR**: Stores Docker images at `ghcr.io/pautena/react-design-system-mcp`
- **Portainer**: Manages deployment on your server
- **Traefik**: Provides HTTPS reverse proxy
- **Domain**: `https://react-design-system.pautena.com/`

## Deployment Workflow

### 1. Automatic Image Build

Every push to `main` branch triggers GitHub Actions to:
1. Build Docker image
2. Push to GitHub Container Registry
3. Tag as `latest` and `main-<sha>`

**View builds:** https://github.com/pautena/react-design-system/actions

**View images:** https://github.com/pautena/react-design-system/pkgs/container/react-design-system-mcp

### 2. Docker Compose Configuration

The `docker-compose.yml` file is maintained in your deployment repository (not in this repo).

**Example docker-compose.yml:**

```yaml
version: '3.8'

services:
  storybook-mcp:
    image: ghcr.io/pautena/react-design-system-mcp:latest
    container_name: react-design-system-mcp
    restart: unless-stopped
    expose:
      - "6006"
    environment:
      - NODE_ENV=production
      - PORT=6006
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:6006', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    labels:
      # Enable Traefik
      - "traefik.enable=true"
      
      # HTTP Router
      - "traefik.http.routers.storybook-mcp.rule=Host(`react-design-system.pautena.com`)"
      - "traefik.http.routers.storybook-mcp.entrypoints=websecure"
      - "traefik.http.routers.storybook-mcp.tls=true"
      - "traefik.http.routers.storybook-mcp.tls.certresolver=letsencrypt"
      
      # Service
      - "traefik.http.services.storybook-mcp.loadbalancer.server.port=6006"
      
      # CORS Headers for MCP
      - "traefik.http.middlewares.storybook-cors.headers.accesscontrolallowmethods=GET,POST,OPTIONS"
      - "traefik.http.middlewares.storybook-cors.headers.accesscontrolalloworiginlist=*"
      - "traefik.http.middlewares.storybook-cors.headers.accesscontrolallowheaders=DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,X-MCP-Toolsets"
      - "traefik.http.routers.storybook-mcp.middlewares=storybook-cors"
      
    networks:
      - traefik-public

networks:
  traefik-public:
    external: true
```

**Note:** Adjust Traefik labels according to your setup:
- **Network name:** Change `traefik-public` if different
- **Entrypoint:** Change `websecure` if different
- **Cert resolver:** Change `letsencrypt` if different

### 3. Deploy via Portainer

#### Initial Deployment (Using Deployment Repository)

1. **Create Stack in Portainer:**
   - Navigate to **Stacks** → **Add Stack**
   - Name: `react-design-system-mcp`
   - Build method: **Repository** or **Web editor**
   - If using repository: Point to your deployment repo containing docker-compose.yml
   - If using web editor: Paste the docker-compose.yml content above
   - Click **Deploy the stack**

2. **Verify Deployment:**
   ```bash
   docker ps | grep react-design-system
   docker logs react-design-system-mcp
   ```

3. **Test Access:**
   - Storybook UI: https://react-design-system.pautena.com/
   - MCP Endpoint: https://react-design-system.pautena.com/mcp

#### Update Deployment (When New Image Available)

1. **In Portainer:**
   - Go to **Stacks** → `react-design-system-mcp`
   - Click **Pull and redeploy**
   - OR click **Editor** → **Update the stack**

2. **Via SSH (Alternative):**
   ```bash
   docker pull ghcr.io/pautena/react-design-system-mcp:latest
   docker compose -f /path/to/docker-compose.yml up -d
   ```

## Manual Deployment (Without Portainer)

### SSH into Server

```bash
ssh user@your-server

# Navigate to your deployment directory with docker-compose.yml
cd /path/to/deployment

# Pull latest image
docker compose pull

# Deploy
docker compose up -d

# Check status
docker compose ps
docker compose logs -f storybook-mcp
```

## Verify Deployment

### 1. Container Health
```bash
docker ps
# Should show "healthy" status for react-design-system-mcp
```

### 2. Storybook UI
```bash
curl -I https://react-design-system.pautena.com
# Should return HTTP 200
```

### 3. MCP Endpoint
```bash
curl -X POST https://react-design-system.pautena.com/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
# Should return JSON with available MCP tools
```

## Using the MCP Server

### Connect AI Agents

#### Claude Code
```bash
claude mcp add pautena-design-system \
  --transport http \
  https://react-design-system.pautena.com/mcp \
  --scope project
```

#### GitHub Copilot
Add to `.github/copilot-mcp.json`:
```json
{
  "mcp_servers": {
    "pautena-design-system": {
      "url": "https://react-design-system.pautena.com/mcp",
      "type": "http"
    }
  }
}
```

#### Other MCP Clients
- **Type:** HTTP
- **URL:** `https://react-design-system.pautena.com/mcp`

## Troubleshooting

### Image Pull Fails (Private Registry)

If the image is private, authenticate Portainer/Docker with GHCR:

```bash
# Create GitHub Personal Access Token with read:packages scope
# https://github.com/settings/tokens

# Login to GHCR
docker login ghcr.io -u <your-github-username>
# Password: <your-PAT>
```

### Container Won't Start
```bash
docker logs react-design-system-mcp
# Check for errors
```

### Traefik Not Routing
- Verify DNS: `react-design-system.pautena.com` resolves to server IP
- Check Traefik labels in `docker-compose.yml`
- Verify container is on `traefik-public` network:
  ```bash
  docker network inspect traefik-public
  ```

### MCP Endpoint Not Responding
```bash
# Test from inside container
docker exec -it react-design-system-mcp sh
wget -qO- http://localhost:6006/mcp
```

## Resource Usage

- **CPU:** ~0.1-0.5 cores (idle to active)
- **RAM:** ~200-400MB
- **Disk:** ~500-600MB (image + cache)
- **Image Size:** ~400-500MB

## Maintenance

### View Logs
```bash
docker logs -f react-design-system-mcp
```

### Restart Container
```bash
docker restart react-design-system-mcp
```

### Update to Latest Image
```bash
docker pull ghcr.io/pautena/react-design-system-mcp:latest
docker compose up -d
```

### Clean Up Old Images
```bash
docker image prune -a
```

## Security

- Container runs as non-root user (nodejs:1001)
- Public access (no authentication required)
- CORS enabled for MCP compatibility
- HTTPS enforced via Traefik + Let's Encrypt

## Available MCP Tools

Once deployed, the following MCP tools are available:

1. **get_ui_building_instructions** - Guidelines for UI development in this project
2. **preview-stories** - Get URLs to specific stories for visual verification
3. **list-all-documentation** - List all available components and docs
4. **get-documentation** - Get detailed documentation for specific components

Test these tools by connecting your AI agent to the MCP endpoint.
