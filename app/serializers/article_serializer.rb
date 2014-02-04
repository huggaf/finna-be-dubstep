class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :author_id, :title, :text, :color, :thumb_url, :created_at

  has_one :author, serializer: UserSerializer

  def attributes
    data = super
    data[:errors] = object.errors.full_messages
    data
  end
end
