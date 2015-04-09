class ContactMailer < ActionMailer::Base
  default from: ENV["gmail_username"]
  
  def email_gerald(message)
  	message_string = "Name: #{message[:name]}, Email: #{message[:email]}, Subject: #{message[:subject]}, Content: #{message[:content]}"

  	mg_client = Mailgun::Client.new ENV['MAILGUN_API_KEY']
    message_params = {:from    => 'contact@gerald-ding.com',
                      :to      => "geralddzx@gmail.com",
                      :subject => 'Contact Email From gerald-ding.com',
                      :text    => message_string
                  }
    mg_client.send_message('mg.gerald-ding.com', message_params)
  end
end