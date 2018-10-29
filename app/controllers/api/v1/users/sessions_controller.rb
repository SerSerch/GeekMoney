# frozen_string_literal: true

module Api::V1
  class Users::SessionsController < Devise::SessionsController
    # before_action :configure_sign_in_params, only: [:create]
    before_action :authenticate_user!

    respond_to :json

    private

    def respond_with(resource, _opts = {})
      render json: resource
    end

    def respond_to_on_destroy
      head :no_content
    end

    # GET /resource/sign_in
    # def new
    #   super
    # end

    # POST /resource/sign_in
    # def create
    #   super
    # end

    # DELETE /resource/sign_out
    # def destroy
    #   super
    # end

    # protected

    # If you have extra params to permit, append them to the sanitizer.
    # def configure_sign_in_params
    #   devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    # end
  end
end
