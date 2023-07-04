class User < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_one :cart, dependent: :destroy
    has_secure_password

    validates :name, presence: true, length: { maximum: 50 }
    validates :password, presence: true, length: { minimum: 8 }
end
