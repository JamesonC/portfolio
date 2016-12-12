module CustomHelpers
  # Pretty URL: Transforms 'José Martí' -> 'jose-marti'
  def pretty_url string
    url = I18n.transliterate(string).downcase.strip.gsub(' ', '-').gsub('(', '').gsub(')', '')
  end
end
