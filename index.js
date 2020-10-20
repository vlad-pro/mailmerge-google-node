const promisify = require("util"); // for wrapping up googleapi callbacks
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
    keyFile: "./client_secret.json",
    scopes: ['https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/documents'],
})

// 1 Create an express app for serving the React based form and for API for the form and for google API connections

// 2 connect to Drive, Doc APIs as a service account

// 3 for "/" route send a res as a form page

// 4 when the form is complete and Merge button is pushed send an API call to express endpoint
//  with form data that will go to google API.

// 5 This is tricky  - we need to connect as this user to his drive so we need to copy the template document into his drive
//   using user's credentials to give the user full control

// Managing templates https://developers.google.com/docs/api/how-tos/merge#managing_templates
// For template documents that the application defines and owns, create the template using a dedicated account representing the application. Service accounts are a good choice and avoid complications with G Suite policies that restrict sharing.

// When you create instances of documents from templates, always use end-user credentials. This gives users full control over the resulting presentation and prevents scaling issues related to per-user limits in Google Drive.

// To create a template using a service account, perform the following steps using the application credentials:

// Create a new document using documents.create in the Docs API.
// Update the permissions to allow the document recipients to read using permissions.create in the Drive API.
// Update the permissions to allow template authors to write using permissions.create in the Drive API.
// Edit the template as required.
// To create a new instance of the document, perform the following steps using the user credentials:

// Create a copy of the template using files.copy in the Drive API.
// Replace values using documents.batchUpdate in the Docs API.
