Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      resources :users
      resources :categories
      resources :products
      resources :orders
      resources :user_profiles
      post "/login",      to: "sessions#create"
      get "/login",       to: "sessions#token_authenticate"
    end
  end
end
