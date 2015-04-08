class ContactMailer < ActionMailer::Base
  default from: "zixiongding@gmail.com"
  
  def email_gerald(message)
  	@message = message
  	mail(to: "geralddzx@gmail.com", subject: "Contact For gerald-ding.com")
  end
end