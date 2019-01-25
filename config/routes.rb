Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :posts
    get 'posts' => 'posts#user_posts', :as => :user_posts
    get 'users/show'
    resources :user
    get 'user/:id' => 'user#get_user', :as => :get_user
  end

  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
