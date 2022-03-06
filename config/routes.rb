Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:show, :create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only:[:index, :show]
    resources :reservations, only: [:create, :destroy, :show]

    # resources :favorites, only: [:create, :destroy]
    # post '/search', to: 'users#search'
  end
  root to: 'static_pages#root'

end
