class Article < ActiveRecord::Base

  belongs_to :author, class_name: 'User'

  validates :author_id, :title, :text, :color, :thumb_url, presence: true

  after_create  ->(article){ Announcer::Base.announce('article.add',     ArticleSerializer.new(article))}
  after_update  ->(article){ Announcer::Base.announce('article.update',  ArticleSerializer.new(article))}
  after_destroy ->(article){ Announcer::Base.announce('article.destroy', {id: article.id})}
end
