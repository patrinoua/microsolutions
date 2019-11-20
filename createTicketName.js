
function renameTicket(ticketName){
  const usefulCharacters = [...ticketName.substr(10).trim()]
  const newTicketName = usefulCharacters.map(character=>{
    if(character === ' ')
      return '-'
    else if(
      character === ':'
      || character === '['
      || character === ']'
      || character === '.'
      || character === ','
      || character === '-'
      || character === '('
      || character === ')'
      || character === '#'
      || character === '\n' )
      return ''
    return character.toLowerCase()
  })
  return [ticketName.substr(0,9)]+'-'+newTicketName.join('').substr(0,40)
}

const gitCompatibleName = renameTicket('\n\nTAS-63 FE: Hub - Adjust color of Order creation Trade Terms sentences.\n\n')

console.log(gitCompatibleName)
