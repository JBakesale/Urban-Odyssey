Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "home#index"

  resources :users
  resources :adventures
  resources :locations
  resources :user_adventures
  resources :adventure_locations
  
end
