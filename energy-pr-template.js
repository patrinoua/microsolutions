var prompt = require("prompt-sync")()

console.log("\n\n\n")
const name = prompt("what's the ticket name? ")
console.log("\n\n\n")

function produceBranchAndPR(ticketName) {
  let nameArray = [...ticketName]

  const removeNewLine = nameArray.filter((character) => character !== "\n")

  nameArray = removeNewLine

  const branchNameArray = nameArray.map((character) => {
    if (character === " ") return "-"
    else return character.toLowerCase()
  })

  // console.log(branchNameArray)

  const branchName = branchNameArray
    .filter((a) => a !== "'")
    .join("")
    .slice(0, 40)

  const checkoutBranchName = "gco -b patrinoua/" + branchName
  let ticketNumber = ticketName.split(" ")[0].trim()
  let ticketTitle = nameArray.slice(11, nameArray.length).join("")

  const prNameWIP = "WIP feat(" + ticketNumber + "): " + ticketTitle
  const prNameREADY = "feat(" + ticketNumber + "): " + ticketTitle
  const thisPrResolves = `This PR resolves [${ticketNumber}]`
  const PRTemplate = `
<!-- PR title in form of \`type(PROJECT - XXXX): what changed\`
❗️ [WIP] prefix and/or open a draft PR if this is a work in progress -->
### Description
<!-- Info, implementation, how to get there, before & after screenshots & videos, follow-up work, etc -->

${thisPrResolves}

### PR Checklist
- [ ] I tested my changes on **iOS** and **Android**.
- [ ] I added screenshots or videos to illustrate my changes.
- [ ] I added Tests and Stories for my changes.
### To the reviewers 👀
- [ ] I would like **at least one** of the reviewers to run this PR on the simulator or device.

Need help with something? Have a look at our [docs], or get in touch with us.

[docs]: /docs/README.md
`

  console.log("\n\n\n\n - - - - - - - - - PR Description - - - - - - - - - \n")
  console.log(PRTemplate)
  console.log("\n\n - - - - - - - - - - - PR name - - - - - - - - - - - - - - - - - ")
  console.log("\n >>>> WIP \n")
  console.log(prNameWIP)
  console.log("\n\n >>>> READY \n")
  console.log(prNameREADY)
  // console.log("\n\n - - - - - - - - - Create PR with branchName - - - - - - - - - - \n\n")
  // console.log("git push --set-upstream origin ", branchName)
  console.log("\n\n\n - - - - - - - - - Branch name- - - - - - - - - - - - - - - - - - \n\n")
  console.log(checkoutBranchName)
  console.log("\n\n")
}
// const ticketName = `
// MOPLAT-335 Artwork: Open artwork in CMS`

console.log(produceBranchAndPR(name))
