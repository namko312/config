var schedule = require('node-schedule');
module.exports = {
  rateCurrency: function (password, cb) {
    schedule.scheduleJob('0 * * * *', function(){
      var urlUSD = `https://www.tygia.com/customize/exchange.json?from=usd_do_la_my&to=vnd_viet_nam_dong&value=1`
      require('request')(urlUSD, function(error, response, body) {
        if(error) {
          return
        } else if(body){
          var data = JSON.parse(body)
          if(data) {
            if(data.items) {
              if(data.items[0]) {
                if(data.items[0].to_num) {
                  var rate = data.items[0].to_num.replace(/[,]/g, '')
                  rate = parseInt(rate.replace(/[.]/g, ''))
                  Currency.update({name:'USD'},{rate: rate}).exec( (err) => {});
                }
              }
            }
          }
        }
      })

      var urlCNY = `https://www.tygia.com/customize/exchange.json?from=cny_trung_quoc&to=vnd_viet_nam_dong&value=1`
      require('request')(urlCNY, function(error, response, body) {
        if(error) {
          return
        } else if(body){
          var data = JSON.parse(body)
          if(data) {
            if(data.items) {
              if(data.items[0]) {
                if(data.items[0].to_num) {
                  var rate = data.items[0].to_num.replace(/[,]/g, '')
                  rate = parseInt(rate.replace(/[.]/g, ''))
                  Currency.update({name:'CNY'},{rate: rate}).exec( (err) => {});
                }
              }
            }
          }
        }
      })
    });
  }
};

