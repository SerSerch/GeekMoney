class CustomFailureApp < Devise::FailureApp

  # def redirect_url
  #   byebug
  #   json_error_response
  # end

  # def respond
  #   byebug
  #   if attempted_path == "/api/v1/signup"
      
  #     json_error_response
  #   else
  #     super
  #   end
  # end

  # def json_error_response
  #   self.status = 404
  #   self.content_type = "application/json"
  #   self.response_body = [ { message: i18n_message } ].to_json
  # end

end