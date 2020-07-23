const fitlers = {
  searchText: '',
  sortBy: 'byEdited',
}

const getFitlers = () => fitlers

const setFilters = ({ searchText, sortBy }) => {
  if (typeof searchText === 'string') fitlers.searchText = searchText

  if (typeof sortBy === 'string') fitlers.sortBy = sortBy
}

export { getFitlers, setFilters }
