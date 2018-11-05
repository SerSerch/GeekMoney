Rails.application.routes.draw do
  devise_for :users,
              defaults: { format: :json },
              path: '',
              path_names: {
                sign_in: 'api/v1/signin',
                sign_out: 'api/v1/signout',
                registration: 'api/v1/signup'
              },
              controllers: {
                sessions: 'api/v1/users/sessions',
                registrations: 'api/v1/users/registrations'
              }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
