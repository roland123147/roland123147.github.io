/* ---------------------------------------------------------------
   everything you will update lives in this file.
   add an item to POSTS, VIDEOS or PROJECTS, save, push. that's it.
   empty lists hide their section automatically.
---------------------------------------------------------------- */

var SITE = {
  email: "roland.machingambi@gmail.com",
  linkedin: "",        // your linkedin profile url
  github: "",          // your github profile url
  cloudcraft: "https://www.linkedin.com/newsletters/cloudcraft-7486424596582158336/" // CloudCraft newsletter
};

/* writing: newest first.
   { title: "...", date: "Nov 2026", url: "https://...", summary: "one line" } */
var POSTS = [];

/* loom videos: paste the normal share link.
   { title: "...", url: "https://www.loom.com/share/xxxx" } */
var VIDEOS = [];

/* projects: newest first. leave github/live as "" to hide that link. */
var PROJECTS = [
  {
    title: "Find It First",
    status: "Completed",
    summary: "A lost-and-found web app for university campuses. Staff log found items with photos, students search for what they lost and claim it with proof.",
    stack: ["AWS SAM", "Cognito", "API Gateway (HTTP API)", "Lambda (Node.js 22)", "DynamoDB", "S3"],
    github: "",
    live: "https://main.d3chr8ql55o1ou.amplifyapp.com/",
    architecture: "assets/find-it-first-architecture.svg"
  }
];
