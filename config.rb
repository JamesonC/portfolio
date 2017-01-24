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

# Project Case Studies
data.case_studies.each do |id, study|
  if study.featured
    proxy "/case-study/#{ study.title.parameterize }/index.html", "/post.html", :locals => { :project => study }, :ignore => true
  end
end

# Journal Articles
data.writing.each do |id, article|
  if article.featured
    proxy "/writing/#{ article.title.parameterize }/index.html", "/post.html", :locals => { :article => article }, :ignore => true
  end
end

# Documentation
data.docs.each do |id, doc|
  if doc.title === "Overview"
    proxy "/docs/index.html", "/docs.html", :locals => { :doc => doc }, :ignore => true
  else
    proxy "/docs/#{ doc.title.parameterize }/index.html", "/docs.html", :locals => { :doc => doc }, :ignore => true
  end
end

# ClassPass Case Study
data.classpass.assignment.each do |id, post|
  proxy "/classpass/assignment/index.html", "/assignment.html", :locals => { :project => post }, :ignore => true
end

# ClassPass Cover Letter
data.classpass.letter.each do |id, letter|
  proxy "/classpass/cover-letter/index.html", "/letter.html", :locals => { :letter => letter }, :ignore => true
end
