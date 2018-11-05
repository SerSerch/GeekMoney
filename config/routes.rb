Rails.application.routes.draw do
  devise_for :users,
              defaults: { format: :json },
              path: 'api/v1',
              path_names: {
                sign_in: 'signin',
                sign_out: 'signout',
                registration: 'signup'
              },
              controllers: {
                sessions: 'api/v1/users/sessions',
                registrations: 'api/v1/users/registrations'
              }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      get '/user', to: 'users#show'
    end
  end
end
