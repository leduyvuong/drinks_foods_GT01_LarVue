Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      resources :users
      resources :categories
      resources :products
      post "/login",        to: "sessions#create"
    end
  end
end
