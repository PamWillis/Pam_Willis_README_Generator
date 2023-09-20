
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseDetail(badge, license) {
  choices.forEach(index);
  switch (index) {
      case 'apache':
        badge += "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        license += "https://opensource.org/licenses/Apache-2.0";
        break;
      case 'Boost':
        badge += "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case 'The MIT License':
        badge += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case 'BSD 2-Clause License':
        badge += "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case 'BSD 3-Clause License':
        badge += "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case 'Creative Commons 1.0':
        badge += "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case 'Eclipse Public License 1.0':
        badge += "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case 'Eclipse Public License 1.0':
        badge += "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case 'GNU GPL v3':
        badge += "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case 'GNU GPL v2':
        badge += "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
      case 'Mozilla Public License 2.0':
        badge += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case 'Unlicensed':
        badge += "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case '':
      badge += ""
    
      }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   choices.forEach(index);
//   switch (index) {
//     case 
//     'apache':
//       license += "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//       break;
//     case 'Boost':
//       license += "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//       break;
//     case 'The MIT License':
//       license += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//       break;
//     case 'BSD 2-Clause License':
//       license += "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
//       break;
//     case 'BSD 3-Clause License':
//       license += "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
//       break;
//     case 'Creative Commons 1.0':
//       license += "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
//       break;
//     case 'Eclipse Public License 1.0':
//       license += "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
//       break;
//     case 'Eclipse Public License 1.0':
//       license += "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
//       break;
//     case 'GNU GPL v3':
//       license += "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//       break;
//     case 'GNU GPL v2':
//       license += "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
//       break;
//     case 'Mozilla Public License 2.0':
//       license += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//       break;
//     case 'Unlicensed':
//       license += "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
//   }
  
// }
// renderLicenseLink();

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { 
// license = ""
// }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title},

${renderLicenseDetail(data.badge, data.license)}

`;
}

module.exports = generateMarkdown;
