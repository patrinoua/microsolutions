function renameTicket(ticketName){

  const usefulCharacters = [...ticketName.split(' FE:').join()]

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
  return '(#'+newTicketName.join('')+')'
}

const headerName = renameTicket('\n\nLogin To Npm\n\n')


var projects = [
'Preparing your Project',
  '[Copy the project from Git](#)',
  '[Select which Branch to work on](#)',

'Running the app',
    '[Prepare and start the client](#)',
    '[Prepare and start the server](#)'
]

projects.forEach(project=>console.log('\n',renameTicket(project),'\n'))
