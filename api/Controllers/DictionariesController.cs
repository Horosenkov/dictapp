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
                dbContext.MockMigrate();
            }
        }

        [HttpGet]
        public IEnumerable<Dictionary> GetAll()
        {
            return _dbContext.Dictionaries.ToList();
        }

        [HttpGet("{id}", Name="GetDictionary")]
        public IActionResult GetById(Guid id)
        {
            var dictionary = _dbContext.Dictionaries.FirstOrDefault(_ => _.DictionaryId == id);
            if(dictionary == null)
            {
                return NotFound();
            }
            return new ObjectResult(dictionary);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Dictionary dictionary)
        {
            if(dictionary == null)
            {
                return BadRequest();
            }

            _dbContext.Dictionaries.Add(dictionary);
            _dbContext.SaveChanges();

            return CreatedAtRoute("GetDictionary", new { id = dictionary.DictionaryId }, dictionary);
        } 
    }
}