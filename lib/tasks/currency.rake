require 'net/http'

namespace :currency do
  desc "Get current currencies"
  task get: :environment do
    url = "https://www.cbr-xml-daily.ru/daily_json.js"
    response = Net::HTTP.get_response(URI.parse(url))
    data = JSON.parse(response.body)
    valutes = data["Valute"]

    currency_hashes = []
    valutes.each do |key, value|
      currency_hashes << { 
        num_code: value["NumCode"],
        char_code: value["CharCode"],
        nominal: value["Nominal"],
        name: value["Name"],
        value: value["Value"]
      }    
    end
    
    Currency.destroy_all
    Currency.create! currency_hashes
  end

end
