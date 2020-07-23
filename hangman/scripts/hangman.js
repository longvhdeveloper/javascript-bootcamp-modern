class Hangman {
  constructor(word, numberOfGuessAllow) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuessAllow = numberOfGuessAllow
    this.guesses = []
    this.status = 'playing'
  }

  get puzzle() {
    let pulzze = ''
    this.word.forEach((c) => {
      pulzze += this.guesses.includes(c) || c === ' ' ? c : '*'
    })
    return pulzze
  }

  makeGuess(character) {
    character = character.toLowerCase()
    let isCorrect = true
    if (!this.guesses.includes(character)) {
      this.guesses.push(character)
      if (!this.word.includes(character)) {
        this.numberOfGuessAllow--
        isCorrect = false
      }
      this.calculateStatus(isCorrect)
    }
  }

  calculateStatus() {
    const isFinished = this.word.every((letter) => this.guesses.includes(letter) || letter === ' ')

    if (this.numberOfGuessAllow === 0) {
      this.status = 'failed'
    } else {
      this.status = isFinished ? 'finished' : 'playing'
    }
  }

  get statusMessage() {
    let statusMessage = ''

    switch (this.status) {
      case 'playing':
        statusMessage = `Guesses left: ${this.numberOfGuessAllow}`
        break
      case 'finished':
        statusMessage = 'Great work! You guessed the word'
        break
      case 'failed':
        statusMessage = `Nice try! the word was "${this.word.join('')}"`
        break
    }

    return statusMessage
  }
}
