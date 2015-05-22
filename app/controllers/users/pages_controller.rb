class Users::PagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @pages = current_user.facebook.get_object("me/accounts")
  end
end
