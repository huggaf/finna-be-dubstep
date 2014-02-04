class ApplicationController < ActionController::Base
  before_filter :restrict_access
  skip_before_filter :restrict_access, only: [:default]

  rescue_from ActionController::ParameterMissing do
    render json: {errors: ["Parâmetros inválidos"]}, status: :bad_request
  end

  def default
    render text: "", layout: "application"
  end

  protected

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id].present?
  end
  helper_method :current_user

  def restrict_access
    render json: {errors: ["Acesso restrito, informe usuário e senha"]}, status: :unauthorized unless current_user.present?
  end

end
