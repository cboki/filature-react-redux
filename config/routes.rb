Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  resources :games, only: [:new, :create, :show] do
    resources :players, only: [:index, :new, :create]
  end
end
