class Location < ApplicationRecord
  has_many :adventure_locations
  has_many :adventures, through: :adventure_locations
end
