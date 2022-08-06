function produceBranchAndPR(ticketName) {
  let nameArray = [...ticketName]

  const removeNewLine = nameArray.filter((character) => character !== "\n")

  nameArray = removeNewLine

  const branchNameArray = nameArray.map(character => {
    if (character === ' ') return '-'
    else return character.toLowerCase()
  })

  const branchName = branchNameArray.join('')
  let ticketNumber = ticketName.split(" ")[0]
  let ticketTitle = nameArray.slice(11, nameArray.length).join('')

  const prName = 'feat(' + ticketNumber + "): " + ticketTitle
  const thisPrResolves = `This PR resolves [${ticketNumber}]`
  const PRTemplate = `
<!-- PR title in form of \`type(PROJECT - XXXX): what changed\`
❗️ [WIP] prefix and/or open a draft PR if this is a work in progress -->
### Description
<!-- Info, implementation, how to get there, before & after screenshots & videos, follow-up work, etc -->

${thisPrResolves}

Follow up: add the right link, updates to metaphysics are required.

### PR Checklist

- [ ] I tested my changes on **iOS** and **Android**.
- [ ] I added screenshots or videos to illustrate my changes.
- [ ] I added Tests and Stories for my changes.

### To the reviewers 👀

- [ ] I would like **at least one** of the reviewers to run this PR on the simulator or device.


Need help with something? Have a look at our [docs], or get in touch with us.

[docs]: /docs/README.md

[${ticketNumber}]: https://artsyproduct.atlassian.net/browse/${ticketNumber}
`

  console.log('\n\n\n\n - - - - - - - - - PR Description - - - - - - - - - \n\n')
  console.log(PRTemplate)
  console.log('\n\n\n - - - - - - - - -PR name - - - - - - - - - - - - \n\n\n')
  console.log(prName)
  console.log('\n\n\n\n - - - - - - - - - branch name- - - - - - - - - - \n\n')
  console.log(branchName)
  console.log('\n\n\n')

}

const ticketName = "LALA-231 Create three tab root structure"

console.log(produceBranchAndPR(ticketName))
