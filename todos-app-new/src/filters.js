const filter = {
  searchText: '',
  hideComplete: false,
}

const getFilter = () => filter

const setFilter = ({ searchText, hideComplete }) => {
  if (typeof searchText === 'string') filter.searchText = searchText

  if (typeof hideComplete === 'boolean') filter.hideComplete = hideComplete
}

export { getFilter, setFilter }
