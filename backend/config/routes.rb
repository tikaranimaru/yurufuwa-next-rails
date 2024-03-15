Rails.application.routes.draw do

  #
  # api
  #
  namespace :api do
    resources :timelines, only: [:index, :show]
  end


  #
  # erbの画面
  #
  resources :timelines, only: [:new, :create]
  resources :users, except: [:destroy, :index], path: 'users/profile'


  # 
  # 管理画面 /admin
  #
  namespace :admin do
    get 'dashboard', to: 'dashboard#index'
  end
end
