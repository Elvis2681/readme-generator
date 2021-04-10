// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const genMark = require("./utils/generateMarkdown")

inquirer
    .prompt ([
        {
            type: "input",
            message: "Project Title",
            name: "Title",
        },
        {
            type: "input",
            message: "Description",
            name: "Description",
        },
        {
            type: "input",
            message: "Installation Instructions",
            name: "Installation Instructions",
        },
        {
            type: "input",
            message: "Usage Information",
            name: "Usage Information",
        },
        {
            type: "input",
            message: "Contritbution Guidelines",
            name: "Contritbution Guidelines",
        },
        {
            type: "input",
            message: "Test Instructions",
            name: "Test Instructions",
        },
        {
            type: "list",
            message: "License",
            name: "License",
            choices: ["MIT", "Mozilla", "ISC", "IBM", "Eclipse"]
        },
        {
            type: "input",
            message: "GitHub Username",
            name: "GitHub Username",
        },
        {
            type: "input",
            message: "Email Address",
            name: "Email",
        },
    ])
    .then ((answer) => {
       fs.writeFileSync("testReadme.md",`# ${answer.Title}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Description\n${answer.Description}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Installation Instructions\n${answer["Installation Instructions"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## ${answer["Usage Information"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`${answer["Contritbution Guidelines"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`${answer["Test Instructions"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`${answer.License}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`${answer["GitHub Username"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`${answer.Email}\n`, (err) => {
        if (err) throw err;
       })
    })