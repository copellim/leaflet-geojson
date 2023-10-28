# Angular Leaflet Example

This is a sample Angular project that demonstrates the integration of Leaflet, a popular JavaScript mapping library, into an Angular application. These are the major steps taken to obtain the code in this repo.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`)

## Installation

1. Create new project

   ```bash
   ng new <project-name>
   ```

2. Navigate to the project directory.

   ```bash
   cd <project-name>
   ```

3. Install Leaflet and its type definitions.

   ```bash
   npm install leaflet@1.7.1
   npm install --save-dev @types/leaflet @types/geojson
   ```

4. Add Leaflet CSS to your Angular project. Open the `angular.json` file and add the following entry under `architect.build.options.styles`:

   ```json
   {
     // ...
     "styles": [
       "./node_modules/leaflet/dist/leaflet.css",
       "src/styles.css"
     ],
     // ...
   }
   ```

5. Add GeoJSON data to the project. Create a `tracks.geojson` file under `src/assets/data/` directory and add your GeoJSON data to this file.

## Running the Application

To run the Angular development server and view the Leaflet features in action, use the following command:

```bash
npm start
```

This will start the development server. Open your browser and navigate to `http://localhost:4200/` to view the Angular Leaflet Example application.


Happy mapping! 🗺️