let restaurant = {
  name: 'ABS',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability(partySize) {
    let seatLeft = this.guestCapacity - this.guestCount
    return partySize <= seatLeft
  },
  seatParty(partySize) {
    if (partySize < 0 || partySize > this.guestCapacity) {
      return
    }

    this.guestCount += partySize
  },
  removeParty(partySize) {
    if (partySize < 0) {
      return
    }
    this.guestCount -= partySize
  },
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
