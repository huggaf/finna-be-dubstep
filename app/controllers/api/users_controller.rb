class Api::UsersController < ApplicationController
  skip_before_filter :restrict_access, except: [:update, :show]

  def show
    render json: Oj.dump(UserSerializer.new(current_user))
  end

  def create
    attributes = params.require(:user).permit(:name, :email, :password, :password_confirmation)

    user = User.create(attributes)
    if user.persisted?
      session[:user_id] = user.id
      UserMailer.welcome_email(user).deliver
      render json: Oj.dump(UserSerializer.new(user))
    else
      render json: Oj.dump(UserSerializer.new(user)), status: :unprocessable_entity
    end

  end

  def update
    attributes = params.require(:user).permit(:name, :email, :password, :password_confirmation)

    current_user.update_attributes(attributes)
    if user.persisted?
      render json: Oj.dump(UserSerializer.new(current_user))
    else
      render json: Oj.dump(UserSerializer.new(current_user)), status: :unprocessable_entity
    end
  end

  def reset_password_token
    attributes = params.require(:user).permit(:email)
    user = User.find_by_email(attributes[:email])
    if user.present?
      user.reset_password_token!
      UserMailer.reset_password_token_email(user).deliver
      head :ok
    else
      render json: {errors: ["E-mail não foi encontrado no sistema"]}, status: :forbidden
    end
  end

  def reset_password
    attributes = params.require(:user).permit(:password, :password_confirmation)
    user = User.where(reset_token: params[:reset_token]).first

    if user.present? and user.reset_due.furure?
      user.update_attributes(attributes.slice(:password,:password_confirmation))
      if user.persisted?
        session[:user_id] = user.id
        render json: Oj.dump(UserSerializer.new(user))
      else
        render json: Oj.dump(UserSerializer.new(user)), status: :unprocessable_entity
      end
    else
      head :forbidden
    end
  end

  def cancel_reset_password_token
    user = User.where(reset_token: params[:reset_token]).first
    if user.present?
      user.update_attributes(reset_token: nil, reset_due: nil);
      head :ok
    else
      render json: {errors: ["Token não encontrada no sistema"]}, status: :forbidden
    end
  end


end
