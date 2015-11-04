Rails.application.routes.draw do

  get '/coding-challenges', to:"kata#index"

  post '/coding-challenges', to:"kata#create"

  root "users#signup"

  get "/signup", to: "users#signup"

  post "/signup", to:"users#create"

  get '/login', to:"users#login", as:"home"

  post "/login", to:"users#attempt_login"

  resources :resets, only: [:new, :edit, :create, :update]
end
