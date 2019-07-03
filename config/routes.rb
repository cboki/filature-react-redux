Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  resources :games, only: [:new, :create, :show] do
    resources :players, only: [:index, :new, :create]
  end

  #API routing
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :games, only: [] do
        resources :positions, only: [ :index ] do
          collection do
            get 'last'
            get 'random'
          end
        end
      end
    end
  end
end
