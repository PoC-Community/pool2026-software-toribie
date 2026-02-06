# 🌐 Day 05 - Web Track: Full-Stack & DevOps

Welcome to Day 5 of the Software Pool 2026! 🚀

Last day before the rush! Today, you'll learn to connect your frontend and backend, containerize your applications with Docker, set up CI/CD with GitHub Actions, and deploy everything to production.

## Day Purposes

✔️ Connect React frontend to backend API

✔️ Containerize applications with Docker

✔️ Orchestrate services with Docker Compose

✔️ Set up CI/CD pipelines with GitHub Actions

✔️ Deploy full-stack applications to production

✔️ Understand DevOps best practices

## Introduction

### Why DevOps?

Now that you can build frontend and backend applications, it's time to learn how to:
- **Deploy applications** - Get your apps online and accessible
- **Automate workflows** - Save time with CI/CD pipelines
- **Containerize** - Package applications for consistent deployment
- **Monitor and maintain** - Keep your applications running smoothly

### What You'll Learn Today

- **Full-Stack Integration** - Connect React to your backend API
- **Docker** - Containerize your applications
- **Docker Compose** - Orchestrate multi-container applications
- **GitHub Actions** - Automate testing and deployment
- **Production Deployment** - Deploy to cloud platforms
- **DevOps Practices** - Best practices for modern development

## Warm Up

Before starting, make sure you're comfortable with:

1. **React Fundamentals** (from Day 2):
   - Components and JSX
   - Props and state
   - useState and useEffect hooks
   - Event handling

2. **Backend Knowledge** (from Day 3):
   - REST APIs
   - HTTP methods (GET, POST, PUT, DELETE)
   - Express.js or similar framework
   - API endpoints

3. **Database Knowledge** (from Day 4):
   - Database connections
   - CRUD operations via API

Here are useful links:

- [React Router Documentation](https://reactrouter.com/en/main)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Docker Compose](https://docs.docker.com/compose/)

## Step 0 - Setup

📑 **Description:**

Set up your project for full-stack development. Prepare both frontend and backend projects.

📌 **Tasks:**

1. **Ensure you have both projects ready:**
   - Frontend React app (from Day 2)
   - Backend API (from Day 3)
   - Both should be in separate folders or a monorepo

2. **Install Docker** (if not already installed):
   - **Linux**: `sudo apt-get update && sudo apt-get install docker.io docker-compose`
   - **macOS**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - **Windows**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

3. **Verify Docker installation:**
```bash
docker --version
docker-compose --version
```

4. **Install React Router** (if not already installed):
```bash
cd frontend
npm install react-router-dom axios
```

5. **Project structure** - Organize your project:
```
my-fullstack-app/
  frontend/
    src/
    Dockerfile
    package.json
  backend/
    src/
    Dockerfile
    package.json
  docker-compose.yml
  .github/
    workflows/
      ci.yml
```

📚 **Documentation:**

- [Docker Installation](https://docs.docker.com/get-docker/)
- [React Router Installation](https://reactrouter.com/en/main/start/installation)

✔️ **Validation:**

- Docker should be installed and running
- Both frontend and backend projects should be ready
- You should be able to run `docker --version` successfully

## Step 1 - React Router Basics

📑 **Description:**

Set up basic routing in your React application. This is essential for multi-page applications.

📌 **What you need to do:**

### Step 1.1 - Set up React Router

Set up React Router in your application:
- Install `react-router-dom`
- Wrap your app with `BrowserRouter`
- Create routes with `Routes` and `Route`
- Use `Link` component for navigation

### Step 1.2 - Create Basic Pages

Create a simple multi-page application:
- **Home page** (`/`) - Welcome page
- **Todos page** (`/todos`) - Todo list (will connect to backend)
- **About page** (`/about`) - About information

Create separate components for each page in a `pages/` folder.

### Step 1.3 - Navigation Component

Create a navigation component:
- Navigation bar with links to all pages
- Use `Link` components for navigation
- Highlight active route

**What to understand:**
- `BrowserRouter` enables routing
- `Routes` and `Route` define routes
- `Link` for navigation
- `useNavigate` hook for programmatic navigation

**Constraints to follow:**
- Use TypeScript for route types
- Organize pages in separate files
- Create a reusable navigation component

📚 **Documentation:**

- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

✔️ **Validation:**

You should be able to:
- ✅ Navigate between different pages
- ✅ See URL changes in the browser
- ✅ Use browser back/forward buttons

## Step 2 - Context API for Global State

📑 **Description:**

Learn to manage global state with Context API. This will be useful for managing authentication and API state.

📌 **What you need to do:**

### Step 2.1 - Create an API Context

Create an API context:
- Store API base URL
- Provide API configuration globally
- Handle API errors globally

### Step 2.2 - Create an Auth Context

Create an authentication context:
- User state (logged in/out)
- Login/logout functions
- Token management
- Provide auth state globally

**What to understand:**
- `createContext` - Create a context
- `Provider` - Provide value to children
- `useContext` - Consume context value
- When to use Context vs local state

**Constraints to follow:**
- Create separate context files
- Use TypeScript for context types
- Provide default values

📚 **Documentation:**

- [Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [useContext Hook](https://react.dev/reference/react/useContext)

✔️ **Validation:**

You should be able to:
- ✅ Create and use Context
- ✅ Share state across components
- ✅ Avoid prop drilling

## Step 3 - Connect Frontend to Backend API

📑 **Description:**

Connect your React frontend to your backend API. This is the foundation of full-stack development.

📌 **What you need to do:**

### Step 3.1 - Set up API Integration

**What you need to do:**

1. **Create an API utility file** (`utils/api.ts` or `services/api.ts`):
   - Import `axios` (or use native `fetch`)
   - Create an axios instance with `axios.create()`
   - Define your API base URL
   - Use an environment variable for the URL (e.g., `VITE_API_URL`)
   - Configure default headers (`Content-Type: application/json`)
   - Export this instance to use it everywhere

2. **Manage environment variables**:
   - Create a `.env` file at the root of your frontend project
   - Add `VITE_API_URL=http://localhost:3000` (or your backend URL)
   - In Vite, variables must start with `VITE_` to be accessible
   - Use `import.meta.env.VITE_API_URL` to access it in your code

3. **Configure CORS on the backend**:
   - Make sure your backend allows requests from your frontend
   - Configure appropriate CORS headers in your backend

**Why do this:**
- Centralizing API configuration avoids duplication
- Environment variables allow changing the URL based on environment (dev/prod)
- A configured axios instance can be reused everywhere

### Step 3.2 - Create API Service Functions

**What you need to do:**

1. **Create service functions** in a `services/` folder:
   - Create one file per resource (e.g., `todoService.ts`, `userService.ts`)
   - For each API endpoint, create an async function
   - Use the API instance created previously
   - Handle errors with try/catch

2. **Create CRUD functions**:
   - `getTodos()`: Use `api.get('/todos')` to fetch all todos
   - `createTodo(todo)`: Use `api.post('/todos', todo)` to create
   - `updateTodo(id, todo)`: Use `api.put('/todos/:id', todo)` to update
   - `deleteTodo(id)`: Use `api.delete('/todos/:id')` to delete
   - Return `response.data` to extract the data

3. **Handle authentication**:
   - If you use JWT tokens, add them to headers
   - Create an axios interceptor to automatically add the token
   - Store the token in localStorage or in your authentication context

**Why do this:**
- Separating API logic from the rest of the code makes the application more maintainable
- Reuse these functions in multiple components
- Facilitate testing and future modifications

### Step 3.3 - Connect Todo App to Backend

Connect your todo app to your backend:
- Replace `localStorage` with API calls
- Fetch todos from API on mount using `useEffect`
- Create todos via POST request
- Update todos via PUT request
- Delete todos via DELETE request
- Handle loading and error states

### Step 3.4 - Handle Authentication

Integrate authentication:
- Create login/register pages
- Store JWT token in localStorage or context
- Add token to API requests (Authorization header)
- Handle token expiration
- Redirect to login when unauthorized

### Step 3.5 - Error Handling and Loading States

Improve user experience:
- Show loading spinners during API calls
- Display error messages for failed requests
- Handle network errors gracefully
- Provide retry mechanisms
- Show success notifications

**What to understand:**
- API integration patterns
- CORS configuration
- Environment variables
- Loading and error states
- Token management
- Async operations in React

**Constraints to follow:**
- Use TypeScript for API types
- Handle all error cases
- Show loading indicators
- Provide user feedback
- Organize API calls in service files
- Use environment variables for API URLs

📚 **Documentation:**

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Axios](https://axios-http.com/docs/intro)
- [React Data Fetching](https://react.dev/learn/synchronizing-with-effects#fetching-data)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

✔️ **Validation:**

You should be able to:
- ✅ Fetch data from your backend API
- ✅ Create, update, and delete resources
- ✅ Handle loading and error states
- ✅ Connect React to your backend successfully
- ✅ Use environment variables for configuration

## Step 4 - Docker: Containerize Your Applications

📑 **Description:**

Learn to containerize your applications with Docker. This ensures consistent environments across development, testing, and production.

📌 **What you need to do:**

### Step 4.1 - Understand Docker Basics

Learn Docker concepts:
- **Dockerfile** - Instructions to build an image
- **Image** - Snapshot of your application
- **Container** - Running instance of an image
- **Docker Hub** - Registry for Docker images

### Step 4.2 - Create Dockerfile for Backend

**What you need to do:**

1. **Create a `Dockerfile`** in the `backend/` folder

2. **Write Docker instructions**:
   - Start with `FROM node:18-alpine` (lightweight Node.js image)
   - Define the working directory with `WORKDIR /app`
   - Copy `package*.json` first (to optimize Docker cache)
   - Install dependencies with `RUN npm ci --only=production`
   - Then copy all application code with `COPY . .`
   - Expose the port with `EXPOSE 3000` (or the port you use)
   - Define the start command with `CMD ["npm", "start"]`

**Important points:**
- Copying `package.json` before the code allows Docker to cache dependencies
- `npm ci` is faster and more reliable than `npm install` in production
- `--only=production` installs only necessary dependencies (not devDependencies)
- Use `alpine` for lighter images

### Step 4.3 - Create Dockerfile for Frontend

**What you need to do:**

1. **Create a `Dockerfile`** in the `frontend/` folder

2. **Use a multi-stage build** (recommended for production):

   **Stage 1 - Build:**
   - Use `FROM node:18-alpine AS builder`
   - Define `WORKDIR /app`
   - Copy `package*.json` then install dependencies with `npm ci`
   - Copy source code
   - Run `npm run build` to create production files

   **Stage 2 - Production:**
   - Use `FROM nginx:alpine` (lightweight web server)
   - Copy built files from builder stage to `/usr/share/nginx/html`
   - Expose port 80
   - Start nginx with `CMD ["nginx", "-g", "daemon off;"]`

**Why multi-stage build:**
- Build stage requires Node.js and all dependencies
- Production stage only needs nginx and static files
- This significantly reduces the final image size
- More secure (fewer dependencies = fewer vulnerabilities)

### Step 4.4 - Build Docker Images

**What you need to do:**

1. **Build the backend image**:
   - Navigate to the `backend/` folder
   - Use `docker build -t my-backend:latest .`
   - The `-t` flag sets the image name and tag
   - The `.` indicates the build context is the current folder
   - Docker will read the Dockerfile in this folder

2. **Build the frontend image**:
   - Navigate to the `frontend/` folder
   - Use `docker build -t my-frontend:latest .`
   - Same principle as the backend

3. **Verify created images**:
   - Use `docker images` to list all images
   - You should see your two images with their tags

**Important points:**
- Build may take time the first time (downloading base images)
- Subsequent builds will be faster thanks to Docker cache
- If build fails, read error messages to understand the problem

### Step 4.5 - Run Containers

**What you need to do:**

1. **Run the backend container**:
   - Use `docker run -d -p 3000:3000 --name backend my-backend:latest`
   - `-d`: Runs the container in the background (detached mode)
   - `-p 3000:3000`: Maps port 3000 from container to port 3000 on host
   - `--name backend`: Gives a name to the container for easier management
   - `my-backend:latest`: The image to use

2. **Run the frontend container**:
   - Use `docker run -d -p 80:80 --name frontend my-frontend:latest`
   - Same principle, but on port 80

3. **Verify containers are running**:
   - Use `docker ps` to see running containers
   - Use `docker logs backend` or `docker logs frontend` to see logs

4. **Test your applications**:
   - Backend: Open `http://localhost:3000` in your browser
   - Frontend: Open `http://localhost` in your browser

**Useful commands:**
- `docker stop <container-name>`: Stop a container
- `docker start <container-name>`: Start a container
- `docker rm <container-name>`: Remove a stopped container
- `docker logs -f <container-name>`: View logs in real-time

### Step 4.6 - Create .dockerignore Files

**What you need to do:**

1. **Create a `.dockerignore` file** in each folder (backend and frontend)

2. **Add files/folders to exclude**:
   - `node_modules` (will be reinstalled in the container)
   - `.env` (environment variables will be passed differently)
   - `.git` (no need for Git history in the image)
   - `README.md`, `.gitignore` (documentation files)
   - `*.log` (log files)
   - `.dockerignore` itself
   - Any other file not necessary for execution

**Why do this:**
- Reduces Docker image size
- Speeds up build (fewer files to copy)
- Avoids accidentally copying sensitive files
- Improves security

**What to understand:**
- Dockerfile syntax
- Multi-stage builds
- Image layers and caching
- Port mapping
- Volume mounting
- Environment variables in Docker

**Constraints to follow:**
- Use multi-stage builds for production
- Minimize image size
- Use .dockerignore files
- Don't include secrets in images
- Use specific version tags

📚 **Documentation:**

- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

✔️ **Validation:**

You should be able to:
- ✅ Create Dockerfiles for frontend and backend
- ✅ Build Docker images
- ✅ Run containers successfully
- ✅ Access your applications via Docker
- ✅ Understand Docker basics

## Step 5 - Docker Compose: Orchestrate Multi-Container Applications

📑 **Description:**

Learn to use Docker Compose to orchestrate multiple containers (frontend, backend, database) together.

📌 **What you need to do:**

### Step 5.1 - Understand Docker Compose

Learn Docker Compose concepts:
- **docker-compose.yml** - Configuration file
- **Services** - Different containers
- **Networks** - Communication between containers
- **Volumes** - Persistent data storage

### Step 5.2 - Create docker-compose.yml

**What you need to do:**

1. **Create a `docker-compose.yml` file** at the root of your project

2. **Define the version**: Use `version: '3.8'` (or a recent version)

3. **Create services**:

   **Backend Service:**
   - Use `build` with `context: ./backend` and `dockerfile: Dockerfile`
   - Map ports with `ports: ["3000:3000"]`
   - Add necessary environment variables (DATABASE_URL, NODE_ENV, PORT)
   - Define `depends_on: [db]` to wait for database to be ready
   - Add it to the `app-network` network

   **Frontend Service:**
   - Use `build` with `context: ./frontend`
   - Map port 80 for nginx
   - Add `VITE_API_URL` in environment variables
   - Define `depends_on: [backend]`
   - Add it to the `app-network` network

   **Database Service:**
   - Use the `postgres:15-alpine` image (or your preferred version)
   - Configure environment variables (POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB)
   - Create a named volume to persist data
   - Add it to the `app-network` network

4. **Define volumes**:
   - Create a named volume `postgres-data` for the database
   - This allows data to persist even if the container is removed

5. **Define network**:
   - Create an `app-network` network of type `bridge`
   - This allows containers to communicate with each other

**Important points:**
- `depends_on` ensures startup order but not that the service is ready
- Containers can communicate with each other via service name (e.g., `db` instead of `localhost`)
- Volumes allow persisting database data

### Step 5.3 - Use Environment Variables

**What you need to do:**

1. **Create a `.env` file** at the root of the project

2. **Define variables**:
   - `DATABASE_URL`: Database connection URL
   - `NODE_ENV=production`: Runtime environment
   - `VITE_API_URL`: Backend API URL for frontend
   - `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`: Database credentials
   - Any other variable necessary for your application

3. **Reference variables in docker-compose.yml**:
   - Use `${VARIABLE_NAME}` syntax in the YAML file
   - Docker Compose will automatically load the `.env` file

4. **Add `.env` to `.gitignore`**:
   - Never commit the `.env` file with real secrets
   - Create a `.env.example` with example values for documentation

**Why do this:**
- Separate configuration from code
- Facilitate environment changes (dev/staging/prod)
- Avoid hardcoding sensitive values
- Allow each developer to have their own local configuration

### Step 5.4 - Run with Docker Compose

**What you need to do:**

1. **Start all services**:
   - Use `docker-compose up -d` at the root of the project (where docker-compose.yml is)
   - The `-d` flag runs in the background
   - Docker Compose will build images if needed, create networks, volumes, and start all services

2. **View logs**:
   - Use `docker-compose logs -f` to see all logs
   - Use `docker-compose logs -f backend` to see only the backend
   - The `-f` flag follows logs in real-time (like `tail -f`)

3. **Stop services**:
   - Use `docker-compose down` to stop and remove containers
   - Use `docker-compose down -v` to also remove volumes (warning: deletes DB data!)

4. **Other useful commands**:
   - `docker-compose ps`: See service status
   - `docker-compose restart <service>`: Restart a specific service
   - `docker-compose build`: Rebuild images without starting them
   - `docker-compose up --build`: Rebuild and start

**Important points:**
- Docker Compose automatically manages startup order with `depends_on`
- Services can communicate with each other via their name (e.g., `http://backend:3000`)
- Volumes persist data even after `docker-compose down`

### Step 5.5 - Development vs Production

**What you need to do:**

1. **Create two configuration files**:
   - `docker-compose.yml`: Production configuration
   - `docker-compose.dev.yml`: Development configuration

2. **Differences between dev and prod**:

   **Development (`docker-compose.dev.yml`)**:
   - Mount volumes with source code for hot reload
   - Use `npm run dev` instead of `npm start`
   - Expose debug ports if necessary
   - Can include development tools

   **Production (`docker-compose.yml`)**:
   - Use built images
   - No hot reload
   - Performance-optimized configuration
   - Production environment variables

3. **Use the right file**:
   - In development: `docker-compose -f docker-compose.dev.yml up`
   - In production: `docker-compose up` (uses docker-compose.yml by default)

**Why do this:**
- Separating configurations avoids errors
- Development requires hot reload to be productive
- Production must be optimized and secure

**What to understand:**
- Docker Compose syntax
- Service dependencies
- Networking between containers
- Volume management
- Environment variables
- Development vs production configurations

**Constraints to follow:**
- Use environment variables
- Define service dependencies
- Use named volumes for databases
- Create separate dev/prod configs
- Document your compose file

📚 **Documentation:**

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/)

✔️ **Validation:**

You should be able to:
- ✅ Create docker-compose.yml file
- ✅ Run multiple containers together
- ✅ Connect frontend, backend, and database
- ✅ Use environment variables
- ✅ Manage volumes and networks

## Step 6 - GitHub Actions: CI/CD Pipeline

📑 **Description:**

Set up Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions. Automate testing, building, and deployment.

📌 **What you need to do:**

### Step 6.1 - Understand CI/CD

Learn CI/CD concepts:
- **CI (Continuous Integration)** - Automatically test code on every push
- **CD (Continuous Deployment)** - Automatically deploy on successful tests
- **GitHub Actions** - Automation platform
- **Workflows** - Automated processes

### Step 6.2 - Create GitHub Actions Workflow

**What you need to do:**

1. **Create folder structure**:
   - Create `.github/workflows/` at the root of your project
   - Create a `ci.yml` file in this folder

2. **Define triggers**:
   - Workflow should run on `push` to `main` and `develop`
   - It should also run on `pull_request` to `main`
   - Use `on:` to define these triggers

3. **Create backend test job**:
   - Use `runs-on: ubuntu-latest` for the environment
   - **Step 1**: Checkout code with `actions/checkout@v3`
   - **Step 2**: Setup Node.js with `actions/setup-node@v3`
     - Specify Node.js version (e.g., '18')
     - Enable npm cache with `cache: 'npm'`
     - Indicate the path to backend `package-lock.json`
   - **Step 3**: Install dependencies with `npm ci` in backend folder
   - **Step 4**: Run tests with `npm test`
   - **Step 5**: Run linter with `npm run lint` (if you have one)

4. **Create frontend test job**:
   - Same structure as backend but for frontend folder
   - Add a build step with `npm run build` to verify build works

5. **Create Docker build job**:
   - Use `needs: [test-backend, test-frontend]` to wait for tests to pass
   - **Step 1**: Checkout code
   - **Step 2**: Setup Docker Buildx with `docker/setup-buildx-action@v2`
   - **Step 3**: Login to Docker Hub with `docker/login-action@v2`
     - Use `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets
   - **Step 4**: Build and push backend image with `docker/build-push-action@v4`
     - Specify context `./backend`
     - Enable `push: true` to push the image
     - Define tag with Docker Hub username
   - **Step 5**: Same for frontend

**Important points:**
- Jobs run in parallel unless `needs` is specified
- npm cache speeds up subsequent builds
- Secrets are secure and never displayed in logs
- Docker build only happens if all tests pass

### Step 6.3 - Set up GitHub Secrets

Add secrets to your GitHub repository:
1. Go to Settings → Secrets and variables → Actions
2. Add secrets:
   - `DOCKER_USERNAME` - Your Docker Hub username
   - `DOCKER_PASSWORD` - Your Docker Hub password/token

### Step 6.4 - Create Deployment Workflow

**What you need to do:**

1. **Create a `deploy.yml` file** in `.github/workflows/`

2. **Define triggers**:
   - Deployment should only happen on `push` to `main`
   - This is your production branch

3. **Create deployment job**:
   - Use `runs-on: ubuntu-latest`
   - **Step 1**: Checkout code
   - **Step 2**: Deploy according to your platform:

     **Option A - Railway/Render**:
     - Use their official GitHub actions if available
     - Or use their CLI with secrets for authentication

     **Option B - VPS (SSH)**:
     - Configure an SSH key as a GitHub secret
     - Use `ssh` to connect to the server
     - Execute `git pull` and `docker-compose up -d` on the server

     **Option C - Docker Hub + Pull**:
     - Images are already pushed in the previous job
     - Connect to server and run `docker-compose pull && docker-compose up -d`

**Important points:**
- Never deploy automatically on every commit (unless you're sure)
- Add conditions to only deploy if tests pass
- Use secrets for all sensitive information
- Test on a staging branch first before deploying to production

### Step 6.5 - Add Status Badges

**What you need to do:**

1. **Add a CI status badge to your README**:
   - GitHub automatically generates badges for your workflows
   - Format is: `![CI](https://github.com/username/repo/workflows/WORKFLOW_NAME/badge.svg)`
   - Replace `username/repo` with your username and repository name
   - Replace `WORKFLOW_NAME` with the name defined in your workflow (e.g., "CI/CD Pipeline")

2. **Place the badge**:
   - Add it at the top of your README.md
   - It will automatically display the status (passing/failing) of the last run

**Why do this:**
- Visually shows if your CI passes
- Gives confidence to potential contributors
- Allows quick visibility if something is broken

**What to understand:**
- GitHub Actions workflow syntax
- CI/CD pipeline concepts
- Docker image building in CI
- Secrets management
- Deployment automation

**Constraints to follow:**
- Run tests before building
- Use secrets for sensitive data
- Build Docker images in CI
- Deploy only on main branch
- Add proper error handling

📚 **Documentation:**

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Docker Actions](https://github.com/docker/build-push-action)

✔️ **Validation:**

You should be able to:
- ✅ Create GitHub Actions workflows
- ✅ Run tests automatically on push
- ✅ Build Docker images in CI
- ✅ Set up secrets properly
- ✅ See workflow runs in GitHub

## Step 7 - Deploy to Production

📑 **Description:**

Deploy your full-stack application to production using Docker and cloud platforms.

📌 **What you need to do:**

### Step 7.1 - Choose a Deployment Platform

Choose a platform:
- **Railway** - Easy deployment, supports Docker
- **Render** - Free tier, Docker support
- **DigitalOcean** - VPS with Docker
- **AWS/GCP/Azure** - Cloud platforms

### Step 7.2 - Deploy Backend

Deploy your backend:

**Option A: Railway**
1. Create account on Railway
2. Connect GitHub repository
3. Select backend folder
4. Add environment variables
5. Deploy

**Option B: Render**
1. Create account on Render
2. Create new Web Service
3. Connect repository
4. Set build command: `cd backend && npm install && npm run build`
5. Set start command: `cd backend && npm start`
6. Add environment variables

### Step 7.3 - Deploy Frontend

Deploy your frontend:

**Option A: Vercel/Netlify**
1. Create account
2. Connect repository
3. Set root directory to `frontend`
4. Set build command: `npm run build`
5. Add environment variables (API URL)

**Option B: Docker on Railway/Render**
1. Use Dockerfile
2. Deploy as Docker container
3. Set environment variables

### Step 7.4 - Deploy with Docker Compose

Deploy entire stack with Docker Compose:

**Using Railway:**
1. Create new project
2. Add docker-compose.yml
3. Railway will detect and deploy all services

**Using VPS (DigitalOcean, etc.):**
1. **Connect to the server**:
   - Use SSH to connect: `ssh user@your-server-ip`
   - Make sure Docker and Docker Compose are installed on the server

2. **Clone your repository**:
   - Use `git clone` with your GitHub repo URL
   - Navigate to the cloned folder

3. **Configure environment variables**:
   - Create a `.env` file on the server with correct production values
   - Never commit this file!

4. **Run with Docker Compose**:
   - Use `docker-compose up -d` to start all services
   - Check logs with `docker-compose logs -f`

5. **Configure a reverse proxy (optional but recommended)**:
   - Install nginx or traefik on the server
   - Configure it to redirect to your containers
   - Configure SSL with Let's Encrypt

### Step 7.5 - Configure Environment Variables

Set environment variables in your deployment platform:
- `DATABASE_URL` - Database connection string
- `NODE_ENV=production`
- `VITE_API_URL` - Backend API URL
- `JWT_SECRET` - Secret for JWT tokens
- Any other required variables

### Step 7.6 - Set up Custom Domain (Optional)

Configure custom domain:
1. Add domain in your platform settings
2. Update DNS records
3. Configure SSL certificate (usually automatic)

### Step 7.7 - Monitor Your Application

Set up monitoring:
- Check application logs
- Monitor resource usage
- Set up error tracking (Sentry, etc.)
- Monitor uptime

**What to understand:**
- Deployment platforms
- Environment configuration
- DNS and domains
- SSL certificates
- Monitoring and logging
- Production best practices

**Constraints to follow:**
- Use environment variables
- Never commit secrets
- Use HTTPS in production
- Set up proper CORS
- Monitor your application
- Have backup strategy

📚 **Documentation:**

- [Railway Documentation](https://docs.railway.app/)
- [Render Documentation](https://render.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com/)

✔️ **Validation:**

You should be able to:
- ✅ Deploy backend to production
- ✅ Deploy frontend to production
- ✅ Configure environment variables
- ✅ Access your application online
- ✅ Monitor your application

## Step 8 - Advanced DevOps: Monitoring & Logs

📑 **Description:**

Learn to monitor your applications and manage logs in production. This is essential for maintaining healthy applications.

📌 **What you need to do:**

### Step 8.1 - Application Logging

Implement proper logging:
- Use logging libraries (Winston, Pino for Node.js)
- Log levels (info, warn, error)
- Structured logging (JSON format)
- Log to files and console

### Step 8.2 - Health Checks

**What you need to do:**

1. **Create a health check endpoint** in your backend:
   - Create a `/health` (or `/healthcheck`) route
   - This route should return a 200 status with basic information
   - Include application status (`status: 'ok'`)
   - Optionally check database connection
   - Add a timestamp to know when the check was done
   - Return simple JSON with this information

2. **Test the endpoint**:
   - Verify that `GET /health` returns a 200 status
   - Use this endpoint to verify your application is working

**Why do this:**
- Allows monitoring tools to check application state
- Useful for load balancers and orchestrators (Kubernetes, etc.)
- Helps with debugging in production

### Step 8.3 - Docker Health Checks

**What you need to do:**

1. **Add HEALTHCHECK to your backend Dockerfile**:
   - Use `HEALTHCHECK` with the following options:
     - `--interval=30s`: Checks every 30 seconds
     - `--timeout=3s`: 3 second timeout for the command
     - `--start-period=5s`: Grace period at startup (5 seconds)
     - `--retries=3`: Number of attempts before marking as unhealthy
   - The command should call your `/health` endpoint
   - Use `curl` or `wget` to make the HTTP request
   - If the command fails (non-0 return code), container is marked unhealthy

2. **Check status**:
   - Use `docker ps` to see health status
   - A healthy/unhealthy container will be indicated in the STATUS column

**Why do this:**
- Docker can automatically restart unhealthy containers
- Orchestrators can replace failing containers
- Improves application resilience

### Step 8.4 - Monitor Resources

Monitor application resources:
- CPU usage
- Memory usage
- Disk space
- Network traffic

### Step 8.5 - Set up Error Tracking (Optional)

Set up error tracking:
- Sentry for error tracking
- LogRocket for session replay
- Or use platform's built-in monitoring

**What to understand:**
- Logging best practices
- Health check patterns
- Monitoring strategies
- Error tracking
- Performance monitoring

**Constraints to follow:**
- Log important events
- Don't log sensitive data
- Use appropriate log levels
- Set up health checks
- Monitor key metrics

📚 **Documentation:**

- [Winston Logger](https://github.com/winstonjs/winston)
- [Docker Health Checks](https://docs.docker.com/engine/reference/builder/#healthcheck)
- [Sentry](https://docs.sentry.io/)

✔️ **Validation:**

You should be able to:
- ✅ Implement proper logging
- ✅ Add health check endpoints
- ✅ Monitor application resources
- ✅ Understand monitoring basics

## Bonus Challenge - Advanced DevOps

📑 **Description:**

Explore advanced DevOps concepts and practices.

📌 **Choose one or more challenges:**

### Challenge 1: Multi-Environment Setup

Set up multiple environments:
- Development
- Staging
- Production
- Use different Docker Compose files
- Manage environment-specific configs

### Challenge 2: Database Migrations

Set up database migrations:
- Use migration tools (Prisma, TypeORM, etc.)
- Run migrations in CI/CD
- Handle rollbacks

### Challenge 3: Load Balancing

Set up load balancing:
- Use nginx as reverse proxy
- Load balance multiple backend instances
- Handle session persistence

### Challenge 4: Backup Strategy

Implement backup strategy:
- Database backups
- Automated backup scheduling
- Backup restoration process

**Estimated time**: 2-4 hours per challenge

📚 **Documentation:**

- [Nginx Load Balancing](https://nginx.org/en/docs/http/load_balancing.html)
- [Database Migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/) - Complete Docker guide
- [Docker Compose](https://docs.docker.com/compose/) - Multi-container orchestration
- [GitHub Actions](https://docs.github.com/en/actions) - CI/CD automation
- [DevOps Best Practices](https://www.docker.com/blog/tag/best-practices/) - Best practices
- [Production Checklist](https://github.com/goldbergyoni/nodebestpractices) - Node.js production checklist

## ✅ End of Day Checklist

- [ ] I can connect React frontend to backend API
- [ ] I understand Docker and can create Dockerfiles
- [ ] I can use Docker Compose to orchestrate services
- [ ] I've set up GitHub Actions for CI/CD
- [ ] I've deployed my application to production
- [ ] I understand environment variables and secrets
- [ ] I can monitor my application
- [ ] I understand DevOps best practices
- [ ] I'm ready for the rush tomorrow!

## 💡 Tips

- **Start simple** - Get basic deployment working first
- **Use Docker** - It makes deployment consistent
- **Automate everything** - Use CI/CD to save time
- **Monitor your apps** - Know what's happening in production
- **Use environment variables** - Never hardcode configuration
- **Test locally first** - Test Docker setup before deploying
- **Read logs** - Logs are your best friend for debugging
- **Backup regularly** - Don't lose your data
- **Document everything** - Future you will thank you
- **Keep learning** - DevOps is a continuous journey!

---

<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

---

**Good luck for the rush tomorrow! 💪**
