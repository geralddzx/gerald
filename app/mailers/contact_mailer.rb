class ContactMailer < ActionMailer::Base
  default from: "geralddzx@gmail.com"
  
  def email_gerald(message)
  	@message = message
  	mail(to: message[:email], subject: "Contact For gerald-ding.com")
  end
end