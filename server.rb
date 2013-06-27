require "rubygems"
require "sinatra"
require "haml"
require "markdown"
require "haml-coderay"

require "dm-core"
require "dm-migrations"
require "dm-timestamps"
require './models'


Haml::Filters::CodeRay.encoder_options = { :css => :class }

configure do
    enable :sessions, :logging
end

before do
    headers "Content-Type" => "text/html; charset=utf-8"
    @css = []
    @js = []
end

get '/' do
    @css = ['core', 'home', 'equalizer']
    @js = ['jquery', 'home']    
    @title = "Home" 
    haml :posts
end

get '/creating-a-galaxy-in-html5' do
    @css = ['core', 'home']
    @js = ['jquery', 'home', 'galaxy']
    @title = "Home" 
    haml :galaxy
end


## Admin Options

get '/dashboard' do
    @css = ['core', 'home']
    @js = ['jquery', 'rest']
    @title = "Dashboard"
    
    @posts = Post.all
    haml :dashboard        
end

get '/new' do
    @css = ['core', 'home']
    @js = ['jquery', 'rest']
    @title = "New" 
    haml :new        
end

get '/edit/:id' do
    @css = ['core', 'home']
    @js = ['jquery', 'rest']
    @title = "Update"

    id = params[:id]
    @post = Post.get(id)
    haml :edit
end

## 

post '/edit/:id' do
    id = params[:id]
    post = Post.get(id)
    post.attributes = {:title => title, :body => body}

    if post.save
        return "true"
    else
        return "false"
    end
end

post '/delete/:id' do
    id = params[:id]
    post = Post.get(id)

    if post.destroy
        return "true"
    else
        return "false"
    end
end

post '/new' do
    title = params[:title]
    body = params[:body]
    post = Post.create :title => title, :body => body, :created_on => Time.now 

    if post.save
        return "true"
    else
        return "false"
    end
end