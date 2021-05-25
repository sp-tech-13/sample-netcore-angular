using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController: BaseApiController
    {
        private readonly DataContext context;

        public UsersController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers() {
            return await context.Users.ToListAsync();
        }
        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<AppUser> GetUser(int id) {
            return context.Users.Find(id);
        }
    }
}