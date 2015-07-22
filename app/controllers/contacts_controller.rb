class ContactsController < ApplicationController
	def email_gerald
		message = params.require(:contact)
		ContactMailer.email_gerald(message)
		flash[:notice] = "Your message has been sent, I will get back to you in 12 hours."
		redirect_to :root
	end
end
