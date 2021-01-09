using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication.Models;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers:"*", methods:"*")]
    public class RegisterController : ApiController
    {
        dbfinanceEntities entities = new dbfinanceEntities();

        [HttpPost]
        public HttpResponseMessage RegisterLogin(Register register)
        {
            sp_UserLoginCheck_Result result = null;
            result = entities.sp_UserLoginCheck(register.username, register.Password).FirstOrDefault();
            if (result == null) 
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username or password");
            else
                return Request.CreateResponse<sp_UserLoginCheck_Result>(result);
        }
    }
}
