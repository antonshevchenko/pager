Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  namespace :users do
    resources :pages
  end

  get "/team", to: "pages#team"
  root "pages#home"
end
