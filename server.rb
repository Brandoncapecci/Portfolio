require "rubygems"
require "sinatra"
require "haml"
require "markdown"
require "haml-coderay"


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