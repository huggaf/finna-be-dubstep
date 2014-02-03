class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name

  def attributes
    data = super
    data[:errors] = object.errors.full_messages
    data
  end
end
