DataMapper.setup(:default, ENV['DATABASE_URL']  || "sqlite3://#{Dir.pwd}/data.db")
#DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/data.db")

class Post
  include DataMapper::Resource

  property :id,         Serial
  property :title,      String
  property :body,       String
  property :created_on, DateTime
    
end

#DataMapper.finalize
DataMapper.auto_upgrade!