export function spacesAt4Char(text: string){
  const newText = text.match(/.{1,4}/g);
  return newText.join(' ');
}

export default spacesAt4Char;
