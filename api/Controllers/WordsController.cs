using System;
using System.Collections.Generic;
using System.Linq;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class WordsController : Controller
    {
        private readonly ApiDbContext _dbContext;

        public WordsController(ApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Word> GetAll()
        {
            return _dbContext.Words.ToList();
        }

        [HttpPost()]
        public IActionResult Create([FromBody] Word word)
        {
            if(word == null)
            {
                return BadRequest();
            }

            if(word.DictionaryId == default(Guid))
            {
                word.WordId = Guid.NewGuid();
            }

            _dbContext.Words.Add(word);
            _dbContext.SaveChanges();

            return new OkResult();
        }

    }
}