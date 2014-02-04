module Announcer
  class Base
    def self.announce(action, data)
      $redis.publish(action, Oj.dump(data))
    end
  end
end
