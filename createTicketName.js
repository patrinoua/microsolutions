function renameTicket(ticketName){
  const usefulCharacters = [...ticketName.substr(10)]
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
  let newName = [ticketName.substr(0,9)]+'-'+newTicketName.join('').substr(0,30)
  if (newName[newName.length-1]=='-')
    newName=newName.substr(0,newName.length-1)
  return newName
}

const gitCompatibleName = renameTicket('\n\nTAS-63 FE: Hub - Adjust color of Order creation Trade Terms sentences.\n\n')

console.log(gitCompatibleName)
