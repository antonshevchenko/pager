class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]

  validates :nickname, :first_name, :last_name, :email, :password, presence: true

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.nickname = auth.info.nickname
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.image = auth.info.image
    end
  end
end
