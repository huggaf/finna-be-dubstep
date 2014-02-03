class UserMailer < ActionMailer::Base
  default from: "le.blog.exemplo@gmail.com"

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3000'
    mail(to: @user.email, subject: 'Bem vindo ao le Blog')
  end


  def reset_password_token_email(user)
    @user          = user
    @url           = "http://localhost:3000/recuperar/#{user.reset_token}"
    @url_rollback  = "http://localhost:3000/recuperar/#{user.reset_token}/cancelar"
    mail(to: @user.email, subject: 'Recuperação de Senha le Blog')
  end
end
