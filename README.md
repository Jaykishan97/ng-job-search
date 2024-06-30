# NgJobSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure

```
NgJobSearch/
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── mocks.ts
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.spec.ts
│   │   ├── app.routes.ts
│   │   ├── job.service.ts
│   │   ├── job.service.spec.ts
│   │   ├── job-list/
│   │   │   ├── job-list.component.ts
│   │   │   ├── job-list.component.html
│   │   │   ├── job-list.component.css
│   │   │   ├── job-list.component.spec.ts
│   │   ├── job-details/
│   │   │   ├── job-details.component.ts
│   │   │   ├── job-details.component.html
│   │   │   ├── job-details.component.css
│   │   │   ├── job-details.component.spec.ts
│   │   ├── favorite-list/
│   │   │   ├── favorite-list.component.ts
│   │   │   ├── favorite-list.component.html
│   │   │   ├── favorite-list.component.css
│   │   │   ├── favorite-list.component.spec.ts
├── .vscode/
│   ├── launch.json
│   ├── tasks.json
│   ├── extensions.json
```

## Features

- **Job List**: Displays a list of jobs fetched from the API.
- **Job Details**: Displays detailed information about a selected job.
- **Favorites**: Allows users to mark jobs as favorites and view them in a separate list.
- **Routing**: Uses Angular Router for navigation between job list, job details, and favorites.
- **Persistence**: Favorites are persisted in local storage to survive page refreshes.

## How to Use

1. **Start the Development Server**: Run `ng serve` and navigate to `http://localhost:4200/`.
2. **View Jobs**: The main page displays a list of jobs.
3. **View Job Details**: Click on a job title to view its details.
4. **Mark as Favorite**: Click on the star icon to mark a job as a favorite.
5. **View Favorites**: Navigate to the "Favorites" tab to view all favorited jobs.

## Testing

- **Unit Tests**: Run `ng test` to execute unit tests.
- **End-to-End Tests**: Run `ng e2e` to execute end-to-end tests.
