const parsePrice = (string) => 
    Number.parseFloat(string.trim().slice(1).split(',').join(''))

export default parsePrice