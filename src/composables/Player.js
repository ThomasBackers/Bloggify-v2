/** Class representing a music player. */
class Player {
  /**
   * Create a music player.
   * @param {array} playlist - an array of songs
   */
  constructor(playlist) {
    this.playlist = playlist
    this.currentSongPosition = playlist.length - 1
    this.repeatMode = 0
    this.randomMode = false
  }

  /** Current song object getter. */
  get song() {
    return this.playlist[this.currentSongPosition]
  }

  /**
   * Repeat mode setter.
   * @param {string} mode - the repeat mode name
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

  /** Random mode switch. */
  random() {
    this.randomMode = !this.randomMode
  }

  /**
   * Add a song to the playlist.
   * @param {object} song - a song object
   */
  add(song) {
    this.playlist.push(song)
  }

  /**
   * Remove a song from the playlist.
   * @param {object} song - a song object
   */
  remove(song) {
    this.playlist = this.playlist.filter(
      elt => { if (elt.id !== song.id) return elt }
    )
  }

  /**
   * Set the current song to the previous playlist position.
   * @returns {object} - the new current song object
   */
  previous() {
    this.currentSongPosition === 0 ? this.currentSongPosition = this.playlist.length - 1 : this.currentSongPosition -= 1
    return this.song
  }

  /**
   * Set the current song to the next playlist position.
   * @returns {object} - the new current song object
   */
  next() {
    this.currentSongPosition === this.playlist.length - 1 ? this.currentSongPosition = 0 : this.currentSongPosition += 1
    return this.song
  }
}

export default Player
