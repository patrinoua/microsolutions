
function renameTicket(ticketName){

  const usefulCharacters = [...ticketName.split(' FE:').join()]

  const newTicketName = usefulCharacters.map(character=>{
    if(character === ' ')
      return '_'
    else if(
      character === ':'
      || character === '['
      || character === ']'
      || character === '.'
      || character === ','
      || character === '\n' )
      return ''

    return character
  })
  return newTicketName.join('')
}

const gitCompatibleName = renameTicket('\n\nTAS-63 FE: Hub - Adjust color of Order creation Trade Terms sentences.\n\n')

console.log(gitCompatibleName)
