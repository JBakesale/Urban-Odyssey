class User < ApplicationRecord

  has_secure_password
  
  has_many :user_adventures
  has_many :adventures, through: :user_adventures
end
