using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserProductsController : ApiController
    {
        public dbfinanceEntities entities = new dbfinanceEntities();

        public List<sp_UserProducts_Result> GetCardTransactions(string username)
        {
            return entities.sp_UserProducts(username).ToList<sp_UserProducts_Result>();
        }

        public int GetLastTransactionDate(string username, int productId)
        {
            return (int)entities.sp_LastTransactionDate(username, productId).FirstOrDefault();
        }
    }
}
