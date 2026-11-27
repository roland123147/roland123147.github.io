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
    title: "Clean Stream (T²GRN)",
    tagline: "Turning kitchen waste into a measurable circular loop.",
    status: "EVOKE Hackathon",
    summary: "I built T²GRN Clean Stream as group tech lead for EVOKE Hackathon, a youth innovation programme hosted in Harare by Impact Hub Harare in partnership with the World Bank. Our challenge was to make kitchen waste separation measurable at Rainbow Towers Hotel and turn clean plant scraps into something useful. I helped build a phone-friendly tool for recording weigh-ins, tracking waste streams, and managing the hand-over of clean scraps for composting. The live preview currently uses sample data; the diagram shows the AWS architecture.",
    features: [
      "Quickly log waste stream, weight, and whether the bin stayed clean",
      "Track weekly logging, clean-bin rates, and weigh-in times",
      "View daily kilos by waste stream",
      "Track clean plant scraps from weighed, to requested, confirmed, and collected"
    ],
    stack: ["HTML", "CSS", "JavaScript", "AWS Amplify Hosting", "Amazon Cognito", "API Gateway", "AWS Lambda", "Amazon DynamoDB", "Amazon CloudWatch"],
    github: "",
    live: "https://main.dywzvcdm7d8fl.amplifyapp.com/",
    liveLabel: "Live Demo",
    architecture: "assets/clean-stream-architecture.png",
    architectureAlt: "T²GRN Clean Stream AWS architecture: Amplify Hosting, Cognito, API Gateway, Lambda, DynamoDB, and CloudWatch",
    architectureCaption: "T²GRN Clean Stream · AWS architecture"
  },
  {
    title: "Hurukuro",
    tagline: "Zimbabwean slang, said the way we say it.",
    status: "Completed",
    summary: "Hurukuro started with a problem I kept running into: I couldn't keep up with Shona urban slang. The language moves fast. New words and phrases show up all the time, and half the time I had no idea what my friends were saying. I kept stopping conversations to ask what a word meant, and my friends started calling me 'old' whenever I didn't get it. After one too many of those moments, I decided to fix it properly. I built Hurukuro, a dictionary of Zimbabwean slang and everyday language, so anyone can look up a word, browse by letter, check the word of the day, and add new words as the language keeps changing.",
    features: [
      "Search for any word",
      "Browse words by letter",
      "Word of the day",
      "Add a word so the dictionary grows with the language"
    ],
    stack: ["HTML", "CSS", "JavaScript", "AWS Amplify Hosting"],
    github: "",
    live: "https://main.d1391xt4ste7gn.amplifyapp.com/",
    liveLabel: "Live Demo"
  },
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
