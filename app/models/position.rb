class Position < ApplicationRecord
  belongs_to :game

  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :device, presence: true
  validates :game, presence: true
end
