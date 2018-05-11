using System;
using System.Collections.Generic;
using System.Linq;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class DictionariesController : Controller
    {
        private readonly ApiDbContext _dbContext;

        public DictionariesController(ApiDbContext dbContext)
        {
            this._dbContext = dbContext;

            
        }

        [HttpGet]
        public IEnumerable<Dictionary> GetAll()
        {
            return _dbContext.Dictionaries
                .ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var dictionary = _dbContext.Dictionaries
                .Include(d => d.Words).ThenInclude(w => w.Translates)
                .FirstOrDefault(_ => _.DictionaryId == id);
            
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

            return new OkResult();
        }

        [HttpPut("{id}")] 
        public IActionResult Update(Guid id, [FromBody] Dictionary dictionary)
        {
            if(dictionary == null || dictionary.DictionaryId != id)
            {
                return BadRequest();
            }

            var storedDictionary = _dbContext.Dictionaries.FirstOrDefault(_ => _.DictionaryId == id);
            if(storedDictionary == null)
            {
                return NotFound();
            }

            _dbContext.Dictionaries.Update(dictionary);
            _dbContext.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            if(id == default(Guid))
            {
                return BadRequest();
            }

            var dictionaryToDelete = _dbContext.Dictionaries.FirstOrDefault(_ => _.DictionaryId == id);
            if(dictionaryToDelete == null)
            {
                return NotFound();
            }

            _dbContext.Dictionaries.Remove(dictionaryToDelete);
            _dbContext.SaveChanges();

            return new OkResult();
        }
    }
}