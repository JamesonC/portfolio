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
