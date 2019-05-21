# frozen_string_literal: true

Rails.application.routes.draw do
  root to: redirect('/tweets')

  get 'tweets', to: 'site#index'
  get 'tweets/new', to: 'site#index'
  get 'tweets/:id', to: 'site#index'
  get 'tweets/:id/edit', to: 'site#index'

  namespace :api do
    resources :users
  resources :tweets
    #resources :events, only: %i[index show create destroy update]
  end
end
