FinnaBeDubstep::Application.routes.draw do

  post   'login' => "api/session#create", defaults: {format: :json}
  delete 'logout' => "api/session#destroy", defaults: {format: :json}
  namespace :api, defaults: {format: :json} do

    resources :articles, only: [:index, :create, :update, :destroy]
    resources :users, only: [:create] do
      collection do
        get   :me, action: "show"
        patch :update
        patch :reset_password_token
        patch :reset_password
        patch :cancel_reset_password_token
      end
    end
  end

  %w(articles new-article /recuperar/:reset_token /recuperar/:reset_token/cancelar).each do |url|
    get url => "application#default"
  end

  # get "home" => "index.html"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'application#default'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       article 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     article 'toggle'
  #   end
  #   resources :articles, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
