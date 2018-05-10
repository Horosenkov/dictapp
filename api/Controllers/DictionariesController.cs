using System;
using System.Collections.Generic;
using System.Linq;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class DictionariesController : Controller
    {
        private readonly ApiDbContext _dbContext;

        public DictionariesController(ApiDbContext dbContext)
        {
            this._dbContext = dbContext;

            if(!dbContext.Dictionaries.Any()){
                InitDbInMemory(dbContext);
            }
        }

        [HttpGet]
        public IEnumerable<Dictionary> GetAll()
        {
            return _dbContext.Dictionaries.ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var dictionary = _dbContext.Dictionaries.FirstOrDefault(_ => _.DictionaryId == id);
            if(dictionary == null)
            {
                return NotFound();
            }
            return new ObjectResult(dictionary);
        } 

        private void InitDbInMemory(ApiDbContext dbContext)
        {
            var dictionary1 = new Dictionary(){DictionaryId=Guid.NewGuid(), Name="English"};
            var word1 = new Word(){WordId = Guid.NewGuid(), Value="Hello", DictionaryId=dictionary1.DictionaryId};
            var translate1 = new Translate(){TranslateId=Guid.NewGuid(), Value="Привет", WordId=word1.WordId};

            dbContext.Dictionaries.Add(dictionary1);
            dbContext.Words.Add(word1);
            dbContext.Translates.Add(translate1);

            dbContext.SaveChanges();
        }

    }
}