class User < ActiveRecord::Base

  # password digest generation
  has_secure_password

  validates :email, uniqueness: true, if: :email_changed?
  validates :email, :name, presence: true
  validates :reset_token, uniqueness: true, if: :reset_token_changed?

  def reset_password_token!
    begin
      self.reset_token = SecureRandom.hex
    end while User.exists?(reset_token: self.reset_token)
    self.reset_due = 1.day.from_now
    self.save!

    # controller/service send email!
  end
end
