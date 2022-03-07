class Player {
  constructor(playlist) {
    this.playlist = playlist
    this.currentSong = playlist.length - 1
    this.repeatMode = 0
    this.randomMode = false
  }

  get song() {
    return this.playlist[this.currentSong]
  }

  /**
   * @param {string} mode
   */
  set repeat(mode) {
    switch (mode) {
      case 'all':
        this.repeatMode = 2
        break;
      case 'one':
        this.repeatMode = 1
        break;
      case 'none':
        this.repeatMode = 0
        break;
    }
  }

  /**
   * @param {boolean} mode
   */
  set random(mode) {
    this.randomMode = mode
  }

  add(song) {
    this.playlist.push(song)
  }

  remove(song) {
    this.playlist.pop(song)
  }

  previous() {
    this.currentSong === 0 ? this.currentSong = this.playlist - 1 : this.currentSong -= 1
  }

  next() {
    this.currentSong === this.playlist.length - 1 ? this.currentSong = 0 : this.currentSong += 1
  }
}

export default Player
