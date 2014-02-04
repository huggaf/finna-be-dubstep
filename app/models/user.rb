class User < ActiveRecord::Base

  has_many :articles, foreign_key: :author_id

  # password digest generation
  has_secure_password

  validates :email, uniqueness: true, if: :email_changed?
  validates :email, :name, presence: true
  validates :reset_token, uniqueness: true, if: ->(el){el.reset_token_changed? && el.reset_token.present?}

  def reset_password_token!
    begin
      self.reset_token = SecureRandom.hex
    end while User.exists?(reset_token: self.reset_token)
    self.reset_due = 1.day.from_now
    self.save!
  end
end
