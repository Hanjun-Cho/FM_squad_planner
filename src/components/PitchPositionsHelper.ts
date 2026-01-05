export type PositionCoordinates = {
  'top': string,
  'left': string
}

export function getPositionCoordinates(position: string): PositionCoordinates {
  if(position == 'GK') return {'top': '95%', 'left': '50%'}
  if(position == 'LB') return {'top': '78.2%', 'left': '10%'}
  if(position == 'LCB') return {'top': '78.2%', 'left': '30%'}
  if(position == 'CCB') return {'top': '78.2%', 'left': '50%'}
  if(position == 'RCB') return {'top': '78.2%', 'left': '70%'}
  if(position == 'RB') return {'top': '78.2%', 'left': '90%'}
  if(position == 'LWB') return {'top': '61.4%', 'left': '10%'}
  if(position == 'LDM') return {'top': '61.4%', 'left': '30%'}
  if(position == 'CDM') return {'top': '61.4%', 'left': '50%'}
  if(position == 'RDM') return {'top': '61.4%', 'left': '70%'}
  if(position == 'RWB') return {'top': '61.4%', 'left': '90%'}
  if(position == 'LM') return {'top': '44.6%', 'left': '10%'}
  if(position == 'LCM') return {'top': '44.6%', 'left': '30%'}
  if(position == 'CM') return {'top': '44.6%', 'left': '50%'}
  if(position == 'RCM') return {'top': '44.6%', 'left': '70%'}
  if(position == 'RM') return {'top': '44.6%', 'left': '90%'}
  if(position == 'LW') return {'top': '27.8%', 'left': '10%'}
  if(position == 'LCAM') return {'top': '27.8%', 'left': '30%'}
  if(position == 'CAM') return {'top': '27.8%', 'left': '50%'}
  if(position == 'RCAM') return {'top': '27.8%', 'left': '70%'}
  if(position == 'RW') return {'top': '27.8%', 'left': '90%'}
  if(position == 'LCF') return {'top': '11%', 'left': '30%'}
  if(position == 'CF') return {'top': '11%', 'left': '50%'}
  if(position == 'RCF') return {'top': '11%', 'left': '70%'}
  return {'top': '', 'left': ''}
}
