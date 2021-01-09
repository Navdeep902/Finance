using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CardTransactionsController : ApiController
    {
        public dbfinanceEntities entities = new dbfinanceEntities();

        public List<sp_UserTransactions_Result> GetCardTransactions(string username)
        {
            return entities.sp_UserTransactions(username).ToList<sp_UserTransactions_Result>();
        }

        public sp_CreditDetails_Result GetCreditDetails(int cardNumber) 
        {
            return entities.sp_CreditDetails(cardNumber).FirstOrDefault();
        }
    }
}
