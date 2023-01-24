var prompt = require('prompt-sync')()

console.log('\n\n')
const name = prompt("what's the ticket name? ")

function produceBranchAndPR(ticketName) {
  let nameArray = [...ticketName.trim()]

  const removeNewLine = nameArray.filter((character) => character !== '\n')

  nameArray = removeNewLine

  const ticketNameString = nameArray.join('')

  const ticketDescription = ticketNameString.substring(8, ticketNameString.length)

  const branchNameArray = nameArray.map((character, index) => {
    if (character === ' ') return '-'
    if (character === '(') return ''
    if (character === ')') return ''
    if (character === '[') return ''
    if (character === ']') return ''
    else if (character === ':') return ''
    else if (index < 8) return character
    else return character.toLowerCase()
  })

  // console.log(branchNameArray)

  const branchNameString = branchNameArray
    .filter((a) => a !== "'")
    .join('')
    .slice(0, 40)

  const branchName = 'patrinoua/' + branchNameString

  const checkoutBranchName = 'gco -b ' + branchName

  let ticketNumber = ticketNameString.substring(0, 7)

  const prNameWIP = 'WIP feat(' + ticketNumber + '): ' + ticketDescription
  const prNameREADY = 'feat(' + ticketNumber + '): ' + ticketDescription
  const thisPrResolves = `This PR resolves [${ticketNumber}]`
  const PRTemplate = `
### Description

<!--❗️ Prefix PR title with commitizen and add [WIP] if this is a work in progress -->

${thisPrResolves}

### Description

${ticketDescription}


<!-- Info, implementation, how to get there, before & after screenshots & videos, follow-ups, etc -->

<!-- commitizen options: feat / chore / fix / docs / refactor / test / CI / perf / revert / style -->

`

  // console.log('\n\n\n - - - - - - - - - PR Description - - - - - - - - - \n')
  // console.log(PRTemplate)
  // console.log('\n - - - - - - - - - - - PR name - - - - - - - - - - - - - - - - - ')
  // console.log('\n >>>> WIP \n')
  // console.log(prNameWIP)
  // console.log('\n >>>> READY \n')
  // console.log(prNameREADY)
  // console.log('\n - - - - - - - - - PUSH - - - - - - - - - - \n')
  // console.log('git push --set-upstream origin ', branchName)
  // console.log('\n\n - - - - - - - - - Branch name - - - - - - - - - - - - - - - - - - \n\n')
  // console.log(checkoutBranchName)
  // console.log('\n')
  // console.log('Original name: \n \n', name, '\n\n')

  // console.log('\x1b[36m%s\x1b[0m', 'I am cyan') //cyan
  // console.log('\x1b[33m%s\x1b[0m', 'stringToMakeYellow') //yellow
  // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

  return `
 \x1b[33m- - - - - - - - - - - PR name - - - - - - - - - - - - [44444444]\x1b[0m

\x1b[36m >>>> WIP \x1b[0m

 ${prNameWIP}

\x1b[36m >>>> READY \x1b[0m

 ${prNameREADY}
   
\x1b[33m - - - - - - - - - PR Description - - - - - - - - - [33333333]\x1b[0m

 ${PRTemplate}


\x1b[33m - - - - - - - - - Push branch to origin - - - - - - - - - - [ 222222222 ]\x1b[0m

 git push --set-upstream origin ${branchName}


 \x1b[33m- - - - - - - - - Checkout Branch  - - - - - - - [ 11111111 ]\x1b[0m

 ${checkoutBranchName}
 

\x1b[33m Oiginal name:  \x1b[0m

 ${ticketNameString}
  
  `
}
// const ticketName = `
// MOPLAT-335 Artwork: Open artwork in CMS`

// const name = 'NX-3361 fixes should be the description'

console.log(produceBranchAndPR(name))
