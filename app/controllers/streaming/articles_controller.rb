class Streaming::ArticlesController < ApplicationController
  skip_before_filter :restrict_access, only: [:index]

  include ActionController::Live

  def index
    response.headers["Content-Type"] = "text/event-stream"
    redis = Redis.new
    redis.psubscribe('article.*') do |on|
      on.pmessage do |pattern, event, data|
        response.stream.write("event: #{event}\n")
        response.stream.write("data: #{data}\n\n")
      end
    end
  rescue IOError
    logger.info "Stream closed"
  ensure
    redis.quit
    response.stream.close
  end
end
