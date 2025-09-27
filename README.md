A host Angular 20 app using Native Federation to load remote features. It also handles Keycloak auth (keycloak-js + keycloak-angular). UI components are built with PrimeNG.

## Prerequisites

- Node.js 20+
- npm (or pnpm/yarn/bun)
- Angular CLI 20+ (npm i -g @angular/cli)

## Setup

git clone git@github.com:nandomegale/shell-nf-primeng-kc.git
cd shell-nf-primeng-kc
npm install

## (Optional) Keycloak config - If you don't want use KC, just comment the provider in app.config.ts and skip this step.

ng g environments

//environments/environment.ts <br/>
KEYCLOAK_URL=https://your-keycloak-url <br/>
KEYCLOAK_REALM=your-realm <br/>
KEYCLOAK_CLIENT_ID=your-client-id <br/>

## Run (dev)

Start the remote first (see link below), then the shell.

ng serve

# default: http://localhost:4200

## Federation notes

- This app consumes remotes exposed by remote-nf-primeng-kc.
- Ensure the remote is running (e.g., http://localhost:4201).

## Important considerations

- The shell is fully responsible for Keycloak management.
- The remote app will reuse interceptors provided by the shell.
- If you need the remote app itself to manage Keycloak, you must design a different approach.

Remote app: remote-nf-primeng-kc → [\[LINK TO REMOTE REPO\]](https://github.com/nandomegale/remote-nf-primeng-kc)
