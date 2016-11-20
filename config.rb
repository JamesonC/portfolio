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

# Proxies
#
data.projects.each do |project|
  proxy "/projects/#{ I18n.transliterate(project.title).downcase.strip.gsub(' ', '-') }/index.html", "/project-detail.html", :locals => { :project => project }, :ignore => true
end
