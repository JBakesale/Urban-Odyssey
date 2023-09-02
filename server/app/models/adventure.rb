class Adventure < ApplicationRecord
  has_many :user_adventures
  has_many :users, through: :user_adventures
  has_many :adventure_locations
  has_many :locations, through: :adventure_locations
end
