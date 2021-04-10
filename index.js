// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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
       const badge = `![badge](https://img.shields.io/static/v1?label=License&message=${answer.License}&color=blue&style=plastic)`;
       fs.appendFileSync("testReadme.md",`## ${badge}\n`,(err) => {
        if (err) throw err;
        })
        fs.appendFileSync("testReadme.md",`## Table Of Contents\n- [Descripton](#Description)\n- [Installation Instructions](#Installation-Instructions)\n- [Usage Information](#Usage-Information)\n- [Contritbution Guidelines](#Contritbution-Guidelines)\n- [Test Instructions](#Test-Instructions)\n- [Contact](#Contact)\n`,(err) => {
        if (err) throw err;
        })
       fs.appendFileSync("testReadme.md",`## Description\n${answer.Description}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Installation Instructions\n${answer["Installation Instructions"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Usage Information\n${answer["Usage Information"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Contritbution Guidelines\n${answer["Contritbution Guidelines"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Test Instructions\n${answer["Test Instructions"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`## Contact\n### GitHub Username\n${answer["GitHub Username"]}\n`, (err) => {
        if (err) throw err;
       })
       fs.appendFileSync("testReadme.md",`### Email\n${answer.Email}\n`, (err) => {
        if (err) throw err;
       })
    })

