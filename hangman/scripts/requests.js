const getPuzzle = async (wordCount = 2) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
  if (response.status !== 200) {
    throw new Error('Can not get puzzle')
  }
  const data = await response.json()
  return data.puzzle
}

const getPuzzleOld = (wordCount = 2) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Can not fetch word')
      }
    })
    .then((data) => data.puzzle)
}

const getCountryDetails = async (countryCode = '') => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`, {})
  if (response.status !== 200) {
    throw new Error('Can not fetch country')
  }
  const data = await response.json()
  return data.name
}

const getCountryDetailsOld = (countryCode = '') => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      throw new Error('Can not fetch country')
    })
    .then((data) => data.name)
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=3d309d71bd4a6a', {})
  if (response.status !== 200) {
    throw new Error('Can not fetch location')
  }
  return await response.json()
}

const getLocationOld = () => {
  return fetch('http://ipinfo.io/json?token=3d309d71bd4a6a', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    throw new Error('Can not fetch location')
  })
}

const getCountry = async (countryCode = '') => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`, {})
  if (response.status !== 200) {
    throw new Error('Can not fetch country')
  }
  return response.json()
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country.toLowerCase())
}
