# React JS Project for Protein Sequence

## What is the use of this Repo

This Project is a ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Live Application URL

### 
This URL has the application deployed in https://kherasagar.github.io/protein-sequence

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://kherasagar.github.io/protein-sequence

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Application design

#### Main Components

1. **InputContainer Component** : This Component is used to take inputs like Gene Symbol, Position and Amino acid letter from user to get Transcript details.

2. **TranscriptContainer Component** : This Component Displays the details of the entered values bu user. This Component gets its data from protein sequence related apis. 

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just two urls default which shows transcripts for selected values /Transcripts which shows transcripts from 10 Left from Amino Acide letter entered.

#### APIs

The application has just two APIs

1. **http://rest.ensembl.org/lookup/symbol/homsap/BRAF.json?;expand=1** : allows you toprovide list of transcript and additional information about a gene by its symbol - in this example the species in question is homsap and the gene symbol is BRAF. : This Component is used to take inputs like Gene Symbol, Position and Amino acid letter from user to get Transcript details.

2. **http://rest.ensembl.org/sequence/id/ENST00000496384.json** : allows you to provide the detail information of a transcript including Amino Acid Letter Sequence by its id. : This Component Displays the details of the entered values bu user. This Component gets its data from protein sequence related apis. 

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
