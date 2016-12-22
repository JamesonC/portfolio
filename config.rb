# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Activate directory indexes
activate :directory_indexes

# Layout changes
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

###
# Proxies
###
data.projects.each do |id, project|
  proxy "/#{ project.name.parameterize }/index.html", "/case-study.html", :locals => { :project => project }, :ignore => true
end

data.writings.each do |id, article|
  proxy "/#{ I18n.transliterate(article.title).downcase.strip.gsub(' ', '-').gsub('(', '').gsub(')', '') }/index.html", "/article.html", :locals => { :article => article }, :ignore => true
end

data.docs.each do |id, doc|
  proxy "/docs/#{ doc.title.parameterize }/index.html", "/docs.html", :locals => { :doc => doc }, :ignore => true
end
