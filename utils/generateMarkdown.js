// TODO: Createing a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  
  // Initialise an empty string to store the badge Markdown
  let badge = "";

  // Check for various licenses and assign the appropriate badge Markdown
  if (license === "Apache 2.0") {
    badge = "![Apache 2.0 licence badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  else if (license === "BSL 1.0") {
    badge = "![BSL 1.0 licence badge](https://img.shields.io/badge/License-BSL_1.0-orange.svg)";
  }
  else if (license === "BSD 2.0") {
    badge = "![BSD 2.0 licence badge](https://img.shields.io/badge/License-BSD_2.0-orange.svg)";
  }
  else if (license === "BSD 3.0") {
    badge = "![BSD 3.0 licence badge](https://img.shields.io/badge/License-BSD_3.0-orange.svg)";
  }
  else if (license === "CC0 1.0") {
    badge = "![CC0 1.0 licence badge](https://img.shields.io/badge/License-CC0_1.0-orange.svg)";
  }
  else if (license === "GPL 2.0") {
    badge = "![GPL 2.0 licence badge](https://img.shields.io/badge/License-GPL_2.0-blue.svg)";
  }
  else if (license === "GPL 2.1") {
    badge = "![GPL 2.1 licence badge](https://img.shields.io/badge/License-GPL_2.1-blue.svg)";
  }
  else if (license === "GPL 3.0") {
    badge = "![GPL 3.0 licence badge](https://img.shields.io/badge/License-GPL_3.0-blue.svg)";
  }
  else if (license === "Affero GPL 3.0") {
    badge = "![Affero GPL 3.0 licence badge](https://img.shields.io/badge/License-Affero_GPL_3.0-blue.svg)";
  }
  else if (license === "EPL 2.0") {
    badge = "![EPL 2.0 licence badge](https://img.shields.io/badge/License-EPL_2.0-blue.svg)";
  }
  else if (license === "MIT") {
    badge = "![MIT licence badge](https://img.shields.io/badge/License-MIT-green.svg)";
  }
  else if (license === "MPL 2.0") {
    badge = "![MPL 2.0 licence badge](https://img.shields.io/badge/License-MPL_2.0-blue.svg)";
  }
  else if (license === "The Unlicense") {
    badge = "![The Unlicense licence badge](https://img.shields.io/badge/License-The_Unlicense-Gray.svg)";
  }
  else if (license === "None") {
    badge = "![None licence badge](https://img.shields.io/badge/License-None-red.svg)";
  }
  else {
    // Return an empty string if no matching license is found
    return "";
  }
  // Return the generated badge Markdown
  return badge
};

// Creating a function that returns the license link
function renderLicenseLink(license) {
  
  // Initialise an empty string to store the link
  let link = "";

  // Check for various licenses and assign the corresponding link
  if (license === "Apache 2.0") {
    link = "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === "BSL 1.0") {
    link = "https://opensource.org/license/bsl-1-0/";
  }
  else if (license === "BSD 2.0") {
    link = "https://opensource.org/license/bsd-2-clause/";
  }
  else if (license === "BSD 3.0") {
    link = "https://opensource.org/license/bsd-3-clause/";
  }
  else if (license === "CC0 1.0") {
    link = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
  }
  else if (license === "GPL 2.0") {
    link = "https://opensource.org/license/bsd-2-clause/";
  }
  else if (license === "GPL 2.1") {
    link = "https://opensource.org/licenses/BSD-2-Clause";
  }
  else if (license === "GPL 3.0") {
    link = "https://opensource.org/license/bsd-3-clause/";
  }
  else if (license === "Affero GPL 3.0") {
    link = "https://www.gnu.org/licenses/agpl-3.0.html";
  }
  else if (license === "EPL 2.0") {
    link = "https://www.eclipse.org/legal/epl-2.0/";
  }
  else if (license === "MIT") {
    link = "https://opensource.org/licenses/MIT";
  }
  else if (license === "MPL 2.0") {
    link = "https://www.mozilla.org/en-US/MPL/2.0/";
  }
  else if (license === "The Unlicense") {
    link = "http://unlicense.org/";
  }
  else {
    // Return an empty string if no matching license is found
    return "";
  }
  // Return the license link
  return link
};

// Function to create the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''; // Return an empty string if no license is specified
  } 
  else {
    // Create a Markdown string with the license name and link
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}).`;
  }
};

// Function to generate the Markdown content for the README
function generateMarkdown(data) {
  // Construct the Markdown content using various functions and data
  return `
  ${renderLicenseBadge(data.license)}

  # <h1 align="center"> ${data.Title} </h1>

  ${data.Description}.

  ## Table of Contents
  - [Installation Instruction](#installation-instruction)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Contact Me](#contact-me)

  ## Installation Instruction
  ${data.InstallationInstruction}.

  ## Usage Information
  ${data.UsageInformation}.

  ## License

  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.ContributionGuidelines}.

  ## Test Instruction
  \`
  ${data.TestInstruction}
  \`

  ## Contact Me
  If you have any questions, feel free to contact me through GitHub: [${data.GithubUsername}](https://github.com/${data.GithubUsername}) or email: ${data.Email}.
`;
}

// Export the generateMarkdown function for use in other modules
module.exports = generateMarkdown;
