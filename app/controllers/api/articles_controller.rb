class Api::ArticlesController < ApplicationController
  skip_before_filter :restrict_access, only: :index
  respond_to :json

  def index
    records = Article.eager_load('author')
    records = records.where('articles.id < ?', params[:min_id]) if params[:min_id].present?
    records = records.order('articles.id DESC').limit(5)

    render json: Oj.dump(records.map{|e| ArticleSerializer.new(e) })
  end

  def create
    attributes = params.require(:article).permit(:title, :text, :color, :thumb_url)

    article = current_user.articles.create(attributes)

    if article.persisted?
      render json: Oj.dump( ArticleSerializer.new(article) )
    else
      render json: Oj.dump( ArticleSerializer.new(article) ), status: :unprocessable_entity
    end
  end

  def update
    attributes = params.require(:article).permit(:title, :text, :color, :thumb_url)

    article = current_user.articles.find(params[:id])

    if article.present?
      if article.update_attributes(attributes)
        render json: Oj.dump( ArticleSerializer.new(article) )
      else
        render json: Oj.dump( ArticleSerializer.new(article) ), status: :unprocessable_entity
      end
    else
      render json: {errors: ["Artigo não encontrado"]}, status: :forbidden
    end

  end

  def destroy
    article = current_user.articles.find(params[:id])

    if article.present?
      if article.destroy
        head :ok
      else
        render json: Oj.dump( ArticleSerializer.new(article) ), status: :unprocessable_entity
      end
    else
      render json: {errors: ["Artigo não encontrado"]}, status: :forbidden
    end

  end

end
