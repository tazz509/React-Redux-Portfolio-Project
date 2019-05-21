class Tweet < ApplicationRecord
    validates :body,presence: true,length:{ maximum: 140}
   
   belongs_to :user, class_name: "user", foreign_key: "user_id"
end
