using System;
using System.Collections.Generic;
using System.Linq;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class TranslatesController : Controller
    {
        private readonly ApiDbContext _dbContext;

        public TranslatesController(ApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Translate> GetAll()
        {   
            return _dbContext.Translates.ToList();
        }

        [HttpPost]
        public IActionResult Create([FromBody] Translate translate)
        {
            if(translate == null)
            {
                return BadRequest();
            }

            if(translate.TranslateId == Guid.Empty)
            {
                translate.TranslateId = Guid.NewGuid();
            }

            _dbContext.Translates.Add(translate);
            _dbContext.SaveChanges();

            return new OkResult();
        }

    }

}