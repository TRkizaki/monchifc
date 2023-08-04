Rails.application.routes.draw do
  devise_for :users

  
  root "home#index"

  namespace :api do
    resources :users, only: :show
  end
end


