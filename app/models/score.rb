class Score < ApplicationRecord
  validates :name, presence: true, length: { maximum: 3 }
  validates :time, presence: true
  #attr_accessor :name, :time
end
