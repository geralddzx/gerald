Rails.application.routes.draw do
  root to: "static_pages#root"
  post "contact"=>"contacts#email_gerald"
end
