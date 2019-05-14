Rails.application.routes.draw do
  resources :followers do
    collection do
      get 'random'
    end
  end
  resources :tweets
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  # You can have the root of your site routed with "root"
  root 'home#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
