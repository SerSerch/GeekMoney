class ApplicationController < ActionController::API

  include ::ActionController::Cookies
  include ActionController::MimeResponds

  respond_to :json

end
