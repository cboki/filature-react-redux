class Player < ApplicationRecord
  belongs_to :game

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :nickname, presence: true
  validates :game, presence: true
end
