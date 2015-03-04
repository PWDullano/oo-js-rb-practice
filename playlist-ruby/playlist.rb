class Playlist

  def initialize
    @songs = []
  end

  def empty?
    @songs.empty?
  end

  def add_song(song)
    @songs << song
  end

  def song_names
    @songs.map {|song| song.title}
  end

  def remove_song(song)
    @songs.delete(song)
  end

  def total_length
    @songs.map {|song| song.length}.reduce(:+)
  end

  def swap(song_a, song_b)
    index_a = @songs.find_index(song_a)
    index_b = @songs.find_index(song_b)
    @songs[index_a] = song_b
    @songs[index_b] = song_a
  end

  def now_playing
    @now_playing
  end

  def play
    @now_playing = @songs.first
  end

  def next
    current_index = @songs.find_index(@now_playing)
    @now_playing = @songs[(current_index + 1)]
  end

end
